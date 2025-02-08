"use client";
import React from "react"; 
import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin");
      return;
    }

    axios
      .get("http://localhost:8080/user/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setEmail(res.data.email))
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/signin");
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/signin");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">Welcome, {email || "Loading..."}</Typography>
      <Button variant="contained" color="secondary" fullWidth onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}