import Footer from "../../components/footer";
import Header from "../../components/header";
import './style.css';
import phoneIcon from '../../files/icons/icons8-phone-number-96.png';
function Contact(){
    return(
        <>
        <Header />
        <main id="main-for-contact">
            <section id="this-container-contact">
                <div>
                    <div className="text-address">
                    <h1>By sending letters </h1>
                    <p>you can send your letters to this address:<strong><br /><br />12 quai du Senegal | logement 003 , 33300 Bordeaux</strong></p>
                    </div> 
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.008351327902!2d-0.5548209232996161!3d44.862124773407665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552891986358bb%3A0x47021d19573241f8!2s12%20Quai%20du%20S%C3%A9n%C3%A9gal%2C%2033300%20Bordeaux!5e0!3m2!1sen!2sfr!4v1735532428955!5m2!1sen!2sfr" id="contact-address" title="contact me" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="by-phonenumber">
                    <div>
                        <img src={phoneIcon} alt="phone number" />
                        <strong>(+33) 0784656610</strong>
                    </div>
                </div>
                <div id="send-me-email">
                    <h3>or send me email :</h3>
                    <br /><strong id="strong">  (hassanmohammadi078@gmail.com)  </strong>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
export default Contact;