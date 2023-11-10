import {React, useState, useEffect} from 'react';
import questionsData from '../utils/questions.js';
import '../styles/QuestionsPage.css';
import QuestionPart from '../components/QuestionPart.jsx';
import image from '../assets/quesBackground-2.png';
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from 'react-router-dom';

function QuestionsPage() {
    const [loading, setLoading] = useState(false);
    const url = 'http://127.0.0.1:5000/depdet/';
    const [values, setValues] = useState([]);
    const [result, setResult] = useState(null);
    const [index, setIndex] = useState(0);
    const [questionsActive, setQuestionsActive] = useState(false);
    const [answerActive, setAnswerActive] = useState(false);
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    function onNextClick() {
        if (values[index] != null) {
            setIndex(index => index + 1);
            setTimeout(() => {
                setIsVisible(false)
            },-1000)
            setTimeout(() => {
                setIsVisible(true)
            },500)
        } else {
            setError("Answer this question first!");
        }
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
        <div  style={{backgroundImage:`url(${image})`, height:'100vh', width:'100vw', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
        {loading ? (
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        ) : (
        <div>
            {!answerActive && !questionsActive && (
                <div className="assessmentHead">
                    <h1>Start The Assessment</h1>
                    <AiOutlineArrowRight onClick={() => setQuestionsActive(current => !current)} className='nextArrow'/>
                </div>
            )}

            {questionsActive && (
                <div className="radio-parent">
                    {questionsData.slice(index, index + 1).map(question => 
                        <div className={`content ${isVisible ? 'visible' : ''}`}>
                            <QuestionPart setError={setError} setValues={setValues} question={question} index={index}/>
                        </div>
                    )}  

                    {index < questionsData.length - 1 ? (
                        <button onClick={onNextClick}>Next Question <AiOutlineArrowRight/></button>  
                    ): (
                        <button onClick={submitResults} type="button" id="submit-btn">Submit</button>
                    )}

                    {error === 'Answer this question first!' && (
                        <h2 style={{color:'red', animation:'animate 1.5s linear infinite'}}>{error}</h2>
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
      )}
      </div>
    )
}

export default QuestionsPage