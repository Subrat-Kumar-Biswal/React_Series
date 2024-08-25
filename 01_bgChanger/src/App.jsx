import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justyfy-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 outline-none px-4 py-1 rounded-full text-white shadow-xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="bg-green-600 outline-none px-4 py-1 rounded-full text-white shadow-xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 outline-none px-4 py-1 rounded-full text-white shadow-xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("violet")}
            className="bg-violet-700 outline-none px-4 py-1 rounded-full text-white shadow-xl"
           
          >
            violet
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl font-semibold"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
