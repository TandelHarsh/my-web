import React from "react";
import '../Css/Home.css';
import bgimg from '../Images/bgimg1.jpg';
function Home() {
    return ( 
    <div class="home">
                <div class="container">
                    <img src={bgimg} alt="backgroundimage"/>
                    <div class="heading">
                        <p1>MagicPizza</p1>
                        <h2>Welcome to MagicPizza</h2>
                        <p2>Get Your Pizza In Italian Pizza Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, doloremque saepe placeat totam deleniti at praesentium quam accusantium ipsam.</p2>
                        <div class="userbtn">
                            <button>LogIn Now</button>
                            <button>View Menu</button>
                        </div>
                    </div>
                </div>
                <center>
                    <h1>Our Pupular Pizza's</h1>
                    <div class="cardBox">
                        <div class="card">
                            <div class="card-img1"></div>
                            <h3>Tomato Pizza</h3>
                            <p><span>&#8377;</span>450</p>
                            <button>Order Now</button>

                        </div>

                        <div class="card">
                            <div class="card-img2"></div>
                            <h3>Peparoni Chizz Pizza</h3>
                            <p><span>&#8377;</span>450</p>
                            <button>Order Now</button>

                        </div>
                        <div class="card">
                            <div class="card-img3"></div>
                            <h3>Tomato Chilli Pizza</h3>
                            <p><span>&#8377;</span>600</p>
                            <button>Order Now</button>

                        </div>
                        <div class="card">
                            <div class="card-img4"></div>
                            <h3>Tomato Pizza</h3>
                            <p><span>&#8377;</span>450</p>
                            <button>Order Now</button>

                        </div>
                        <div class="card">
                            <div class="card-img5"></div>
                            <h3>Paneer Masala Pizza</h3>
                            <p><span>&#8377;</span>450</p>
                            <button>Order Now</button>

                        </div>
                        <div class="card">
                            <div class="card-img6"></div>
                            <h3>Chees Margareeta Pizza</h3>
                            <p><span>&#8377;</span>450</p>
                            <button>Order Now</button>

                        </div>

                </div>

                </center>
    </div>
        );
}

export default Home;