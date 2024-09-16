import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ToastProvider from "@/components/prodviders/toaster-provider";
import { ConfettiProvider } from "@/components/prodviders/confetti-provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPSCALE - Scale Up",
  description: "online lerning platform for video courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
