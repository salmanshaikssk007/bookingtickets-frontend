import React from "react";
import RootLayoutClient from "./RootLayout"; // Import the client-side layout

export const metadata = {
  title: "Event Booking",
  description: "Book and manage event tickets easily!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}