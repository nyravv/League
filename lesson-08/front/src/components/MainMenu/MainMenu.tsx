import block from 'bem-cn'
import React from 'react'
import './MainMenu.css'

interface Props {
}

const b = block('main-menu')

export const MainMenu: React.FC<Props> = () => {
  return (
    <nav className={b()}>
      <ul className={b('list')}>
        <li className={b('item')}><a className={b('link')} href="/catalog">Каталог</a></li>
        <li className={b('item')}><a className={b('link')} href="/ref">Справочники</a></li>
        </ul>
    </nav>
  )
}
