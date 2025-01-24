import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa6";
import '../styles/components/footer.sass'

export default function Footer() {
    return (
        <footer>
            <div className="brand-area p-3">
                <h2 className="text-uppercase">VR Motion</h2>
                <p className="mb-0">info@vrmotion.com</p>
                <p className="mb-0">Tel: (+244) 923 224 456</p>
            </div>
            <div className="container-info p-3 d-flex flex-column gap-4">
                <div className="buy-container">
                    <h3>Comprar</h3>
                    <nav className="d-flex flex-column gap-3">
                        <a href="#" className="text-decoration-none">Novidades</a>
                        <a href="#" className="text-decoration-none">VR para jogos</a>
                        <a href="#" className="text-decoration-none">VR para trabalho</a>
                   </nav>
                </div>
                <div className="our-shop">
                    <h3>Nossa loja</h3>
                    <nav className="d-flex flex-column gap-3">
                        <a href="#" className="text-decoration-none">Sobre nós</a>
                        <a href="#" className="text-decoration-none">Assinar</a>
                        <a href="#" className="text-decoration-none">FAQ</a>
                    </nav>
                </div>
                <div className="terms-conditions">
                    <h3>Termos e Condições</h3>
                    <nav className="d-flex flex-column gap-3">
                        <a href="#" className="text-decoration-none">Política da loja</a>
                        <a href="#" className="text-decoration-none">Envio e devolução</a>
                        <a href="#" className="text-decoration-none">Métodos de pagamentos</a>
                        <a href="#" className="text-decoration-none">Políticas de cookies</a>
                    </nav>
                </div>
            </div>
            <nav className="social-container d-flex align-items-center justify-content-center gap-4 py-3">
                <a href="#" className="text-decoration-none">
                    <FaFacebook />
                </a>
                <a href="#" className="text-decoration-none">
                    <FaInstagram />
                </a>
                <a href="#" className="text-decoration-none">
                    <FaYoutube />
                </a>
                <a href="#" className="text-decoration-none">
                    <FaPinterest />
                </a>
                <a href="#" className="text-decoration-none">
                    <FaTiktok />
                </a>
            </nav>
            <div className="copyright-container text-center p-3">
                <p>&copy; 2025 - Desenvolvido por Manassés Ndombele - Dev Fullstack</p>
            </div>
        </footer>
    )
}
