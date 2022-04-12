import React from "react";
import './style.css';

import img from '../../assets/img/antiga_inicio.JPG';
import imgmain from '../../assets/img/main_img.JPG';
// import imgmaindois from '../img/main_img2.JPG';


export default function Homepage() {
  return (
     <div className="homepage">
        <section>
          <div className="homepage-img">
            <img src={img} alt="img-homepage"/>
          </div>
        </section>
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
  );
}