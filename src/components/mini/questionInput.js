
export default function Question(props) {

    return (
        <div className='question'>
            <input placeholder="Enter question*" type='text' id='question' value={props.val} onChange={props.change} />
        </div>
    )
}
