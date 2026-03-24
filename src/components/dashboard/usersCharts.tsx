"use client";

import { useTheme } from "@mui/material";
import {
  CartesianGrid,
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { Dispatch, GlopalStore } from "@/store/store";
import { useEffect, useMemo } from "react";
import { getAllUsers } from "@/features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function UsersCharts() {
  const { userData } = useSelector((state: GlopalStore) => state.user);
  const dispatch = useDispatch<Dispatch>();
  const theme = useTheme();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const data = useMemo(() => {
    if (!userData) return [];

    const monthlyBuckets = 12;
    const usersPerMonth = Math.ceil(userData.length / monthlyBuckets);

    let total = 0;

    return Array.from({ length: monthlyBuckets }).map((_, i) => {
      total += usersPerMonth;
      return {
        month: `M${i + 1}`,
        users: total > userData.length ? userData.length : total,
      };
    });
  }, [userData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 20, right: 20, left: -10 }}>
        <defs>
          <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={theme.palette.primary.main}
              stopOpacity={0.4}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.primary.main}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray="3 3"
          stroke={theme.palette.divider}
          opacity={0.3}
        />

        <XAxis
          dataKey="month"
          tick={{ fill: theme.palette.text.secondary }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fill: theme.palette.text.secondary }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="users"
          stroke={theme.palette.primary.main}
          strokeWidth={3}
          fill="url(#usersGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}