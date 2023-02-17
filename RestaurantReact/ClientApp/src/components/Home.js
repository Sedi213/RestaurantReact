import React, { Component } from "react";
import "./Home.css";
import firstimg from "../Images/1.jpg";
import secondtimg from "../Images/2.jpg";
import thirdimg from "../Images/3.jpg";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="main">
        <div className="left">
          <img src={firstimg}></img>
          <div>
            <p>
              Cupidatat Lorem consectetur fugiat culpa adipisicing enim
              voluptate cillum. Mollit eiusmod dolor eu tempor sint. Aliqua ex
              deserunt sunt pariatur consequat tempor officia. Fugiat ullamco
              aliquip occaecat velit minim velit aliquip minim elit. Consectetu
              r sint nulla labore nisi. Ex occaecat elit tempor quis sunt id
              mollit sit ut ut. Cupidatat Lorem consectetur fugiat culpa
              adipisicing enim voluptate cillum. Mollit eiusmod dolor eu tempor
              sint. Aliqua ex deserunt sunt pariatur consequat tempor officia.
              Fugiat ullamco aliquip occaecat velit minim velit aliquip minim
              elit. Consectetu r sint nulla labore nisi. Ex occaecat elit tempor
              quis sunt id mollit sit ut ut.
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <p>
              Cupidatat Lorem consectetur fugiat culpa adipisicing enim
              voluptate cillum. Mollit eiusmod dolor eu tempor sint. Aliqua ex
              deserunt sunt pariatur consequat tempor officia. Fugiat ullamco
              aliquip occaecat velit minim velit aliquip minim elit. Consectetu
              r sint nulla labore nisi. Ex occaecat elit tempor quis sunt id
              mollit sit ut ut. Cupidatat Lorem consectetur fugiat culpa
              adipisicing enim voluptate cillum. Mollit eiusmod dolor eu tempor
              sint. Aliqua ex deserunt sunt pariatur consequat tempor officia.
              Fugiat ullamco aliquip occaecat velit minim velit aliquip minim
              elit. Consectetu r sint nulla labore nisi. Ex occaecat elit tempor
              quis sunt id mollit sit ut ut.
            </p>
          </div>
          <img src={secondtimg}></img>
        </div>
        <div className="left">
          <img src={thirdimg}></img>
          <div>
            <p>
              Cupidatat Lorem consectetur fugiat culpa adipisicing enim
              voluptate cillum. Mollit eiusmod dolor eu tempor sint. Aliqua ex
              deserunt sunt pariatur consequat tempor officia. Fugiat ullamco
              aliquip occaecat velit minim velit aliquip minim elit. Consectetu
              r sint nulla labore nisi. Ex occaecat elit tempor quis sunt id
              mollit sit ut ut. Cupidatat Lorem consectetur fugiat culpa
              adipisicing enim voluptate cillum. Mollit eiusmod dolor eu tempor
              sint. Aliqua ex deserunt sunt pariatur consequat tempor officia.
              Fugiat ullamco aliquip occaecat velit minim velit aliquip minim
              elit. Consectetu r sint nulla labore nisi. Ex occaecat elit tempor
              quis sunt id mollit sit ut ut.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
