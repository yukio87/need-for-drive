import React from 'react'

import { navList } from '../consts/navList'
import { Item } from './components'
import { nav, wrapper } from './Nav.module.scss'

export function Nav() {
  return (
    <div className={wrapper}>
      <div className={nav}>
        {navList.map(({ navPath, navName }, index, array) => (
          <Item
            navPath={navPath}
            navName={navName}
            index={index}
            array={array}
            key={navPath}
          />
        ))}
      </div>
    </div>
  )
}
