import WireframeCard from '../components/WireframeCard';

export default function Wireframes() {
  return (
    <>
      <div className="project-header">
        <p>Wireframes!</p>
        <p className="sub">(made with Figma)</p>
      </div>
      <div className="wireframe-container">
        <WireframeCard
          info={{
            title: 'Gremolina Wireframe',
            img: '/gremolina.png',
          }}
        />

        <WireframeCard
          info={{
            title: 'Portfolio Wireframe',
            img: '/portfolio.png',
          }}
        />

        <WireframeCard
          info={{
            title: 'Atlas Local Wireframe',
            img: '/atlo.png',
          }}
        />
      </div>
      <div className="space"></div>
    </>
  );
}
