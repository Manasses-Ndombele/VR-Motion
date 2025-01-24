import '../styles/components/main-btn.sass';

export default function MainBtn(props) {
    return (
        <button type="button" className={`${props.expand ? 'w-100' : ''} main-btn border-0 main-btn border-0 py-2`}>{props.text}</button>
    )
}
