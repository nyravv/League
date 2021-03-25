import block from 'bem-cn'
import React from 'react'
import './AuthorPage.css'

interface Props {
}

const b = block('author-page')

export const AuthorPage: React.FC<Props> = () => (
  <div className={b()}>
    AuthorPage
  </div>
)
