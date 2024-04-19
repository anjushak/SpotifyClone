import React, { useState } from "react";
import "../style/p1style.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineHorizontalRule,
} from "react-icons/md";
import { ReactTyped } from "react-typed";
import { Button } from "react-bootstrap";

function Spotifyp1() {
  const [isvisible, setvisible] = useState(false);
  const show = () => {
    setvisible(!isvisible);
  };
  const [isvisible1, setvisible1] = useState(false);
  const show1 = () => {
    setvisible1(!isvisible1);
  };
  const [isvisible2, setvisible2] = useState(false);
  const show2 = () => {
    setvisible2(!isvisible2);
  };
  const [isvisible3, setvisible3] = useState(false);
  const show3 = () => {
    setvisible3(!isvisible3);
  };





  return (
    <div>
      <div className="p1div1">
        <div className="mobile">
          <MdOutlineHorizontalRule
            style={{
              marginTop: "20px",
              marginLeft: "35px",
              width: "200px",
              height: "30px",
            }}
          />
          <img
            src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b"
            alt=""
            height={"440px"}
            width={"260px"}
            style={{ marginTop: "6px", marginLeft: "10px" }}
          />
        </div>
        <div className="p1div12">
          <h1 className="p1heading1">
            Play millions of songs <br /> and podcasts, for free.
          </h1>
          <button className="buttonp1">GET SPOTIFY FREE</button>
        </div>
      </div>
      <div className="p1div3">
        <h3 className="p3h3">Why Spotify?</h3>

        <div className="div3grid">
          <div className="carddiv">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f430678067184805befd38aa0f57"
              alt=""
              height={"130px"}
              style={{ marginLeft: "55px" }}
            />
            <h3>Play your favorites.</h3>
            <p>
              Listen to the songs you love, and <br />
              discover new music and <br />
              podcasts.
            </p>
          </div>

          <div className="carddiv">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f430a6f822749d5c25c32ee31d66"
              alt=""
              height={"130px"}
              style={{ marginLeft: "55px" }}
            />
            <h3>Playlists made easy.</h3>
            <p>
              We'll help you make playlists. Or
              <br /> enjoy playlists made by music <br />
              experts.
            </p>
          </div>

          <div className="carddiv">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f430eb43023b5332389f5094530d"
              alt=""
              height={"130px"}
              style={{ marginLeft: "55px" }}
            />
            <h3 style={{ paddingLeft: "25px" }}>Make it yours.</h3>
            <p>
              Tell us what you like, and we'll
              <br /> recommend music for you.
            </p>
          </div>

          <div className="carddiv">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f4309430062bc28461dc8fbde6bc"
              alt=""
              height={"130px"}
              style={{ marginLeft: "55px" }}
            />
            <h3 style={{ paddingLeft: "15px" }}>Save mobile data.</h3>
            <p>
              To use less data when you play <br /> music, turn on Data Saver in{" "}
              <br />
              Settings.
            </p>
          </div>
        </div>

        <div className="pdiv3">
          <h2 className="pdivh31">
            It's free.
            <br />
            <ReactTyped
              strings={["No credit card required."]}
              typeSpeed={100}
              loop
            />
          </h2>
        </div>
      </div>

      <div className="faq">
        <h3 className="pdiv4h1">Got questions?</h3>
        <div className="faqdiv">
          <Button variant="light" className="faq1" onClick={show}>
            How do I create a playlist?{" "}
            {isvisible ? (
                <MdKeyboardArrowUp
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "770px",
                  marginTop: "20px",
                }}
              />
             
            ) : (
               <MdKeyboardArrowDown
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "770px",
               
                  marginTop: "20px",
                }}
              />
            )}{" "}
          </Button>
          {isvisible && (
            <p>
             Playlists are a great way to save collections of music, either for your own listening or to share.<br/><br/>To create one:<br/><br/>1.  Tap Your Library.<br/>2. Tap <strong style={{color:"green"}}>CREATE</strong>.<br/>3. Give your playlist a name.<br/>4. Start adding songs (and we'll help you along).
            </p>
          )}
        </div>

        <div className="faqdiv">
          <Button variant="light" className="faq1" onClick={show1}>
            How do I activate Data Saver mode? {isvisible1 ?  <MdKeyboardArrowUp
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "700px",
                  marginTop: "20px",
                }}
              />:  <MdKeyboardArrowDown
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "700px",
                marginTop: "20px",
              }}
            />}
           
          </Button>
          {isvisible1 && (
        <p>
         1. Tap <strong style={{color:"green"}}>Home</strong>.<br/>2. Tap <strong style={{color:"green"}}>Settings</strong>.<br/>3. Tap <strong style={{color:"green"}}>Data Saver</strong>.<br/>4. Switch on Data Saver.
        </p>
      )}
        </div>

        <div className="faqdiv">
          <Button variant="light" className="faq1" onClick={show2}>
            Is it only possible to shuffle play music?
            {isvisible2 ?  <MdKeyboardArrowUp
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "675px",
                  marginTop: "20px",
                }}
              />: <MdKeyboardArrowDown
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "675px",
                marginTop: "20px",
              }}
            /> }
           {" "}
          </Button>
          {isvisible2&&(
            <p>Any playlist with the shuffle icon will play on shuffle.<br/><br/>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
          )}
        </div>

        <div className="faqdiv">
          <Button variant="light" className="faq1" onClick={show3}>
            Where can I find Podcasts?
            {isvisible3 ?  <MdKeyboardArrowUp
                style={{
                  height: "30px",
                  width: "30px",
                  marginLeft: "770px",
                  marginTop: "20px",
                }}
              />:  <MdKeyboardArrowDown
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "770px",
                marginTop: "20px",
              }}
            />}
          </Button>
          {isvisible3 &&(
            <p>Tap <strong style={{color:"green"}}>Search</strong>. Under <strong style={{color:"green"}}>Browse All</strong>, tap Podcasts.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Spotifyp1;
