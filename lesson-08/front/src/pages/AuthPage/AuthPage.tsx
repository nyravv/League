import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <form className={b('form')}>
      <div className={b('field')}>
        <label className={b('label')}>
          <p className={b('label-name')}>Login</p>
          <input className={b('input')} type="text" />
        </label>
      </div>
      <div className={b('field')}>
        <label className={b('label')}>
          <p className={b('label-name')}>Password</p>
          <input className={b('input')} type="password" />
        </label>
      </div>
      <div className={b('field')}>
        <button className={b('submit')} type="submit">Submit</button>
      </div>
    </form>
  )
}
