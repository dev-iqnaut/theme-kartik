import React, { useContext } from "react"; // Import useContext for ShowContext
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import ShowContext from "../../context/ShowContext";


const AboutCard = () => {
  const { siteData } = useContext(ShowContext);
  console.log("data from about card", siteData);
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='About Us' title= {siteData?.aboutUs.focus} />
            <div className='items'>
              {/* {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                   
                    </div>
                    <div className='text'>
                      <h2> {siteData?.aboutUs.principalMessage.principalMessage}</h2>
                      <p></p>
                    </div>
                  </div>
                )
              })}
               */}
               <h1>Principal Message</h1>
              <h1>{siteData?.aboutUs.principalMessage.principalMessage}</h1>
            </div>
            <br/>
            <br/>
            <div>{siteData?.aboutUs.vision}</div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard