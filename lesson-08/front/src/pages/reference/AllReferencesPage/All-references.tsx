import block from 'bem-cn'
import React from 'react'
import './AllReferencesPage.css'

interface Props {
}

const b = block('all-references-page')

export const AllReferencesPage: React.FC<Props> = () => (
  <div className={b()}>
    AllReferencesPage
  </div>
)
