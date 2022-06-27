import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  //! API
  // const ENDPOINT = "https://test.com";

  const request = async (url) => {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log("data", data);
      return data;
    }
  };

  // paramValue: 이 부분은 불러오는 데이터에 따라 다르게 설정된다.
  const getParamValueFunc = async () => {
    const datas = await request(ENDPOINT);

    let resultParamValue = [];
    Object.keys(datas).forEach((key) => {
      let objKey = datas[key];
      objKey.forEach((item) => {
        resultParamValue.push(item["paramValue"]);
      });
    });
    return resultParamValue;
  };

  const handleChange = async (e) => {
    const getParamValue = await getParamValueFunc();
    console.log(getParamValue);

    // ! data가 없을 때로 바꿔야함
    inputRef.current.value !== "" ? setIsActive(true) : setIsActive(false);

    let datas = [];
    // let input = searchInput.value;
    let inputValue = e.target.value;
    if (inputValue.length) {
      datas = getParamValue.filter((item) => {
        return item.toLowerCase().includes(inputValue.toLowerCase());
      });
    }
    renderResults(datas);
  };

  function renderResults(datas) {
    const content = datas.map((item, index) => {
      return <li key={item + index}>{item}</li>;
    });

    setResult(content);
  }

  return (
    <>
      <div className="container">
        <div className={!isActive ? "wrapper" : "wrapper show"}>
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Type to search"
            onChange={handleChange}
            ref={inputRef}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
          <div className="results">
            <ul>{result}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
