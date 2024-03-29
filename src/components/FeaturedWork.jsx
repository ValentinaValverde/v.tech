import ProjectCard from "./Project";

export default function FeaturedWork() {
  return (
    <>
      <p className="ft-title">ft. work</p>

      <div className="ft-work-container">
        <ProjectCard
          info={{
            projectname: "malovadesigns",
            img: "./public/malova.png",
            title: "Malova Designs",
            desc: "E-Commerce Storefront for a small business",
          }}
        />

        <ProjectCard
          info={{
            projectname: "sheepandwolves",
            img: "./public/sheep.png",
            title: "Sheep & Wolves",
            desc: "An Interactive Story",
          }}
        />

        <ProjectCard
          info={{
            projectname: "nomnomnavigator",
            img: "./public/nomnom.png",
            title: "NomNom Navigator",
            desc: "WWC Hackathon Project",
          }}
        />

        <ProjectCard
          info={{
            projectname: "",
            img: "./public/kitty-logo.png",
            title: "More",
            desc: "Latest Projects",
          }}
        />
      </div>

      {/* <div className="ft-work-container">
        <div className="ft-work-card">
          <img
            src="https://i.pinimg.com/564x/8f/a0/73/8fa0732d135add9371a718f1d246b628.jpg"
            alt=""
            className="image"
          />
          <div className="card-info mar">
            <p>Malova Designs</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>

        <div className="ft-work-card">
          <img
            src="https://i.pinimg.com/564x/8f/a0/73/8fa0732d135add9371a718f1d246b628.jpg"
            alt=""
            className="image"
          />
          <div className="card-info mar">
            <p>Sheep & Wolves</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>

        <div className="ft-work-card">
          <img
            src="https://i.pinimg.com/564x/8f/a0/73/8fa0732d135add9371a718f1d246b628.jpg"
            alt=""
            className="image"
          />
          <div className="card-info mar">
            <p>NomNom Navigator</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>

        <div className="ft-work-card">
          <img
            src="https://i.pinimg.com/564x/8f/a0/73/8fa0732d135add9371a718f1d246b628.jpg"
            alt=""
            className="image"
          />
          <div className="card-info mar">
            <p>More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>
      </div> */}
    </>
  );
}
