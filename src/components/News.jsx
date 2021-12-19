import React from "react";

function news() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
        <div class="container">
            <h1>Newsletter</h1>
        </div>
        <hr/>
        <h2>01: Welcome to EPAI!</h2>
        <a href="https://mailchi.mp/3c5002594c76/epai-newsletter-sep-week-5092574?e=f4bc157416"><div class="text-center"><button style={{width:"100%"}} type="button" class="btn btn-info">Read Issue 01</button></div></a>
        <ul>
            <li>Upcoming events</li>
            <li>How to join EPAI</li>
            <li>Ethical AI resources</li>
            <li>Meme of the Week</li>
        </ul>
        <p style={{'padding-bottom':'15pt'}}></p>

        <h2>02: EPAI Events and Leadership Applications</h2>
        <a href="https://mailchi.mp/2783c94007bd/epai-newsletter-2-upcoming-workshop-info-session-recording-and-leadership-applications?e=396dbd5d52"><div class="text-center"><button style={{width:"100%"}} type="button" class="btn btn-info">Read Issue 02</button></div></a>
        <ul>
            <li>[Workshop] Reading Race: AI Recognizes Patient's Racial Identity in Medical Images</li>
            <li>2021 Info Session Recording</li>
            <li>How to get involved</li>
            <li>Leadership Opportunities</li>
        </ul>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLScBhjIogOTjRyTTOWOi_RD3iX1rcsrCKX9mffZjoloQ8v6--w/viewform"><p style={{color: "#FF6B48", "text-align": 'center', 'font-size':'20pt'}}><u>Subscribe to EPAI's Newsletter</u></p></a>
        </div>
      </div>
    </div>
  );
}

export default news;
