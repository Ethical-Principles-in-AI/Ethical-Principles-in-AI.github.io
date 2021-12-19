import React from "react";
import anchor from "../images/anchor_logo.jpg";
import rss from "../images/rss_logo.png";
import mic from "../images/mic.png";
import fac_rec from "../images/facial-recognition.png";

function Projects() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
        <div class="container">
            <h1>Projects</h1>
        </div>
        <hr/>
        <p style={{color: "#3CB3C3", "text-align": 'center', "font-size": 30}}>Our New Release</p>
        <iframe title="Spotify Podcast Player" src="https://open.spotify.com/embed/show/0gxevAw2rW6bEZYTWbt8Yt?utm_source=generator" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <p/>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                    <figure>
                        <a href="https://rss.com/podcasts/epai-uoft/">
                            <img alt="RSS Podcast logo" style={{"width": "50%"}} src={rss}/>
                            <figcaption>Our RSS Page</figcaption>
                        </a>
                    </figure>
                    </div>
                    <div class="col text-center">
                    <figure>
                        <a href="https://anchor.fm/epai2">
                            <img alt="Anchor Podcast logo" class="rounded" style={{"width": "50%"}} src={anchor}/>
                            <figcaption style={{"text-align": "40px"}}>Our Anchor Page</figcaption>
                        </a>
                    </figure>
                    </div>
                </div>
            </div>
            <hr/>
            <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 30}}><u>Sign up to be a Podcast Team Member</u></p>
            <p style={{"text-align": 'center', "font-size": 25}}>Deadline to join a project team: Thursday, Jan 20th, 2022</p>
            <p style={{"text-align": 'center'}}>If you have any questions, please reach out to <a href="mailto:utoronto.epai@gmail.com">utoronto.epai@gmail.com</a></p>
            <a href="https://forms.gle/CYLCfM4yVP81EmFK7"><div class="text-center"><button style={{width:"75%"}} type="button" class="btn btn-info">Info</button></div></a>
            <hr/>

            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <img alt="Podcast Icon" style={{"width": "50%"}} src={mic}/>
                        <a href="https://docs.google.com/document/d/1aYXGIbq5tH7aoVb2tabqqidE9GFo7z-b2C6wTMmKPh8/edit?usp=sharing"><div><button style={{width:"50%"}} type="button" class="btn btn-info">Full Project Proposal</button></div></a>
                    </div>
                    <div class="col-7">
                        <p class="text-center" style={{color: "#FF6B48"}}>Ethics in AI Podcast</p>
                        <p>
                            There are many subtopics within ethics in AI and data science. 
                            The goal of producing monthly podcasts is to explore and analyze relevant and interesting topics in an engaging way that is accessible to the general public. 
                            This project gives autonomy to pick which topics from ethics in AI to explore, while also serving as practice for reading academic literature (amongst other sources) and communicating sometimes technical/difficult concepts clearly to a wide audience.
                        </p>
                    </div>
                </div>
            </div>
            <p></p>
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <p class="text-center" style={{color: "#FF6B48"}}>Bias in Facial Recognition Systems</p>
                        <p>
                            Facial recognition systems can be found almost anywhere, from police departments to the face-lock feature in your phone. 
                            However, these systems can be biased, often in ways that reflect current social inequalities. 
                            This applied project explores bias in facial recognition systems, while also serving as an introduction to writing machine learning code and reading ML literature for beginners.
                        </p>
                    </div>
                    <p></p>
                    <div class="col text-center">
                        <img  alt="Facial Recognition Icon" style={{"width": "50%"}} src={fac_rec}/>
                        <a href="https://docs.google.com/document/d/1DQqjuvKkU0-y_HAT7XPFMFJ5hXj1Zx_q2xvnq7N_MSw/edit?usp=sharing"><div><button style={{width:"50%"}} type="button" class="btn btn-info">Full Project Proposal</button></div></a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
