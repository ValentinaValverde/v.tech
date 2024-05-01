export default function HomeContact() {
  return (
    <>
      <div className="home-contact">
        <div className="container">
          <p className="upper">Keep in touch</p>
          <p>
            You can check out more of my work on{' '}
            <a
              href="https://github.com/ValentinaValverde"
              target="_blank"
              className="link"
            >
              Github
            </a>{' '}
            or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/valentina-valverde-1a179227a/"
              target="_blank"
              className="link"
            >
              LinkedIn
            </a>
            . <br /> I look forward to hearing from you!
          </p>
          <button className="resume-button">
            <a
              href="https://drive.google.com/file/d/1yQeU3WHlDtML6z0SHOnj7z7TKJrX8sfw/view"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
