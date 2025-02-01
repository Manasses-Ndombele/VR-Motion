import { useEffect } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import '../styles/components/ads-area.sass'

export default function AdsContainer() {
    useEffect(() => {
        function handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.replace('invisible', 'visible')
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: '0.5'
        }

        let mainObserver = new IntersectionObserver(handleIntersection, observerOptions)
        let adsElements = Array.from(document.querySelector('div.ads-description').children)
        adsElements.forEach((element) => {
            mainObserver.observe(element)
        })

        let couponArrows = document.querySelectorAll('div.coupon-description svg')
        couponArrows.forEach((arrow) => {
            mainObserver.observe(arrow)
        })
    })

    return (
        <div className="ads-area">
            <div className="ads-container mt-5">
                <div className="ads-description d-flex flex-column align-items-center">
                    <BsLightningChargeFill className="invisible" />
                    <h2 className="text-uppercase text-center invisible">Promoção <span className="d-block">25% OFF</span></h2>
                    <p className="text-center invisible">25% de desconto em todo o site usando o cupom NEXTVR25</p>
                </div>
                <div className="ads-image">
                    <img src="/anounce.jpg" alt="Imagem de anúncio na Loja" className="w-100" />
                </div>
            </div>
            <div className="coupon-description mb-5 text-center py-4">
                <FaLongArrowAltRight className="invisible" />
                <p className="text-uppercase text-decoration-underline my-3">Cupom de 10% na primeira compra!</p>
                <FaLongArrowAltLeft className="invisible" />
            </div>
        </div>
    )
}
