import React, { useState } from "react";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstErr, setFirstErr] = useState(false);
  const [lastErr, setLastErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  const handleFirst = (e) => {
    e.preventDefault();
    setFirstname(e.target.value);
  };

  const handleLast = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePW = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!firstname.length) {
      setFirstErr(true);
    } else {
      setFirstErr(false);
    }
    if (!lastname) {
      setLastErr(true);
    } else {
      setLastErr(false);
    }
    if (!email) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!password) {
      setPwErr(true);
    } else {
      setPwErr(false);
    }
  };

  console.log(firstErr, firstname);

  return (
    <div className="mx-2 flex flex-col rounded-lg text-base w-11/12 sm:w-1/2 md:w-1/3">
      <div className="bg-bgblue text-white my-5 rounded-lg shadow-xl">
        <p className="text-sm text-center py-3 px-16">
          <span className="font-bold leading-8">Try it free 7 days</span> then
          $20/mo. thereafter
        </p>
      </div>
      <div className="flex flex-col bg-white rounded-lg justify-center p-8">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="relative my-2">
            <input
              onChange={handleFirst}
              className="text-sm mb-1 px-5 rounded-md w-full h-10 border border-gray-300 focus:outline-none focus:border-bgblue"
              placeholder="First Name"
              type="text"
              value={firstname}
            ></input>
            {firstErr ? (
              <>
                <svg
                  className="absolute top-2.5 right-5 h-7 w-7 z-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="10" cy="10" r="10" />
                    <rect fill="#FFF" x="9" y="3" width="2" height="8" rx="1" />
                    <rect
                      fill="#FFF"
                      x="9"
                      y="15"
                      width="2"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
                <p className="text-xs text-gray-300 text-right italic">
                  First name cannot be empty
                </p>{" "}
              </>
            ) : null}
          </div>

          <div className="relative my-2">
            <input
              onChange={handleLast}
              type="text"
              className="text-sm mb-1 px-5 rounded-md w-full h-10 border border-gray-300 focus:outline-none focus:border-bgblue"
              placeholder="Last Name"
              value={lastname}
            ></input>
            {lastErr ? (
              <>
                <svg
                  className="absolute top-2.5 right-5 h-7 w-7 z-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="10" cy="10" r="10" />
                    <rect fill="#FFF" x="9" y="3" width="2" height="8" rx="1" />
                    <rect
                      fill="#FFF"
                      x="9"
                      y="15"
                      width="2"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
                <p className="text-xs text-gray-300 text-right italic">
                  Last name cannot be empty
                </p>
              </>
            ) : null}
          </div>
          <div className="relative my-2">
            <input
              onChange={handleEmail}
              className="text-sm mb-1 px-5 rounded-md w-full h-10 border border-gray-300 focus:outline-none focus:border-bgblue"
              placeholder="email@example/com"
              type="email"
            ></input>
            {emailErr ? (
              <>
                <svg
                  className="absolute top-2.5 right-5 h-7 w-7 z-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="10" cy="10" r="10" />
                    <rect fill="#FFF" x="9" y="3" width="2" height="8" rx="1" />
                    <rect
                      fill="#FFF"
                      x="9"
                      y="15"
                      width="2"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
                <p className="text-xs text-gray-300 text-right italic">
                  Looks like this is not an email
                </p>
              </>
            ) : null}
          </div>
          <div className="relative my-2">
            <input
              onChange={handlePW}
              className="text-sm mb-1 px-5 rounded-md w-full h-10 border border-gray-300 focus:outline-none focus:border-bgblue"
              placeholder="Password"
              type="password"
              value={password}
            ></input>
            {pwErr ? (
              <>
                <svg
                  className="absolute top-2.5 right-5 h-7 w-7 z-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#FF7979" cx="10" cy="10" r="10" />
                    <rect fill="#FFF" x="9" y="3" width="2" height="8" rx="1" />
                    <rect
                      fill="#FFF"
                      x="9"
                      y="15"
                      width="2"
                      height="2"
                      rx="1"
                    />
                  </g>
                </svg>
                <p className="text-xs text-gray-300 text-right italics">
                  Password cannot be empty
                </p>{" "}
              </>
            ) : null}
          </div>
          <button className="my-2 rounded-md w-full h-10 text-sm text-white uppercase bg-buttongreen shadow-xl">
            claim your free trial
          </button>
          <p className="text-xxs text-center m-1 leading-5">
            By clicking the button, you are agreeing to our{" "}
            <span className="font-bold text-buttongreen">terms&services</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
