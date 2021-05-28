import React from 'react';

import './search-panel.css';

const SearchPanel = ({onSearchChange}) => {
    return  (
        <input
             className='form-control search-input'
             type='text'
             placeholder='Поиск по записям'
             onChange={onSearchChange}
        />
    )
}

export default SearchPanel;