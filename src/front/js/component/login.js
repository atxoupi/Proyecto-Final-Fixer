import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  const handlesubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  const googlesignup = () => {
    console.log("Vamos a ejecutar signWithPopup");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        actions.loginwithgoogle(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <div className=" container h-60 mt-5">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className=" card-registration"
                style={{
                  borderRadius: "15px",
                }}
              >
                <div className="card-body p-3 p-md-5">
                  <h3 className=" pb-2 pb-md-0 mb-md-5 text-center">
                    Por favor, introduce tus datos
                  </h3>
                  <form onSubmit={handlesubmit}>
                    <div className="row">
                      <div className="col-12 mb-3 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress2"
                            className="form-control form form-control-login form-control-lg"
                            placeholder="email@email.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mb-3 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="examplePassword1"
                            className="form-control form form-control-login form-control-lg"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pt-2">
                      <input
                        className="btn  btn-lg mail-button"
                        type="submit"
                        defaultValue="Acceder"
                        id="submitButtonLogin"
                      />
                    </div>
                    <div className="d-flex justify-content-center pt-2">
                      <input
                        className="btn  btn-lg mail-button"
                        defaultValue="Login con google"
                        onClick={googlesignup}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
