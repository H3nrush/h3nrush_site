import Footer from "../../components/footer";
import Header from "../../components/header";
import './style.css';
import firstPaint from '../../files/paints/photo_2024-03-22_16-41-56.jpg';
import secondPaint from '../../files/paints/F9130D1JE4KR0NA.webp';
import tirthPaint from '../../files/paints/32-6-jpg.webp';
import { Link } from "react-router-dom";

const Paints = ()=>{
    return(
        <>
        <Header />
        <main id="main-paints">
                    <img src={firstPaint} alt="h3nrush" />
                    <div>
                        <p>the dreams</p>
                        <Link className="price-paints" to='/contact'>70$</Link>
                    </div>
                    <img src={secondPaint} alt="h3nrush" />
                    <div>
                        <p>not complete</p>
                        <Link className="price-paints" to='/contact'>free</Link>
                    </div>
                    <img src={tirthPaint} alt="h3nrush" />
                    <div>
                        <p>the middle of fall</p>
                        <Link className="price-paints" to='/contact'>100$</Link>
                    </div>
        </main>
        <Footer />
        </>
    )
}
export default Paints;