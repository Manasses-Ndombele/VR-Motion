import { IoBagHandleSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <a href="/" className="brand">
                VR Motion
            </a>
            <div className="options">
                <button type="button">
                    <IoBagHandleSharp />
                    <span>0</span>
                </button>
                <button type="button">
                    <GiHamburgerMenu />
                </button>
            </div>
            <menu type="toolbar">
                <div className="options">
                    <a href="#">
                        <button type="button">
                            <FaUserCircle />
                            Login
                        </button>
                    </a>
                    <button type="button">
                        <FaArrowLeft />
                    </button>
                </div>
                <nav>
                    <a href="/">Início</a>
                    <a href="/gamer">Gamer</a>
                    <a href="/novidades">Novidades</a>
                </nav>
            </menu>
        </header>
    )
}
