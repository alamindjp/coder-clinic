import React, { useState } from "react";

const Quiz = () => {
  let QB = [
    {
      Question: "What is html?",
      Answers: [
        { Answer: "High level language", isCorrect: false },
        { Answer: "Low level language", isCorrect: false },
        { Answer: "Machine level language", isCorrect: false },
        { Answer: "Mark up language", isCorrect: true },
      ],
    },
    {
      Question: "Which is not a semantic tag ?",
      Answers: [
        { Answer: "div", isCorrect: true },
        { Answer: "article", isCorrect: false },
        { Answer: "section", isCorrect: false },
        { Answer: "main", isCorrect: false },
      ],
    },
    {
      Question: "What are the differences between html4 and html5 ?",
      Answers: [
        {
          Answer: "html5 allows JS, html4 does not allow JS",
          isCorrect: false,
        },
        { Answer: "html5 have nav, footer html4 have not", isCorrect: false },
        { Answer: "In html5 draw shapes, html4 does not ", isCorrect: false },
        { Answer: "All of the above", isCorrect: true },
      ],
    },
    {
      Question: "Why will you use Meta tag ?",
      Answers: [
        {
          Answer: "Metadata is data (information) about data.",
          isCorrect: true,
        },
        { Answer: "It consume the entire width", isCorrect: false },
        {
          Answer: "Used to represent the important text of a document",
          isCorrect: false,
        },
        { Answer: "All of the above", isCorrect: false },
      ],
    },
    {
      Question: "Why will you use charset in html ?",
      Answers: [
        { Answer: "length and width of the screen.", isCorrect: false },
        { Answer: "To display an HTML page correctly", isCorrect: true },
        { Answer: "contains an address for a destination", isCorrect: false },
        { Answer: "some kind of structure or expression", isCorrect: false },
      ],
    },
    {
      Question: "How to insert a copyright symbol on a browser page ?",
      Answers: [
        { Answer: "using &symbol; or &#179;", isCorrect: false },
        { Answer: "using &copyright; or &#189;", isCorrect: false },
        { Answer: "using &copy; or &#169;", isCorrect: true },
        { Answer: "using &c; or &#199;", isCorrect: false },
      ],
    },
    {
      Question: "What is the use of an iframe tag ?",
      Answers: [
        {
          Answer: "An iframe is used to display a movie within a web page.",
          isCorrect: false,
        },
        {
          Answer: "An iframe is used to display a image within a web page",
          isCorrect: false,
        },
        {
          Answer: "An iframe is used to display a icon within a web page.",
          isCorrect: false,
        },
        {
          Answer: "An iframe is used to display a web page within a web page.",
          isCorrect: true,
        },
      ],
    },
    {
      Question: "If I do not put <!DOCTYPE html> will HTML 5 work ?",
      Answers: [
        { Answer: "Sometime not works", isCorrect: false },
        {
          Answer:
            "Browser will not be able to identify that it is an HTML document",
          isCorrect: true,
        },
        { Answer: "It works not properly", isCorrect: false },
        { Answer: "Working fine.", isCorrect: false },
      ],
    },
    {
      Question: "Which type of video formats are supported by HTML5 ?",
      Answers: [
        { Answer: "mp4, WebM, Ogg", isCorrect: true },
        { Answer: "mp3, webM, Ogg", isCorrect: false },
        { Answer: "Wav, dot, exe", isCorrect: false },
        { Answer: "All type", isCorrect: false },
      ],
    },
    {
      Question: "What is the canvas element in HTML5 ?",
      Answers: [
        {
          Answer:
            " used to describe the two-dimensional vector and vector/raster graphics",
          isCorrect: false,
        },
        {
          Answer: "It is used to add sound or music files on the web page.",
          isCorrect: false,
        },
        {
          Answer: "a container that is used to draw graphics on the web page",
          isCorrect: true,
        },
        {
          Answer: "It is mostly used for vector type diagrams like pie charts",
          isCorrect: false,
        },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QB.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className=" text-black p-20 flex justify-center items-center">
      <div className="flex justify-evenly w-3/5  min-h-200 rounded-lg py-20 bg-green-200 ">
        {showScore ? (
          <div className="flex flex-col justify-center items-center pt-4 text-2xl text-black">
            You have scored {score} out of {QB.length}
            <>
              <button
                className="btn bg-green-500 text-black mb-5 mt-5"
                type="submit"
                onClick={resetQuiz}
              >
                Reset Quiz
              </button>
            </>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="w-2/3 relative">
              <div className="mb-2 text-black">
                <span className="text-2xl">{currentQuestion + 1}</span>/
                {QB.length}
              </div>
            </div>
            <div className="mb-3 text-2xl text-black">
              {QB[currentQuestion].Question}
            </div>
            <div className="w-full flex flex-col justify-between ">
              {QB[currentQuestion].Answers.map((answer) => (
                <button
                  className="btn bg-slate-400 mb-1"
                  onClick={() => handleAnswerResponse(answer.isCorrect)}
                >
                  {answer.Answer}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
