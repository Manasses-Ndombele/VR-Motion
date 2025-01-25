import { useEffect } from 'react';
import '../styles/components/categories-container.sass';

export default function CategoriesContainer() {
    useEffect(() => {
        var currentIndex = 0
        let items = document.querySelectorAll('div.item')
        const totalItems = items.length
        function showNextItem() {
            currentIndex = (currentIndex + 1) % totalItems
            updateCarousel()
        }

        function updateCarousel() {
            if (window.innerWidth < 769) {
                const carouselContainer = document.querySelector('div.categories-containers')
                const offset = -currentIndex * 100
                carouselContainer.style.transform = `translateX(${offset}%)`
            }
        }

        setInterval(showNextItem, 3000)
    }, [])

    return (
        <div className="categories-area w-100 overflow-hidden">
            <div className="categories-containers d-grid">
                <div className="item">
                    <a href="#">
                        <div className="category-container position-relative">
                            <img src="/gamer-category.jpg" alt="Foto da loja online" className="w-100" />
                            <div className="title-container position-absolute w-100 h-100 bottom-0 d-flex align-items-end">
                                <p className="w-100 text-center mb-3">VR para Jogos</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <div className="category-container position-relative">
                            <img src="/start-category.jpg" alt="Foto da loja online" className="w-100" />
                            <div className="title-container position-absolute w-100 h-100 bottom-0 d-flex align-items-end">
                                <p className="w-100 text-center mb-3">VR para Tudo</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <div className="category-container position-relative">
                            <img src="/work-category.jpg" alt="Foto da loja online" className="w-100" />
                            <div className="title-container position-absolute w-100 h-100 bottom-0 d-flex align-items-end">
                                <p className="w-100 text-center mb-3">VR para Trabalho</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
