import ProjectCard from "../components/Project";

export default function ProjectsPage() {
  return (
    <>
      <div>
        <div className="projects">
          <p>projects!</p>
        </div>

        <div className="ft-work-container">
          <ProjectCard
            info={{
              projectname: "malovadesigns",
              img: "../public/malova.png",
              title: "Malova Designs",
              desc: "E-Commerce Storefront for a small business",
            }}
          />

          <ProjectCard
            info={{
              projectname: "sheepandwolves",
              img: "../public/sheep.png",
              title: "Sheep & Wolves",
              desc: "An Interactive Story",
            }}
          />

          <ProjectCard
            info={{
              projectname: "nomnomnavigator",
              img: "../public/nomnom.png",
              title: "NomNom Navigator",
              desc: "WWC Hackathon Project",
            }}
          />

          {/* <ProjectCard
            info={{
              projectname: "responsivedesign",
              img: "../public/responsive.png",
              title: "Responsive Design ",
              desc: "Demonstrate responsivity to a class",
            }}
          /> */}

          {/* <ProjectCard
            info={{
              projectname: "pythongame",
              img: "../public/goose.png",
              title: "Python Game ",
              desc: "Goose vs. Birds",
            }}
          /> */}

          {/* THIS IS NOT A PROJECT CARD BECAUSE THE LINK IS NOT PROJECTS/ */}
          <a href="/wireframes" className="ft-work-card">
            <img
              src="../public/kitty-headphones.png"
              alt=""
              className="image"
            />
            <div className="card-info">
              <div>
                <p>Wireframes</p>
                <i>Ideas that never became reality</i>
                <p></p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </a>
        </div>

        <div className="space"></div>
      </div>
    </>
  );
}
