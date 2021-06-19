import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";

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
      {Data && <Filter Data={Data} />}
    </div>
  );
}

export default App;
