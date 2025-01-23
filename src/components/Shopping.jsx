import Product from './Product';

export default function Shopping(props) {
    return (
        <div className="shopping-area">
            <h2 className={`${!props.titleDisplay && 'd-none'}`}>Lançamentos</h2>
            <div className="products-container">
                <Product id={1} img="/BOBOVR Z6 2.webp" title="Bobo VR Z6" price="AOA 250.000,00" />
                <Product id={2} img="/HP Reverb g2 2.webp" title="HP Reverb G2" price="AOA 400.000,00" />
                <Product id={3} img="/Apple Vision Pro 2.webp" title="Apple Vision Pro" price="AOA 2.780.000,00" bestSeller={true} />
                <Product id={4} img="/Lenovo Explorer.webp" title="Lenovo Explorer" price="AOA 280.000,00" bestSeller={true} />
                <Product id={5} img="/Magic Leap 2.webp" title="Magic Leap" price="AOA 400.000,00" />
                <Product id={6} img="/Meta Quest Pro.webp" title="Meta Quest Pro" price="AOA 700.000,00" />
                <Product id={7} img="/Razer OSVR.webp" title="Razer OSVR" price="AOA 870.000,00" />
                <Product id={8} img="/Varjo Aero.webp" title="Varjo Aero" price="AOA 440.000,00" />
            </div>
        </div>
    )
}
