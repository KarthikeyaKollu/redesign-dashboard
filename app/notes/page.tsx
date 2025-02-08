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
    <div className="font-rubik pt-[100px]">
      <DashHeader />
      <div className="flex gap-8 mt-8">
        <div className="hidden lg:block">
          <SidebarNav />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <SubjectFolders />
          <div className="flex gap-8">
            <FlashCards />
            <SubjectsFiles fileType="note" />
          </div>
        </div>
        <div className="hidden xl:block">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default page;
