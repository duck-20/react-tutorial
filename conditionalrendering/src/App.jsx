import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username={"Duck"} />
    </>
  );
}

export default App;
