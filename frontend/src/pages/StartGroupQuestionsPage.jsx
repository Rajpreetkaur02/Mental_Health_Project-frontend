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
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
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
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();


  const [groupDetails, setgroupDetails] = useState({
    title: '',
    members: 0,
    topics: '',
    about: '',
    organizer: '',
    type: '',
    location: ''
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
      <Navbar />
      <div className="startgrptop">
        <div className="startgrptopleft">
          <span>Empowering Lives, Embracing Hope: Together We Heal <br /> <span id='grpspan'>Start A New Support Group Now</span></span>
          <p>Creating a support group provides a safe haven for individuals grappling with mental or physical challenges, fostering understanding and solidarity. In this shared space, members find comfort, empathy, and practical coping strategies, transforming isolation into a powerful community of strength and resilience.</p>
        </div>
        <div className="startgrptopright">
          <img src={NewGroup} alt="" />
        </div>
      </div>
      <div className='quesheading'>
        <span>We make it easy to build a community</span>
        <p>It’s easy to quickly make new friends and be there for each other. Take the initiative.</p>
      </div>
      <form onSubmit={saveDetails}>
        <div className="grpquestioncontainer">
          <div className="grpques">
            <h2>First, select the location of your group.</h2>
            <input value={groupDetails.location} onChange={handleUserInputChange} type="text" name='location' placeholder='Enter your support group location...' required />
          </div>
          <div className="tip"><span id='tipheading'>Tip</span> <br /> <span>Meetup groups meet locally, in person or online. The location helps us to connect with people in your area.</span></div>
        </div>
        <div className="grpquestioncontainer">
          <div className="grpques">
            <h2>What will be your group called?</h2>
            <input value={groupDetails.title} onChange={handleUserInputChange} type="text" name='title' placeholder='Enter your support group name...' required />
          </div>
          <div className="tip"><span id='tipheading'>Tip</span> <br /> <span>Choose a name that will give people a clear idea of what the group is about.</span></div>
        </div>
        <div className="grpquestioncontainer">
          <div className="grpques">
            <h2>Will this group address mental health or physical health issues?</h2>
            <input value={groupDetails.type} onChange={handleUserInputChange} type="text" name='type' placeholder='mental or physical' required />
          </div>
          <div className="tip"><span id='tipheading'>Tip</span> <br /> <span>Mention what your group will be focusing on, mental health issues or physical health issues.</span></div>
        </div>
        <div className="grpquestioncontainer">
          <div className="grpques">
            <h2>What topics will be discussed in this group?</h2>
            <input value={groupDetails.topics} onChange={handleUserInputChange} type="text" name='topics' placeholder='Enter your support group topics...' required />
          </div>
          <div className="tip"><span id='tipheading'>Tip</span> <br /> <span>Be specific! This will help us promote your group to the right people. Try to mention at least 3 topics before moving onto the next step.</span></div>
        </div>

        <div className="grpdesccontainer">
          <div className="descques">
            <h2>describe your group</h2>
            <p>People will see this when we promote your group. We care about human connection, so someone will review your group to make sure it meets our community guidelines.</p>
            <ReactQuill className="descContent" value={groupDetails.about}
              modules={modules}
              formats={formats}
              name='about'
              onChange={handleUserInputChange}
            />
          </div>
          <div className="desctip">
          <div id="tip"><span id='tipheading'>Tip</span> <br /> 
          <span>
          Questions to consider:
          <ul>
            <li>What is the group goal?</li>
            <li>Who are you hoping to meet?</li>
            <li>What will you do at your events?</li>
          </ul>
          </span>
          </div>
          </div>
        </div>
      </form>
      <div className="grpguidlines">
        <input type="checkbox" onChange={() => {setCheck(!check)}}/>
        <span>I have agreed to all the community guidelines</span>
      </div>
      {check && (
        <div className="grpbtn">
          <button type='submit' className='grpbtn'>Submit details</button>
        </div>
      )}
    </div>
  )
}

export default StartGroupQuestionsPage
