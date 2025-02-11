"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { DashHeader } from "@/components/DashHeader";
import { SidebarNav } from "@/components/sidebar-nav";
// import { SettingsProvider } from "@/context/SettingsContext";
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

          <div className="grid grid-cols-12 gap-4 min-h-screen h-screen overflow-hidden ">
            {/* Sidebar - Visible on md+, Hidden on sm and smaller */}
            <aside className="hidden md:block md:col-span-2 lg:col-span-2 xl:col-span-2  text-white  bg-white border-r-2 pt-[8rem]">
              <SidebarNav />
            </aside>

            {/* Main Content - Expands when Todo is Hidden */}
            <main className="col-span-12 md:col-span-9 lg:col-span-10 xl:col-span-10  flex  justify-center  overflow-auto h-screen scrollbar-hidden pt-[9rem] p-6">
              {children}
            </main>

            {/* Todo List - Visible on xl+ (≥1280px), Hidden on lg (1024px - 1279px) */}
            <aside className="hidden xl:flex xl:col-span-2 bg-gray-100 p-4">
              <TodoList />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}

// big -> 2,10,2
//md -> 4,12
