import React from 'react'
import Navbar from "./Navbar"

import FoodGallery from"./FoodGallery"
import IntroBlog from"./IntroBlog"
import CenterBlog from"./CenterBlog"
import InfoBloge from"./InfoBlog"
import Neu from"./Neu"







export const Home = () => {
    return (
        <div style={{ background:'#101010  '}}>
            <Navbar />
            <IntroBlog />
            <CenterBlog />
            <InfoBloge />
          
            <FoodGallery />
            <FoodGallery />
            <FoodGallery />
           
            
            
            

        </div>
    )
}
 export default Home