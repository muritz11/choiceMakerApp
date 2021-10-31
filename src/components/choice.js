import Question from './mini/questionInput';
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Choice(props) {

    const [question, setQuestion] = useState('')
    const [opt1, setOpt1] = useState('')
    const [opt2, setOpt2] = useState('')
    const [opt3, setOpt3] = useState('')
    const [opt4, setOpt4] = useState('')
    const [err, setErr] = useState(false)
  
    function handleQuestion(e) {
        switch (e.target.id) {
            case 'question':
            setQuestion(e.target.value);
            break;
            
            default:
            alert('sorry, unknown field');
            break;
        }
    }

    function handleSave(e) {
        if (question !== '' && opt1 !== '' && opt2 !== '') {

            props.handleQuest(question)

            let arr = [];
            arr.push(opt1)
            arr.push(opt2)

            
            if (opt3 !== '') {
                arr.push(opt3)
            }
            
            if (opt4 !== '') {
                arr.push(opt4)
            }
            
            props.handleOption(arr)


        } else {
            e.preventDefault()
            setErr('Question, option 1 and option 2 fields are required')
            setTimeout(() => {
                setErr(false)
            }, 3000);
        }
    }

    
    function handleOpt(e) {
        switch (e.target.name) {
            case 'opt1':
            setOpt1(e.target.value);
            break;
            
            case 'opt2':
            setOpt2(e.target.value);
            break;
            
            case 'opt3':
            setOpt3(e.target.value);
            break;
            
            case 'opt4':
            setOpt4(e.target.value);
            break;
            
            default:
            alert('sorry, unknown field');
            break;
        }
    }


  

    return (
        <div>
            <form>
                <Question val={question} change={handleQuestion} />
                <div className='options'>
                    <input name='opt1' placeholder='Enter option 1*' onChange={handleOpt} value={opt1} type='text' />
                    <input name='opt2' placeholder='Enter option 2*' onChange={handleOpt} value={opt2} type='text' />
                    <input name='opt3' placeholder='Enter option 3' onChange={handleOpt} value={opt3} type='text' />
                    <input name='opt4' placeholder='Enter option 4' onChange={handleOpt} value={opt4} type='text' />
                </div>
                { err && <p className='red'>{ err }</p> }
                <Link to='/answer' onClick={handleSave} className='btn'>
                    &gt;
                </Link>
            </form>
        </div>
    )
}