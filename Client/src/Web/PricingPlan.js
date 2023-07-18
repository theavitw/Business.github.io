import React from 'react'

import img_1 from "../images/Blog Image.jpg"
import img_2 from "../images/Blog Image (1).jpg"
import img_3 from "../images/Blog Image (2).jpg"
function PricingPlan() {
  return (
    <div>
      <div class="main text-center">
        <div>
          <p>Pricing Table</p>
          <h2>Our Pricing Plans</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but the
            majority have suffered alteration in some form.
          </p>
        </div>

        <div class="grid-container">
          <div class="grid-item">
            <img src={img_1} alt= ""/>
            <button type="submit" class="io_1">Dec 22, 2023</button>
            <h3>Meet AutoManage, the best AI management tools</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="grid-item">
            <img src={img_2} alt="" />
            <button type="submit" class="io_1">Dec 22, 2023</button>
            <h3>Meet AutoManage, the best AI management tools</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="grid-item">
            <img src={img_3} alt="" />
            <button type="submit" class="io_1">Dec 22, 2023</button>
            <h3>Meet AutoManage, the best AI management tools</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div class="main1">
        <div class="rt1">
          <div>
            Start your business with us.
            <h2>Request for a Quote and Get Started</h2>
          </div>
          <div>
            <button class="bt_1">Contact Us</button>
            <button class="bt_2">Get a Free Quote</button>
          </div>
        </div>
      </div>
      <div class="main3">
        <div>
        <div class="logos">
          <div class="ic_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              viewBox="0 0 512 512">
              
              <path
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
          </div>
          <p>Email Address</p>
          <p>info@example.com</p>
          <p>support@example.com</p>
        </div>
        </div>  
        <div>
        <div class="logos">
          <div class="ic_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16">
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </div>
          <p>Phone Number</p>
          <p>+88 (800) 123 4567</p>
          <p>+99 094 5445 433</p>
        </div>
        </div>
        <div class="logos">
          <div class="ic_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2.5em"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16">
              <path
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>
          <p>Our Address</p>
          <p>82 12th Street, Office 14, Edinburgh, UK</p>
        </div>
      </div>
    </div>
  )
}

export default PricingPlan