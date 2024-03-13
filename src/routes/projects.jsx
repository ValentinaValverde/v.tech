export default function ProjectsPage() {
  return (
    <>
      <div>
        <div className="projects">
          <p>projects!</p>
        </div>

        <div className="ft-work-container">
          <a href="/projects/malovadesigns" className="ft-work-card">
            <img src="./public/malova.png" alt="" className="image" />
            <div className="card-info">
              <div>
                <p>Malova Designs</p>
                <i>E-Commerce Storefront for a small business</i>
                <p></p>
              </div>
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
          </a>

          <a href="/projects/sheepandwolves" className="ft-work-card">
            <img src="./public/sheep.png" alt="" className="image" />
            <div className="card-info">
              <div>
                <p>Sheep & Wolves</p>
                <i>Interactive Story</i>
                <p></p>
              </div>
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
          </a>
          <a href="/projects/nomnomnavigator" className="ft-work-card">
            <img src="./public/nomnom.png" alt="" className="image" />
            <div className="card-info">
              <div>
                <p>NomNom Navigator</p>
                <i>WWC Hackathon Project</i>
                <p></p>
              </div>
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
          </a>
          <a href="/projects/responsivedesign" className="ft-work-card">
            <img src="./public/responsive.png" alt="" className="image" />
            <div className="card-info">
              <div>
                <p>Responsive Design </p>
                <i>Demonstrate responsivity to a class</i>
                <p></p>
              </div>{" "}
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
          </a>
          <a href="/projects/pythongame" className="ft-work-card">
            <img src="./public/goose.png" alt="" className="image" />
            <div className="card-info">
              <div>
                <p>Python Game</p>
                <i>Goose vs birds</i>
                <p></p>
              </div>
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
          </a>
          <a href="/wireframes" className="ft-work-card">
            {/* HERE: REPLACE EMPTY IMAGE WITH IMAGE OF PORTFOLIO */}
            <img
              src="https://i.pinimg.com/564x/8f/a0/73/8fa0732d135add9371a718f1d246b628.jpg"
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
          </a>
        </div>
      </div>
    </>
  );
}
