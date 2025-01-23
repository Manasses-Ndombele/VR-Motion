import { FaChevronLeft } from "react-icons/fa6";

export default function Cart(props) {
    return (
        <div className="cart-container">
            <div className="cart-header">
                <button type="button" className={props.cartCloseMode === 'btn' ? 'activated' : 'deactivated'}>
                    <FaChevronLeft />
                </button>
                <p>Carrinho</p>
            </div>
            <div className="cart-products">
                <div className="empty-cart">
                    <p>O carrinho está vazio!</p>
                    <a href="#" className={props.cartCloseMode === 'link' ? 'activated' : 'deactivated'}>Continuar navegando</a>
                </div>
            </div>
        </div>
    )
}
