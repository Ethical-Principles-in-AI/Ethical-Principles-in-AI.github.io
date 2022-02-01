import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/epai_logo.png";
import hack_app from "../images/hackathon_lead.png";
import signup from "../images/signup.jpg";
import email from "../images/email_green.png";
import membership from "../images/membership.png";
import discord from "../images/discord.png";
import instagram from "../images/instagram_logo.png";
// import facebook from "../images/facebook.png";

function Joinus() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
          <div class="container">
              <h1>Join Us</h1>
          </div>
          <hr/>

          <div class="container text-center">
            <div class="row">
              <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={logo}/>
              </div>
              <div class="col-8">
                <h1 style={{'textAlign':'center'}}>Check out our latest podcast!</h1>
                <p style={{'textAlign':'center'}}>"A Look at Deepfakes: Past, Present, and Future Possibilities"</p>
                <NavLink to='/projects'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">Click Here to Stream!</button></div></NavLink>
              </div>
            </div>
          </div>
          <hr/>

          <div class="container text-center">
            <div class="row">
              <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={hack_app}/>
              </div>
              <div class="col-7">
                <h1 style={{'textAlign':'center'}}>Our Upcoming Hackathon!</h1>
                <p style={{'textAlign':'center'}}>Sign up for the Leadership team of our upcoming Hackathon!<br/>Applications close February 13th</p>
                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/4xKRvt5MWJjhFmkF6"><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">More Info</button></div></a>
              </div>
            </div>
          </div>
          <hr/>

          <div class="container text-center">
            <div class="row">
              <div class="col">
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfnXLGcSUgaqoexX_9s4ESoel51GNQRhoyUAnzLvardZBO3iw/viewform">
                  <figure>
                    <img alt="" class="rounded" style={{'width': '100%'}} src={signup}/>
                    <p style={{'textAlign': 'center', 'font-size':'15pt'}}>Become a Project Member</p>
                  </figure>
                </a>
              </div>
              <div class="col">
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScBhjIogOTjRyTTOWOi_RD3iX1rcsrCKX9mffZjoloQ8v6--w/viewform">
                  <figure>
                    <img alt="" class="rounded" style={{'width': '100%'}} src={email}/>
                    <p style={{'textAlign': 'center', 'font-size':'15pt'}}>Join Our Mailing List</p>
                  </figure>
                </a>
              </div>
              <div class="col">
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSctIjXMqvTVr8NUI-qcwUYjNBDQYvOZFWXhvpRflkkd5OwxRg/viewform">
                  <figure>
                    <img alt="" class="rounded" style={{'width': '100%'}} src={membership}/>
                    <p style={{'textAlign': 'center', 'font-size':'15pt'}}>Register to become a member</p>
                  </figure>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/kJZTVpBCcP">
                  <figure>
                    <img alt="" class="rounded" style={{'width': '60%'}} src={discord}/>
                    <p style={{'textAlign': 'center', 'font-size':'15pt'}}>Join the EPAI Discord</p>
                  </figure>
                </a>
              </div>
              <div class="col">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uoft_epai/">
                  <figure>
                    <img alt="" class="rounded" style={{'width': '60%'}} src={instagram}/>
                    <p style={{'textAlign': 'center', 'font-size':'15pt'}}>Follow Our Instagram</p>
                  </figure>
                </a>
              </div>
              {/* <div class="col">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/116884260563923/about">
                  <figure>
                    <img alt="" class="rounded" style={{'width': '100%'}} src={facebook}/>
                    <p style={{'textAlign': 'center', 'font-size':'15pt'}}>Connect with us on Facebook</p>
                  </figure>
                </a>
              </div> */}
            </div>
          </div>
          <hr/>
          <h1>Question about EPAI?</h1>
          <p style={{'textAlign':'center'}}>Check out our recorded Info Session or contact us at <a target="_blank" rel="noopener noreferrer" href="mailto:utoronto.epai@gmail.com">utoronto.epai@gmail.com</a>.</p>
                <NavLink to='/info2021'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">2021/22 Info Session Details</button></div></NavLink>

        </div>
      </div>
    </div>
  );
}

export default Joinus;
