import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Shoe.css';

const Shoe = ({ name, image, price }) => (
  <div className="parent">
  <div className="shoe">
    <img src={image} alt={name} />
    <div className='info'>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button>View Details</button>
    </div>
  </div>
  </div>

);

const ShoesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedNameFilter, setSelectedNameFilter] = useState('');
  const [price, setPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const itemsPerPage = 4;
  const originalShoes = Data.shoes;
  const applyFilters = () => {
    let filteredShoes = originalShoes.slice();
  
    if (filter && rating > 0) {
      filteredShoes = filteredShoes.filter(
        shoe => shoe.price > 2000 && shoe.rating > rating
      );
    } else if (filter) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price > 2000);
    } else if (rating > 0) {
      filteredShoes = filteredShoes.filter(shoe => shoe.rating > rating);
    }
  
    if (selectedNameFilter) {
      filteredShoes = filteredShoes.filter(
        shoe => shoe.name.toLowerCase() === selectedNameFilter.toLowerCase()
      );
    }
  
    if (price > 0) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price === price);
    }
    
    if (selectedSize !== '') {
      filteredShoes = filteredShoes.filter(shoe => shoe.sizes.includes(selectedSize));
    }
  
    return filteredShoes;
  };
  
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    
  };

  const shoes = applyFilters();
  const resetFilters = () => {
    setCurrentPage(1);
    setFilter(false);
    setRating(0);
    setSelectedNameFilter('');
    setPrice(0);
    setSelectedSize('');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, rating, selectedNameFilter, price,selectedSize]);

  
  const uniqueShoeNames = [...new Set(originalShoes.map(shoe => shoe.name))];
  const uniqueShoeRating = [...new Set(originalShoes.map(shoe => shoe.rating))];
  const uniqueShoePrice = [...new Set(originalShoes.map(shoe => shoe.price))];
  
  return (
    <>
    <h2 id='typo'>50+ variety in Shoes</h2>
      <div className="container">
        <div className="filter-sidebar">
          <div className="filter">
            <h2>Filters</h2>
            <button id='re_set' onClick={resetFilters}>Reset Filters</button>
            <div>
      <h3>SIZE</h3>
      <p>Selected Size: {selectedSize}</p>
      <input
        type="range"
        id="sizeFilter"
        name="sizeFilter"
        min="6"
        max="12"
        step="1"
        value={selectedSize}
        onChange={handleSizeChange}
      />
    </div>
            <div className='shoePrice'> <h3>PRICE</h3>
              {uniqueShoePrice.map(priceOption => (
                <label key={priceOption}>
                  <input
                    type="checkbox"
                    name="shoePriceFilter"
                    value={priceOption}
                    checked={price === priceOption}
                    onChange={() => setPrice(priceOption)}
                  />
                  {priceOption}
                </label>
              ))}
            </div>

            <div className='shoeRating'><h3>RATING</h3>
              {uniqueShoeRating.map(ratingOption => (
                <label key={ratingOption}>
                  <input
                    type="checkbox"
                    name="shoeRatingFilter"
                    value={ratingOption}
                    checked={rating === ratingOption}
                    onChange={() => setRating(ratingOption)}
                  />
                  {ratingOption}
                </label>
              ))}
            </div>
            <div className='shoeName'><h3>BRAND</h3>
              {uniqueShoeNames.map(name => (
                <label key={name}>
                  <input
                    type="checkbox"
                    name="shoeNameFilter"
                    value={name}
                    checked={selectedNameFilter === name}
                    onChange={() => setSelectedNameFilter(name)}
                  />
                  {name}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="shoes-list">
          {currentShoes.map((shoe, index) => (
            <Shoe
              key={index}
              name={shoe.name}
              image={shoe.image}
              price={shoe.price}
            />
          ))}
         
        </div>
      
      </div>
      <div>
            {shoes.length > itemsPerPage && (
              <ul className="pagination">
                <li>
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                    </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastItem >= shoes.length}
                  >
                    Next
                  </button>
                </li>
              </ul>
            )}
          </div>
    </>
  );
};

export default ShoesList;







