import axios from "axios";
import { useState } from "react";


export default function Home() {
  const exampleText = ``;

  const [text, setText] = useState(exampleText);
  const [response, setResponse] = useState(null);


  const getResponse = async () => {
    try {

      const res = await axios.post("./api/summarize/", {
        text,
      });
      setResponse(res.data.summary);

    } catch (error) {

    }
  };

  const onHandelSummarize = (e) => {
    getResponse();
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        Text <span className="text-active">Summarizer</span>
      </h1>

      <div className="flex md:flex-row flex-col justify-between mt-20 w-full">

        <div className="md:w-2/5 w-full ">
          <label htmlFor="text" className=" text-sm font-medium text-primary">
            Enter your text
          </label>
          <div className="mt-2">
            <textarea
              rows={14}
              name="text"
              id="text"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
              defaultValue={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0 mt-4">
          <button
            className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
            type="button"
            onClick={onHandelSummarize}
          >
            Summarize
          </button>
        </div>
        <div className="md:w-2/5 md:mt-0 mt-4 w-full">
          <label
            htmlFor="summary"
            className=" text-sm font-medium text-primary"
          >
            Summarized text
          </label>
          <div className="mt-2">
            <textarea
              readOnly
              type="text"
              rows={14}
              name="summary"
              id="summary"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
              value={response}
            />
          </div>
        </div>
      </div>



    </div>
  );
}
