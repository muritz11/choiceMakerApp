import Question from './mini/questionInput';
import { useState } from "react";
import { Link } from "react-router-dom";
import PopList from './mini/popularList';


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

            //first check if local storage is empty
            //let popItem = localStorage.getItem("popQuestion")
            if (props.popQ) {
                props.handlePop([...props.popQ, question])
                // let popItem = [...props.popQ, question]
                // localStorage.setItem("popQuestion", JSON.stringify(popItem))
            } else {
                // localStorage.setItem("popQuestion", JSON.stringify([question]))
                props.handlePop([question])
            }


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
            }, 5000);
        }
    }

    function handlePopClick(e) {
        setQuestion(e.target.innerHTML)
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
        <div className='choice'>
            { err && <p className='red'>{ err }</p> }
            <form>
                <Question val={question} change={handleQuestion} />
                <div className='options'>
                    <input name='opt1' placeholder="What's your first option?" onChange={handleOpt} value={opt1} type='text' />
                    <input name='opt2' placeholder="What's the second option?*" onChange={handleOpt} value={opt2} type='text' />
                    <input name='opt3' placeholder='Any other option?' onChange={handleOpt} value={opt3} type='text' />
                    <input name='opt4' placeholder='Any other option?' onChange={handleOpt} value={opt4} type='text' />
                </div>
                <Link to='/answer' onClick={handleSave} className='btn'>
                    <span>&#9655;</span>
                </Link>
            </form>

            { props.popQ && 
            <div>
                <h3>Popular Questions</h3>
                <PopList data={props.popQ} clickFunc={handlePopClick} />
            </div> 
            }
        </div>
    )
}
