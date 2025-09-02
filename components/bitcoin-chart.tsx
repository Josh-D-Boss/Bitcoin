"use client"

import { useEffect, useRef } from "react"

export function BitcoinChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 400

    // Bitcoin price data (simulated realistic data)
    const data = [
      42000, 43500, 41200, 44800, 46200, 45100, 47800, 49200, 48100, 50500, 52300, 51800, 54200, 56800, 55400, 58900,
      61200, 59800, 62500, 64100, 63200, 65800, 67400, 66100, 68900, 70200, 69500, 71800, 73200, 72100,
    ]

    const padding = 60
    const chartWidth = canvas.width - 2 * padding
    const chartHeight = canvas.height - 2 * padding

    const minPrice = Math.min(...data)
    const maxPrice = Math.max(...data)
    const priceRange = maxPrice - minPrice

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set styles based on theme
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
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-card rounded-lg border shadow-lg">
      <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Bitcoin Price Chart</h3>
      <div className="overflow-x-auto">
        <canvas ref={canvasRef} className="w-full h-auto max-w-full" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </div>
  )
}
