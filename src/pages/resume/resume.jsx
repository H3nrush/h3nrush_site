import Header from "../../components/header";
import Footer from "../../components/footer";
import './style.css';
import userCreation from '../../files/resume/screencapture-localhost-3001-CreateAccount-2024-03-24-00_45_37.png';
import userLogin from '../../files/resume/screencapture-localhost-3001-Login-2024-03-24-00_44_47.png';
import logoFilm2Movie from '../../files/resume/clapperboard.png';
import { useEffect } from "react";

const Resume = () => {
    useEffect(() => {
        const handleCheckboxChange = (event) => {
            const elementsToToggle = event.target.parentNode.querySelectorAll('.each-code-idid');
            elementsToToggle.forEach((element) => {
                if (event.target.checked) {
                    element.style.display = 'block';
                    element.style.animation = 'openCodeSide 5s ease';
                } else {
                    element.style.animation = 'closeCodeSide 1s ease';
                    setTimeout(() => {
                        element.style.display = 'none';
                    }, 990);
                }
            });
        };
        

        const checkboxes = document.querySelectorAll('.checkbox-foreach');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', handleCheckboxChange);
        });

        return () => {
            checkboxes.forEach((checkbox) => {
                checkbox.removeEventListener('change', handleCheckboxChange);
            });
        };
    }, []);

    return (
        <>
            <Header />
            <main id="main-resume">
                <section id="info-about-projects">
                    <div>
                        <h1>
                            this is all what i did
                        </h1>
                        <br /><br /><br />
                    </div>

                    <label className="this-checkbox">
                        <img src={logoFilm2Movie} alt="film2movie" Style='width:25vw;cursor:pointer;' />
                        <h1>Film 2 Movie</h1>
                        <input type="checkbox" defaultChecked={true} className="checkbox-foreach"/>

                        {/* the first label */}
                        <label className="this-checkbox each-code-idid">
                            <h3 className="clicker">SignUp method (backend , frontend)</h3>
                            <input type="checkbox" defaultChecked={true} className="checkbox-foreach" />
                            <div className="each-code-idid first-section-code" style={{ display: 'none' }}>
                                <h1>user creation method:</h1>
                                <img src={userCreation} alt="user-creation" />
                                <h1>Backend (nodejs)</h1>
                                <img src="https://i.imgur.com/iBnwwYd.png" alt="codes" />
                                <h1>Frontend (React js)</h1>
                                <img src="https://i.imgur.com/27z4k3D.png" alt="fontend" />
                                <h1>CSS (Sass)</h1>
                                <img src="https://i.imgur.com/GmpFsOa.png" alt="CSS" />
                            </div>
                        </label>

                        {/* the second label */}
                        <label className="this-checkbox each-code-idid">
                            <h3 className="clicker">Login method (backend , frontend)</h3>
                            <input type="checkbox" defaultChecked={true} className="checkbox-foreach" />
                            <div className="each-code-idid first-section-code" style={{ display: 'none' }}>
                                <h1>user login method:</h1>
                                <img src={userLogin} alt="user-creation" />
                                <h1>Backend (nodejs)</h1>
                                <img src="https://i.imgur.com/aJckIUH.png" alt="codes" />
                                <h1>Frontend (React js)</h1>
                                <img src="https://i.imgur.com/o9kIhVR.png" alt="fontend" />
                                <h1>CSS (Sass)</h1>
                                <img src="https://i.imgur.com/rNe4Ziv.png" alt="CSS" />
                            </div>
                        </label>



                        {/* the trith label */}
                        <label className="this-checkbox each-code-idid">
                            <h3 className="clicker">HomePage (Admin Dashboard)</h3>
                            <input type="checkbox" defaultChecked={true} className="checkbox-foreach" />
                            <div className="each-code-idid first-section-code" style={{ display: 'none' }}>
                                <h1>Admin Auth method (nodejs):</h1>
                                <img src={userCreation} alt="user-creation" />
                                <h1>Backend (nodejs)</h1>
                                <img src="https://i.imgur.com/KYL1lIk.png" alt="codes" />
                                <h1>Frontend (React js)</h1>
                                <img src="https://i.imgur.com/DMxBmmr.png" alt="fontend" />
                                <h1>CSS (Sass)</h1>
                                <img src="https://i.imgur.com/t58DFGT.jpeg" alt="CSS" />
                            </div>
                        </label>



                    </label>

                    <div id="click-here-github">
                        You can see the complete codes at my github profile :
                        (<a href="https://github.com/H3nrush" target="_blank" rel="noreferrer" >Click here</a>)
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
};

export default Resume;
