import StudyDashboard from '@/components/StudyDashboard'
import TrackerDashboard from '@/components/Tracker'
import React from 'react'

const page = () => {
  return (
    <div>
      <TrackerDashboard/>
      <StudyDashboard/>
    </div>
  )
}

export default page