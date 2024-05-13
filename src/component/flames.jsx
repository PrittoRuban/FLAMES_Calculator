import React, { useState } from "react";

function FlamesCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateFlames = (name1, name2) => {
    let flames = [
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
      "Sibling",
    ];
    let temp = name1.toLowerCase() + name2.toLowerCase();
    let count = [...new Set(temp.split(""))].length;

    while (flames.length > 1) {
      let spliceIndex = (count % flames.length) - 1;
      if (spliceIndex >= 0) {
        flames.splice(spliceIndex, 1);
      } else {
        flames.splice(flames.length - 1, 1);
      }
    }

    return flames[0];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(calculateFlames(name1, name2));
  };

  return (
    <div
      className="p-4 relative min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center dark:bg-gray-800"
      style={{
        backgroundImage: `url("https://i.ytimg.com/vi/9PMebaWYDCo/maxresdefault.jpg")`,
        width: "100%", // Set width to 100% to make it responsive
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter first name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="p-3 border border-blue-300 rounded placeholder-blue-500 dark:placeholder-pink-800 bg-green-300 dark:bg-purple-400"
        />
        <input
          type="text"
          placeholder="Enter second name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className="p-3 border border-blue-300 rounded placeholder-blue-500 dark:placeholder-pink-800 bg-green-300 dark:bg-purple-400"
        />
        <button
          type="submit"
          className="p-2 bg-pink-500 text-white rounded transform hover:scale-110 transition-transform duration-200 "
          disabled={!name1 || !name2} // Button is disabled if either name1 or name2 is empty
        >
          Calculate FLAMES
        </button>

        <div>
          {result && (
            <p className="mt-2 text-lg text-dark-500 text-bold z-10 absolute ">
              Result: {result}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default FlamesCalculator;
