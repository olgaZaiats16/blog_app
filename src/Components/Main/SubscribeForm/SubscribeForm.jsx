import React from "react";
import "../../../App.css"
import "./SubscribeForm.css"

const SubscribeForm = () => {
  return (
    <div>
      <div className="subscribe_form margin_top padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe_form_iner">
                <form action="">
                  <div className="form-row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-3">
                      <h3>Subscribe Our Newsletter</h3>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <a href="#" className="btn_1">
                        Subscribe
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
