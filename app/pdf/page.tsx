"use client";
import FileUpload from "@/components/pdf/file-upload";
import { ContinueReading } from "@/components/pdf/StudyDashboard";
import SubjectFolders from "@/components/SubjectFolders";
import SubjectsFiles from "@/components/pdf/SubjectFiles";
import React from "react";

const page = () => {
  return (
    <div className="mt-32 font-rubik">
      <div className="mb-20 mt-44">
        <FileUpload />
      </div>
      <div className="flex gap-8 mb-20">
        <SubjectsFiles fileType="pdf" />
        <ContinueReading />
      </div>
    </div>
  );
};

export default page;
