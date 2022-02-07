import React from "react";
import Ahmed from "../images/Ahmed.jpg";
import advanced from "../images/resource_advanced.png";
import intro from "../images/resource_intro.PNG";
import inter from "../images/resource_inter.PNG";

export default function Opportunities() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
            <div class="container">
                <h1>Opportunities and Resources</h1>
            </div>
            <hr/>
            <h1 style={{"color":"FF6B48", "fontSize":30}}>Faculty Advisor and Opportunities</h1>
            <hr/>
            <p></p>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <img class="rounded" alt="Facial Recognition Icon" style={{"width": "50%"}} src={Ahmed}/>
                        <p></p>
                        <p style={{'fontSize':25}} >Professor Ishtiaque Ahmed</p>
                        <p>Find out more about Professor Ishtiaque Ahmed's research as well as his student's research using the following link:</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ishtiaque.net/"><p>https://www.ishtiaque.net/</p></a>
                    </div>
                    <div class="col">
                        <p>
                          Syed Ishtiaque Ahmed is an Assistant Professor of Computer Science at the University of Toronto, and the Director of the ‘Third Space'' research group. 
                          He is also a graduate faculty member of the School of Environment, a Faculty Fellow at the Schwartz Reisman Institute for Technology and Society, and a Senior Fellow at Massey College. 
                          He co-organizes the monthly Critical Computing Seminar at UofT, and co-steer UofT's SDG initiative. 
                        </p>
                        <p>
                          Ishtiaque’s research focuses on the design challenges around strengthening the ‘voices’ or marginalized communities around the world. 
                          He conducted ethnography and built technologies with many underprivileged communities in Bangladesh, India, Pakistan, Iran, Iraq, Turkey, China, Canada, and the US. 
                          Ishtiaque received his PhD and Masters from Cornell University in the USA, and his Bachelor from BUET in Bangladesh. 
                          He received the International Fulbright Science and Technology Fellowship, Fulbright Centennial Fellowship, and Schwartz Reisman Institute Fellowship among others. 
                          His research has been funded by all three branches of Canadian tri-council research (NSERC, CIHR, SSHRC), NSF, NIH, Google, Microsoft, Facebook, Intel, Samsung, the World Bank, UNICEF, and UNDP, among others. 
                        </p>
                    </div>
                </div>
                <hr/>

                <p>
                  Professor Ishtiaque Ahmed is currently looking to work with students that have the following skills:
                  <ol type="a">
                    <li>AR/VR</li>
                    <li>Natural Language Processing</li>
                  </ol>
                </p>

                <hr/>
                <h1 style={{"color":"FF6B48", "fontSize":30}}>Resources</h1>
                <hr/>
                <h1 style={{"color":"FF6B48", "fontSize":25}}>Featured Resources of the Month</h1>
                <p></p>
                <hr/>
                <div class="row">
                  <div class="col text-center">
                    <img class="rounded" alt="Facial Recognition Icon" style={{"width": "70%"}} src={inter}/>
                    <p></p>
                    <p style={{"textAlign":"center", "fontSize":25}}>Intermediate Level</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2109.13916.pdf"><p style={{"textAlign":"center"}}><u>Unsolved Problems in ML Safety</u></p></a>
                  </div>
                </div>
                <p></p>
                <hr/>
                <div class="row">
                    <div class="col text-center">
                      <img class="rounded" alt="Facial Recognition Icon" style={{"width": "70%"}} src={intro}/>
                      <p></p>
                      <p style={{"textAlign":"center", "fontSize":25}}>Introductory Level</p>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.vox.com/future-perfect/2018/12/21/18126576/ai-artificial-intelligence-machine-learning-safety-alignment"><p style={{"textAlign":"center"}}><u>The Case for Taking AI Seriously as a Threat to Humanity</u></p></a>
                    </div>
                    <div class="col text-center">
                      <img class="rounded" alt="Facial Recognition Icon" style={{"width": "70%"}} src={advanced}/>
                      <p></p>
                      <p style={{"textAlign":"center", "fontSize":25}}>Advanced Level</p>
                      <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/1903.03862.pdf"><p style={{"textAlign":"center"}}><u>Lipstick on a Pig: Debiasing Methods Cover up Systematic Gender Biases in Word Embeddings But do not Remove Them</u></p></a>
                    </div>
                </div>
                <hr/>
                
                <h1 style={{"color":"FF6B48", "fontSize":25}}>Institutes</h1>
                <hr/>
                <a target="_blank" rel="noopener noreferrer" href="https://srinstitute.utoronto.ca/"><p style={{"fontSize":25}}><u>Schwartz Reisman Institute</u></p></a>
                <p>The Schwartz Reisman Institute shares a range of events, news, and, videos regarding safe, responsible, and inclusive technologies. View their <a target="_blank" rel="noopener noreferrer" href="https://srinstitute.utoronto.ca/events"><u>seminar series</u></a>, <a target="_blank" rel="noopener noreferrer" href="https://srinstitute.utoronto.ca/research"><u>research</u></a>, and <a target="_blank" rel="noopener noreferrer" href="https://srinstitute.utoronto.ca/who-we-are#people"><u>members</u></a>.</p>
                <hr/>
                <a target="_blank" rel="noopener noreferrer" href="https://humancompatible.ai/"><p style={{"fontSize":25}}><u>Center for Human-Compatible AI</u></p></a>
                <p>CHAI's mission is to reorient the direction AI is progressing in so that it can become more beneficial to systems. To learn more about ethics and AI CHAI has composed an <a target="_blank" rel="noopener noreferrer" href="https://humancompatible.ai/bibliography"><u>Annotated Bibliography of Recommended Materials</u></a>.</p>
                <hr/>
                <p></p>
                <h1 style={{"color":"FF6B48", "fontSize":25}}>More Resources</h1>
                <p><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/1606.06565.pdf"><u>Concrete Problems in AI Safety</u></a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://vkrakovna.wordpress.com/ai-safety-resources/"><u>List of AI Safety Resources</u></a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/"><u>Benefits and Risks of AI</u></a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://www.connectedpapers.com/"><u>Connected Papers</u></a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="http://rohinshah.com/alignment-newsletter/"><u>Alignment Newsletter</u></a></p>
                <p><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfk1CgJmVKz_RLUMGenDHgZYmU7e9gfRX33MIV7SQPF8s7DaQ/viewform"><u>UofT Vector/DCS/Schwartz-Reisman AI Safety Mailing List Form</u></a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

