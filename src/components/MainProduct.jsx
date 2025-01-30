import MainBtn from '../components/MainBtn';
import '../styles/components/main-product.sass'

export default function MainProduct(props) {
    return (
        <main id={props.productId} className="p-3 mb-4 main-product">
            <div className="product-img-container">
                <img src={props.img} alt="Produto da loja" className="w-100" />
            </div>
            <div className="product-info-container mt-3">
                <h1>{props.name}</h1>
                <p className="price-text">Preço: {props.price}</p>
                <p><span className="d-block mb-2 fw-bold">Descrição</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequuntur sit eaque! Ea magnam praesentium numquam beatae vel. Tenetur autem, explicabo recusandae repellendus praesentium omnis optio quaerat voluptatum officia soluta.</p>
                <form>
                    <label htmlFor="quantity-field" className="form-label">Quantidade</label>
                    <input type="number" id="quantity-field" className="form-control mb-3 rounded-0" min="1" max={props.maxStock} step="1" />
                    <MainBtn text="Adicionar ao carrinho" expand={true} />
                </form>
            </div>
        </main>
    )
}
