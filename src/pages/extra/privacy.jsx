import Footer from "../../components/footer";
import Header from "../../components/header";
import logoofwebsite from '../../files/icons/code.png';
import './privacy/privacy.css';

const Privacy = ()=>{
    return(
        <>
        <Header />
        <main id="main-privacy">
            <div className="privacy-div">
                this website h3nrush.site is not asking you to agree the cookies 
                actuely this website is not recieving any information from you out of your email address or phone number
                only for contact . 
                i respect to your privacy , and i will never share your contact information with anyone . 
                but about you feel free to share my website and my cv , for enterprises and univercities . 
            </div>
            <div className="logo-ofwebsite">
                <img src={logoofwebsite} alt="" />
            </div>
        </main>
        <Footer />
        </>
    )
}
export default Privacy;