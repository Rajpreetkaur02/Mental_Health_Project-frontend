import mentalImg from '../assets/mentalHealth2.jpg';
import griefImg from '../assets/grief.png';
import stressImg from '../assets/stress.png';
import anxietyImg from '../assets/anxiety.png';
import obeseImg from '../assets/obese.png';
import menstruationImg from '../assets/menstrual.png';
import drinkingImg from '../assets/drinking.png';
import smokingImg from '../assets/stop_smoking.jpg';

const data = [
    {
        img: mentalImg,
        heading: 'Depression',
        details: 'If you are struggling with fatigue, a low mood, demotivation, increased irritability and constantly feeling drained, it might be time to get help.',
        type: 'mental'
    },

    {
        img: anxietyImg,
        heading: 'Anxiety',
        details: 'Constantly worried about how your day is going? Unable to calm your restless mind? Find ways to keep anxiety at bay by connecting with an expert.',
        type: 'mental'
    },

    {
        img: stressImg,
        heading: 'Stress',
        details: 'Are you overwhelmed and looking for a way to manage your stress levels? Our mental health providers can help you tackle these overwhelming emotions one step at a time.',
        type: 'mental'
    },

    {
        img: griefImg,
        heading: 'Grief',
        details: 'Grief is a very personal experience and there’s no fixed way to cope with it. If you’re unable to process your painful emotions or make sense of loss, reach out today.',
        type: 'mental'
    },

    {
        img: smokingImg,
        heading: 'Stop Smoking',
        details: "If you're struggling with fatigue, a low mood, demotivation, increased irritability and constantly feeling drained, it might be time to get help.",
        type: 'physical'
    },

    {
        img: drinkingImg,
        heading: 'Stop Drinking',
        details: "Are you overwhelmed and looking for a way to manage your stress levels? Our mental health providers can help you tackle these overwhelming emotions one step at a time.",
        type: 'physical'
    },

    {
        img: obeseImg,
        heading: 'Stop Obesity',
        details: "Grief is a very personal experience and there’s no fixed way to cope with it. If you’re unable to process your painful emotions or make sense of loss, reach out today.",
        type: 'physical'
    },

    {
        img: menstruationImg,
        heading: 'Avoid Mood Swings in Menstruation',
        details: "Constantly worried about how your day is going? Unable to calm your restless mind? Find ways to keep anxiety at bay by connecting with an expert.",
        type: 'physical'
    }
]

export default data;