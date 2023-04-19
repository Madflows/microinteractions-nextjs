import React, { useContext } from 'react'
import { MenuContext } from '../MenuManager'

function MenuButton() {
    const {open, setOpen} = useContext(MenuContext)
  return (
    <div className={`menu-button-wrap ${open && 'open'}`}>
        <button className='menu-button' onClick={() => setOpen(!open)}><span /></button>
    </div>
  )
}

export default MenuButton
