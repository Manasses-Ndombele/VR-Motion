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
            <Header activeLink={0} />
            <main className="w-100">
                <BrandIntro title="VR Motion" slogan="Veja o mundo a tua maneira!" />
                <CategoriesContainer />
                <Shopping titleDisplay={true} />
                <div className="more-options w-100 d-flex justify-content-center my-3">
                    <MainBtn text="Veja mais" />
                </div>
                <AdsArea />
            </main>
            <Footer />
        </>
    )
}
