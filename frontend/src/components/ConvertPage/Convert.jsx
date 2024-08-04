import { useState } from "react";
import "./Convert.css"; // Assume you have the necessary styles here.
import { GoogleGenerativeAI } from "@google/generative-ai";

const Convert = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [inputText, setInputText] = useState("");
  const [convertFrom, setConvertFrom] = useState("");
  const [convertTo, setConvertTo] = useState("");

  const genAI = new GoogleGenerativeAI("AIzaSyCy0Remq9c1uGAPvmIMsuTZZi_lG4EAy3k");

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Convert the following text: "${inputText}" which was originally written for ${convertFrom} platform and optimize it for posting on ${convertTo} with proper format of ${convertTo} so that it gets maximum engagement.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  return (
    <div className="convert-container">
      <h1>Content Optimizer</h1>
      <div className="mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <div className="row d-flex align-items-end">
            <div className="col-lg-4">
              <label htmlFor="inputText" className="form-label">
                Input Text
              </label>
              <input
                type="text"
                className="form-control"
                id="inputText"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="convertFrom" className="form-label">
                Convert From
              </label>
              <select
                className="form-select"
                id="convertFrom"
                value={convertFrom}
                onChange={(e) => setConvertFrom(e.target.value)}
              >
                <option value="">Select Platform</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
              </select>
            </div>
            <div className="col-lg-4">
              <label htmlFor="convertTo" className="form-label">
                Convert To
              </label>
              <select
                className="form-select"
                id="convertTo"
                value={convertTo}
                onChange={(e) => setConvertTo(e.target.value)}
              >
                <option value="">Select Platform</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
              </select>
            </div>
            <div className="col-lg-2 mt-3">
              <button type="submit" className="btn btn-primary col-lg-12">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="ans">
        {!loading && apiData && <p className="text-align-left">{apiData}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Convert;
