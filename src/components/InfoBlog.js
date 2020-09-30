import React, { Component } from 'react'
import Background from '../image/infoBlog.png';
import { withTheme } from '@material-ui/styles';
//import desktopImage from '../image/introblog.png';
//import mobileImage from '../image/introblog.png';

const infoBackground = {
    backgroundImage: `url(${Background })`,
    backgroundColor: '#cccccc',
    height: '1100px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    
    
  };
  const infoText ={
    textAlign: 'left',
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    
  };
  const hr={
    
    background: 'linear-gradient(to right, #F9BD13, #FCF6E4)',
    height: '5px',
  
};
export default class InfoBlog extends Component {
    render() {
        return (
            <div style={infoBackground}>
              
            <div style={infoText}>
              <h1 style={{ fontStyle: 'Monospace',fontSize: '30px'}}>Delivery Time Starts From 9:00 PM T0 3:00 PM </h1>
              <hr style={hr}/>
              <p style={{ fontStyle: 'Sans-serif',fontSize: '20px'}}>Lorem ipsum, or lipsum as it is sometimes known,</p>
              <p style={{ fontStyle: 'Sans-serif',fontSize: '20px'}}>is dummy text used in laying out print, </p>
              <p style={{ fontStyle: 'Sans-serif',fontSize: '20px'}}>graphic or web designs. The passage is attributed</p>
              <p style={{ fontStyle: 'Sans-serif',fontSize: '20px'}}> to an unknown typesetter in the 15th century who </p>
              <p style={{ fontStyle: 'Sans-serif',fontSize: '20px'}}> is thought to have scrambled parts of Cicero</p> 
              

            </div>
        </div>
        )
    }
}
