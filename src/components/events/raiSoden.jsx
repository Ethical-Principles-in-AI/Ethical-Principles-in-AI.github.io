import React from "react";
import soden from "../../images/soden.png"

function raiSoden() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
        <div class="container">
            <h1>Responsible AI in Disaster Risk Management: A Community of Practice Perspective</h1>
          </div>
          <p style={{'textAlign': 'center'}}>Date: Tuesday, Oct 26th, 7:00-8:00 PM EDT</p>
          <hr/>
          <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Speaker Bio</p>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <figure>
                  <img alt="" class="rounded" style={{'width': '100%'}} src={soden}/>
                  <p style={{'textAlign': 'center', 'color': '#00a5b9'}}>Robert Soden</p>
                </figure>
              </div>
              <div class="col-9">
                <p>
                Dr. Robert Soden is an Assistant Professor in Computer Science and the School of the Environment at the University of Toronto. His research draws on arts, humanities, and social sciences to evaluate and improve the tools and technologies we use to understand and respond to environmental challenges like disasters and climate change. 
                </p>
              </div>
            </div>
          </div>

          
          <p style={{'padding-top':'25pt', color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Workshop Information</p>
          <p style={{"text-align": 'center', "font-size": 25, 'font-weight': 'bold'}}>Responsible AI in Disaster Risk Management: A Community of Practice Perspective</p>
          <p>The use of AI, and in particular machine learning, is increasingly being taken up as part of efforts to better understand and mitigate the potential impacts of disasters like earthquakes or floods. Experts and practitioners believe that these tools can help support societal efforts to inform decisions ranging from emergency preparedness to infrastructure retrofitting and the design of disaster insurance products. Despite widespread concerns over the role of AI tools in domains such as criminal justice, banking, and healthcare, little guidance is available for experts working on the tools in the area of disasters. This talk will report on an ongoing effort by organizations including the Red Cross, the World Bank, and several academic institutions to examine the potential for negative consequences of AI in the field of disaster management. </p>
        </div>
      </div>
    </div>
  );
}

export default raiSoden;
