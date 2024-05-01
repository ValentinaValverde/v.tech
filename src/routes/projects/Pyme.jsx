import { TopWithButton } from '../../components/ProjectComponents/Top';

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
      <p className="center">***WORK IN PROGRESS***</p>
    </>
  );
}
