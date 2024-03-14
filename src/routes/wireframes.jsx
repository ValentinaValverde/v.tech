import WireframeCard from "../components/WireframeCard";

export default function Wireframes() {
  return (
    <>
      <div className="project-header">
        <p>Wireframes!</p>
      </div>
      <div className="wireframe-container">
        <WireframeCard
          info={{
            title: "Gremolina Wireframe",
            img: "./public/gremolina.png",
          }}
        />

        <WireframeCard
          info={{
            title: "Portfolio Wireframe",
            img: "./public/portfolio.png",
          }}
        />

        <WireframeCard
          info={{
            title: "Atlas Local Wireframe",
            img: "./public/atlo.png",
          }}
        />
      </div>
      <div className="space"></div>
    </>
  );
}
