import React from "react";
import { NavLink } from "react-router-dom";
import banner from '../images/epai_banner.png';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="my-5">
          <div class="container">
            <h1>UofT Ethical Principles in AI Team</h1>
          </div>
          <div>
            <img
              class="img-fluid rounded mb-4"
              src={banner}
              alt="EPAI Banner"
            />
          </div>
          <div>
            <p>
              The Ethical Principles in Artificial Intelligence Team (EPAI) is committed to educating and taking action on ethical concerns within artificial intelligence and data science. 
              Bias in decision systems, data privacy and surveillance, as well as manipulation of behaviour, are just some of the ethical concerns that need to be addressed to avoid AI causing detrimental effects to individuals and society. 
              Our mission is to make the ethics in AI more accessible through educational workshops and hands-on projects. 
              Our club is committed to building a supportive community of students passionate about ethical principles in AI.
            </p>
            <p style={{"text-align": 'center', "font-weight": 'bold'}}>
              We welcome all students from all backgrounds of knowledge and experience.
            </p>
            <p style={{color: "#3CB3C3", "font-weight": 'bold'}}>Why Join EPAI?</p>
            <p>
              <ul>
                <li>Learning about current <b>Hot Topics</b>. Ethics in AI has become a very popular area of research, both in academia and industry.</li>
                <li>Having <b>Hands-On Impact</b> through project work by helping spread awareness and taking action on ethics in AI.</li>
                <li>Having <b>Skill-Building</b> opportunities through EPAI initiatives. Every project, workshop, and newsletter aims to help you build skills that are marketable in the job industry.</li>
                <li>Opportunities of <b>Networking</b> through EPAI. We invite guest speakers to our workshops and connect you with resources through our newsletters.</li>
                <li><b>Leadership Development</b> as an executive or project lead.</li>
              </ul>
            </p>
            <p style={{"text-align": "center"}}>
              <NavLink style={{color: "#FF6B48", "font-weight": 'bold', 'font-size':'20pt'}} to="/joinus"><u>Join Us!</u></NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
