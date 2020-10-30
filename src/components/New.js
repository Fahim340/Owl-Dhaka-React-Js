import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "../style.css";
import Card from"./Card";
import items from '../store.js';
import food1 from '../image/food1.png';

const hr={
    
  background: 'linear-gradient(to right, #F9BD13, #FCF6E4)',
  height: '5px',

};

const item={

  borderRadius: '16px',
  background: '#101010',
  boxShadow:  '5px 5px 4px #060606, -5px -5px 4px #1a1a1a',
  width: '80%',
  height: '200px',
  
  color:'#fff',
  fontSize:'30px',
  margin:'0 2px',
  display: 'Flex',
  justifyContent: 'center',
  alignItems: 'center',
  

};

export default class New extends Component {
 
  render() {
    const breakPoints=[
      {width:500,itemsToShow: 2.5},
      {width:768,itemsToShow: 3.5},
      {width:1200,itemsToShow: 3.5},
      {width:1500,itemsToShow: 6},
      
    ];
    return (
      <div>
        <h1 style={{fontStyle: 'Arial', color:'white',  left: '25%',}}>Available Now</h1>
        <hr style={hr}/>
        <br/>
        <Carousel breakPoints={breakPoints}>
        
        {
        items.map( item => {
          return <div className="card">
            <img style ={{height: '150px', width:'80%',}}src={ item.img } />
          
          </div>
         
        })
      }
      
        </Carousel>
      </div>
    )
  }
}
