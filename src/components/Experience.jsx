import React, { useState } from 'react'
import Button from './Button'

const Experience = () => {
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [responsibility, setResponsibility] = useState('')
    const [submit, setSubmit] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(prevSubmit => !prevSubmit)
        console.log({company, position, responsibility})
    }

  return (
    <form onSubmit={handleSubmit} className="general-info">
        <label htmlFor="company">Employeer</label>
        <input type="text" required name="company" value={company} onChange={(e) => setCompany(() => e.target.value)}/>
        <label htmlFor="position">Position</label>
        <input type="text" required name="position" value={position} onChange={(e) => setPosition(() => e.target.value)}/>
        <label htmlFor="responsibility">Responsibility</label>
        <input type="text" required name="responsibility" value={responsibility} onChange={(e) => setResponsibility(() => e.target.value)}/>
        <Button value={submit === true ? 'Submit' : 'Edit'}/>
    </form>
  )
}

export default Experience