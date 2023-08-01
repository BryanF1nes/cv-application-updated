import React, { useState } from 'react'
import Button from './Button'

const Education = () => {
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [graduation, setGraduation] = useState('')
    const [submit, setSubmit] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(prevSubmit => !prevSubmit)
        console.log({school, degree, graduation})
    }

  return (
    <form onSubmit={handleSubmit} className="general-info">
        <label htmlFor="school">School</label>
        <input type="text" required name="school" value={school} onChange={(e) => setSchool(() => e.target.value)}/>
        <label htmlFor="degree">Degree Level</label>
        <input type="text" required name="degree" value={degree} onChange={(e) => setDegree(() => e.target.value)}/>
        <label htmlFor="graduated">Year Graduated</label>
        <input id="date" required type="date" name="graduated" value={graduation} onChange={(e) => setGraduation(() => e.target.value)}/>
        <Button value={submit === true ? 'Submit' : 'Edit'}/>
    </form>
  )
}

export default Education