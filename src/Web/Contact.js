import React from 'react'

function Contact() {
    return (
        <div><div class="main"
        // style="background: #f7f8fa"
        >
            <div>
                <p>Contact Us</p>
                <h2>How Can We Help You?</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available but the
                    majority have suffered alteration in some form.
                </p>
            </div>
            <form class="text-left">
                <div class="form-row">
                    <div class="col n_e">
                        <label for="exampleFormControlTextarea1">Your Name <span
                        // style="color: red"
                        >*</span></label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Your Name"
                            // style="width: auto"
                            required />
                    </div>
                    <div class="col n_e">
                        <label for="exampleFormControlTextarea1">Your Email <span
                        // style="color: red"
                        >*</span></label>

                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            // style="width: auto"
                            required />
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message <span
                    // style="color: red"
                    >*</span></label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        // style="width: 70%"
                        rows="6"></textarea>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            required />
                        <label class="form-check-label" for="gridCheck">
                            I agree that my submitted data is being collected and stored.
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                //             style="
                //   height: 60px;

                //   background: #3056d3;
                //   border-radius: 5px;
                //   margin-left: 35%;
                // "
                >
                    Send Message
                </button>
            </form>
        </div></div>
    )
}

export default Contact