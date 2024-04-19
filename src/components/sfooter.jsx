import React from 'react'
import "../style/sfooterstyle.css"
import { RxInstagramLogo } from "react-icons/rx"
import { FaSquareTwitter } from "react-icons/fa6"
function Sfooter() {
  return (
    <div>
        <div className='footdiv1'>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt=""
          style={{ height: "40px", marginLeft: "200px", marginTop: "100px" }}
        />
        <div style={{display:"flex",marginLeft:"500px"}}>
        <div className='company'>
            <p style={{color:"gray",fontSize:"13px"}}>COMPANY</p>
            
            <p style={{color:"white"}}>About</p>
            <p style={{color:"white"}}>Jobs</p>
            <p style={{color:"white"}}>For the Record</p>
            <p style={{color:"white"}}>About</p>
            
        </div>

        <div className='community'>
            <p style={{color:"gray",fontSize:"13px"}}>COMMUNITIES</p>
            
            <p style={{color:"white"}}>For Artists</p>
            <p style={{color:"white"}}>Developers</p>
            <p style={{color:"white"}}>Advertising</p>
            <p style={{color:"white"}}>Investors</p>
            <p style={{color:"white"}}>Vendors</p>
            
        </div>

        <div className='community'>
            <p style={{color:"gray",fontSize:"13px"}}>USEFUL LINKS</p>
            
            <p style={{color:"white"}}>Support</p>
            <p style={{color:"white"}}>Web Player</p>
            <p style={{color:"white"}}>Free Mobile App</p>
        
        </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7-lJmxbDiZXHkHieQHaFuSKxUYsWDyLvYTus0hEEZw&s" alt="" height={"40px"} style={{borderRadius:"50px",marginLeft:"70px"}} />
          <img src="https://static.vecteezy.com/system/resources/previews/019/490/753/non_2x/black-twitter-logo-black-twitter-icon-twitter-symbol-free-free-vector.jpg" alt="" height={"40px"} style={{borderRadius:"30px",marginLeft:"30px"}} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_tL0PULjP_u3RNfs8lWZsJphjZOzC7UCzKMiks1Zq8xG7Vs-864XSFIADIOCxjNCAB0&usqp=CAU" height={"40px"} style={{borderRadius:"50px",marginLeft:"30px"}} />
          </div>
          <div style={{color:"gray",display:"flex",marginTop:"80px",marginLeft:"90px"}}>
          <p style={{fontSize:"12px"}}>Legal</p>
          <p className='pfootend'>Safety & Privacy Center</p>
          <p className='pfootend'>Privacy Policy</p>
          < p className='pfootend'>Cookies</p>
          <p className='pfootend'>About Ads</p>
          <p className='pfootend'>Accessibility</p>
        </div>
        </div>
       
    </div>
  )
}

export default Sfooter