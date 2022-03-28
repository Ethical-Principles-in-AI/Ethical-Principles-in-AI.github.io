import React from "react";
import profile from "../../images/garg.png"

function Audit_AI() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
            <div class="container">
                <h1>Auditing AI Models for Verified Deployment</h1>
            </div>
            <p style={{'textAlign': 'center'}}>Date: March 30th, 7:00 PM EST</p>
            <hr/>
            <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>About</p>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <figure>
                  <img alt="" class="rounded" style={{'width': '100%'}} src={profile}/>
                  <p style={{'textAlign': 'center', 'color': '#00a5b9'}}>Professor Garg</p>
                </figure>
              </div>
              <div class="col-9">
                <p>
                Auditing trained deep learning (DL) models prior to deployment is vital for preventing unintended consequences. One of the biggest challenges in auditing is the lack of human-interpretable specifications for the DL models that are directly useful to the auditor. 
                </p>
                <p>
                Professor Garg is a CIFAR Chair Assistant Professor of Computer Science and Mechanical Engineering (courtesy) at the University of Toronto, a Faculty Member at the Vector Institute and UofT Robotics Institute, where he leads the Toronto People, AI, and Robotics (PAIR) research group.
                </p>
              </div>
            </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://utoronto.zoom.us/meeting/register/tZUkcemhqjIsGtT-DY9IpBQ8fL6IXO3aoffF"><div class="text-center"><button style={{width:"75%"}} type="button" class="btn btn-info">Register</button></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audit_AI;
