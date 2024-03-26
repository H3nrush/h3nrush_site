import Footer from "../../../components/footer";
import Header from "../../../components/header";
import cmdCode from '../../../files/codes/cmd.bat';
import './style.css';

const Coding = ()=>{

    return(
        <>
        <Header />
        <main id="main-coding">
            <div className="codes">
                <h1>alert! please read before using the files :</h1>
                <p>Download and open this file that I posted for download. But please understand that I do not take any responsibility. If anything happens to your system. Please be careful.</p>
            <a href={cmdCode} download='openthefile.bat' className="viruses"> download the virus file</a>

            </div>
        </main>
        <Footer />
        </>
    )
}
export default Coding;