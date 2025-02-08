"use client";
import FlashCards from "@/components/notes/FlashCards";
import SubjectFolders from "@/components/notes/SubjectRecentFiles";
import SubjectsFiles from "@/components/notes/SubjectFiles";
import React from "react";
import { SidebarNav } from "@/components/sidebar-nav";
import TodoList from "@/components/Todo";
import { DashHeader } from "@/components/DashHeader";

const page = () => {
  return (
    <div className="font-rubik pt-[100px] min-h-screen w-full flex flex-col">
      <DashHeader />
      <div className="flex gap-8 mt-8 w-full px-4 lg:px-8">
        <div className="hidden lg:flex w-1/4">
          <SidebarNav />
        </div>
        <div className="flex-1 flex flex-col gap-8 w-full">
          <SubjectFolders className="w-full" />
          <div className="flex gap-8 w-full flex-wrap flex-wrap">
            <FlashCards className="w-full lg:w-1/2" />
            <SubjectsFiles fileType="note" className="w-full lg:w-1/2" />
          </div>
        </div>
        <div className="hidden xl:flex w-1/4 min-w-[200px]">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default page;
