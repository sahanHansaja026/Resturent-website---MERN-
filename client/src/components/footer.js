import React, { Component } from "react";
import "../footer.css";
import Food2 from "../food1.png";

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <img src={Food2} alt="food 2" />
          <div className="box">
            Get connected with us on social networks:
            <div class="col-md-12">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-google"></a>
              <a href="#" className="fa fa-youtube"></a>
              <a href="#" className="fa fa-instagram"></a>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Contaact</h3>
                <div className="dec">
                  <ul>
                    <li>
                      <i className="fa fa-home"></i> New York, NY 10012, US
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> info@example.com
                    </li>
                    <li>
                      <i className="fa fa-print"></i>+ 01 234 567 89
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="under">
          <i> © 2024 Copyright:</i>
          <b> MARK Technologies</b>
        </div>
      </div>
    );
  }
}
