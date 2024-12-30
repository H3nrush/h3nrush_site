import Footer from "../../components/footer";
import Header from "../../components/header";
import './style/style.css';
import javaScript from "../../files/icons/script-icon/icons8-javascript-128.png";
import html from "../../files/icons/script-icon/icons8-html-128.png";
import css from "../../files/icons/script-icon/icons8-css-128.png";
import mysql from "../../files/icons/script-icon/icons8-mysql-128.png";
import nodejs from "../../files/icons/script-icon/icons8-nodejs-128.png";
import reactIcon from "../../files/icons/script-icon/icons8-react-native-128.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home(){


  useEffect(() => {
    const handleScroll = () => {
      const text = document.getElementById('wid-to-do');
      const img = document.querySelectorAll(".img-lang");
      const textPosition = text.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (textPosition < screenPosition) {
        text.classList.add("active");
        img.forEach(function(thisImg){
          thisImg.classList.add("active-img");
        });
      } else { 
        text.classList.remove("active");
        img.forEach(function(thisImg){
          thisImg.classList.remove("active-img");
        });
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return(
        <>
            <Header />
                <main id="main-home">
                    <div id="main">
                    <div className="info">
                        <div className="each-side side-photo photo-side">
                          <Link to={'/character'}><div className="my-photo"></div></Link>
                        </div>
                        <div className="each-side side-text">
                        <div className="all-text">
                            <div>
                            <div className="strong-fixed"><strong>Developer WEB Full Stack</strong></div>
                            <h1>Hassan MOHAMMADI</h1>
                            <div className="p-fixed">
                                <p>
                                Hello! I'm a full-stack web developer with a passion for creating seamless online experiences. From front-end design to back-end functionality, I thrive on bringing ideas to life through code. Let's build something amazing together!
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="btns">
<<<<<<< HEAD
                            <a href="https://drive.google.com/file/d/1RevyhEjNlwBIWbhgDWfAHEqd0uR3bvDm/view?usp=drivesdk" download>
=======
                            <a href="https://drive.google.com/file/d/1FCaqq4OKBfMXG3aXMRermrKbIe-TTVLL/view?usp=sharing" download>
>>>>>>> e752e7d28908969b1a7ed50024b6c914d3a2ef6d
                            Download CV
                            </a> 
                            <Link to="/contact">
                            Contact
                            </Link> 
                        </div>
                        </div>
                    </div>
                    </div>  
                    <section id="what-i-do">
                    <div className="h1-wid"><h1 id="wid-to-do">What I Do?</h1></div>
                    <div className="div-lang">
                        <div><a href="https://en.wikipedia.org/wiki/JavaScript" ><img className="img-lang" src={javaScript} alt="JavaScript" /></a><h2>JavaScript</h2></div>
                        <div><a href="https://en.wikipedia.org/wiki/HTML" ><img className="img-lang" src={html} alt="HTML" /></a><h2>HTML</h2></div>
                        <div><a href="https://en.wikipedia.org/wiki/CSS" ><img className="img-lang" src={css} alt="CSS" /></a><h2>CSS</h2></div>
                        <div><a href="https://en.wikipedia.org/wiki/MySQL" ><img className="img-lang" src={mysql} alt="MySql" /></a><h2>MySql</h2></div>
                        <div><a href="https://en.wikipedia.org/wiki/Node.js" ><img className="img-lang" src={nodejs} alt="NodeJs" /></a><h2>NodeJs</h2></div>
                        <div><a href="https://en.wikipedia.org/wiki/React_(software)" ><img className="img-lang" src={reactIcon} alt="React" /></a><h2>React</h2></div>
                    </div>
                    </section>
                </main>
            <Footer />
        </>
    )
}

export default Home;
