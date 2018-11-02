import React from 'react';

const SearchBar = (props) =>
{
    return <input onChange={props.onHandleChange} />;
}
export default SearchBar;