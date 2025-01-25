import { useState, useEffect } from 'react'
import { GiShoppingBag } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import "../styles/components/header.sass";

export default function Header(props) {
    const [mainMenuStatus, setMainMenuStatus] = useState('deactivated')
    const [cartStatus, setCartStatus] = useState('deactivated')

    function toggleMainMenuStatus(status) {
        setMainMenuStatus(status)
        document.body.classList.add(`menu-${status}`)
    }

    function toggleCartStatus(status) {
        setCartStatus(status)
        document.body.classList.add(`menu-${status}`)
    }

    useEffect(() => {
        if (props.activeLink !== null) {
            document.querySelectorAll('nav.main-nav a')[props.activeLink].classList.add('active')
        }
    })

    return (
        <>
            <header>
                <div className="navbrand-options-container p-3 d-flex justify-content-between align-items-center">
                    <a href="/" className="brand text-uppercase text-decoration-none">
                        VR Motion
                    </a>
                    <menu type="toolbar" className={`${mainMenuStatus} p-0 m-0 position-absolute vw-100 vh-100 top-0 start-0`} id="main-menu">
                        <div className="options p-5 d-flex justify-content-between align-items-start">
                            <a href="#" className="text-decoration-none" id="login-btn-sm">
                                <button type="button" className="bg-transparent border-0 d-flex align-items-center gap-2">
                                    <FaUserCircle />
                                    Login
                                </button>
                            </a>
                            <button type="button" className="border-0 rounded-circle" id="close-menu-btn" onClick={() => { toggleMainMenuStatus('deactivated') }}>
                                <FaArrowLeft />
                            </button>
                        </div>
                        <nav className="main-nav p-3 d-flex flex-column gap-3 align-items-center mt-5">
                            <a href="/" className="text-decoration-none">Início</a>
                            <a href="/gamer" className="text-decoration-none">Gamer</a>
                            <a href="/novidades" className="text-decoration-none">Novidades</a>
                        </nav>
                    </menu>
                    <div className="options">
                        <a href="#" className="text-decoration-none d-none" id="login-btn-xl">
                            <button type="button" className="bg-transparent border-0 d-flex align-items-center gap-2">
                                <FaUserCircle />
                                Login
                            </button>
                        </a>
                        <button type="button" className="bg-transparent border-0 position-relative" id="open-cart-btn" onClick={() => { toggleCartStatus('activated') }}>
                            <GiShoppingBag />
                            <span className="position-absolute">0</span>
                        </button>
                        <button type="button" id="open-menu-btn" className="bg-transparent rounded-circle" onClick={() => { toggleMainMenuStatus('activated') }}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </header>
            <div className={`${cartStatus} cart-container position-absolute vw-100 vh-100 top-0 start-0`}>
                <div className={`cart-container-overlay ${cartStatus}`}>
                    <div className="cart-header px-3 pt-4 mx-3 d-flex align-items-center gap-2 pb-2">
                        <button type="button" className="p-0 border-0 bg-transparent" onClick={() => { toggleCartStatus('deactivated') }}>
                            <FaChevronLeft />
                        </button>
                        <p className="mb-0">Carrinho</p>
                    </div>
                    <div className="cart-products mt-4">
                        <div className="empty-cart text-center">
                            <p className="mb-2">O carrinho está vazio!</p>
                            <button type="button" className="bg-transparent border-0 p-0 text-decoration-underline" onClick={() => { toggleCartStatus('deactivated') }}>Continuar navegando</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
