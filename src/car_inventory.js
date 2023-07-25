import React, { useState } from 'react';

const CarInventoryWidget = () => {
  const [cars] = useState([
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
    { id: 2, make: 'Honda', model: 'Accord', year: 2019, price: 23000 },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2021, price: 26000 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, price: 21000 },
  ]);

  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (property) => {
    if (sortCriteria === property) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCriteria(property);
      setSortOrder('asc');
    }
  };

  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCars = filteredCars.sort((a, b) => {
    if (!sortCriteria) return 0;
    const aValue = a[sortCriteria];
    const bValue = b[sortCriteria];
    return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
  });

  return (
    <div>
      <h2>Car Inventory</h2>
      <input
        type="text"
        placeholder="Search by make or model"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('make')}>Make</th>
            <th onClick={() => handleSort('model')}>Model</th>
            <th onClick={() => handleSort('year')}>Year</th>
            <th onClick={() => handleSort('price')}>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {sortedCars.map((car) => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarInventoryWidget;