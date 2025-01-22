import React, { Component } from "react";

const Footer = () => {

  const modding = {
    color: "white",
    backgroundColor:"#006454",
    marginTop: "22vh",
  }

	return (
		<div className="row tenth-row" style={modding}>
          <div className="col-3 first-line">
            <h4> Home </h4>
            <h4> Sell my Car </h4>
            <h4> To look for a Car </h4>
          </div>
          <div className="col-3">
            <h4> I dunno </h4>
            <h4> Contact </h4>
            <h4> To look for a Car </h4>
          </div>
          <div className="col-3">
            <h4> To Ask </h4>
            <h4> Terms and conditions</h4>
            <h4> How Trust ?</h4>
          </div>
          <div className="col-3">
            <h4> Monday | 9AM - 10PM </h4>
            <h4> Tuesday | 9AM - 10PM </h4>
            <h4> Wednesday | 9AM - 10PM </h4>
            <h4> Thursday | 9AM - 10PM </h4>
            <h4> Friday | 9AM - 10PM </h4>
          </div>
          <div className="final-line">
          </div>
          <div className="col-12 final-logo">
            <div className="text-center">
              <i className="green fa-brands fa-drupal fs-1"></i>
              <i className="fa-brands fa-stumbleupon fs-2"></i>
              DrivenS
            </div>
          </div>
        </div>
	)
	
};

export default Footer;