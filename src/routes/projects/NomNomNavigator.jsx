import { TopWithButton } from '../../components/ProjectComponents/Top';
import { ForWho } from '../../components/ProjectComponents/ForWho';
import { TechSide } from '../../components/ProjectComponents/TechSide';

export default function NomNomNavigator() {
  return (
    <>
      <TopWithButton
        project={{
          title: 'NomNom Navigator',
          description: 'An app that helps recommend restaurants near you.',
          buttontext: 'Github',
          buttonlink: 'https://github.com/JeffLi117/NomNomNavigator',
        }}
      />

      <ForWho
        info={{
          img: '/wwc_hackathon_cert.png',
          script:
            'NomNom Navigator was my first collaborative project. I worked with three other people to create an app that helped recomment restaurants based on the users selection of rating, cuisine, and more. I learned how to share a repo, as well as how to work within a team environment. I also learned technologies that I was not familiar with, like React Native and Android Studios. I learned how to ask the right questions and accept my role on the team, as I had previosly only worked on projects by myself. This project was for WomenWhoCodes App Deploy Hackathon Challenge.',
          objective: 'About the Project',
        }}
      />

      <TechSide
        info={{
          title: 'Tech',
          tech1: 'React Native',
          tech2: 'Android Studios',
        }}
      />
    </>
  );
}
