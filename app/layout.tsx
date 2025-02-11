"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { DashHeader } from "@/components/DashHeader";
import { SidebarNav } from "@/components/sidebar-nav";
import { SettingsProvider } from "@/context/SettingsContext";
import TodoList from "@/components/Todo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import acolyte from "@/public/acolyte.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen overflow-hidden flex flex-col">
          {/* <SettingsProvider> */}
          <DashHeader />
          {/* Sidebar Toggle (Left) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="p-2 fixed top-20 left-2 lg:hidden"
                variant="ghost"
              >
                <PanelLeft />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[275px] max-w-[80vw] p-2 overflow-auto"
            >
              <Image src={acolyte} alt="Logo" className="w-24 h-24 mx-auto" />
              <SidebarNav />
            </SheetContent>
          </Sheet>
          {/* Todo List Toggle (Right) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="p-1 fixed top-20 right-2 2xl:hidden"
                variant="ghost"
              >
                <PanelRight />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[275px] max-w-[80vw] p-2 overflow-auto"
            >
              <TodoList />
            </SheetContent>
          </Sheet>

          <div className="grid grid-cols-12 gap-4 min-h-screen overflow-hidden">
            {/* Sidebar (Visible on Large Screens, Hidden on <1024px) */}
            <div className="hidden lg:flex lg:flex-col lg:overflow-auto col-span-2 text-white p-4 mt-[70px]">
              <SidebarNav />
            </div>
            {/* Main Content - Expands when Todo is Hidden */}
            <main className="col-span-12 lg:col-span-10 2xl:col-span-7 p-4 overflow-auto scrollbar-hide h-full flex w-full items-center justify-center">
              {children}
            </main>
            {/* Todo List (Hidden on <1920px, Else Takes 3 Columns) */}
            <div className="hidden 2xl:flex 2xl:col-span-3">
              <TodoList />
            </div>
          </div>
          {/* </SettingsProvider> */}
        </div>
      </body>
    </html>
  );
}
