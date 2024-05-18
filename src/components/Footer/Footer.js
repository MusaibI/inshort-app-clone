import React from "react";
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <span className="name">
                Inshorts Clone made by - {" "}
                <a href='https://www.linkedin.com/in/musaib-iqbal/'>
                    Musaib Iqbal
                </a>
            </span>
            <hr style={{ width: '90%' }} />
            <div className="iconContainer">
                <a href="https://github.com/MusaibI" target="__blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/musaib-iqbal/" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </div>
    )
};

export default Footer; 