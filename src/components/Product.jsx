export default function Product(props) {
    return (
        <a href={`/product/${props.id}`} className="product-card">
            <img src={props.img} alt="Produto da loja" />
            <p>{props.title}</p>
            <p>{props.price}</p>
        </a>
    )
}
