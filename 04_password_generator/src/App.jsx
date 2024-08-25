import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllow, setNumberAllow] = useState(false);
  let [charAllow, setCharAllow] = useState(false);
  let [password, setPassword] = useState("chandan");
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@$%^&*()_><?/~`";
    }
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);
  
  // use ref Hooks

  const passwordRef = useRef(null)
  const copyPasswordClickboard = useCallback(()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,6)
      window.navigator.clipboard.writeText(password)
    },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllow, charAllow, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 h-30">
        <h1 className="text-xl text-center text-white mb-5">
          Password Generator
        </h1>
        
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-t-sm"
            placeholder="passowrd"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.3 shrink-0"
          onClick={copyPasswordClickboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="">
            <input
              type="range"
              min={6}
              max={99}
              value={length}
              className="cursor-pointer mt-3 mr-1"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-base">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 text-base mt-2">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>number</label>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>spcial_char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
