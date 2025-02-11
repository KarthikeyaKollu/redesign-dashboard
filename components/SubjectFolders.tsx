"use client";
import React, { useState } from "react";
import Folder from "@/public/folder.svg";
import Image from "next/image";
import FileSystem from "./FileSystem";
import expand from "@/public/subjectexpand.svg";
import close from "@/public/subjectclose.svg";

const SubjectFolders = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="rounded-lg w-full h-[274px] relative">
      <h2 className="text-2xl font-semibold text-green-700 ml-2 mb-4 flex justify-between items-center">
        Subjects
        <button onClick={toggleExpand} className="focus:outline-none">
          <Image
            src={isExpanded ? close : expand}
            alt="expand-toggle"
            width={30}
            height={30}
          />
        </button>
      </h2>
      <div className="">
        <FileSystem
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
          fileType="root"
          isSubjectFolderView={true}
        />
      </div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-[90vw] h-[80vh] max-w-4xl max-h-[90vh] relative flex flex-col">
            <button onClick={toggleExpand} className="absolute top-3 right-3">
              <Image src={close} alt="close" width={30} height={30} />
            </button>
            <FileSystem
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
              fileType="root"
              isSubjectFolderView={true}
              className="flex-grow"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectFolders;
