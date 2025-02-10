import StudyDashboard from "@/components/StudyDashboard";
import SubjectFolders from "@/components/SubjectFolders";
import TrackerDashboard from "@/components/Tracker";
import React from "react";

const page = () => {
  return (
    <div className="font-rubik pt-[100px] min-h-screen w-full flex flex-col gap-8">
      <TrackerDashboard className="w-full" />
      <StudyDashboard className="w-full" />
      <SubjectFolders className="w-full" />
    </div>
  );
};

export default page;
