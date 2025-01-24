import PromotionMini from '../components/PromotionMini';
import Header from '../components/Header';
import MainProduct from '../components/MainProduct';
import Footer from '../components/Footer';
import { useParams } from 'react-router';

export default function ProductPage() {
    const { productId } = useParams()
    console.log(productId)

    return (
        <>
            <PromotionMini />
            <Header activeLink={null} />
            <MainProduct productId={12} img="/HTC Vive.webp" name="HTC Vive" price="AOA 180.000,00" maxStock="20" />
            <Footer />
        </>
    )
}
