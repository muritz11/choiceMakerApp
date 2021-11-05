
export default function Question(props) {

    return (
        <div className='question'>
            <input placeholder="What's on your mind?*" type='text' id='question' value={props.val} onChange={props.change} />
        </div>
    )
}
