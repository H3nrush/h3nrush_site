import Footer from "../../components/footer";
import Header from "../../components/header";
import './style.css';
import phoneIcon from '../../files/icons/icons8-phone-number-96.png';
import EmailForm from "../../apps/emailsender";
function Contact(){
    return(
        <>
        <Header />
        <main id="main-for-contact">
            <section id="this-container-contact">
                <div>
                    <div className="text-address">
                    <h1>By sending letters </h1>
                    <p>you can send your letters to this address:<strong>4 Rue Claude Bonnier , Bordeaux 33000</strong></p>
                    </div> 
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.194644103809!2d-0.586442923322445!3d44.837969275002784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527d3113ac0a1%3A0xc94055ab5b2433b2!2s4%20Rue%20Claude%20Bonnier%2C%2033000%20Bordeaux!5e0!3m2!1sen!2sfr!4v1710799028234!5m2!1sen!2sfr" id="contact-address" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title=" "></iframe>
                    </div>
                </div>
                <div className="by-phonenumber">
                    <div>
                        <img src={phoneIcon} alt="phone number" />
                        <strong>(+33) 0784656610</strong>
                    </div>
                </div>
                <div id="send-me-email">
                    <h3>or send me email <br />(<strong>  hassanmohammadi078@gmail.com  </strong>):</h3>
                    <div className="this-form-email">
                        <EmailForm />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
export default Contact;