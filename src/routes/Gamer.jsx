import PromotionMini from '../components/PromotionMini';
import Header from '../components/Header';
import BrandIntro from '../components/BrandIntro';
import Shopping from '../components/Shopping';
import MainBtn from '../components/MainBtn';
import Footer from '../components/Footer';

export default function Gamer() {
    return (
        <>
            <PromotionMini />
            <Header />
            <main>
                <BrandIntro title="Óculos VR Gamers" />
                <Shopping titleDisplay={false} />
                <MainBtn text="Veja mais" />
            </main>
            <Footer />
        </>
    )
}
