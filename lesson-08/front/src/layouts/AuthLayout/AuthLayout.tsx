import block from 'bem-cn'
import React from 'react'
import { Header } from '../../components/Header/Header'
import './AuthLayout.css'

interface Props {
}

const b = block('auth-layout')

export const AuthLayout: React.FC<Props> = (props) => {
  return (
    <div className={b()}>
      <Header />
      <main className={b('main')}>
        {props.children}
      </main>
    </div>
  )
}
