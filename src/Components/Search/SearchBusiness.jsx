import React, { useState } from 'react';
import './Search.css';

const SearchBusiness = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement search logic here
        console.log('Searching for business:', searchTerm);
        // You would typically make an API call here or update the parent component
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                className="search-input" 
                type="text" 
                placeholder="Search Business" 
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
};

export default SearchBusiness;