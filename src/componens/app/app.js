import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: "Изучаю React", important: true, id: "qwe"},
        {label: "Хочу в сад", important: false, id: "asd"},
        {label: "Хочется спать", important: false, id: "zxc"}
    ];


    return (
        <div className='app'>  
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;