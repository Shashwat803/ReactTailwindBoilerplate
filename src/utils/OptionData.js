import teacher from '../assets/teacher.png'
import women from '../assets/woman.png'
import parent from '../assets/parent.png'
import lifelong from '../assets/lifelong.png'
import boy from '../assets/boy.png'
import schoolboy from '../assets/schoolboy.png'
import graph from '../assets/laptop.png'
import newTopic from '../assets/earth-globe.png'
import thinking from '../assets/design-thinking.png'
import target from '../assets/target.png'
import eyes from '../assets/eyes.png'
const optionData = [
    {
      id: 1,
      option: <span><strong>Student</strong> or soon to be enrolled</span>,
      imagePath:schoolboy
    },
    {
      id: 2,
      option: <span><strong> Professional</strong> pursuing a career</span>,
      imagePath: women
    },
    {
      id: 3,
      option: <span><strong> Parent</strong> of a school-age chikd</span>,
      imagePath: parent
    },
    {
      id: 4,
      option: <strong> Lifelong Learner</strong>,
      imagePath: lifelong
    },
    {
      id: 5,
      option: <strong>Teacher</strong>,
      imagePath: teacher
    },
    {
      id: 6,
      option: "Other",
      imagePath:boy
    },
  ];

  const SecondOptionData = [
    {
      id: 1,
      option: "Learning specific skills to advance my career",
      imagePath:graph
    },
    {
      id: 2,
      option: "Exporing new topics I'm interested in",
      imagePath: newTopic
    },
    {
      id: 3,
      option: "Refreshing my math foundations",
      imagePath: thinking
    },
    {
      id: 4,
      option: "Exercising my brain to stay sharp",
      imagePath: target
    },
    {
      id: 5,
      option: "Something else",
      imagePath: eyes
    },

  ];

  export  {optionData, SecondOptionData}