import Characters from "./Characters";

function App() {
  return (
    <>
      <Characters
        name={"SpongeBob"}
        age={21}
        department={"BCA"}
        isStudent={true}
      />
      <Characters
        name={"SquardWard"}
        age={24}
        department={"Bsc.Csit"}
        isStudent={false}
      />
      <Characters
        name={"Patrick"}
        age={20}
        department={"BCA"}
        isStudent={true}
      />
    </>
  );
}

export default App;
