import React from 'react'
import Navbar from "../components/Navbar"

import FoodGallery from"../components/FoodGallery"
import IntroBlog from"../components/IntroBlog"
import CenterBlog from"../components/CenterBlog"
import InfoBloge from"../components/InfoBlog"
import New from"../components/New"








export const Home = () => {
    return (
        <div style={{ background:'#101010  '}}>
            <Navbar />
            <IntroBlog />
            <CenterBlog />
            <InfoBloge />
            <New />
           
           
            
            
            

        </div>
    )
}
 export default Home