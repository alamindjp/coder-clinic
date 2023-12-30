import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { python } from "@codemirror/lang-python";
import axios from "axios";

const PythonCompiler = () => {
  const [code, setCode] = useState("a = 0");
  const [testCases, setTestCases] = useState([]);

  const submitCode = () => {
    axios.post("http://localhost:80/python", { code }).then(({ data }) => {
      setTestCases([data.passOrFail]);
    });
    // console.log(code);
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="mx-auto">
      <h2 className="p-3 text-center text-3xl">Start Your Code.</h2>
      <div>
        <div className="border-gray-400 border-8 mb-4 mx-auto w-4/6">
          {testCases.map((testCase, i) => {
            return (
              <div key={i}>
                <div>{testCase}</div>
              </div>
            );
          })}
          <CodeMirror
            value={code}
            // value="console.log('hello world!');"
            height="400px"
            theme={dracula}
            extensions={[python()]}
            onChange={onChange}
          />
        </div>
        <button
          className="px-2 center btn btn-glass "
          onClick={submitCode}
        >
          RUN CODE
        </button>
      </div>
    </div>
  );
};

export default PythonCompiler;
