import React, { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import PokemonDetailCard from './components/PokemonDetailCard';

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    if (isInitialLoad) {
      fetchInitialItems();
    }
  }, [isInitialLoad]);

  const fetchInitialItems = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?page=1&limit=13`);
      const data = await response.json();
      setItems(data.data || []);
      setTotalPages(data.total ? Math.ceil(data.total / 13) : 1);
      setIsInitialLoad(false);
    } catch (error) {
      console.error('Error fetching initial items:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setShowNotFound(false);
    
    if (!searchTerm.trim()) {
      fetchInitialItems();
      setSearchResult(null);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon/search?name=${searchTerm.toLowerCase()}`);
      const result = await response.json();
      console.log('Search response:', result);

      if (result.success && result.data) {
        // Format the data to match the expected structure
        const formattedData = {
          ...result.data,
          types: Array.isArray(result.data.types) ? result.data.types : [result.data.types],
          frontSprite: result.data.frontSprite || result.data.sprites?.front_default,
          backSprite: result.data.backSprite || result.data.sprites?.back_default,
          officialArtwork: result.data.officialArtwork || result.data.sprites?.other['official-artwork']?.front_default
        };
        setSearchResult(formattedData);
        setItems([]);
        setShowNotFound(false);
      } else {
        setShowNotFound(true);
        setSearchResult(null);
        setItems([]);
      }
    } catch (error) {
      console.error('Error searching pokemon:', error);
      setShowNotFound(true);
      setSearchResult(null);
      setItems([]);
    }
  };

  const handleCloseDetail = async () => {
    setSearchResult(null);
    setShowNotFound(false);
    setSearchTerm('');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?page=${currentPage}&limit=13`);
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setItems(data.data);
        setTotalPages(data.total ? Math.ceil(data.total / 13) : 1);
      }
    } catch (error) {
      console.error('Error returning to carousel:', error);
      // Fallback to initial items if there's an error
      fetchInitialItems();
    }
  };

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      try {
        const nextPage = currentPage + 1;
        const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?page=${nextPage}&limit=13`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setItems(data.data);
          setCurrentPage(nextPage);
        }
      } catch (error) {
        console.error('Error fetching next page:', error);
      }
    }
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      try {
        const prevPage = currentPage - 1;
        const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?page=${prevPage}&limit=13`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setItems(data.data);
          setCurrentPage(prevPage);
        }
      } catch (error) {
        console.error('Error fetching previous page:', error);
      }
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Pokémon Carousel</h1>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Pokémon..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {showNotFound && (
        <div className="not-found-message">
          No Pokémon found with name "{searchTerm}"
          <button onClick={handleCloseDetail} className="return-button">
            Return to carousel
          </button>
        </div>
      )}

      {searchResult ? (
        <div className="detail-view">
          <PokemonDetailCard pokemon={searchResult} />
          <button onClick={handleCloseDetail} className="return-button">
            Return to carousel
          </button>
        </div>
      ) : (
        !showNotFound && (
          <>
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
          </>
        )
      )}
    </div>
  );
}

export default App;
