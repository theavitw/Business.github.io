import "./Style.css"
import React from 'react'

function Footer() {
  return (
    <div>
      <div class="main5">
        <footer class="text-lg-start text-dark">
          <section class="d-flex justify-content-between p-4 text-white"></section>

          <section>
            <div class="container text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">
                    <div class="d-flex">
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M25.6666 14.6667H31.1666C34.2043 14.6667 36.6666 17.1292 36.6666 20.1667V40.3334H25.6666V14.6667Z"
                          fill="white" />
                        <path
                          d="M7.33337 13.461C7.33337 10.9372 9.05101 8.73729 11.4994 8.12518L22.4994 5.37518C25.9707 4.50735 29.3334 7.13283 29.3334 10.711V40.3334H7.33337V13.461Z"
                          fill="#98AAE9" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.6666 31.1666C14.6666 30.154 15.4874 29.3333 16.5 29.3333H20.1666C21.1792 29.3333 22 30.154 22 31.1666C22 32.1791 21.1792 32.9999 20.1666 32.9999H16.5C15.4874 32.9999 14.6666 32.1791 14.6666 31.1666Z"
                          fill="white" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.6666 23.8333C14.6666 22.8208 15.4874 22 16.5 22H20.1666C21.1792 22 22 22.8208 22 23.8333C22 24.8459 21.1792 25.6667 20.1666 25.6667H16.5C15.4874 25.6667 14.6666 24.8459 14.6666 23.8333Z"
                          fill="white" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.6666 16.5001C14.6666 15.4876 15.4874 14.6667 16.5 14.6667H20.1666C21.1792 14.6667 22 15.4876 22 16.5001C22 17.5126 21.1792 18.3334 20.1666 18.3334H16.5C15.4874 18.3334 14.6666 17.5126 14.6666 16.5001Z"
                          fill="white" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.66663 38.5001C3.66663 37.4875 4.48745 36.6667 5.49996 36.6667H38.5C39.5125 36.6667 40.3333 37.4875 40.3333 38.5001C40.3333 39.5126 39.5125 40.3334 38.5 40.3334H5.49996C4.48745 40.3334 3.66663 39.5126 3.66663 38.5001Z"
                          fill="#98AAE9" />
                      </svg>

                      <h2
                        class="titles"
                    //     style="
                    //   height: 25.180395126342773px;
                    //   width: 138.8623504638672px;
                    // "
                    >
                        Buissness
                      </h2>
                    </div>
                  </h6>

                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
                    tempor incididunt ut labore et dolore.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 lt">
                  <h6 class="text-uppercase fw-bold">Company</h6>

                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">About company</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Company services</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Job opportunities</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Creative people</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Contact us</a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 lt">
                  <h6 class="text-uppercase fw-bold">Customer</h6>

                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Client support</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Company story</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Pricing packages</a>
                  </p>
                  <p style={{margin: 0}}>
                    <a href="#!" class="text-dark">Who we are</a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 lt">
                  <h6 class="text-uppercase fw-bold">Subscribe To Newsletter</h6>

                  <p style={{margin: 0}}>
                    Enter your email address for receiving valuable newsletters. New
                    York, NY 10012, US
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    style={{ height: "48px"}} />

                  <p style={{margin: "0"}}>© Copyright 2023 - TailGrids</p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  )
}

export default Footer