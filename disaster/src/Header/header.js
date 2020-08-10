import React from "react";
import "./header.css";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="line block">
            <div className="headline">
                <div className="headlinelogo headfactor">
                    <Link to="/" className="none">
                        <img className="headicon headfactor"
                        src="https://image.flaticon.com/icons/svg/126/126474.svg"
                        alt="main icon"
                        title="Disaster Predict Service"/>
                    </Link>
                </div>
                <div className="headlineexplanation headfactor">
                    <Link to="/" className="none">
                        <p className="header">Disaster</p>
                        <p className="black">Predict</p>
                    </Link> 
                </div>
                <div className="rightside">
                    <div className="headfactor headbutton">
                        <Link to="/TyphoonInfo" className="none">
                            <p className="height5">TyphoonInfo</p>
                        </Link>
                    </div>
                    <div className="headfactor headbutton">
                        <Link to="/SearchDate" className="none">
                            <p className="height5">SearchDate</p>
                        </Link>
                    </div>
                    <div className="headfactor headbutton">
                        <Link to="/SearchRegion" className="none">
                            <p className="height5">SearchRegion</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;