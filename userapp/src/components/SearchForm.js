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
                        <button className="btn btn-primary"  type="button">Search</button>
                    </div>
                </div>   
            </form>
            <div className="container" style={searchStyle.container}>
                <div className="row" style={searchStyle.row}>
                    <h3>Filter By: </h3>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Company</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Name</button>
                    </div>
                </div>
                <br/>
                <div className="row" style={searchStyle.row}>
                    <h3>Sort By: </h3>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={()=> props.sortOption("firstName")}>First Name</button>
                        <button type="button" className="btn btn-primary" onClick={()=> props.sortOption("id")}>ID</button>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default SearchForm
