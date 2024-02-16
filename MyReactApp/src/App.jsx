import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Characters from "../../Props/src/Characters";
import Button from "./Button";
import Profile from "./Profile";

function App() {
  // const fruits = [
  //   { id: 1, name: "Apple", calorie: 95 },
  //   { id: 3, name: "Mango", calorie: 45 },
  //   { id: 4, name: "PineApple", calorie: 36 },
  //   { id: 2, name: "Banana", calorie: 45 },
  // ];
  // const vegetables = [
  //   { id: 5, name: "Spinach", calorie: 10 },
  //   { id: 7, name: "Cucumber", calorie: 25 },
  //   { id: 8, name: "Potato", calorie: 123 },
  //   { id: 6, name: "Celery", calorie: 15 },
  // ];
  // return (
  //   <>
  //     {/* <Header />
  //     <Food />
  //     <Footer /> */}
  //     <List items={fruits} category="Fruits" />
  //     <List items={vegetables} category="Vegetable" />
  //   </>
  // );

  return (
    <>
      <Button />
      <Profile />
    </>
  );
}

export default App;
