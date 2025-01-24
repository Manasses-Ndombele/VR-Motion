import { useEffect } from 'react';
import '../styles/components/product.sass';

export default function Product(props) {
    useEffect(() => {
        function handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('invisible')
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: '0.3'
        }

        let mainObserver = new IntersectionObserver(handleIntersection, observerOptions)
        let productCards = document.querySelectorAll('a.product-card')
        productCards.forEach((productCard) => {
            mainObserver.observe(productCard)
        })
    }, [])

    return (
        <a href={`/product/${props.id}`} className="product-card text-decoration-none position-relative invisible">
            <p className={`${!props.bestSeller ? 'd-none' : ''} position-absolute best-seller px-3 py-2 mb-0`}>Mais vendido</p>
            <img src={props.img} alt="Produto da loja" className="w-100" />
            <div className="description-area p-3">
                <p className="product-name mb-2">{props.name}</p>
                <p className="product-price mb-0">{props.price}</p>
            </div>
        </a>
    )
}
