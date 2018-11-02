import React from 'react';

const SearchBar = () =>
{
    return <div>Search Bar is Rendered!</div>;
}

export const SearchBarResult = (props) =>
{
    return <input onChange={props.onHandleChange} />;
}

export default SearchBar;