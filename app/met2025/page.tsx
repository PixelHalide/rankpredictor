'use client'
import { useState } from 'react'
import HowItWorksDropdown from '../../components/HowItWorksDropdown'
import Form from './Form'

const MET2025 = () => {
  const [boardPercentage, set_boards] = useState<number | null>()
  const [METMarks, set_met] = useState<number | null>()

  const sendBoards = (marks: number) => {
    set_boards(marks);
  }

  const sendMET = (marks: number) => {
    set_met(marks)
  }

  return (
    <div className="min-h-screen p-5">
      <HowItWorksDropdown />
      <Form
        sendBoards={sendBoards}
        sendMET={sendMET}
      />
    </div>
  )
}

export default MET2025

