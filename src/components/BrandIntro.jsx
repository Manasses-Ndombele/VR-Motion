import '../styles/components/brand-intro.sass';

export default function BrandIntro(props) {
    return (
        <div className={`${props.bgActive ? 'bg-active' : ''} brand-intro d-flex flex-column align-items-center py-5`.trimStart()}>
            <h1 className="text-uppercase fw-bold text-center">{props.title}</h1>
            <p className={`${props.slogan == false ? 'd-none' : ''} text-center py-2 position-relative`.trimStart()}>{props.slogan}</p>
        </div>
    )
}
