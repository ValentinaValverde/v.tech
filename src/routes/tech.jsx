import {
  Languages,
  Frameworks,
  Libraries,
  Databases,
  CMS,
  //   DevTools,
} from "../components/TechComponents";

export default function Tech() {
  return (
    <>
      <div className="project-header">
        <p>Tech!</p>
      </div>
      <div className="tech-container">
        <Languages />
        <Frameworks />
        <Libraries />
        <Databases />
        <CMS />
        {/* <DevTools /> */}
      </div>
    </>
  );
}
