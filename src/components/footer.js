import React from "react";
import "./styles/footer.css";

const footer = () => {
  return (
    <>
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="head-foot">About Company</h3>
              <p>
                "SoftService is a leading SaaS company renowned for its
                innovative cloud-based solutions. With a commitment to
                simplifying business operations, SoftService offers a suite of
                software products tailored to various industries. "
              </p>
            </div>

            <div className="col-md-4">
              <h3 className="head-foot">Contact</h3>
              <p>
                Address: Shankarpura, Burari, Delhi, 110084
                <br />
                Phone: +918400052053 <br />
                Email: mauryaatul328@gmail.com
              </p>
            </div>

            <div className="col-md-4">
              <h3 className="head-foot">Newsletter</h3>
              <p>
                Subscribe to our newsletter to receive updates and news directly
                in your inbox.
              </p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
