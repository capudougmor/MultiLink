import React from 'react'

// import logo from "https://i.ibb.co/PFs4jPc/curriculum-Img.png"

const Links = ( {href, imgUrl, children} ) => {
  return (
    <>
      <img src={imgUrl} />      
      <a href={href}  >{ children } </a>
    </>
  )
}

export default Links