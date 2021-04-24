import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="container">
      <div className="container-paragraph">
        <p>Nosotros </p>
        <h1>La importancia de los logros en nuestra organización</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet fusce
          suspendisse, senectus molestie fermentum iaculis curabitur enim mus
          ultrices augue.
        </p>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQHd0YFN4E45lA/company-logo_200_200/0/1613059028960?e=2159024400&v=beta&t=GZWNaNUyyzB4KWXQX-tZFNl8Mx7GeKuv9tkNtCCMuT0"
          alt=""
        ></img>
      </div>

      <div className="container-login">
        <div className="container-login-buttonGoogle">
          <button>
          <img
            src="https://img.icons8.com/fluent/50/000000/google-logo.png"
            alt="icon-google"
          />
            Sign up with Google</button>
        </div>

        <div>
          <img
            className="container-login__image"
            src="https://www.sofka.com.co/wp-content/uploads/2020/09/work-with-us-home.png"
            alt="sofka"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
