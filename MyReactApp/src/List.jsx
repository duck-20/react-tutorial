import propsType from "prop-types";
function List(props) {
  const category = props.category;
  const itemList = props.items;

  // // fruits.sort((a,b)=>a.calorie-b.calorie); Calorie
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorting using
  // const lowcalFruits = fruits.filter((fruit) => fruit.calorie < 50);
  // const highcalFruits = fruits.filter((fruit) => fruit.calorie > 50);

  const listItems = itemList.map((item) => (
    <li key={item.id} className="listItems">
      {item.name}:&nbsp;{item.calorie}
    </li>
  ));

  return (
    <>
      <ol className="list">
        <h1 className="heading">{category}</h1>
        {listItems}
      </ol>
    </>
  );
}
List.propsType = {
  category: propsType.string,
  itemList: propsType.arrayOf(
    propsType.shape({
      id: propsType.number,
      name: propsType.string,
      calorie: propsType.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  itemList: [],
};
export default List;
