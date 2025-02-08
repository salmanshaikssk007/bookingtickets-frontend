"use client";
import React from "react"; 
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3">Welcome to Event Booking</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Book and manage event tickets easily!
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => router.push("/login")}>
        Get Started
      </Button>
    </Container>
  );
}