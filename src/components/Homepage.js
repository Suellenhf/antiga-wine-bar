import React from "react";
import './Reset.css';
import './Homepage.css';
import img from '../img/antiga_inicio.JPG';
import imgmain from '../img/main_img.JPG';
// import imgmaindois from '../img/main_img2.JPG';

function Homepage() {
    return(
      <div className="homepage">
      <header>
      <div className="homepage-img">
        <img src={img} alt="img-homepage"/>
      </div>
      </header>
      <main className="menu-main">
          <img className="img-main" src={imgmain} alt="" />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </p>
          {/* <img className="img-main-dois" src={imgmaindois} alt="" /> */}
      </main>
      <footer>
        <section>
          
        </section>
      </footer>
      </div>
    )
}

export default Homepage;