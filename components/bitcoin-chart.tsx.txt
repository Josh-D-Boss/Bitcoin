"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartDataset,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const COINS = ["bitcoin", "ethereum", "litecoin"]
type PricePoint = [number, number]

const generateMockData = (timeframe: string, coinIndex: number) => {
  const basePrice = [45000, 3200, 180][coinIndex] // Base prices for BTC, ETH, LTC
  const volatility = [0.05, 0.08, 0.12][coinIndex] // Different volatility levels

  const dataPoints = timeframe === "1" ? 24 : timeframe === "7" ? 7 : 30
  const prices: PricePoint[] = []

  for (let i = 0; i < dataPoints; i++) {
    const timestamp = Date.now() - (dataPoints - i) * (timeframe === "1" ? 3600000 : 86400000)
    const randomChange = (Math.random() - 0.5) * volatility
    const price = basePrice * (1 + randomChange + Math.sin(i / 3) * 0.02)
    prices.push([timestamp, price])
  }

  return { prices }
}

export function BitcoinChart() {
  const [timeframe, setTimeframe] = useState<"1" | "7" | "30">("7")
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  })
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const results = COINS.map((_, idx) => generateMockData(timeframe, idx))

      const labels = results[0].prices.map((p: PricePoint) => {
        const date = new Date(p[0])
        return timeframe === "1"
          ? `${date.getHours().toString().padStart(2, "0")}:00`
          : `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, "0")}`
      })

      const datasets: ChartDataset<"line">[] = results.map((coinData, idx) => ({
        label: COINS[idx].charAt(0).toUpperCase() + COINS[idx].slice(1),
        data: coinData.prices.map((p: PricePoint) => p[1]),
        borderColor: ["#F2A900", "#3C3CFF", "#33D6A6"][idx],
        backgroundColor: [`${["#F2A900", "#3C3CFF", "#33D6A6"][idx]}20`],
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 3,
        fill: false,
      }))

      setChartData({ labels, datasets })
    } catch (err: any) {
      setError(err.message || "Error loading chart data")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [timeframe])

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl border border-border/50 shadow-2xl backdrop-blur-sm">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F2A900] to-[#E6A000] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">₿</span>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#F2A900] to-[#E6A000] bg-clip-text text-transparent">
            Live Crypto Market
          </h3>
        </div>
        <p className="text-muted-foreground text-sm">Real-time cryptocurrency price movements</p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {[
          { label: "24 Hours", value: "1", short: "24H" },
          { label: "7 Days", value: "7", short: "7D" },
          { label: "30 Days", value: "30", short: "30D" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setTimeframe(btn.value as "1" | "7" | "30")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              timeframe === btn.value
                ? "bg-gradient-to-r from-[#F2A900] to-[#E6A000] text-white shadow-lg shadow-[#F2A900]/25 scale-105"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-102"
            }`}
            title={btn.label}
          >
            <span className="hidden sm:inline">{btn.label}</span>
            <span className="sm:hidden">{btn.short}</span>
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
          <div className="w-12 h-12 border-4 border-[#F2A900]/20 border-t-[#F2A900] rounded-full animate-spin"></div>
          <p className="text-muted-foreground font-medium">Loading market data...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
            <span className="text-red-500 text-2xl">⚠</span>
          </div>
          <p className="text-red-500 font-medium">{error}</p>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2A900]/5 to-transparent rounded-xl"></div>
          <div className="relative h-[450px] p-4 bg-background/50 rounded-xl border border-border/30">
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                  intersect: false,
                  mode: "index",
                },
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: isDark ? "#e5e7eb" : "#374151",
                      font: { size: 14, weight: "600" },
                      padding: 20,
                      usePointStyle: true,
                      pointStyle: "circle",
                    },
                  },
                  tooltip: {
                    backgroundColor: isDark ? "#1f2937" : "#ffffff",
                    titleColor: isDark ? "#f9fafb" : "#111827",
                    bodyColor: isDark ? "#e5e7eb" : "#374151",
                    borderColor: isDark ? "#374151" : "#e5e7eb",
                    borderWidth: 1,
                    cornerRadius: 12,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                      label: (context) => {
                        const value = context.parsed.y
                        return `${context.dataset.label}: $${value.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}`
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: isDark ? "#9ca3af" : "#6b7280",
                      font: { size: 12 },
                    },
                    grid: {
                      color: isDark ? "#374151" : "#e5e7eb",
                      drawBorder: false,
                    },
                    border: { display: false },
                  },
                  y: {
                    ticks: {
                      color: isDark ? "#9ca3af" : "#6b7280",
                      font: { size: 12 },
                      callback: (value) => `$${Number(value).toLocaleString()}`,
                    },
                    grid: {
                      color: isDark ? "#374151" : "#e5e7eb",
                      drawBorder: false,
                    },
                    border: { display: false },
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
