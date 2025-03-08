"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1200,
  },
  {
    name: "Feb",
    total: 1900,
  },
  {
    name: "Mar",
    total: 2400,
  },
  {
    name: "Apr",
    total: 1800,
  },
  {
    name: "May",
    total: 2800,
  },
  {
    name: "Jun",
    total: 2300,
  },
  {
    name: "Jul",
    total: 3500,
  },
  {
    name: "Aug",
    total: 3000,
  },
  {
    name: "Sep",
    total: 2500,
  },
  {
    name: "Oct",
    total: 2800,
  },
  {
    name: "Nov",
    total: 3200,
  },
  {
    name: "Dec",
    total: 3800,
  },
]

export function OverviewChart() {
  const { theme } = useTheme()

  // Placeholder for actual chart implementation
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: theme === "dark" ? "#1f2937" : "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            formatter={(value) => [`$${value}`, "Revenue"]}
          />
          <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

