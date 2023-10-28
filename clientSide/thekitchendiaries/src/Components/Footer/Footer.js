import React from "react";
import'./Footer.css';

function Footer(){
    return(
        <div>
                <div className="footerpart">
                    <div className="logopart">
                        <img src="Resources/logo.png" alt="" className="footerimage"/>
                        <input type="button"  value="Sign Up" className="sign"/>
                    </div>
                    <div className="listpart">
                        <div className="types">Recipes</div>
                        <div className="types">Popural Meals</div>
                        <div className="types">Main Ingredients</div>
                        <div className="types">Healthy Food</div>
                    </div>
                    <div className="listparts">
                        <div className="types">Occation</div>
                        <div className="types">Seasonal Food</div>
                        <div className="types">About Us</div>
                    </div>
                </div>
                <div className="border">
                    <p className="follow">Follow Us</p>
                    <div className="follow">
                        <img src="Resources/google.png" className="followImg" alt=""/>
                        <img src="Resources/facebook.png" className="followImg" alt=""/>
                        <img src="Resources/insta.jpeg" className="followImg" alt=""/>
                        <img src="Resources/twitter.jpeg" className="followImg" alt=""/>
                    </div>

                </div>
            </div>
        
    

    );
}
export default Footer;