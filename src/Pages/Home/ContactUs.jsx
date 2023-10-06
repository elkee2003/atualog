import React, { useState } from 'react'

function ContactUs() {
    const [contact, setContact] = useState({firstName:' ', lastName:'', email:'', phoneNumber:'', message:''})

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setContact({...contact, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <section id='contact' className='contact-section'>
        <div>
            <p className='sub-title'>Contact</p>
            <h2>Contact Us</h2>
            <p className='text-lg'>
                We are here to serve you and to make sure you are at ease.
            </p>
            <p className='text-lg'>
                 Do not hestiate to contact us for inquiries, advice or complaints.
            </p>
            <p className='text-lg'>
                Your satisfaction is our movitation!
            </p>
        </div>
        <form className='contact-form-container'>
            <div className='container'>

                <label htmlFor="first-name" className='contact-label'>
                    <span className='text-md'>
                        First Name
                    </span>
                    <input 
                    type="text" className='contact-input text-md' 
                    name='firstName'
                    id='first-name'
                    value={contact.firstName}
                    onChange={handleChange}
                    required
                    />
                </label>

                <label htmlFor="last-name" className='contact-label'>
                    <span className='text-md'>
                        Last Name
                    </span>
                    <input 
                    type="text" className='contact-input text-md' 
                    name='lastName'
                    id='last-name'
                    value={contact.lastName}
                    onChange={handleChange}
                    required
                    />
                </label>

                <label htmlFor="email" className='contact-label'>
                    <span className='text-md'>
                        Email
                    </span>
                    <input 
                    type="email" className='contact-input text-md' 
                    name='email'
                    id='email'
                    value={contact.email}
                    onChange={handleChange}
                    required
                    />
                </label>

                <label htmlFor="phone-number" className='contact-label'>
                    <span className='text-md'>
                        Phone Number
                    </span>
                    <input 
                    type="text" className='contact-input text-md' 
                    name='phoneNumber'
                    id='phone-number'
                    value={contact.phoneNumber}
                    onChange={handleChange}
                    required
                    />
                </label>
            </div>

            <label htmlFor="choose-topic" className='contact-label choose-topic'>
                <span className='text-md'>
                    Choose a type of feedback
                </span>
                <select id='choose-topic'
                className='contact-input text-md'>
                    <option>Select One...</option>
                    <option>Complaint</option>
                    <option>Advice</option>
                    <option>Support</option>
                </select>
            </label>

            <label htmlFor="message" className='contact-label message'>
                <span className='text-md'>
                    Message
                </span>
                <textarea
                className='contact-input text-md'
                name='message'
                id='message'
                rows='8'
                placeholder='Type in your message...'
                value={contact.message}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='checkbox' className='checkbox-label'>
                <input type="checkbox" 
                required
                name='checkbox'
                id='checkbox' />
                <span>I accept the terms and conditions</span>
            </label>
            <div>
                <button type='submit'
                onClick={handleSubmit}
                className='btn btn-primary contact-form-btn'>Submit</button>
            </div>
        </form>
    </section>
  )
}

export default ContactUs