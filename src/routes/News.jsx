import PromotionMini from '../components/PromotionMini';
import Header from '../components/Header';
import BrandIntro from '../components/BrandIntro';
import Shopping from '../components/Shopping';
import MainBtn from '../components/MainBtn';
import Footer from '../components/Footer';

export default function News() {
    return (
        <>
            <PromotionMini />
            <Header activeLink={2} />
            <main className="w-100">
                <BrandIntro title="Novidades" bgActive={true} slogan={false} />
                <Shopping titleDisplay={false} />
                <div className="more-options w-100 d-flex justify-content-center my-3">
                    <MainBtn text="Veja mais" />
                </div>
            </main>
            <Footer />
        </>
    )
}
