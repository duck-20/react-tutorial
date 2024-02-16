function Button() {
  let count = 0;
  //   const handleClick = () => console.log("Ouch");
  const handleEvent = (e) => (e.target.textContent = "Hehe");
  //   const handleClick1 = (name) =>
  //     console.log(`${name} clicked me ${++count} times.`);
  return (
    <>
      <button onClick={(e) => handleEvent(e)}>Click Me </button>
    </>
  );
}
export default Button;
