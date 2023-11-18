import React from 'react';
import './GeneralUserDetails.css';
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link } from 'react-router-dom';

function GeneralUserDetails() {
  return (
    <>
        <div className='mainGeneralDetails'>
            <h1>Provide some extra details to get a personalized plan - </h1>
            <form>
                <div className='ageTag'>
                <label>Age Range </label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="8-10">8-10</option>
                        <option value="">11-13</option>
                        <option value="">14-15</option>
                        <option value="">16-17</option>
                        <option value="">18-24</option>
                        <option value="">25-34</option>
                        <option value="">35-44</option>
                        <option value="">45-54</option>
                        <option value="">55-64</option>
                        <option value="">65+</option>
                    </select>
                </div>
                <div className='genderTag'>
                    <label>Gender</label>
                    <div className='genderButtons'>
                        <div>FEMALE</div>
                        <div>MALE</div>
                        <div>OTHERS</div>
                    </div>
                </div>
                <div className='income'>
                    <label>Household Income</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Less than ₹2,00,000</option>
                        <option value="">₹2,00,000 - ₹5,00,000</option>
                        <option value="">₹5,00,000 - ₹10,00,000</option>
                        <option value="">₹10,00,000 - ₹20,00,000</option>
                        <option value="">₹20,00,000 +</option>
                    </select>
                </div>
                <button type='submit'><Link to={{pathname: "/dashboard"}}>Go To Dashboard<AiOutlineArrowRight/></Link></button>
            </form>
        </div>
    </>
  )
}

export default GeneralUserDetails