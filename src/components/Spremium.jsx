import React from 'react'
import "../style/Sprmstyle.css"
import { TiTick } from "react-icons/ti"
function Spremium() {
  return (
    <div>
       <div className='prmdiv'>
          <div className='prmdiv1'>
          <div><h1 className='prmh1'>Listen without limits. Try 2<br/> months of Premium for ₹119.</h1>
           <h2 className='prmh2'>Only ₹119/month after. Cancel anytime.</h2>
           <button className='pbutton1'>Get Premium Individual</button>
           <button className='pbutton2'>View all Premium plans</button>
          <p style={{color:"white",fontSize:"11px",paddingLeft:"110px",paddingTop:"20px"}}>₹119 for 2 months, then ₹119 per month after. Offer only<br/> available if you haven't tried Premium before. <a style={{color:"white"}} href="https://www.spotify.com/in-en/legal/premium-promotional-offer-terms/#spotify-premium-promotional-offer-terms">Terms apply</a>   .</p>
         
           
           </div> 
           <img src="https://wwwmarketing.scdn.co/static/images/premium/desktop-album-evergreen-1x.png" alt=""  className='imgpdiv1'/>
           </div>
           <div className='sprdiv1'>
       
       <h1 className='sprdiv1h1'>Affordable plans for any situation</h1>
       <p style={{textAlign:"center"}}>Choose a Premium plan and listen to ad-free music without limits on your phone, speaker,<br/> and other devices. Pay in various ways. Cancel anytime.</p>
       <img src="https://content-tooling.spotifycdn.com/images/b25769ea-41d0-464c-a4f6-e1f9a72bcaff_upi.svg" alt=""  style={{marginLeft:"650px",marginTop:"20px"}}/>
       <img src="https://content-tooling.spotifycdn.com/images/c24d5608-2130-4e8b-92d1-3797f081f898_paytm.svg" alt=""  style={{marginLeft:"30px",marginTop:"20px"}}/>
       <img src="https://content-tooling.spotifycdn.com/images/35b479ba-628d-4759-adfe-7ce962fab132_visa.svg" alt=""  style={{marginLeft:"30px",marginTop:"20px"}}/>
       <img src="https://content-tooling.spotifycdn.com/images/ba8ac445-c85f-451c-9ca5-7c91bc93016b_mastercard.svg" alt=""  style={{marginLeft:"30px",marginTop:"20px"}}/>
       <u><p style={{marginLeft:"750px"}}>+2 more</p></u>
       <div style={{display:"flex",marginTop:"30px"}}>
       <h2 style={{marginLeft:"600px",marginTop:"100px"}}>All premium plans include</h2>
       <div style={{marginLeft:'30px'}}><p><TiTick /> Ad-free music listening</p>
       <p><TiTick /> Download to listen offline</p>
       <p><TiTick /> Play songs in any order</p>
       <p><TiTick /> High audio quality</p>
       <p><TiTick /> Listen with friends in real time</p>
       <p><TiTick /> Organize listening queue</p></div>

       </div>
       
      
 </div>
         
      </div>
        
    </div>
  )
}

export default Spremium