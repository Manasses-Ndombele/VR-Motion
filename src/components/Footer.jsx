import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer>
            <div className="brand-area">
                <h2>VR Motion</h2>
                <p>info@vrmotion.com</p>
                <p>Tel: (+244) 923 224 456</p>
            </div>
            <div className="container-info">
                <div className="buy-container">
                    <h3>Comprar</h3>
                    <nav>
                        <a href="#">Novidades</a>
                        <a href="#">VR para jogos</a>
                        <a href="#">VR para trabalho</a>
                   </nav>
                </div>
                <div className="our-shop">
                    <h3>Nossa loja</h3>
                    <nav>
                        <a href="#">Sobre nós</a>
                        <a href="#">Assinar</a>
                        <a href="#">FAQ</a>
                    </nav>
                </div>
                <div className="terms-conditions">
                    <h3>Termos e Condições</h3>
                    <nav>
                        <a href="#">Política da loja</a>
                        <a href="#">Envio e devolução</a>
                        <a href="#">Métodos de pagamentos</a>
                        <a href="#">Políticas de cookies</a>
                    </nav>
                </div>
            </div>
            <div className="social-container">
                <a href="#">
                    <FaFacebook />
                </a>
                <a href="#">
                    <FaInstagram />
                </a>
                <a href="#">
                    <FaYoutube />
                </a>
                <a href="#">
                    <FaPinterest />
                </a>
                <a href="#">
                    <FaTiktok />
                </a>
            </div>
            <div className="copyright-container">
                <p>&copy; 2025 - Desenvolvido por Manassés Ndombele - Dev Fullstack</p>
            </div>
        </footer>
    )
}
