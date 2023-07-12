import "./Style.css"
import React from 'react'
import header from '../images/Rectangle 4574.jpg';

function Home() {
    return (
        <>
            <div class="banner">
                <img src={header} alt="home" class="img3" />
                <div class="box">

                    <div class="div1">
                        <p class="1">Your Business Revenue to The Moon</p>
                        <h1 class="a1">Corporate & Business Site Template By TailGrids.</h1>
                        <p class="3">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered.
                        </p>

                        <div class="submit1">
                            <input type="button" value="Discover More" />
                            <div class="link--arrowed">
                                <section class="centered-">
                                    <a class="link link--arrowed" href="/">
                                        Explore Services
                                        <svg
                                            class="arrow-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32">
                                            <g
                                                fill="none"
                                                stroke="#2175FF"
                                                stroke-width="1.5"
                                                stroke-linejoin="round"
                                                stroke-miterlimit="10">
                                                <circle
                                                    class="arrow-icon--circle"
                                                    cx="16"
                                                    cy="16"
                                                    r="15.12"></circle>
                                                <path
                                                    class="arrow-icon--arrow"
                                                    d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                            </g></svg></a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home