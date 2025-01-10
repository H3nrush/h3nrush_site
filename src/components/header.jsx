import { useEffect } from 'react';
import '../pages/home/style/style.css'
import { Link } from 'react-router-dom';
import myLogo from "../files/icons/code.png";
import menuIcon from "../files/icons/icons8-menu-67.png";
import closeMenuIcon from "../files/icons/close.png";
function Header() {

useEffect(()=>{
    document.getElementById('display-about').addEventListener('click', () => {
        document.getElementById('about-me-btn').style.animation = 'open-box 0.2s ease-out';
        document.getElementById('about-me-btn').style.display = 'block';
      });
  
      document.getElementById('about-me-btn').addEventListener('mouseleave', () => {
        document.getElementById('about-me-btn').style.animation = 'close-box 0.2s ease-out';
        setTimeout(() => {
          document.getElementById('about-me-btn').style.display = 'none';
        }, 99);
      });
  
      document.getElementById('display-extra').addEventListener('click', () => {
        document.getElementById('extra-btn').style.animation = 'open-box 0.2s ease-out';
        document.getElementById('extra-btn').style.display = 'block';
      });
  
      document.getElementById('extra-btn').addEventListener('mouseleave', () => {
        document.getElementById('extra-btn').style.animation = 'close-box 0.2s ease-out';
        setTimeout(() => {
          document.getElementById('extra-btn').style.display = 'none';
        }, 99);
      });
  
      if (window.innerWidth < 600) {
        document.getElementById('menu-btn').addEventListener('click', () => {
          document.getElementById('menu').style.display = 'block';
          if (document.getElementById('menu').style.display === 'block') {
            document.getElementById('menu-btn').style.backgroundImage = `url(${closeMenuIcon})`;
          }
        });
  
        document.getElementById('menu').addEventListener('mouseleave', () => {
          document.getElementById('menu').style.display = 'none';
          document.getElementById('menu-btn').style.backgroundImage = `url(${menuIcon})`;
        });
      }
  
},[])
const setDisplayOff = ()=>{
  document.getElementById('menu').style.display = 'none';
  document.getElementById('menu-btn').style.backgroundImage = `url(${menuIcon})`;
}
const displayOff = ()=>{
  document.getElementById('about-me-btn').style.animation = 'close-box 0.2s ease-out';
  setTimeout(() => {
    document.getElementById('about-me-btn').style.display = 'none';
  }, 99);
}
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={myLogo} alt="h3nrush.site" />
        </div>
        <section id="menu-btn" onDoubleClick={setDisplayOff}>
          <div id="menu">
            <ul>
              <li id="display-about" onMouseLeave={displayOff}>About Me <span>&#9660;</span>
                <div id="about-me-btn">

                  <a href="https://drive.google.com/file/d/1ZLsXHxVpR1isn0Vx9NnG92oY5GJT3xAG/view?usp=drive_link"  className="a-btn">

                    <div>
                      My CV
                    </div>
                  </a>
                  <a href="https://github.com/H3nrush"  className="a-btn">
                    <div>
                      Github
                    </div>
                  </a>
                  <Link to={"/character"}  className="a-btn">
                    <div>
                      Character
                    </div>
                  </Link>
                </div>
              </li>
              <li><Link to="/" className='header-links'>Home</Link></li>
              <li><Link to='/Resume' className='header-links'>Resume</Link></li>
              <li id="display-extra">Extra <span>&#9660;</span>
                <div id="extra-btn">
                  <Link to="/Privacy" className="a-btn">
                    <div>
                      Privacy & Policies
                    </div>
                  </Link>
                  <Link to='/About_this_website' className="a-btn">
                    <div>
                      About
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Header;
