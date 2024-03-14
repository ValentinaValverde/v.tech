import { TopWithButton } from "../../components/ProjectComponents/Top";

export default function NomNomNavigator() {
  return (
    <>
      <TopWithButton
        project={{
          title: "NomNom Navigator",
          description: "An app that helps recommend restaurants near you.",
          buttontext: "Github",
          buttonlink: "https://github.com/JeffLi117/NomNomNavigator",
        }}
      />
    </>
  );
}
