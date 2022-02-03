import React from "react";
import panel from "../../images/ethics_panel_page.png"

export default function template() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
            <div class="container">
                <h1>Template</h1>
            </div>
            <hr/>
            <p style={{'textAlign': 'center'}}>Centered Body Text</p>
            <img alt="" class="rounded" style={{'width':'100%'}} src={panel}/>
        </div>
      </div>
    </div>
  );
}

