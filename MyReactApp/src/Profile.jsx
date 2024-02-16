function Profile() {
  const imageURL = "./src/assets/react.svg";
  const handleClick = (e) => (e.target.style.display = "none");
  return (
    <>
      <img src={imageURL} onClick={(e) => handleClick(e)}></img>
    </>
  );
}
export default Profile;
