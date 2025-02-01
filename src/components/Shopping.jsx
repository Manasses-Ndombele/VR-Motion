import Product from './Product';
import '../styles/components/shopping.sass';

export default function Shopping(props) {
    return (
        <div className="shopping-area p-3">
            <h2 className={`${!props.titleDisplay ? 'd-none' : ''} text-center my-4`}>Lançamentos</h2>
            <div className="products-container d-flex flex-column gap-4">
                <Product id={1} img="/BOBOVR Z6 2.jpg" name="Bobo VR Z6" price="AOA 250.000,00" />
                <Product id={2} img="/HP Reverb g2 2.jpg" name="HP Reverb G2" price="AOA 400.000,00" />
                <Product id={3} img="/Apple Vision Pro 2.jpg" name="Apple Vision Pro" price="AOA 2.780.000,00" bestSeller={true} />
                <Product id={4} img="/Lenovo Explorer.jpg" name="Lenovo Explorer" price="AOA 280.000,00" bestSeller={true} />
                <Product id={5} img="/Magic Leap 2.jpg" name="Magic Leap" price="AOA 400.000,00" />
                <Product id={6} img="/Meta Quest Pro.jpg" name="Meta Quest Pro" price="AOA 700.000,00" />
                <Product id={7} img="/Razer OSVR.jpg" name="Razer OSVR" price="AOA 870.000,00" />
                <Product id={8} img="/Varjo Aero.jpg" name="Varjo Aero" price="AOA 440.000,00" />
            </div>
        </div>
    )
}
