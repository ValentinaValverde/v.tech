import { TopWithButton } from '../../components/ProjectComponents/Top';
import { ForWho } from '../../components/ProjectComponents/ForWho';
import { CoolThing } from '../../components/ProjectComponents/CoolThing';
import { TechSide } from '../../components/ProjectComponents/TechSide';

export default function Pyme() {
  return (
    <>
      <TopWithButton
        project={{
          title: 'Pyme',
          description: 'A digital marketplace for small businesses',
          buttontext: 'Github',
          buttonlink: 'https://github.com/ValentinaValverde/Pyme',
        }}
      />
      {/* <p className="center">***WORK IN PROGRESS***</p> */}

      <ForWho
        info={{
          img: '/pyme.png',
          script:
            'This project was a collaborative team project for the Develop Carolina Apprenticeship Program. I worked with two other students to create a digital marketplace for small businesses. With our combined talents, we were able to create both a customer-facing side and business owner-facing side. Our main focus was to promote the small businesses and not their products.',
          objective: 'What is this for?',
        }}
      />

      {/* <CoolThing
        info={{
          title: '',
          desc: '',
          img: '',
        }}
      /> */}

      <TechSide
        info={{
          title: 'Tech',
          tech1: 'NextJS',
          tech2: 'Clerk',
          tech3: 'MongoDB',
          tech4: 'MUI',
          tech5: 'DaisyUI',
        }}
      />
    </>
  );
}
