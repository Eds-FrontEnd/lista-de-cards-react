import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [itens, setItens] = useState([]);
  const [itensPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
      )
        .then((response) => response.json())
        .then((data) => data);

      setItens(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <div className="App">
      <h1 className="titulo"> Paginação de Cards </h1>
      {currentItens.map((item) => {
        return (
          <div className="main">
            <div className="maint">
              <div className="numeros">{item.id}</div>
            </div>
          </div>
        );
      })}
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
