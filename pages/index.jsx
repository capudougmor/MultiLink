import React from 'react';

import Links from '../components/Links'
import data from '../database/api'


const Index = () => {
  const items = data

  return (
    <>
      <header>
        <div className="image">
          <img className='img' src="https://avatars0.githubusercontent.com/u/60409911?s=400&u=8fdd6fe687515b06f34e33f6a4811e82d1f31712&v=4"/>
        </div>
        <h1>Douglas Mendes Assunção</h1>
      </header>
        
      <main>
        <ul>
          { items.map(item => {
            return (
              <div className='card'>
                <div className='box' >
                  <Links href={item.link} imgUrl={item.imgUrl} ><li>{item.title}</li></Links>
                </div>                  
              </div>                
            )
          })}
        </ul>
      </main>
      
    </>
  ) 
}

export default Index  