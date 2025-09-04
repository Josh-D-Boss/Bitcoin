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
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const COINS = ["bitcoin", "ethereum", "litecoin"]

export function BitcoinChart() {
  const [timeframe, setTimeframe] = useState<"1" | "7" | "30">("7")
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  })

  const fetchData = async () => {
    try {
      const promises = COINS.map((coin) =>
        fetch(
          `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${timeframe}`
        ).then((res) => res.json())
      )

      const results = await Promise.all(promises)

      const labels = results[0].prices.map((p: [number, number]) => {
        const date = new Date(p[0])
        return timeframe === "1"
          ? `${date.getHours()}:00`
          : `${date.getDate()}/${date.getMonth() + 1}`
      })

      setChartData({
        labels,
        datasets: results.map((coinData, idx) => ({
          label: COINS[idx].charAt(0).toUpperCase() + COINS[idx].slice(1),
          data: coinData.prices.map((p: [number, number]) => p[1]),
          borderColor: ["#F2A900", "#3C3CFF", "#33D6A6"][idx],
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
        })),
      })
    } catch (error) {
      console.error("Error fetching chart data:", error)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000) // refresh every 1 min
    return () => clearInterval(interval)
  }, [timeframe])

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-card rounded-lg border shadow-lg">
      <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Crypto Price Chart</h3>

      {/* Timeframe toggle */}
      <div className="flex justify-center gap-4 mb-6">
        {[
          { label: "24h", value: "1" },
          { label: "7d", value: "7" },
          { label: "30d", value: "30" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setTimeframe(btn.value as "1" | "7" | "30")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeframe === btn.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-[400px]">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { color: "#ddd" },
              },
              tooltip: {
                mode: "index" as const,
                intersect: false,
              },
            },
            scales: {
              x: { ticks: { color: "#aaa" }, grid: { color: "#333" } },
              y: { ticks: { color: "#aaa" }, grid: { color: "#333" } },
            },
          }}
        />
      </div>
    </div>
  )
        }
              
