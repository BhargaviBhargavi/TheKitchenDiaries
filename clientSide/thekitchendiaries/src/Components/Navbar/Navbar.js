import React from "react";
import './Navbar.css';


function Navbar(){
    return(
        <div>

                <div className="firstpage">
                    <div className="nav">
                        <nav className="navbar">
                            <div className="firstContainer">
                                <img src="Resources/logo.png" alt="" className="image"/>
                                <input type="text" className="searchbar" placeholder="Search here"/>
                                <img src="Resources/searchbar1.png" alt="" className="search"/>
                                <img src="Resources/loginLogo.jpeg" alt="" className="loginlogo"/>
                            </div>
                            <div className="secondContainer">
                                <div className="homepg">Home</div>
                                <div class="dropdown">
                                    <button class="dropbtn">Recipes</button>
                                    <div class="dropdown-content">
                                        <a href="">Less-Ingredient food</a>
                                        <a href="">Pot-meal</a>
                                        <a href="">Quick & Easy </a>
                                        <a href="">Breakfast</a>
                                        <a href="">Lunch</a>
                                        <a href="">Dinner</a>
                                        <a href=""><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Popular</button>
                                    <div class="dropdownContent">
                                        <a href="">Snacks</a>
                                        <a href="">Dessert</a>
                                        <a href="">Drinks</a>
                                        <a href="">Trending now</a>
                                        <a href="">Soups</a>
                                        <a href="">Salad</a>
                                        <a href=""><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Main Ingredients</button>
                                    <div class="dropdownContent">
                                        <a href="">Chicken</a>
                                        <a href="">Seafood</a>
                                        <a href="">Pasta </a>
                                        <a href="">Panner</a>
                                        <a href="">Vegetables</a>
                                        <a href="">Lamp meat</a>
                                        <a href=""><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Healthy Food</button>
                                    <div class="dropdownContent">
                                        <a href="">Vegetarian </a>
                                        <a href="">Wait Watchers</a>
                                        <a href="">Low-Card</a>
                                        <a href="">Gluted-Free</a>
                                        <a href="">Vegan</a>
                                        <a href=""><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Occation</button>
                                    <div class="dropdownContent">
                                        <a href="">Festivals</a>
                                        <a href="">Father's day</a>
                                        <a href="">Mother's day</a>
                                        <a href="">Birth day</a>
                                        <a href="">Children's functions</a>
                                        <a href=""><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Seasonal Food</button>
                                    <div class="dropdownContent">
                                        <a href="">Winter</a>
                                        <a href="">Summer</a>
                                        <a href="">Spring</a>
                                        <a href="">Fall</a>
                                        
                                    </div>
                                </div>
                                    
                                
                                <div className="topics">About Us</div>
                                
                                
                                 <div className="login">Login</div>
                                
                            </div>
                        </nav>
                    </div>
                </div>
        </div>
    );
}
export default Navbar;