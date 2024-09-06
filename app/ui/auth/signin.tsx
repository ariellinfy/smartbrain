import { useState } from "react";
import "./Signin.css";

export const Signin = ({ onRouteChange, loadUser }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassward, setSignInPassward] = useState("");

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassward(event.target.value);
  };

  const onSubmitSignIn = () => {
    fetch(process.env.REACT_APP_SERVER_URL + "/signin", {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassward,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      })
      .catch(console.log);
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 mw6 shadow-5 center bg-white">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                onChange={onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <div className="form-btn">
              <input
                onClick={onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 register form-btn">
              <p
                onClick={() => onRouteChange("register")}
                className="b f3 link db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
