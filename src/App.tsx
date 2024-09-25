import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import { Manifest } from "./Types";
import Message from "./components/Message";
import Topic from "./components/Topic";
import Domain from "./components/Domain";
import Title from "./components/Title";
import Emoji from "./components/Emoji";
import Priority from "./components/Priority";

function App() {
  const [domain, setDomain] = useState("ntfy.sh");
  const [payload, updatePayload] = useState<Manifest>({
    message: "Hello World",
    topic: "example",
  });
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className="hero min-h-screen" style={{ background: "var(--base)" }}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">NTFY builder</h1>
          <p className="py-6">Generate ntfy cmd here. (curl output)</p>
          <div id="inputs" className="grid grid-cols-2 p-2">
            <Message manifest={payload} updateManifest={updatePayload} />
            <Topic manifest={payload} updateManifest={updatePayload} />
            <Domain domain={domain} setDomain={setDomain} />
            <Title manifest={payload} updateManifest={updatePayload} />
            <Emoji manifest={payload} updateManifest={updatePayload} />
            <Priority manifest={payload} updateManifest={updatePayload} />
          </div>
          <div id="output">
            <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
              <span className="flex gap-4">
                <span className="shrink-0 text-gray-500">$</span>
                {/* https://docs.ntfy.sh/publish/#publish-as-json */}
                <span className="flex-1">
                  <span>curl {domain}</span>{" "}
                  <span className="language-js">
                    -d '{JSON.stringify(payload)}'
                  </span>
                </span>
              </span>

              <svg
                className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
              </svg>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
