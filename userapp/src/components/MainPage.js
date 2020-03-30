import React , { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import EmployeeCards from './EmployeeCards'
import employees from '../employees.json'
function MainPage() {
    const mainStyle = {
        fontFamily: "Karla, sans-serif",
        backgroundColor: "rgb(245, 79, 79)",
        textAlign: "center"
    }

    const [ inputSearch, setInputSearch ] = useState("");
    const [ employeeList , setEmployeeList ] = useState([]);
    let [ showEmployeeList , setShowEmployeeList ] = useState([]);

    function handleInputChange(e){
        console.log("Inside the onChange function")
        const inputValue = e.target.value;
        setInputSearch(inputValue);
        
        if(inputValue.length > 0){
            let filteredList = employeeList.filter((employeeName) => {
                return employeeName.name.toLowerCase().includes(inputSearch.toLowerCase());
            });
            console.log(filteredList)
            setShowEmployeeList(filteredList);
        }else {
            setShowEmployeeList([]);
        }
    }

    async function populateEmployeeList(){
        let employeeListLoaded = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await employeeListLoaded.json();
        setEmployeeList(json);
        setShowEmployeeList(json);
    }

    function sortOption(option){
        let sortedList;
        switch(option){
            case "firstName" : 
                sortedList = employeeList.sort(nameOrder);
                showEmployeeList =[];
                setShowEmployeeList(sortedList);
                break;
            case "id" : 
                sortedList = employeeList.sort(idOrder);
                showEmployeeList =[];
                setShowEmployeeList(sortedList);
                break;
        }   
    }
    
    //Sort by Name(Alphabetical)
    function nameOrder(a,b){
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if(nameA > nameB){
            return 1;
        }else if(nameA < nameB){
            return -1
        }
        return 0
    }
    //Sort By ID
    function idOrder(a,b){
        return a.id - b.id;
    }

    // function filterOption(option){
    //     switch(option){
    //         case "": 
    //         case "": 
    //         case "": 
    //         default: 
    //             alert("Not an Option!")
    //     }
    // }

    useEffect (function(){
        populateEmployeeList();
    },[])
    useEffect (function(){
        sortOption();
    },[])

    return (
        <div>
            <div className="jumbotron jumbotron-fluid" style={mainStyle}>
                <div className="container">
                    <h1 className="display-4">Company Clouds </h1>
                    <p className="lead">Bring your Employee Directory to Life!</p>
                    <SearchForm handleInputChange={handleInputChange} inputSearch={inputSearch} setInputSearch={setInputSearch} sortOption={sortOption}/>
                </div>
            </div>
            <div className="container-fluid">
                <div className="card-group">
                    <EmployeeCards showEmployeeList={showEmployeeList} />
                </div>
            </div>
        </div>
    )
}

export default MainPage
