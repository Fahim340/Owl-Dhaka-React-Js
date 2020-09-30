
import React, { Component } from 'react'
import zIndex from '@material-ui/core/styles/zIndex';

const centerDiv = {
    backgroundColour: '#192330'  ,
    //backgroundSize: 'cover',width:'',
    width:'80%',
    height:'400px'
    
    
  };

 
  const bgText = {
     /* Fallback color */
    backgroundColor: 'rgba(255, 255, 255, .2)', /* Black w/opacity/see-through */
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '900px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    width: '60%',
    padding: '20px',
    textAlign: 'center',
    backdropFilter: 'blur(80px)',
    opacity:'10%',  
    boxShadow: '10',
    borderRadius: '1em'
    
  };
const hr={
    
        background: 'linear-gradient(to right, #F9BD13, #FCF6E4)',
        height: '5px',
      
};


export default class CenterBlog extends Component {
    render() {
        return (
            <>
            <div style={centerDiv}> 
           <div style={bgText}>
                <h1 style={{fontStyle: 'Arial',fontSize: '30px'}}>When People Stop We Start</h1>
                <hr style={hr}/>
                <p style={{fontStyle: 'Arial'}}>It's always early morning at Old Dhaka. Specially at mid night it's very lively.</p>
                <p style={{fontStyle: 'Arial'}}>Nazira Bazar is a lane of Restaurants. You can find Hazi Biriani, Bismillah Kebab</p>
                <p style={{fontStyle: 'Arial'}}>Hanif Biriani, Kolkata kacchi and many more famous restaurants which have been</p>
                <p style={{fontStyle: 'Arial'}}>kept their reputations for more then three generations.</p>
            </div> 
    
            </div>   
            
            
        </>
        )
    }
}


