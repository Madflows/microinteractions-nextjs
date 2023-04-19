import React, { useContext } from 'react'
import { Plus } from 'react-feather'
import { MenuContext } from '../Menu/MenuManager'

function ContactButton() {
  const {open, setOpen} = useContext(MenuContext)
  return (
    <button onClick={() => setOpen(!open)} className='contact-button'>
      <span>Contact us</span>
      <Plus />
    </button>
  )
}

export default ContactButton
