import React from "react";
import panel from "../../images/ethics_panel_page.png"

function panel2021() {
  return (
    <div className="about">
      <div class="container">
        <div class="my-5">
            <div class="container">
                <h1>Ethics in AI Speaker Panel</h1>
            </div>
            <p style={{'textAlign': 'center'}}>Date: Tuesday, Oct 26th, 7:00-8:00 PM EDT</p>
            <hr/>
            <img alt="" class="rounded" style={{'width':'100%'}} src={panel}/>
        </div>
      </div>
    </div>
  );
}

export default panel2021;
