import React from 'react';

import Links from '../components/Links'
import data from '../database/api'
// import avatar from '../assets/garota.png'


const Index = () => {
  const items = data

  return (
    <>
      <img src='https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2016/05/c6904b9a52796f1c0353a3306e16b16e.jpg.jpeg'alt='Avatar' />
      <h1>dev</h1>
      <ul>
        { items.map(item => {
          return (
            <li><Links href={item.link} >{item.title}</Links></li>

          )
        })}
      </ul>
    </>
  ) 
}

export default Index