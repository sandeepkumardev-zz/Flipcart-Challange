import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter/copy2";

function App() {
  const [Data, setData] = React.useState(null);

  const getResumeData = async () => {
    await fetch("/MOCK_DATA.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  React.useEffect(() => {
    getResumeData();
  }, []);

  // console.log(Data);

  return (
    <div>
      <NavBar />
      {Data && <Filter Data={Data} setData={setData} />}
    </div>
  );
}

export default App;
