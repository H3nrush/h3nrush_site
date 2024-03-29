import Footer from "../../components/footer";
import Header from "../../components/header";
import './style.css';
import { Link } from "react-router-dom";

function Character() {



    return (
        <>
            <Header />
            <main id="this-main-character">
                <div className="div-animations div-last-display">
                    <div id="this-infos-tal">
                        <div className="each-talent div-paint" >
                            <Link to={'/paints'} className="each-btn-inside">Paints</Link>
                        </div>
                        <div className="each-talent div-writing" >
                            <Link to={'/writes'} className="each-btn-inside">My HandWrites</Link>
                        </div>
                        <div className="each-talent div-coding" >
                            <Link to={'/coding'} className="each-btn-inside">Coding</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Character;
