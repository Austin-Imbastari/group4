import './event.css';

export default function Event(props) {
    return (
        <button className='event'
            style={{ backgroundImage: `url(${props.picture})` }}


        >hello
            {props.category}
            {props.title}
            {props.host}
            {props.data}
            {props.attendents}
            {props.saved}    </button>
    )
}
