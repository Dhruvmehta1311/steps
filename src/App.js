const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 3;
  return (
    <div className="h-screen text-white bg-light-gray flex items-center justify-center ">
      <div className="p-12 w-[600px] h-fit flex flex-col gap-8 items-center justify-between bg-zinc-200">
        <div className="flex items-center justify-between w-full text-black ">
          <div
            className={`${
              step >= 1 ? "bg-custom-purple" : "bg-zinc-300"
            } rounded-full  w-12 font-semibold text-lg h-12 flex items-center justify-center`}
          >
            1
          </div>
          <div
            className={`${
              step >= 1 ? "bg-custom-purple" : "bg-zinc-300"
            } rounded-full  w-12 font-semibold text-lg h-12 flex items-center justify-center`}
          >
            2
          </div>
          <div
            className={`${
              step >= 1 ? "bg-custom-purple" : "bg-zinc-300"
            } rounded-full  w-12 font-semibold text-lg h-12 flex items-center justify-center`}
          >
            3
          </div>
        </div>
        <h1 className="font-semibold text-lg text-black">
          Step {step} : {messages[step - 1]}
        </h1>
        <div className="flex items-center justify-between w-full">
          <button
            style={{ backgroundColor: "#7950f2" }}
            className="font-semibold text-sm px-3 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2" }}
            className="font-semibold text-sm px-3 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
