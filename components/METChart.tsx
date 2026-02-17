"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { MET_2025_X_VALUES, MET_2025_Y_VALUES } from "@/utils/metPrediction";

const METChart = () => {
  const rawXData = MET_2025_X_VALUES;
  const rawYData = MET_2025_Y_VALUES;

  const SAMPLE_RATE = 3;
  const data = rawXData
    .map((bandScore, index) => ({
      bandScore: parseFloat(bandScore.toFixed(1)),
      rank: rawYData[index],
    }))
    .filter((_, i) => i % SAMPLE_RATE === 0);

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string | number;
  }) => {
    if (active && payload && payload.length) {
      const rank = payload[0].value;
      return (
        <div
          style={{
            background: "rgba(15,15,20,0.95)",
            border: "1px solid rgba(99,179,237,0.4)",
            borderRadius: "8px",
            padding: "10px 14px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ color: "#a0aec0", fontSize: 12, marginBottom: 4 }}>
            Band Score
          </p>
          <p style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            {label}
          </p>
          <p
            style={{
              color: "#a0aec0",
              fontSize: 12,
              marginTop: 8,
              marginBottom: 4,
            }}
          >
            Rank
          </p>
          <p style={{ color: "#63b3ed", fontSize: 18, fontWeight: 700 }}>
            #{rank.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  const formatYAxis = (value: number) => {
    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
    return `${value}`;
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto 24px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "28px 24px 16px",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <h2
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          MET 2025 — Rank vs Band Score
        </h2>
        <p
          style={{
            color: "#718096",
            fontSize: 12,
            textAlign: "center",
            marginTop: 4,
          }}
        ></p>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4299e1" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#63b3ed" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 6"
            stroke="rgba(255,255,255,0.06)"
            vertical={false}
          />

          <XAxis
            dataKey="bandScore"
            stroke="rgba(255,255,255,0.15)"
            tick={{ fill: "#718096", fontSize: 11 }}
            tickLine={false}
            interval={4}
            label={{
              value: "Band Score",
              position: "insideBottom",
              offset: -18,
              style: { textAnchor: "middle", fill: "#718096", fontSize: 12 },
            }}
          />

          <YAxis
            stroke="rgba(255,255,255,0.15)"
            tick={{ fill: "#718096", fontSize: 11 }}
            tickLine={false}
            tickFormatter={formatYAxis}
            width={70}
            label={{
              value: "Rank",
              angle: -90,
              position: "insideLeft",
              offset: 15,
              style: { textAnchor: "middle", fill: "#718096", fontSize: 12 },
            }}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(255,255,255,0.15)",
              strokeWidth: 1,
              strokeDasharray: "4 4",
            }}
          />

          <Line
            type="monotoneX"
            dataKey="rank"
            stroke="url(#lineGradient)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#63b3ed",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default METChart;
