import proptypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h1>Welcome {props.username}!</h1>;
  //   } else {
  //     return <h2>Please Login to Continue!</h2>;
  //   }
  const welcomeMessage = (
    <h1 className="welcomeMessage">Welcome {props.username}!</h1>
  );
  const loginMessage = (
    <h1 className="loginPrompt">Please Login to continue</h1>
  );
  return props.isLoggedIn ? welcomeMessage : loginMessage;
}
UserGreeting.proptypes = {
  isLoggedIn: proptypes.bool,
  username: proptypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
