import {React, useState} from 'react';

function QuestionsPage() {
    const url = 'http://127.0.0.1:5000/depdet/';
    const [values, setValues] = useState([]);
    const [model, setModel] = useState(null);
    const [result, setResult] = useState(null);
  
    const submitResults = async () => {
        const currentValues = getValues();
        const currentModel = getModel();
    
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
  
    const getValues = () => {
        const radio = document.querySelector("div.radio-parent");
        const nameList = ['envsat', 'achievesat', 'finstress', 'insomnia', 'anxiety', 'deprived', 'abused', 'cheated', 'threatened', 'suicidal', 'inferiority', 'reccon', 'recloss'];
    
        const currentValues = nameList.map(name => {
            return radio.querySelector(`input[name=${name}]:checked`).value;
        });
    
        setValues(currentValues.map(x => Number(x)));
        console.log(values);
        return values;
    };
  
    const getModel = () => {
        const radio = document.querySelector("div.radio-parent");
        const option = radio.querySelector("#model-select").value;
        setModel(Number(option));
        return model;
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
        <>
        <h1>Take </h1>
            <div className="radio-parent">
                <fieldset>
                    <legend>Are you satisfied with the state of your environment?</legend>
                    <div>
                        <input type="radio" id="yes" name="envsat" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="envsat" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Are you satisfied with your personal achievements?</legend>
                    <div>
                        <input type="radio" id="yes" name="achievesat" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="achievesat" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Are you experiencing financial stress?</legend>
                    <div>
                        <input type="radio" id="yes" name="finstress" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="finstress" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Do you suffer from insomnia?</legend>
                    <div>
                        <input type="radio" id="yes" name="insomnia" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="insomnia" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Do you suffer from anxiety?</legend>
                    <div>
                        <input type="radio" id="yes" name="anxiety" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="anxiety" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Do you feel you are deprived of affection?</legend>
                    <div>
                        <input type="radio" id="yes" name="deprived" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="deprived" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Have you been recently subject to abuse?</legend>
                    <div>
                        <input type="radio" id="yes" name="abused" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="abused" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Have you been recently cheated on?</legend>
                    <div>
                        <input type="radio" id="yes" name="cheated" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="cheated" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Have you been recently threatened?</legend>
                    <div>
                        <input type="radio" id="yes" name="threatened" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="threatened" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Do you experience suicidal thoughts?</legend>
                    <div>
                        <input type="radio" id="yes" name="suicidal" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="suicidal" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Do you experience feelings of inferiority over others?</legend>
                    <div>
                        <input type="radio" id="yes" name="inferiority" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="inferiority" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Have you experienced a recent conflict with someone?</legend>
                    <div>
                        <input type="radio" id="yes" name="reccon" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="reccon" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Have you recently experienced the loss of a loved one?</legend>
                    <div>
                        <input type="radio" id="yes" name="recloss" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="recloss" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Do you feel frequent pain and ache in your body?</legend>
                    <div>
                        <input type="radio" id="yes" name="ache" value="1"/>
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="ache" value="0" defaultChecked/>
                        <label for="no">No</label>
                    </div>
                </fieldset>
                <div id="radio-options">
                    <select id="model-select">
                        <option value="-1">---Select Model---</option>
                        <option value="1">Decision tree</option>
                        <option value="2">Naive-Bayes</option>
                        <option value="3">SVM</option>
                        <option value="4">KNN</option>
                        <option value="5">Random forest (%)</option>
                        <option value="6">Logistic regression</option>
                        <option value="7">DNN (%)</option>
                    </select>
                    <button onClick={submitResults} type="button" id="submit-btn">Submit</button>
                </div>
            </div>

            <div id="result">
                <p>
                    Choose a model of your choice and submit to generate results
                </p>
                <p>{result}</p>
            </div>
        </>
  )
}

export default QuestionsPage