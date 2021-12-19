import React from "react";
import { NavLink } from "react-router-dom";
import rob from "../images/robert_title_slide.jpg";
import panel from "../images/Ethics_panel.jpg";
import dullerud from "../images/Dullerud.png";
import club_fair from "../images/club_fair.png";
import epai_mid_banner from "../images/epai_mid_banner.png";

function Events() {
  return (
    <div className="about">
        <div class="container">
            <div class="my-5">
                <div class="container text-center">
                    <h1>Events</h1>
                    <hr/>
                    <p style={{'textAlign': 'center'}}>We live in an age of rapid technological development which has presented us with many benefits but also consequences. To help us better understand the ethical concerns that have arisen recently in the emerging fields of artificial intelligence, EPAI is holding monthly workshops that come in various formats. They can be a talk or presentation from a guest speaker,  an introduction to visualize ethical concerns with actual code and models, or opportunities to exchange and express ideas in the format of a debate.</p>
                    <p style={{'textAlign': 'center'}}>Stay tuned to our website and other social media accounts for updates!</p>
                    <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Calendar</p>
                    <iframe title="EPAI Calendar" src="https://calendar.google.com/calendar/embed?src=2rfpolkl557oqa9ma9dio74hos%40group.calendar.google.com&ctz=America%2FToronto" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                    <hr/>
                    <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Upcoming Events</p>
                    <p style={{'textAlign': 'center'}}>Upcoming events are scheduled for the winter semester, more information will be shared in 2022, see you there!</p>
                    <p style={{color: "#FF6B48", "text-align": 'center', "font-size": 25}}>Past Events</p>
                    
                    {/* Our Events */}
                    <img alt="" src={panel} style={{'width': '60%'}}/>
                    <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-size': '20pt'}}>Speaker Panel</p>
                    <NavLink to='/panel2021'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">Learn More</button></div></NavLink>

                    <img alt="" src={rob} style={{'width': '60%'}}/>
                    <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-size': '20pt'}}>Responsible AI in Disaster Risk Management: A Community of Practice and Perspective</p>
                    <NavLink to='/RaiSoden'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">Learn More</button></div></NavLink>

                    <img alt="" src={dullerud} style={{'width': '60%'}}/>
                    <p style={{'text-align': 'center', 'color': '#00a5b9', 'font-size': '20pt'}}>Reading Race: AI Recognizes Patient's Racial Identity in Medical Images</p>
                    <NavLink to='/dullerud'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">Learn More</button></div></NavLink>

                    <div class="container text-center">
                        <div class="row">
                        <div class="col">
                            <figure>
                                <img alt="" class="rounded" style={{'width': '100%'}} src={club_fair}/>
                                <NavLink to="/fair2021" style={{'textAlign': 'center', 'color': '#00a5b9'}}>Online Club Fair</NavLink>
                            </figure>
                            <p>EPAI attended Skule's 2021 online club fair on Wednesday, Sept 8th, 2021 from 1-4 pm EST! To hear more from us, be sure to join our <a href="https://docs.google.com/forms/d/e/1FAIpQLScBhjIogOTjRyTTOWOi_RD3iX1rcsrCKX9mffZjoloQ8v6--w/viewform">mailing list</a>.</p>
                            <NavLink to='/fair2021'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">Skule Club Fair 2021 Details</button></div></NavLink>
                        </div>
                        <div class="col">
                            <figure>
                                <img alt="" class="rounded" style={{'width': '100%'}} src={epai_mid_banner}/>
                                <NavLink to="/info2021" style={{'textAlign': 'center', 'color': '#00a5b9'}}>Info Session 2021</NavLink>
                            </figure>
                            <p>EPAI hosted its inaugural info session on Saturday, September 18th, 2021 from 3:00-4:00 pm! Click below for the event recording and slides.</p>
                            <NavLink to='/info2021'><div class="text-center"><button style={{"margin-bottom":'30pt', width:"75%"}} type="button" class="btn btn-info">Info Session 2021 Details</button></div></NavLink>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Events;
