import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Community.css'
import NewGroup from '../assets/NewGroup.png'

// name
// members:0
// about
// organizer: current user

// users-> type: admin

const modules = {

    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

const StartGroupQuestionsPage = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();


  const [groupDetails, setgroupDetails] = useState({
    title: '',
    members: 0,
    topics: '',
    about: '',
    organizer: '',
    type: ''
});

function handleUserInputChange(e) {
  if (e && e.target) {
    const { name, value } = e.target;
    setgroupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  } else {
    setgroupDetails((prevDetails) => ({
      ...prevDetails,
      about: e, 
    }));
  }
}

function saveDetails(e) {
  console.log(groupDetails);
  navigate('/community');
}

   
  return (
    <div>
      <Navbar/>
      <div className="startgrptop">
        <div className="startgrptopleft">
          <span>Empowering Lives, Embracing Hope: Together We Heal <br/> <span id='grpspan'>Start A New Support Group Now</span></span>
          <p>Creating a support group provides a safe haven for individuals grappling with mental or physical challenges, fostering understanding and solidarity. In this shared space, members find comfort, empathy, and practical coping strategies, transforming isolation into a powerful community of strength and resilience.</p>
        </div>
        <div className="startgrptopright">
        <img src={NewGroup} alt="" />
        </div>
      </div>
       <form onSubmit={saveDetails}>
        <h2>What will be your group called?</h2>
        <input value={groupDetails.title} onChange={handleUserInputChange} type="text" name='title' placeholder='Enter your support group name...' required/>
        <h2>Will this group address mental health or physical health issues?</h2>
        <input value={groupDetails.type} onChange={handleUserInputChange} type="text" name='type' placeholder='mental or physical' required/>
        <h2>What topics will be discussed in this group?</h2>
        <input value={groupDetails.topics} onChange={handleUserInputChange} type="text" name='topics' placeholder='Enter your support group topics...' required/>
        <h2>describe group</h2>
        <ReactQuill className="blogContent" value={groupDetails.about} 
            modules={modules} 
            formats={formats}
            name='about'
            onChange={handleUserInputChange} 
        />
        <button type='submit'>Submit details</button>
      </form>
    </div>
  )
}

export default StartGroupQuestionsPage
