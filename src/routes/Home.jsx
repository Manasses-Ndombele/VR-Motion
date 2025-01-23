import PromotionMini from '../components/PromotionMini';
import Header from '../components/Header';
import BrandIntro from '../components/BrandIntro';
import CategoriesContainer from '../components/CategoriesContainer';
import Shopping from '../components/Shopping';
import MainBtn from '../components/MainBtn';
import AdsArea from '../components/AdsArea';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <PromotionMini />
            <Header />
            <main>
                <BrandIntro title="VR Motion" slogan="Vendo o mundo a tua maneira!" />
                <CategoriesContainer />
                <Shopping titleDisplay={true} />
                <MainBtn text="Veja mais" />
                <AdsArea />
            </main>
            <Footer />
        </>
    )
}
