import { useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);

  let [isSymbol, setSymbol] = useState(false);

  let [isUppercase, setUppercase] = useState(false);

  let [isLowercase, setLowercase] = useState(false);

  let [isNumber, setNumber] = useState(false);

  // Password Generting Functionality
  let passwordGenerator = () => {
    let pass = "";
    let str = "";

    if (isSymbol) str += "!@#$%&*-_=+";
    if (isUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  // Password Copying Functionality

  let copyPassword = () => {
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center m-0 bg-[#E0FFFF] p-10">
      <div className="w-[25%]  bg-[#ffffff] rounded-xl flex flex-col items-center justify-center gap-8 p-5">
        <h1 className="font-semibold">Generate Random Password</h1>

        <div className=" w-[90%] flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label>Password Length: {length}</label>
            <input
              type="range"
              value={length}
              min={8}
              max={20}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-[90%]">
          <div className="flex items-center justify-between w-full">
            UpperCase
            <input
              type="checkbox"
              defaultChecked={isUppercase}
              id="upperCharCheck"
              onChange={() => {
                setUppercase((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            LowerCase
            <input
              type="checkbox"
              defaultChecked={isLowercase}
              id="lowerCharCheck"
              onChange={() => {
                setLowercase((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            Number
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberCheck"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            Symbol
            <input
              type="checkbox"
              defaultChecked={isSymbol}
              id="symbolCheck"
              onChange={() => {
                setSymbol((prev) => !prev);
              }}
            />
          </div>
        </div>

        <div className="w-[90%] flex flex-col gap-3">
          <p>Generated Password:</p>
          <input
            type="text"
            minLength={8}
            maxLength={20}
            className="border-1 outline-none p-2 rounded-md"
            readOnly
            value={password}
          />
          <div className=" flex items-center justify-between">
            <button
              className="bg-green-400 w-[60%] rounded-md p-2 cursor-pointer hover:bg-green-500 active:scale-95 duration-200"
              onClick={() => {
                isLowercase || isUppercase || isSymbol || isNumber
                  ? passwordGenerator()
                  : setPassword("Please Select Checkboxes !");
              }}
            >
              Generate
            </button>
            <button
              className="bg-cyan-400 w-[30%] p-2 rounded-md cursor-pointer hover:bg-cyan-500  active:scale-95 duration-200"
              onClick={() => {
                password == "" || password == "Please Select Checkboxes !"
                  ? setPassword("Please Generate Password")
                  : copyPassword();
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
