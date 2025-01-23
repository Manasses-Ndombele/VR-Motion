export default function BrandIntro(props) {
    return (
        <div className={`${props.bgActive ? 'bg-active' : ''} brand-intro`.trimStart()}>
            <h1>{props.title}</h1>
            <p className={!props.slogan && 'd-none'}>{props.slogan}</p>
        </div>
    )
}
