import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export default function AdsContainer() {
    return (
        <div className="ads-area">
            <div className="ads-container">
                <div className="ads-description">
                    <h2>Promoção <span>25% OFF</span></h2>
                    <p>25% de desconto em todo o site usando o cupom NEXTVR25</p>
                </div>
                <div className="ads-image">
                    <img src="/anounce.webp" alt="Imagem de anúncio na Loja" />
                </div>
            </div>
            <div className="coupon-description">
                <FaLongArrowAltRight />
                <p>Cupom de 10% na primeira compra!</p>
                <FaLongArrowAltLeft />
            </div>
        </div>
    )
}
