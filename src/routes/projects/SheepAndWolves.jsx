import { TopWithButton } from '../../components/ProjectComponents/Top';
import { LargeImageView } from '../../components/ProjectComponents/LargeImage';
import { ForWho } from '../../components/ProjectComponents/ForWho';
import { TechSide } from '../../components/ProjectComponents/TechSide';

export default function SheepAndWolves() {
  return (
    <>
      <TopWithButton
        project={{
          title: 'Sheep & Wolves',
          description: 'An Interactive Story',
          buttontext: 'play the game',
          buttonlink: 'https://main--sheepandwolves.netlify.app/html/main.html',
        }}
      />
      <LargeImageView
        info={{
          img: '/wolves1.png',
          desc: 'Landing Page',
          githublink: 'https://github.com/ValentinaValverde/sheepAndWolves',
        }}
      />
      <ForWho
        info={{
          img: '/wolves2.png',
          script:
            'This was an in-class assignment for Carolina Code School. The purpose of the assignment was to create a game that is able to keep track of health stats across pages. This site is built bare-to-the-bone, no frameworks included. I created a game that was more of an interactive story; you choose your path as you go, and as a result gain and lose health and self-esteem. I wanted to create a game that was a little comfy, a little scary, a little interesting, but very simple. If you get the chance to play, let me know how you like it!',
          objective: 'Objective',
        }}
      />

      <TechSide
        info={{
          title: 'Tech',
          tech1: 'HTML/CSS',
          tech2: 'Javascript',
        }}
      />
    </>
  );
}
