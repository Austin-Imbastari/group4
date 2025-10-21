import './event.css';

export default function Event(props) {
    return (
        <button className='event'
            style={{ backgroundImage: `url(${props.picture})` }}
        >
            <top>
                {props.category}
                {props.saved ? ":)" : ":("}
            </top>
            <title>
                {props.title}
            </title>
            <footer>
                {props.host}
                {props.date}
                {props.attendents}
            </footer>
        </button>
    )
}
