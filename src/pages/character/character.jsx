import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import './style.css';
import { Link } from "react-router-dom";

function Character() {

    
    useEffect(() => {
        const thisDivs = document.getElementsByClassName('div-animations');
        const thisDivsArray = Array.from(thisDivs);

        const showDivsWithDelay = () => {
            for (let i = 0; i < thisDivsArray.length; i++) {
                let x = (i + 1) * 500;
                setTimeout(() => {
                    thisDivsArray[i].style.display = 'block';
                    thisDivsArray.forEach(element => {
                        if (element !== thisDivsArray[i]) {
                            element.style.display = 'none';
                        }
                    });

                }, i * x);
            }
        };

        showDivsWithDelay();
    }, []);



    return (
        <>
            <Header />
            <main id="this-main-character">
                        <div className="div-animations showen">Hello!</div>
                        <div className="div-animations showen">I am Hassan MOHAMMADI</div>
                        <div className="div-animations showen">I am a creative, talented, <br />smart and social young man</div>
                        <div className="div-animations showen">A boy who has seen half of <br /> the world at his young ageCountries with different <br /> cultures and languages</div>
                        <div className="div-animations showen">India, Iran, Afghanistan,<br /> Turkey , Pakistan, Turkey,<br /> Greece, France, Germany,<br /> Belgium, Italy</div>
                        <div className="div-animations showen">In these lands, I got <br /> acquainted with different<br /> cultures and especially<br /> their arts, which is<br /> the best experience<br /> of my life</div>
                        <div className="div-animations showen">I am very interested<br /> in travel, poetry,<br /> music, painting and<br /> computer science.</div>
                        <div className="div-animations showen">These are not lack of<br /> interest but also my talents<br /> I have written many Persian<br /> poems in Persian language</div>
                        <div className="div-animations showen"> I have drawn many paintings<br /> I play guitar well and <br />as you know <br /> I have come from far away <br /> and I am a full stack <br /> web developer.</div>
                        <div className="div-animations showen">get ready <br /> to see my portfolio!</div>
                <div className="div-animations div-last-display">
                    <div id="this-infos-tal">
                        <div className="each-talent div-paint" >
                            <Link to={'/character/paints'} className="each-btn-inside">Paints</Link>
                        </div>
                        <div className="each-talent div-writing" >
                            <Link to={'/character/writes'} className="each-btn-inside">My HandWrites</Link>
                        </div>
                        <div className="each-talent div-coding" >
                            <Link to={'/character/coding'} className="each-btn-inside">Coding</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Character;
