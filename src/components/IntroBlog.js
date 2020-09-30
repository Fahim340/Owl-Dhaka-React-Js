import React, { Component } from 'react'
import Background from '../image/introblog.png';
import { withTheme } from '@material-ui/styles';
//import desktopImage from '../image/introblog.png';
//import mobileImage from '../image/introblog.png';
import playStore from '../image/playStore.png';
import appStore from '../image/appStore.png';

const heroBackground = {
    backgroundImage: `url(${Background })`,
    backgroundColor: '#cccccc',
    height: '550px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    
    
  };
  const heroText ={
    textAlign: 'left',
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    
  };
  

  
 

export default class IntroBlog extends Component {
    render() {
  //      const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
        return (
           
            <div style={heroBackground}>
              
            <div style={heroText}>
              <h1 style={{ fontStyle: 'Monospace',fontSize: '40px'}}>Hanger Knows No Time </h1>
              <h2 style={{color: "#FFE7A2", fontStyle: 'Sans-serif',fontSize: '30px'}}>We deliver authentic Traditional food</h2>
              <h2 style={{color: "#FFE7A2",fontStyle: 'Sans-serif',fontSize: '30px'}}>from Old Dhaka to your door </h2>

            </div>
            
            
        </div>
        )
    }
}

