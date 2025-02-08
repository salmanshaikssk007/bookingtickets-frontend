"use client";
import React from "react"; 
import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";

export default function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await axios.post<{ token: string }>("http://localhost:8080/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Sign In</Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Sign In
      </Button>
    </Container>
  );
}