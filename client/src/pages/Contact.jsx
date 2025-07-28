import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import SupportCategory from '../components/Contact/SupportCategory'
import Header from '../components/Contact/Header'
import Location from '../components/Contact/Location'

const Contact = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <ContactForm />
      <SupportCategory />
      <Location /> 
</div>
  )
}

export default Contact