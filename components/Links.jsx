import React from 'react'


const Links = ( {href, children} ) => {
  return (
    <>
      <a href={href}  >{ children }</a>
    </>
  )
}

export default Links