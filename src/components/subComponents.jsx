import React from "react";

// Future Project: Use this for member bios on About page to reduce code
export default function memberBio({memberInfo}) {
  return (
    <div class="col">
        <img class="rounded" alt="" style={{'width': '100%'}} src={memberInfo.pic}/>
        <p></p>
        <p style={{'text-align': 'center', 'font-weight': 'bold', 'font-size': '16pt'}}>memberInfo.position</p>
        <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-weight': 'bold'}}>memberInfo.name</p>
        <p style={{'text-align': 'center'}}>memberInfo.p1</p>
        <p style={{'text-align': 'center'}}>memberInfo.p2</p>
    </div>
  );
}
