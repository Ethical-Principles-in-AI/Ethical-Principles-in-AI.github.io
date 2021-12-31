import React from "react";
import discord from "../images/discord.png";
// import facebook from "../images/facebook.png";
import instagram from "../images/instagram_logo.png";
import email from "../images/mail.png";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-3 bg-info">
        <div class="container">
          <p class="m-0 text-center text-white">
            Connect With Us: &nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/kJZTVpBCcP">
                <img alt="Discord logo" class="rounded" style={{"width": "55px"}} src={discord}/>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="mailto:utoronto.epai@gmail.com">
                <img alt="email icon" class="rounded" style={{"width": "55px"}} src={email}/>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uoft_epai/">
                <img alt="Instagram logo" class="rounded" style={{"width": "55px"}} src={instagram}/>
            </a>
            {/* &nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/116884260563923/about">
                <img alt="Facebook logo" class="rounded" style={{"width": "55px"}} src={facebook}/>
            </a> */}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
