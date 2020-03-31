import React from 'react'

function SearchForm(props) {
    const searchStyle ={
        container: {display: "flex", flexDirection: "column"},
        row: {alignItems: "center", justifyContent: "center",flexDirection: "column" }
    }
    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={props.inputSearch} onChange={props.handleInputChange} placeholder="Search your employee"/>
                    <div className="input-group-append">
                        <button className="btn btn-danger"  type="button">Search</button>
                    </div>
                </div>   
            </form>
            <div className="container" style={searchStyle.container}>
                <br/>
                <div className="row" style={searchStyle.row}>
                    <h3>Sort By: </h3>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={()=> props.sortOption("firstName")}>First Name</button>
                        <button type="button" className="btn btn-danger" onClick={()=> props.sortOption("id")}>ID</button>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default SearchForm
