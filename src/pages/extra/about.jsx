import Footer from "../../components/footer";
import Header from "../../components/header";
import './about/style.css';

const About = () =>{
    return(
        <>
        <Header />
        <main id="main-about">
            <div className="this-div-about-page">
            This website is developed by react library.
            React (also known as React.js or ReactJS) is a free 
            and open-source front-end JavaScript libraryfor building 
            user interfaces based on components. It is maintained by
             Meta (formerly Facebook) and a community of individual
              developers and companies.
            React can be used to develop single-page, mobile, or
             server-rendered applications with frameworks like Next.js.
              Because React is only concerned with the user interface and 
              rendering components to the DOM, React applications often rely
               on libraries for routing and other client-side functionality.
                A key advantage of React is that it only rerenders those parts
                 of the page that have changed, avoiding unnecessary rerendering
                  of unchanged DOM elements.
            </div>
            <div className="this-div-about-otherside"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="react" className="reactlogo" /></div>
        </main>
        <Footer />
        </>
    )
}
export default About;