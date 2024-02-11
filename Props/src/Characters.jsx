import propsTypes from "prop-types";
function Characters(props) {
  return (
    <>
      <div class="studentData">
        <h1>Student Details</h1>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Department:{props.department}</p>
        <p>Student:{props.isStudent ? "Still Student" : "Passed Out"}</p>
      </div>
    </>
  );
}
Characters.propsTypes = {
  name: propsTypes.string,
  age: propsTypes.number,
  department: propsTypes.string,
  isStudent: propsTypes.bool,
};
export default Characters;
