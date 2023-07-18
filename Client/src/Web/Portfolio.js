import "./Style.css"
import React, { Component } from 'react'
import img_0 from "../images/Rectangle 4504.jpg"
import img_1 from "../images/Rectangle 4504 (3).jpg"
import img_2 from "../images/Rectangle 4504 (4).jpg"
import img_3 from "../images/Rectangle 4504 (5).jpg"
import img_4 from "../images/Rectangle 4504 (7).jpg"
import img_5 from "../images/Rectangle 4504 (2).jpg"
export class Portfolio extends Component {
    render() {
        return (
            <div>
                <div class="img_grid tp">
                    <div class="row">
                        <div>
                            <div class="card t">
                                <img src={img_0} alt = "port1" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class>
                            <div class="card t">
                                <img src={img_1} alt = "port" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class>
                            <div class="card t">
                                <img src={img_2} alt = "port" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class>
                            <div class="card t">
                                <img src={img_3} alt = "port" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class>
                            <div class="card t">
                                <img src={img_4} alt = "port" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class>
                            <div class="card t">
                                <img src={img_5} alt = "port" />
                                <div class="card-body">
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        )
    
}
}

export default Portfolio