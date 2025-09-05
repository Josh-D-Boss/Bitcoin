"use client";

// components/bitcoin-chart.tsx
import { useEffect, useRef } from "react";

type Point = { t: number; v: number };

type Series = {
  id: "bitcoin" | "ethereum" | "solana";
  key: "btc" | "eth" | "sol";
  label: string;
  color: string; // fallback if CSS vars not supported in canvas
};

const SERIES: Series[] = [
  { id: "bitcoin", key: "btc", label: "Bitcoin", color: "#f2a900" },
  { id: "ethereum", key: "eth", label: "Ethereum", color: "#3c3c3d" },
  { id: "solana", key: "sol", label: "Solana", color: "#00b894" },
];

const POLL_MS = 10_000; // 10s
const MAX_POINTS = 60; // keep last N points (~10 minutes)
const TARGET_HEIGHT = 400; // CSS height (logical); responsive width

export function BitcoinChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // mutable refs to avoid re-renders
  const dataRef = useRef<Record<Series["key"], Point[]>>({ btc: [], eth: [], sol: [] });
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const resizeRef = useRef<() => void>();
  const themeObserverRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getThemeColors = () => {
      const root = document.documentElement;
      const isDark = root.classList.contains("dark");
      const gridColor = isDark ? "#374151" : "#E5E7EB"; // Tailwind gray-700 / gray-200
      const textColor = isDark ? "#F3F4F6" : "#374151"; // gray-100 / gray-700
      // Try CSS variables if browser supports OKLCH in canvas, else fallbacks from SERIES
      const chartColors = SERIES.map((s, i) => {
        const cssVar = getComputedStyle(root).getPropertyValue(`--color-chart-${i + 1}`)?.trim();
        return cssVar && cssVar.length > 0 ? cssVar : s.color;
      });
      return { isDark, gridColor, textColor, chartColors };
    };

    const sizes = {
      padding: 60,
      width: 0,
      height: TARGET_HEIGHT,
      dpr: Math.max(1, window.devicePixelRatio || 1),
    };

    const setCanvasSize = () => {
      // Fit width to parent for responsiveness
      const parent = canvas.parentElement as HTMLElement | null;
      const cssWidth = Math.max(320, parent ? parent.clientWidth : 800);
      sizes.width = cssWidth;
      const { dpr } = sizes;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(TARGET_HEIGHT * dpr);
      canvas.style.width = cssWidth + "px";
      canvas.style.height = TARGET_HEIGHT + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing for HiDPI
    };

    const clampData = () => {
      for (const key of Object.keys(dataRef.current) as Array<Series["key"]>) {
        const arr = dataRef.current[key];
        if (arr.length > MAX_POINTS) arr.splice(0, arr.length - MAX_POINTS);
      }
    };

    const fetchPrices = async () => {
      try {
        const url =
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: any = await res.json();
        const now = Date.now();
        const next: Partial<Record<Series["key"], Point>> = {
          btc: { t: now, v: Number(json.bitcoin?.usd ?? NaN) },
          eth: { t: now, v: Number(json.ethereum?.usd ?? NaN) },
          sol: { t: now, v: Number(json.solana?.usd ?? NaN) },
        };
        for (const k of Object.keys(next) as Array<Series["key"]>) {
          const p = next[k];
          if (p && Number.isFinite(p.v)) dataRef.current[k].push(p);
        }
        clampData();
        scheduleDraw();
      } catch (e) {
        // Silent fail to avoid UI jitter; keep previous points
        // Optionally schedule redraw to keep axes aligned with time
        scheduleDraw();
      }
    };

    const scheduleDraw = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(draw);
    };

    const draw = () => {
      const { padding } = sizes;
      const { gridColor, textColor, chartColors } = getThemeColors();
      const w = sizes.width;
      const h = sizes.height;
      const chartW = w - padding * 2;
      const chartH = h - padding * 2;

      ctx.clearRect(0, 0, w, h);

      // Determine min/max across all series
      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      for (const key of Object.keys(dataRef.current) as Array<Series["key"]>) {
        const arr = dataRef.current[key];
        for (const p of arr) {
          if (p.v < min) min = p.v;
          if (p.v > max) max = p.v;
        }
      }
      if (!Number.isFinite(min) || !Number.isFinite(max)) {
        // Loading state
        ctx.fillStyle = textColor;
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Loading live prices…", w / 2, h / 2);
        return;
      }

      // Add 5% padding to y-range
      const range = Math.max(1, max - min);
      const yMin = min - range * 0.05;
      const yMax = max + range * 0.05;

      // GRID
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const vLines = 10;
      for (let i = 0; i <= vLines; i++) {
        const x = padding + (i * chartW) / vLines;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + chartH);
        ctx.stroke();
      }
      const hLines = 6;
      for (let i = 0; i <= hLines; i++) {
        const y = padding + (i * chartH) / hLines;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartW, y);
        ctx.stroke();
      }

      // AXES
      ctx.strokeStyle = textColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, padding + chartH);
      ctx.lineTo(padding + chartW, padding + chartH);
      ctx.stroke();

      // Helpers
      const yFor = (val: number) => padding + chartH - ((val - yMin) / (yMax - yMin)) * chartH;

      const seriesKeys: Series["key"][] = ["btc", "eth", "sol"];
      // X mapping: index across MAX_POINTS
      const maxLen = Math.max(
        dataRef.current.btc.length,
        dataRef.current.eth.length,
        dataRef.current.sol.length
      );

      // LINES
      seriesKeys.forEach((k, idx) => {
        const arr = dataRef.current[k];
        if (arr.length < 2) return;
        ctx.strokeStyle = chartColors[idx] || SERIES[idx].color;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = ctx.strokeStyle as string;
        ctx.shadowBlur = 6; // subtle glow
        ctx.beginPath();
        arr.forEach((pt, i) => {
          const x = padding + (i * chartW) / Math.max(1, MAX_POINTS - 1);
          const y = yFor(pt.v);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Y TICKS
      ctx.fillStyle = textColor;
      ctx.font = "12px sans-serif";
      ctx.textAlign = "right";
      const yTicks = 4;
      for (let i = 0; i <= yTicks; i++) {
        const val = yMin + ((yMax - yMin) * i) / yTicks;
        const y = padding + chartH - (i * chartH) / yTicks;
        ctx.fillText(`$${Math.round(val).toLocaleString()}`, padding - 10, y + 4);
      }

      // X TICKS (time)
      ctx.textAlign = "center";
      const btcArr = dataRef.current.btc;
      const labelsIdx = [0, Math.floor(maxLen / 2), maxLen - 1].filter((n) => n >= 0);
      labelsIdx.forEach((i, j) => {
        const x = padding + (i * chartW) / Math.max(1, MAX_POINTS - 1);
        const t = btcArr[i]?.t ?? Date.now();
        const d = new Date(t);
        const label = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        ctx.fillText(label, x, padding + chartH + 20);
      });

      // LEGEND
      const legendX = padding + 10;
      let legendY = padding - 28;
      ctx.textAlign = "left";
      SERIES.forEach((s, idx) => {
        const c = chartColors[idx] || s.color;
        // swatch
        ctx.fillStyle = c as string;
        ctx.fillRect(legendX + idx * 140, legendY, 12, 12);
        // text
        ctx.fillStyle = textColor;
        ctx.fillText(s.label, legendX + 18 + idx * 140, legendY + 11);
      });
    };

    // INITIALIZE
    setCanvasSize();
    scheduleDraw();
    fetchPrices(); // first fetch immediately
    timerRef.current = window.setInterval(fetchPrices, POLL_MS) as unknown as number;

    // RESIZE
    const onResize = () => {
      setCanvasSize();
      scheduleDraw();
    };
    resizeRef.current = onResize;
    window.addEventListener("resize", onResize);

    // THEME OBSERVER: redraw on dark/light toggle
    themeObserverRef.current = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "class") {
          scheduleDraw();
        }
      }
    });
    themeObserverRef.current.observe(document.documentElement, { attributes: true });

    // CLEANUP
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current as unknown as number);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resizeRef.current!);
      themeObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-card rounded-lg border shadow-lg">
      <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Crypto Live Chart (BTC · ETH · SOL)</h3>
      <div className="overflow-x-auto">
        <canvas
          ref={canvasRef}
          className="w-full h-auto max-w-full"
          style={{ maxWidth: "100%", height: `${TARGET_HEIGHT}px` }}
        />
      </div>
    </div>
  );
}
    const isDark = document.documentElement.classList.contains("dark")
    const gridColor = isDark ? "#374151" : "#E5E7EB"
    const textColor = isDark ? "#F3F4F6" : "#374151"
    const lineColor = "#F2A900" // Bitcoin gold

    // Draw grid
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 1

    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
      const x = padding + (i * chartWidth) / 10
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, canvas.height - padding)
      ctx.stroke()
    }

    // Horizontal grid lines
    for (let i = 0; i <= 8; i++) {
      const y = padding + (i * chartHeight) / 8
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = textColor
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.stroke()

    // Draw price line
    ctx.strokeStyle = lineColor
    ctx.lineWidth = 3
    ctx.beginPath()

    data.forEach((price, index) => {
      const x = padding + (index * chartWidth) / (data.length - 1)
      const y = canvas.height - padding - ((price - minPrice) / priceRange) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Add glow effect
    ctx.shadowColor = lineColor
    ctx.shadowBlur = 10
    ctx.stroke()
    ctx.shadowBlur = 0

    // Draw price labels
    ctx.fillStyle = textColor
    ctx.font = "12px sans-serif"
    ctx.textAlign = "right"

    for (let i = 0; i <= 4; i++) {
      const price = minPrice + (priceRange * i) / 4
      const y = canvas.height - padding - (i * chartHeight) / 4
      ctx.fillText(`$${price.toLocaleString()}`, padding - 10, y + 4)
    }

    // Draw time labels
    ctx.textAlign = "center"
    const timeLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    timeLabels.forEach((label, index) => {
      const x = padding + (index * chartWidth) / (timeLabels.length - 1)
      ctx.fillText(label, x, canvas.height - padding + 20)
    })

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-card rounded-lg border shadow-lg">
      <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Bitcoin Price Chart</h3>
      <div className="overflow-x-auto">
        <canvas ref={canvasRef} className="w-full h-auto max-w-full" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </div>
  )
        }
        
