import React from 'react';

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
    }
    onHandleChange(target)
    {
        // console.log(target.value);
        this.props.onHandleChange(target.value);
    }
    render() 
    { 
        return <input onChange={(event) => this.onHandleChange(event.target) } />;
    }
}
export default SearchBar;