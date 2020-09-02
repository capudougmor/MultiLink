import React from 'react'

// import logo from "https://i.ibb.co/PFs4jPc/curriculum-Img.png"

const Links = ( {href, imgUrl, children} ) => {
  return (
    <>
      <a href={href}>
        <img src={imgUrl} />      
        { children } 
      </a>
    </>
  )
}

export default Links