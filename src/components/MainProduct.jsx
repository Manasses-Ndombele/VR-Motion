import MainBtn from '../components/MainBtn';

export default function MainProduct(props) {
    return (
        <main id={props.productId}>
            <div className="product-img-container">
                <img src={props.img} alt="Produto da loja" />
            </div>
            <div className="product-info-container">
                <h1>{props.name}</h1>
                <p>Preço: {props.price}</p>
                <p><span>Descrição</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequuntur sit eaque! Ea magnam praesentium numquam beatae vel. Tenetur autem, explicabo recusandae repellendus praesentium omnis optio quaerat voluptatum officia soluta.</p>
                <form>
                    <label htmlFor="quantity-field">Quantidade</label>
                    <input type="number" id="quantity-field" placeholder="0" />
                    <MainBtn text="Adicionar ao carrinho" />
                </form>
            </div>
        </main>
    )
}
