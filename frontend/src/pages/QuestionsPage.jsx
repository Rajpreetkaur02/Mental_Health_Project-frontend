import {React, useState} from 'react';
import questionsData from '../utils/questions.js';
import '../styles/QuestionsPage.css';
import QuestionPart from '../components/QuestionPart.jsx';
import image from '../assets/quesBackground.png';
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from 'react-router-dom';

function QuestionsPage() {
    const url = 'http://127.0.0.1:5000/depdet/';
    const [values, setValues] = useState([]);
    const [result, setResult] = useState(null);
    const [index, setIndex] = useState(0);
    const [questionsActive, setQuestionsActive] = useState(false);
    const [answerActive, setAnswerActive] = useState(false);
  
    function onNextClick() {
        setIndex(index => index + 1);
    }

    const submitResults = async () => {
        setQuestionsActive(false);
        setAnswerActive(true);
        const currentValues = values;
        console.log(currentValues);
        const currentModel = 7;
    
        if (currentModel === -1) {
            return;
        }
    
        const obj = { values: currentValues, model: currentModel };
        const jsonStr = JSON.stringify(obj);
    
        try {
        const resp = await fetch(url + jsonStr, { signal: new AbortController().signal, timeout: 2000 })
            .then(response => response.json());
  
        displayResults(resp.prediction, currentModel);
        } catch (err) {
            displayResults(-1, currentModel);
        }
    };
  
    const displayResults = (result, currentModel) => {
        let resultText;
    
        if (result > 0.5) {
            resultText = 'High probability of depression';
        } else {
            resultText = 'Low probability of depression';
        }
    
        if (currentModel === 5 || currentModel === 7) {
            resultText = `${resultText}: ${result * 100}%`;
        }
    
        if (result === -1) {
            resultText = 'Connection timed out!';
        }
    
        setResult(resultText);
    };

    return (
        <div style={{backgroundImage:`url(${image})`, height:'100vh', width:'100vw', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
        {/* <h1>Take the assessment</h1> */}
            {!answerActive && !questionsActive && (
                <div className="assessmentHead">
                    <h1>Start The Assessment</h1>
                    <AiOutlineArrowRight onClick={() => setQuestionsActive(current => !current)} className='nextArrow'/>
                </div>
            )}
            {questionsActive && (
                <div className="radio-parent">
                    {questionsData.slice(index, index + 1).map(question => 
                        <QuestionPart setValues={setValues} question={question} index={index}/>
                    )}  
                
                    {index < questionsData.length - 1 ? (
                        <button onClick={onNextClick}>Next Question <AiOutlineArrowRight/></button>  
                    ): (
                        <button onClick={submitResults} type="button" id="submit-btn">Submit</button>
                    )}
                </div>
            )} 
            {answerActive && (
                <div id="result">
                    <h1>{result}</h1>
                    <button><Link className='dashLink' to={{pathname: '/dashboard'}}>Go To Dashboard <AiOutlineArrowRight/></Link></button>
                </div>
            )}
        </div>
    )
}

export default QuestionsPage