import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, Show, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus View",
  description: "All-in-one placement management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn("antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
      >
        <body>
          {/* <Show when={'signed-in'}>
            <UserButton/>
          </Show>
          <Show when={'signed-out'}>
            <SignInButton/>
          </Show> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
