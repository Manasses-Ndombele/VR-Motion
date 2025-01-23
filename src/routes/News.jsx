import PromotionMini from '../components/PromotionMini';
import Header from '../components/Header';
import Cart from '../components/Cart';
import BrandIntro from '../components/BrandIntro';
import Shopping from '../components/Shopping';
import MainBtn from '../components/MainBtn';
import Footer from '../components/Footer';

export default function News() {
    return (
        <>
            <PromotionMini />
            <Header />
            <Cart />
            <main>
                <BrandIntro title="Novidades" />
                <Shopping titleDisplay={false} />
                <MainBtn text="Veja mais" />
            </main>
            <Footer />
        </>
    )
}
