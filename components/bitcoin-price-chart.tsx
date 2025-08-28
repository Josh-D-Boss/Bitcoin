"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"

// Mock Bitcoin price data
const priceData = {
  "1D": [
    { time: "00:00", price: 43250 },
    { time: "04:00", price: 43180 },
    { time: "08:00", price: 43420 },
    { time: "12:00", price: 43650 },
    { time: "16:00", price: 43580 },
    { time: "20:00", price: 43720 },
    { time: "24:00", price: 43890 },
  ],
  "1W": [
    { time: "Mon", price: 42800 },
    { time: "Tue", price: 43200 },
    { time: "Wed", price: 43650 },
    { time: "Thu", price: 43420 },
    { time: "Fri", price: 43890 },
    { time: "Sat", price: 44120 },
    { time: "Sun", price: 43950 },
  ],
  "1M": [
    { time: "Week 1", price: 41200 },
    { time: "Week 2", price: 42800 },
    { time: "Week 3", price: 43650 },
    { time: "Week 4", price: 43890 },
  ],
  "1Y": [
    { time: "Jan", price: 35000 },
    { time: "Mar", price: 38500 },
    { time: "May", price: 42000 },
    { time: "Jul", price: 39800 },
    { time: "Sep", price: 41200 },
    { time: "Nov", price: 43890 },
  ],
}

export function BitcoinPriceChart() {
  const [timeframe, setTimeframe] = useState<keyof typeof priceData>("1D")
  const currentPrice = 43890
  const dailyChange = 2.4

  return (
    <Card className="glass border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-heading">Bitcoin Price</CardTitle>
            <CardDescription>Live BTC/USD Chart</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">${currentPrice.toLocaleString()}</div>
            <div className={`text-sm ${dailyChange >= 0 ? "text-green-500" : "text-red-500"}`}>
              {dailyChange >= 0 ? "+" : ""}
              {dailyChange}% (24h)
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {Object.keys(priceData).map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe(period as keyof typeof priceData)}
              className="text-xs"
            >
              {period}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            price: {
              label: "Price (USD)",
              color: "hsl(var(--primary))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData[timeframe]}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="var(--color-primary)"
                strokeWidth={3}
                dot={{ fill: "var(--color-primary)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "var(--color-primary)", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
