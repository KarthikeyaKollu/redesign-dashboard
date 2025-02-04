import StudyDashboard from '@/components/StudyDashboard'
import SubjectFolders from '@/components/SubjectFolders'
import TrackerDashboard from '@/components/Tracker'
import React from 'react'

const page = () => {
  return (
    <div>
      <TrackerDashboard/>
      <StudyDashboard/>
      <SubjectFolders/>
    </div>
  )
}

export default page