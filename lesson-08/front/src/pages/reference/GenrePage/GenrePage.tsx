import block from 'bem-cn'
import React from 'react'
import './GenrePage.css'

interface Props {
}

const b = block('genre-page')

export const GenrePage: React.FC<Props> = () => (
  <div className={b()}>
    GenrePage
  </div>
)
