import React from 'react'
import team_img from "../images/Rectangle 4338.jpg"


function Team() {
    return (
        <div>
            <div class="main text-center">
                <div>
                    <p>Our Team</p>
                    <h2>Our Awesome Team</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available but the
                        majority have suffered alteration in some form.
                    </p>
                </div>
                <div class="team tp">
                    <div class="row">
                        <div class="t">
                            <img src={team_img} alt= "TEAMIMG" />
                            <div class="img_team">
                                <p class="p">Coriss Ambady</p>
                                <p class="sub_p">Web Developer</p>
                            </div>
                        </div>
                        <div class="t">
                            <div class="col-sm" style={{position: "relative"}}>
                                <img src={team_img} alt= "TEAMIMG" />
                                <div class="img_team">
                                    <p class="p">Coriss Ambady</p>
                                    <p class="sub_p">Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="t">
                            <div class="col-sm" style={{position: "relative"}}>
                                <img src={team_img} alt= "TEAMIMG"  />
                                <div class="img_team">
                                    <p class="p">Coriss Ambady</p>
                                    <p class="sub_p">Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="t">
                            <div class="col-sm" style={{position: "relative"}}>
                                <img src={team_img} alt= "TEAMIMG"  />
                                <div class="img_team">
                                    <p class="p">Coriss Ambady</p>
                                    <p class="sub_p">Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team