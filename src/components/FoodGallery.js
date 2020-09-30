import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddBoxIcon from '@material-ui/icons/AddBox';
//import tileData from './tileData';
import tileData from '../store.js';
import { borders } from '@material-ui/system';
const titleText ={
  textAlign: 'left',
  position: 'absolute',
  top: '2000px',
  left: '15%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  
};
const hr={
    
  background: 'linear-gradient(to right, #F9BD13, #FCF6E4)',
  height: '5px',
  width:'100%',

};
const neo = {
  borderRadius: '39px',
background: '#101010 ',
boxShadow:  '7px 7px 11px #222222, -7px -7px 11px #656565'
     
  
};
const useStyles = makeStyles((theme) => ({
  root: {
 
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  
  gridList: {
    flexWrap: 'nowrap',
  
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
 
  title: {
  color: '#F8F2F2',
  },

  titleBar: {


    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
  <>
    <div style={titleText}>
    <h1 style={{ fontStyle: 'Monospace',fontSize: '40px'}}>Available Now </h1>
    <hr style={hr}/>
    </div>
    <div className={classes.root} style={{ background:'black'}}> 
      
    
      <GridList className={classes.gridList} cols={4.5}>
        
        {tileData.map((tile) => (
          
          <GridListTile key={tile.img}>
            
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  
                  <AddBoxIcon  className={classes.title} />
                  
                </IconButton>
              }
              
            />
            
          </GridListTile>
        ))}
        <h2></h2>
      </GridList>
      
      <h2></h2>
    </div>
    </>
  );
  
}


