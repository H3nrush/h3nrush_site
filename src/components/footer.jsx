import githunIcon from "../files/icons/pngegg.png";
function Footer(){
    return(
        <footer>
                <div className="social-media">
                <a href="https://www.instagram.com/h3nrush?igsh=MXRuNXhrd2lzdW5tbA%3D%3D&utm_source=qr" >Instagram</a>
                <a href="https://www.facebook.com/h3nrush" >Facebook</a>
                <a href="https://t.me/h3nrush" >Telegram</a>
                </div>
                <div className="github">
                <a href="https://github.com/H3nrush"><img src={githunIcon} alt="my github" /></a>
                </div>
        </footer>
    )
}
export default Footer;