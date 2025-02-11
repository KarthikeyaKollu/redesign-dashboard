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
    <div className="font-rubik w-full flex flex-col">
      <div className="flex-1 flex flex-col gap-8 w-full">
        <SubjectFolders  />
        <div className="flex gap-8 w-full">
          <FlashCards />
          <SubjectsFiles fileType="note"  />
        </div>
      </div>
    
    </div>
  );
};

export default page;
