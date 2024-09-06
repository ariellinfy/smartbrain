import { useState } from "react";

export const Register = ({ onRouteChange, loadUser }) => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassward, setRegisterPassward] = useState("");

  const onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  const onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  const onPasswordChange = (event) => {
    this.setState({ registerPassward: event.target.value });
  };

  const onSubmitRegister = () => {
    fetch(process.env.REACT_APP_SERVER_URL + "/register", {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassward,
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
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                onChange={onNameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
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
              <label className="db fw6 lh-copy f6" htmlFor="password">
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
          <div className="form-btn">
            <input
              onClick={onSubmitRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};
