import StudyDashboard from "@/components/StudyDashboard";
import SubjectFolders from "@/components/SubjectFolders";
import TrackerDashboard from "@/components/Tracker";
import React from "react";

const page = () => {
  return (
    <div className="font-rubik   w-full flex flex-col space-y-12">
      <TrackerDashboard />
      <SubjectFolders />
      <StudyDashboard />
    </div>
  );
};

export default page;
