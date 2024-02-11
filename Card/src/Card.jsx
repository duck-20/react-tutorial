import Button from "./Button/Button";
import ProfilePicture from "./assets/Duck.jpg";
function Card({profilePic,title,desc}) {
  return (
    <>
      <div className="card">
        <img
          src={profilePic}
          className="card-image"
          alt="Profile Picture"
        ></img>
        <h2 className="card-name">{title}</h2>
        <p>{desc}</p>
        <Button />
      </div>
    </>
  );
}

export default Card;
