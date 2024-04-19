import React from "react";
import "../style/snav.css";
import { Link } from "react-router-dom"
function Spotifynav() {
  return (
    <div>
       
      <div className="navdiv1">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt=""
          style={{ height: "40px", marginLeft: "250px", marginTop: "20px" }}
        />

        <div className="navbarlinks">
             
             <Link to={'/premium'} style={{textDecoration:"none"}}>  <a href="" className="atag1">premium</a></Link>
             <Link to={'/support'} style={{textDecoration:"none"}}><a href="" className="atag1">Support</a></Link> 
              <a href="https://www.spotify.com/in-en/download/windows/" className="atag1">Download</a>
              <span style={{height:"200px",color:"white",marginLeft:"25px"}}>|</span>
              <a href="https://www.spotify.com/in-en/signup" className="atag1">Sign up</a>
              <a href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fwww.spotify.com%2Fin-en%2Ffree%2F%3Futm_source%3Din-en_brand_contextual_text%26utm_medium%3Dpaidsearch%26utm_campaign%3Dalwayson_asia_in_premiumbusiness_core_brand_neev%2Bcontextual%2Bin-en%2Bgoogle%26gad_source%3D1%26gclid%3DCj0KCQiAz8GuBhCxARIsAOpzk8z5OKxUEfjiK28vHi_EHsGT4ps09zp9F0gYyw3dAz6WIvKkl_nCWJgaArlWEALw_wcB%26gclsrc%3Daw.ds&_locale=en-IN" className="atag1">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Spotifynav;
