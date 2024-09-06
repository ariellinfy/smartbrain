// import React, { useState, useEffect } from "react";
// // import Particles from 'react-particles-js';
// import ParticlesBg from "particles-bg";
// import Clarifai from "clarifai";

// import Navigation from "../components/Navigation/Navigation";
// import Logo from "../components/Logo/Logo";
// import Rank from "../components/rank";
// import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
// import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
// import Signin from "../components/signin";
// import Register from "../components/Register";
// import "./App.css";

// // No Longer need this. Updated to particles-bg
// // const particlesOptions = {
// //   particles: {
// //     number: {
// //       value: 80,
// //       density: {
// //         enable: true,
// //         value_area: 800,
// //       },
// //     },
// //   },
// // };

// const initialState = {
//   input: "",
//   imageUrl: "",
//   box: {},
//   route: "signin",
//   isSignin: false,
//   user: {
//     id: "",
//     name: "",
//     email: "",
//     entries: 0,
//     joined: "",
//   },
// };

// function App() {
//   const [state, setState] = useState(initialState);

//   const loadUser = (data) => {
//     setState({
//       ...state,
//       user: {
//         id: data.id,
//         name: data.name,
//         email: data.email,
//         entries: data.entries,
//         joined: data.joined,
//       },
//     });
//   };

//   const calculateFaceLocation = (data) => {
//     const clarifaiFace =
//       data.outputs[0].data.regions[0].region_info.bounding_box;
//     const image = document.getElementById("inputImage");
//     const width = Number(image.width);
//     const height = Number(image.height);
//     return {
//       leftCol: clarifaiFace.left_col * width,
//       topRow: clarifaiFace.top_row * height,
//       rightCol: width - clarifaiFace.right_col * width,
//       bottomRow: height - clarifaiFace.bottom_row * height,
//     };
//   };

//   const displayFaceBox = (box) => {
//     setState({ ...state, box: box });
//   };

//   const onInputChange = (event) => {
//     setState({ ...state, input: event.target.value });
//   };

//   const onButtonSubmit = () => {
//     setState({ ...state, imageUrl: state.input });

//     // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
//     // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
//     // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
//     // If that isn't working, then that means you will have to wait until their servers are back up.

//     const app = new Clarifai.App({
//       apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
//     });

//     app.models
//       .predict("face-detection", state.input)
//       .then((response) => {
//         console.log("check", response);
//         if (response) {
//           fetch(process.env.REACT_APP_SERVER_URL + "/image", {
//             method: "put",
//             headers: { "Content-Type": "Application/json" },
//             body: JSON.stringify({
//               id: state.user.id,
//             }),
//           })
//             .then((response) => response.json())
//             .then((count) => {
//               setState(Object.assign(state.user, { entries: count })); // check
//             })
//             .catch(console.log);
//         }
//         displayFaceBox(calculateFaceLocation(response));
//       })
//       .catch((err) => console.log(err));
//   };

//   const onRouteChange = (route) => {
//     if (route === "signout") {
//       setState({ ...state, isSignedIn: false });
//     } else if (route === "home") {
//       setState({ ...state, isSignin: true });
//     }
//     setState({ ...state, route: route });
//   };

//   const { isSignin, route, box, imageUrl, user } = state;
//   return (
//     <div className="App">
//       <ParticlesBg type="color" bg={true} color={["random"]} num={5} />
//       <Navigation isSignin={isSignin} onRouteChange={onRouteChange} />
//       {route === "home" ? (
//         <div className="container">
//           <Logo />
//           <Rank name={user.name} entries={user.entries} />
//           <ImageLinkForm
//             onInputChange={onInputChange}
//             onButtonSubmit={onButtonSubmit}
//           />
//           <FaceRecognition box={box} imageUrl={imageUrl} />
//         </div>
//       ) : route === "register" ? (
//         <Register loadUser={loadUser} onRouteChange={onRouteChange} />
//       ) : (
//         <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
//       )}
//     </div>
//   );
// }

// export default App;
