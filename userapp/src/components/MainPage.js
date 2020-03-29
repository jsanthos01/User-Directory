import React , { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import EmployeeCards from './EmployeeCards'

function MainPage() {
    const mainStyle = {
        fontFamily: "Karla, sans-serif",
        backgroundColor: "rgb(245, 79, 79)",
        textAlign: "center"
    }

    const [ inputSearch, setInputSearch ] = useState("");
    const [ employeeList , setEmployeeList ] = useState([]);
    const [ showEmployeeList , setShowEmployeeList ] = useState([]);

    function handleInputChange(e){
        console.log("Inside the onChange function")
        const inputValue = e.target.value;
        setInputSearch(inputValue);
        
        let filteredList = employeeList.filter((employeeName) => {
            return employeeName.name.toLowerCase().includes(inputSearch.toLowerCase());
        });
        console.log(filteredList)
        setShowEmployeeList(filteredList);
            // const newList = employeeList.filter((employeeName) => employeeName.indexOf(inputSearch) >= 0);
            // console.log(newList)
            // setShowEmployeeList(newList);
        
    }

    async function populateEmployeeList(){
        let employeeListLoaded = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await employeeListLoaded.json();
        json = json.sort(nameOrder);
        setEmployeeList(json)
    }

    //Sort Names in Alphabetical Order
    function nameOrder(a,b){
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let compared = 0;
        if(nameA > nameB){
            compared = 1;
        }else if(nameA < nameB){
            compared = -1
        }
        return compared
    }

    useEffect (function(){
        populateEmployeeList();
    },[])

    return (
        <div>
            <div className="jumbotron jumbotron-fluid" style={mainStyle}>
                <div className="container">
                    <h1 className="display-4">Company Clouds </h1>
                    <p className="lead">Bring your Employee Directory to Life!</p>
                    <SearchForm handleInputChange={handleInputChange} inputSearch={inputSearch} setInputSearch={setInputSearch}/>
                </div>
            </div>
            <div className="container">
                <div className="album py-5 bg-light">
                    <EmployeeCards showEmployeeList={showEmployeeList}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage
