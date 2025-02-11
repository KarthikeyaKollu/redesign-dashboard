"use client";
import FileUpload from "@/components/pdf/file-upload";
import { ContinueReading } from "@/components/pdf/StudyDashboard";
import SubjectFolders from "@/components/SubjectFolders";
import SubjectsFiles from "@/components/pdf/SubjectFiles";
import React from "react";

const page = () => {
  return (
    <div className="w-full  font-rubik">
      <div className="mb-20">
        <FileUpload />
      </div>
      <div className="flex flex-col md:flex-row gap-8 ">
        <SubjectsFiles fileType="pdf" />
        <ContinueReading />
      </div>
    </div>
  );
};

export default page;
