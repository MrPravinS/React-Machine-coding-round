import { useEffect, useState } from "react";

import "./App.css";
import ProductData from "./components/Product";
import Pagination from "./components/Pagination";

const PAGE_SIZE = 10;
function App() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    setProduct(jsondata.products);
  };

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePagination = (n) => {
    setCurrentPage(n);
  };

  const goTONext = () => {
    setCurrentPage(currentPage + 1);
  };

  const goTOPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return !product.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="app">
      <h1>Pagination</h1>

      <Pagination
        currentPage={currentPage}
        noOfPages={noOfPages}
        goTONext={goTONext}
        goTOPrev={goTOPrev}
        handlePagination={handlePagination}
      />
      <div className="product-container">
        {product.slice(start, end).map((p) => (
          <ProductData
            key={p.id}
            image={p.thumbnail}
            title={p.title}
          ></ProductData>
        ))}
      </div>
    </div>
  );
}

export default App;
