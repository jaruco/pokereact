import React, { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      const fetchInitialItems = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?page=1&limit=13`);
          const data = await response.json();
          setItems(data.data || []);
          setTotalPages(data.total ? Math.ceil(data.total / 13) : 1);
          setIsInitialLoad(false); // Mark initial load as complete
        } catch (error) {
          console.error('Error fetching initial items:', error);
        }
      };

      fetchInitialItems();
    }
  }, [isInitialLoad]);

  useEffect(() => {
    if (isInitialLoad) return; // Skip if it's the initial load

    const fetchItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?page=${currentPage}&limit=13`);
        const data = await response.json();
        setItems(data.data || []);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [currentPage, isInitialLoad]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <Carousel items={items} />
      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1 || totalPages === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalPages === 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
