import React, { useState } from 'react';
import s from './luxuryList.module.css'

const SearchComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const options = ['Романтический зимний отдых', 'Каникулы на тропическом острове', 'Приключение в сердце дикой природы', 'Сказочный осенний уикенд в горах', 'Путешествие по древним городам', 'Круиз по живописным рекам', 'Треккинг по живописным маршрутам'];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // Здесь можно добавить логику для обновления результатов поиска
    filterResults(event.target.value);
  };

  const filterResults = (option) => {
    // Пример фильтрации результатов на основе выбранного значения
    const allResults = [
      { name: 'Result 1', category: 'Романтический зимний отдых' },
      { name: 'Result 2', category: 'Option 2' },
      { name: 'Result 3', category: 'Романтический зимний отдых' },
      { name: 'Result 4', category: 'Option 3' },
    ];

    const filtered = allResults.filter(result => result.category === option);
    setSearchResults(filtered);
  };

  return (
    <div className={s.List}>
      <select required='3' value={selectedOption} onChange={handleSelectChange} className={s.Search}>
        <option value="">Выберите тур</option>
        {options.map((option, index) => (
          <option classname={s.Option} key={index} value={option}>{option}</option>
        ))}
      </select>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
