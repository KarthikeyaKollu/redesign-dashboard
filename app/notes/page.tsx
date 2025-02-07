"use client";
import FlashCards from "@/components/notes/FlashCards";
import SubjectFolders from "@/components/notes/SubjectRecentFiles";
import SubjectsFiles from "@/components/notes/SubjectFiles";
import React from "react";
import { SidebarNav } from "@/components/sidebar-nav";
import TodoList from "@/components/Todo";

const page = () => {
  return (
    <div className="mt-32 font-rubik">
      <SubjectFolders />
      <div className="flex  gap-8 mt-20 mb-20  ">
        <FlashCards />
        <SubjectsFiles fileType="note" />
      </div>

      <SidebarNav/>
      <TodoList/>
    </div>
  );
};

export default page;
