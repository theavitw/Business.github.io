import React, { Component } from 'react';
import "./Style.css"
import img_1 from "../images/Group 11.png"
import img_2 from "../images/Group 12.png"

class About extends Component {
    render() {
        return (
            <div>
                <div class="about" id="about">
                    <div class="images">
                        <img src={img_1} alt = "img_1" />
                        <div class="dotimg">
                            <img src={img_2} alt='img_2' />
                        </div>
                    </div>
                    <div class="content">
                        <p>Why Choose Us</p>
                        <br />
                        <h1>Make your customers happy by giving services.</h1>
                        <br />
                        <p>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less.
                        </p>

                        <br />
                        <br />
                        <p>
                            A domain name is one of the first steps to establishing your brand.
                            Secure a consistent brand image with a domain name that matches your
                            business.
                        </p>
                        <br />
                        <br />
                        <input type="submit" value="Get Started" />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
