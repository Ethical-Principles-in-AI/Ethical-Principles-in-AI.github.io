import React from "react";
import jasmine from "../images/pp/jasmine.jpg";
import emily from "../images/pp/emily.jpg";
import sarina from "../images/pp/sarina.jpg";
import dhruv from "../images/pp/dhruv.jpg";
import anya from "../images/pp/anya.jpg";
import jong from "../images/pp/jong.jpg";
import chase from "../images/pp/chase.jpg";
import fizzah from "../images/pp/fizzah.png";
import chris from "../images/pp/chris.jpg";
import gary from "../images/pp/gary.jpg";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
        <div class="container">
            <h1>About Us</h1>
          </div>
          <hr/>
          <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Who we are</p>
          <div>
            <p>
              We are a group of motivated students aiming to spread awareness about the impacts of AI on our society. 
              Through EPAI, we hope to create an open environment to foster critical discussions about the consequences of the use of AI.   
            </p>
            
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={jasmine}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>President</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Jasmine Zhang</p>
                  <p style={{'text-align': 'center'}}>Hi everyone! I'm Jasmine, a, EngSci 2T3 majoring in machine intelligence and minoring in business. Outside of academics, I enjoy playing piano and listening to musicals.</p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>The course Engineering and Society opened my eyes to the political and social consequences of engineering and technology. The idea of EPAI was born from wanting to create a community of students at the University of Toronto passionate about exploring ethics in AI.</p>
                </div>
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%', 'object-fit': 'cover'}} src={emily}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>VP Administration</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Emily Traynor</p>
                  <p style={{'text-align': 'center'}}>Hey guys! My name is Emily, I’m a 2T3 engineering science student majoring in machine intelligence and minoring in business. Outside of Skule, I enjoy playing the acoustic and electric guitar, and I am currently working as a financial director for the Society of Women Engineers. </p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>As an aspiring ML engineer, it is crucial for me to incorporate ethical analysis into the development cycle and understand the implications of AI.</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={sarina}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>VP Operations (Workshop)</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Sarina Xi</p>
                  <p style={{'text-align': 'center'}}>Hi, I’m Sarina. I am a third year student going into Engineering Physics doing minors in robotics and AI. Aside from academics, I play the piano and do dragon boating. </p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>While our technologies are advancing, the policies around them often lag behind, creating loop holes and ethical concerns that need to be addressed. That is why I joined EPAI, to better understand and explore the ethics in the emerging fields of AI as well as educate more people on this topic.</p>
                </div>
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={dhruv}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>VP Operations (Project)</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Dhruv Sirohi</p>
                  <p style={{'text-align': 'center'}}>Hey guys! I'm Dhruv, an EngSci 2T3 majoring in machine intelligence. Outside of class, I enjoy playing guitar in the Skule jazz band, reading history, and exploring Toronto.</p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>Recent advances in Artificial Intelligence have the potential to greatly change society, from allowing businesses to automate an unprecedented number of jobs to providing access to medical care in impoverished areas. However, with each breakthrough, it is important for engineers, scientists, and policymakers in the field to be aware of relevant ethical considerations. This is why I joined EPAI, and I hope to further explore the field over the year!</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={anya}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>VP Marketing</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Anya Pedersen</p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>Hello! My name is Anya, I am an Engineering Science student. I was introduced to the topic of Ethics in Artificial Intelligence through documentaries as well as a data research competition. I then gained further experience working with models within the energy sector. I joined EPAI to extend my knowledge on the topic, as well as to discuss the implications of it in an industrial and global setting. </p>
                </div>
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={jong}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>VP Media</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>JongJin Jung</p>
                  <p style={{'text-align': 'center'}}>Hi I’m Jongjin and I’m an ECE 2T3 with a minor in AI. My interests are software development and machine learning. I like watching the NBA in my free time. I’m most interested in deep learning, specifically neural networks. I’ve been working on biologically plausible neural networks that go beyond backpropagation. </p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>I joined EPAI because we often overlook the consequences that AI bring in our life. I want to explore the ethical perspectives and how we can prevent unethical abuses in the industry of AI. </p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                <a href="https://chasemcdo.github.io/"><img alt="" class="rounded" style={{'width': '100%'}} src={chase}/></a>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>Web Developer</p>
                  <a href="https://chasemcdo.github.io/"><p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Chase McDougall</p></a>
                  <p style={{'text-align': 'center'}}>Howdy! I’m Chase, an EngSci 2T3 majoring in Machine Intelligence and dabbling in business and robotics. In addition to my academics, I enjoy playing on various Skule intramural teams, training in the gym, and spending time learning new software development frameworks and tools. </p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>I joined EPAI as a way to learn more about the ethical implications of the field I am entering as I believe they are important to consider in the development of AI/ML applications. </p>
                </div>
              </div>
            </div>
          </div>
          <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Project Leads</p>
          <div class="container text-center">
              <div class="row">
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%'}} src={gary}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>Ethics in AI Podcast Lead</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Gary Wei</p>
                  <p style={{'text-align': 'center'}}>Hi there! I'm Gary, studying in Engineering Science in the machine learning specialization. My interests lie in the implementation and leveraging of ML tech in real-world applications. </p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>I'm heading up the podcast team because I think as the students who will be instrumental in furthering the development of AI in the modern world, we have a responsibility to make it accessible and supported by ethically sound principles. I joined EPAI (and you should too!) to help make that happen.</p>
                </div>
                <div class="col">
                  <img alt="" class="rounded" style={{'width': '100%', 'object-fit': 'cover'}} src={chris}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>Bias in Facial Recognition Lead</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Chris Mountain</p>
                  <p style={{'text-align': 'center'}}>Hey! I'm Chris, a 3rd year EngSci majoring in Machine Intelligence Engineering. My main interests lie in software, AI, and ML. Outside of school I love playing basketball and ultimate frisbee on the Skule teams. </p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>I joined EPAI because I think ML is only going to become more and more important in the future as data collection increases, and I want to help make sure we use this technology responsibly, ethically, and for the equitable benefit of everyone!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                <img alt="" class="rounded" style={{'width': '100%'}} src={fizzah}/>
                  <p></p>
                  <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>Technical Writing Lead</p>
                  <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>Fizzah Mansoor</p>
                  <p style={{'text-align': 'center'}}>Hi! I’m Fizzah, a 4th year Cognitive Science and Philosophy major. I’m interested in the intersection of philosophy of mind and Artificial Intelligence, and believe that learning more about how our brains work can shed valuable insight on the future of technology and what we can accomplish with it. In my spare time, I like to read books I find in bargain bins, listen to music and go cafe hopping across Toronto!</p>
                  <p style={{'text-align': 'center', "padding-bottom": '40px'}}>I joined EPAI because I believe that the AI revolution demands serious ethical insight to prevent implementing systems that reflect human biases actively discriminate against marginalized communities.</p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default About;
