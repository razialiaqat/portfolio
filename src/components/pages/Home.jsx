import React from 'react';
import bg from '../../assets/image.jpg';
import btnimage from '../../assets/btnimage.png';
import { Link } from 'react-scroll'; // Ensure this path is correct

const Home = () => {
  return (
    <section className="intro">
      <div id="home">
        <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">
            I'm <span className="introName">Razia Liaqat</span>
            <br />Frontend Developer
          </span>
          <p className="introPara">
            I have learned multiple skills with experience in creating
            <br />
            visually and user-friendly websites.
          </p>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
            <button className="btn">
              <img src={btnimage} alt="hire" className="btnimg" />
              Hire Me
            </button>
          </Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
      </div>
    </section>
  );
};

export default Home;
