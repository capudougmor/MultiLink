import React from 'react'

import './styles.css'

const Links = ( {href, children} ) => {
  return (
    <>
      <a href={href}  >{ children }</a>
    </>
  )
}

export default Links