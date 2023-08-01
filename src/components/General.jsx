import React, { useState } from 'react'
import Button from './Button';

const General = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [submit, setSubmit] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(prevSubmit => !prevSubmit)
        console.log({firstName, lastName, email, phone})
    }

  return (
    <form onSubmit={handleSubmit} className="general-info">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" required value={firstName} onChange={(e) => setFirstName(() => e.target.value)}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" required value={lastName} onChange={(e) => setLastName(() => e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="tel" name="email" required value={email} onChange={(e) => setEmail(() => e.target.value)}/>
        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" required value={phone} onChange={(e) => setPhone(() => e.target.value)}/>
        <Button value={submit === true ? 'Submit' : 'Edit'}/>
    </form>
  )
}

export default General