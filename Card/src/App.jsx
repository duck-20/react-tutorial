import Card from "./Card";
import profile1 from "./assets/Duck.jpg";
import profile2 from "./assets/Dog.jpg";
function App() {
  return (
    <>
      <Card
        profilePic={profile1}
        title={"Donald Duck"}
        desc={"I'm Donald Duck."}
      />
      <Card
        profilePic={profile2}
        title={"Courage The Cowardly Dog"}
        desc={"UagagaBuagahahhh!"}
      />
    </>
  );
}

export default App;
