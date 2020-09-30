import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {makeStyle} from '@material-ui/core/styles';
import BackdropFilter from "react-backdrop-filter";
import SearchIcon from '@material-ui/icons/Search';
import logo from '../image/logo.png';
import { withWidth } from '@material-ui/core';





function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function ElevateAppBar(props) {
  return (
    <React.Fragment >
      <CssBaseline />
      <ElevationScroll {...props} >
        
        <Box component="nav" >
        <AppBar  style={{ opacity:'10%',  boxShadow: '10',
       background: 'rgba(100, 100, 100, 0.3)',
}}>
        <BackdropFilter className="bluredForm"
         
                filter={"blur(80px) "}
                canvasFallback={true}
                html2canvasOpts={{
                    allowTaint: true
                }}
                onDraw={() => {
                    console.log("Rendered !");
                }}
                >
          <Toolbar>
          <img src={logo} alt={'logo'} style ={{ height:"40px"}}  ></img>
            <Typography variant="h6"></Typography>
          </Toolbar>
          </BackdropFilter>
        </AppBar>
        </Box>
       
        
      </ElevationScroll>
      
      <Toolbar />
      <Container>
       
      </Container>
    </React.Fragment>
  );
}