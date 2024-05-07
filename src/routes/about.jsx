export default function AboutMe() {
  return (
    <>
      <div className="project-header">
        <p>Hi, I&apos;m Val!</p>
      </div>
      <div className="about-me-container">
        <img src="valsimg.png" alt="vals image" className="vals-img" />
        <div className="container">
          <i>I am a...</i>
          <a href="/projects" className="list-item">
            web developer
          </a>
          <a href="/wireframes" className="list-item">
            UI/UX enthusiast
          </a>
          {/* <a href="" target="_blank" className="list-item">
            digital artist
          </a> */}
          <a
            href="https://www.google.com/search?q=human+being+definition&oq=human+being+de&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIJCAgQLhgKGIAEMgcICRAAGIAEqAIAsAIA&sourceid=chrome&ie=UTF-8"
            target="_blank"
            className="list-item"
          >
            human being
          </a>
          {/* <a href="/hobbies" className="list-item">
            hobby hoarder
          </a> */}
          <a href="" className="list-item">
            {/* href="/muchomas" */}
            and much more
          </a>
        </div>
      </div>
    </>
  );
}
