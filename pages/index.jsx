import React from 'react';

import Links from '../components/Links'
import data from '../database/api'


const Index = () => {
  const items = data

  return (
    <>
      <header>
        <div className="image">
          <img className='img' src="https://i.ibb.co/0ZRTMVW/Image.png"/>
        </div>
        <h1>Douglas Mendes Assunção</h1>
      </header>
        
      <main>
        <ul>
          { items.map(item => {
            return (
              <li><Links href={item.link} imgUrl={item.imgUrl} >{item.title}</Links></li>
            )
          })}
        </ul>
      </main>
      
    </>
  ) 
}

export default Index  