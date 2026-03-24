"use client";

import { useTheme, Typography, Box } from "@mui/material";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { Dispatch, GlopalStore } from "@/store/store";
import { useEffect, useMemo } from "react";
import { getAllUsers } from "@/features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PieCharts() {
  const theme = useTheme();
  const { userData } = useSelector((state: GlopalStore) => state.user);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const pieData = useMemo(() => {
    if (!userData) return [];

    const roleMap: Record<string, number> = {};

    userData.forEach((user) => {
      roleMap[user.role] = (roleMap[user.role] || 0) + 1;
    });

    return Object.keys(roleMap).map((role) => ({
      name: role,
      value: roleMap[role],
    }));
  }, [userData]);

  const totalUsers = pieData.reduce((acc, cur) => acc + cur.value, 0);

  const ROLE_COLORS: Record<string, string> = {
    admin: theme.palette.primary.main,
    moderator: theme.palette.secondary.main,
    user: theme.palette.success.main,
  };

  return (
    <Box position="relative" width="100%" height="100%">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={130}
            paddingAngle={4}
            animationDuration={800}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  ROLE_COLORS[entry.name] || theme.palette.grey[500]
                }
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 12,
              boxShadow: theme.shadows[4],
            }}
            formatter={(value: number) => [`${value} Users`, "Count"]}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              paddingTop: 20,
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* CENTER KPI */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%, -50%)", textAlign: "center" }}
      >
        <Typography variant="h4" fontWeight={800}>
          {totalUsers}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Users
        </Typography>
      </Box>
    </Box>
  );
}