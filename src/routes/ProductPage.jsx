import PromotionMini from '../components/PromotionMini';
import Header from '../components/Header';
import MainProduct from '../components/MainProduct';
import Footer from '../components/Footer';
import { useParams } from 'react-router';

export default function ProductPage() {
    const { productId } = useParams()

    return (
        <>
            <PromotionMini />
            <Header />
            <MainProduct productId={productId} />
            <Footer />
        </>
    )
}
