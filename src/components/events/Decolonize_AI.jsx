import React from "react";
import profile from "../../images/Ahmed.jpg"

function Decolonize_AI() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
            <div class="container">
                <h1>Whose Intelligence? Whose Ethics?: Ethical Pluralism and Decolonizing AI</h1>
            </div>
            <p style={{'textAlign': 'center'}}>Date: February 15th, 6:00-7:00 PM ET</p>
            <hr/>
            <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Abstract</p>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <figure>
                  <img alt="" class="rounded" style={{'width': '100%'}} src={profile}/>
                  <p style={{'textAlign': 'center', 'color': '#00a5b9'}}>Ishtiaque Ahmed</p>
                </figure>
              </div>
              <div class="col-9">
                <p>
                  The benefits of computing are often confined within the populations with certain privileges. Those benefits rarely reach billions of underprivileged lives around the world fighting extreme poverty, illiteracy, gender discrimination, forced migration, and various other exploitations and marginalization. The services that are available through computing often fail to address their needs and constraints. My research with various marginalized communities in the Indian subcontinent over the last twelve years has revealed how this failure is often associated with some of the core issues of computing, including ethics. In this talk, I will particularly focus on the ethics in AI, and associated practices in the Global South. My talk will explore how access to intelligent computing becomes limited by the imposition of colonial perspectives, how autonomy over an intelligent platform is curtailed by discriminatory standards, and how AI technologies often silence local voices by using western scientific rationalities. In this talk, I will further demonstrate how my research explores possible ways to decolonize AI by strengthening the voice of marginalized communities and focusing on local values, participation, and pluralism.
                </p>
              </div>
            </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://utoronto.zoom.us/meeting/register/tZcodO6rrDIjHN1GZLi9nPag9Qlk8fishISJ"><div class="text-center"><button style={{width:"75%"}} type="button" class="btn btn-info">Register</button></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decolonize_AI;
