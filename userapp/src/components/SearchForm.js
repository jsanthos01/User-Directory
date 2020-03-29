import React from 'react'

function SearchForm(props) {
    return (
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={props.inputSearch} onChange={props.handleInputChange} placeholder="Search your employee"/>
                <div className="input-group-append">
                    <button className="btn btn-primary"  type="button">Search</button>
                </div>
            </div>   
        </form>
    )

}

export default SearchForm
