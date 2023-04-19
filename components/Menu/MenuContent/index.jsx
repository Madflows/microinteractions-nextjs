import { EXTERNAL_LINKS, INTERNAL_LINKS } from '@/utils/data';
import Link from 'next/link';
import React, { useContext } from 'react';
import { MenuContext } from '../MenuManager';

function MenuContent() {
    const {open} = useContext(MenuContext)
  return (
    <div className='menu-holder'>
      <div className={`menu-inside ${open && 'open'}`}>
        <div className='menu-nav-container'>
          <ul className='internal-nav-links'>
            {INTERNAL_LINKS.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>
                <span data-content={link.title}>{link.title}</span>
                </Link>
                <img src={link.img} alt='aye' />
              </li>
            ))}
          </ul>
          <ul className='external-nav-links'>
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.component}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
