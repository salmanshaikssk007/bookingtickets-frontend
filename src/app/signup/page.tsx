"use client";
import React from "react"; 
import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/register", { email, password });
      alert("Registration Successful! Please log in.");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Sign Up</Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
        Sign Up
      </Button>
    </Container>
  );
}