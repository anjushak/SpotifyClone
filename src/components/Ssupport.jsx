import React from "react";
import "../style/support.css";
import { Form, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
function Ssupport() {
  return (
    <div>
      <div className="supp1">
        <div style={{ display: "flex" }}>
          <div>
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              alt=""
              style={{ height: "40px", marginLeft: "200px",marginTop:"30px" }}
            />
          </div>
          <div>
            <button className="suppb1">Explore premium</button>
            <button className="suppb2">Install App</button>
          </div>
        </div>
        <div>
          <p className="suppp1">Sportify support</p>
          <h1 className="supph1">How can we help you?</h1>
          <a href="" style={{ marginLeft: "500px", color: "black" }}>
            log in
          </a>
          <span style={{ marginLeft: "5px", color: "white" }}>
            for faster response
          </span>
          <br />

          <input
            type="text"
            placeholder="search"
            style={{
              marginLeft: "500px",
              marginTop: "40px",
              height: "30px",
              width: "500px",
            }}
          ></input>
          <button style={{ width: "40px", height: "35px" }}>
            <IoSearch />
          </button>

          <div className="divgrid">
            <div style={{ display: "flex", gap: "15px" }}>
              <div className="card1s"
                style={{
                 
                }}
              >
               <div><h1 style={{color:"white",fontSize:"15px",marginLeft:"10px"}}>Payment help</h1></div>
                
                <div>
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=128&fit=max&auto=format"
                    height={"70px"}
                  style={{ marginTop:"50px",marginLeft:"60px",transform:"rotate(25deg)"}}/>
                </div>
              </div>
              <div className="card1s1"
                style={{
                 
                }}
              >
               <div><h1 style={{color:"white",fontSize:"15px",marginLeft:"10px"}}>Account help</h1></div>
                
                <div>
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=128&fit=max&auto=format"
                    height={"70px"}
                  style={{ marginTop:"50px",marginLeft:"60px",transform:"rotate(25deg)"}}/>
                </div>
              </div>
             
             
              <div className="card1s2"
                style={{
                 
                }}
              >
               <div><h1 style={{color:"white",fontSize:"15px",marginLeft:"10px"}}>Plan help</h1></div>
                
                <div>
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=128&fit=max&auto=format"
                    height={"70px"}
                  style={{ marginTop:"50px",marginLeft:"60px",transform:"rotate(25deg)"}}/>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <div className="card1s12"
                style={{
                 
                }}
              >
               <div><h1 style={{color:"white",fontSize:"15px",marginLeft:"10px"}}>App help</h1></div>
                
                <div>
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=128&fit=max&auto=format"
                    height={"70px"}
                  style={{ marginTop:"50px",marginLeft:"60px",transform:"rotate(25deg)"}}/>
                </div>
              </div>
              <div className="card1s13"
                style={{
                 
                }}
              >
               <div><h1 style={{color:"white",fontSize:"15px",marginLeft:"10px"}}>Device help</h1></div>
                
                <div>
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=128&fit=max&auto=format"
                    height={"70px"}
                  style={{ marginTop:"50px",marginLeft:"60px",transform:"rotate(25deg)"}}/>
                </div>
              </div>
              <div className="card1s14"
                style={{
                 
                }}
              >
               <div><h1 style={{color:"white",fontSize:"15px",marginLeft:"10px"}}>Device help</h1></div>
                
                <div>
                <img
                  src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format"
                    height={"70px"}
                  style={{ marginTop:"50px",marginLeft:"60px",transform:"rotate(25deg)"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
       
         

      </div>
      <div className="suppdiv2">
        <h1 style={{ marginLeft: "70px" }}>Visit our Community</h1>
        <p style={{ marginLeft: "480px" }}>
          Have questions? Find answers from our worldwide Community of expert
          fans!
        </p>
        <button className="suppb3">Go to community</button>
      </div>
    </div>
  );
}

export default Ssupport;
