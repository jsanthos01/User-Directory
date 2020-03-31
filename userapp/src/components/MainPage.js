import React , { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import EmployeeCards from './EmployeeCards'
function MainPage() {
    const mainStyle = {
        fontFamily: "Karla, sans-serif",
        backgroundColor: "#002E8B",
        textAlign: "center", 
        textStyle:{
            fontWeight: "900",
            fontSize: "70px",
            textTransform: "uppercase"
        }
    }

    const [ inputSearch, setInputSearch ] = useState("");
    const [ employeeList , setEmployeeList ] = useState([]);
    let [ showEmployeeList , setShowEmployeeList ] = useState([]);

    function handleInputChange(e){
        const inputValue = e.target.value;
        setInputSearch(inputValue);
        
        if(inputValue.length > 1){
            let filteredList = employeeList.filter((employeeName) => {
                return employeeName.name.toLowerCase().indexOf(inputSearch.toLowerCase()) === 0;
            });
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
        console.log(`${option} has been clicked!!`)
        setShowEmployeeList([]);
        if(option === "firstName"){
            // console.log("Inside firstname option before", sortedList);
            employeeList.sort(nameOrder);
            setShowEmployeeList([...employeeList]);
        }else if(option === "id"){
            employeeList.sort(idOrder);
            // console.log("Inside id option", sortedList);
            setShowEmployeeList([...employeeList]);
        }else {
            setShowEmployeeList([]);
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

    useEffect (function(){
        populateEmployeeList();
    },[])
    
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" style={mainStyle}>
                <div className="container">
                    <h1 className="display-4" style={mainStyle.textStyle}>Company Clouds </h1>
                    <h3 style={{marginBottom: "20px"}}>Bring your Employee Directory to Life!</h3>
                    <SearchForm handleInputChange={handleInputChange} inputSearch={inputSearch} setInputSearch={setInputSearch} sortOption={sortOption}/>
                </div>
            </div>
            <div className="container-fluid">
                <EmployeeCards showEmployeeList={showEmployeeList}  />
            </div>
        </div>
    )
}

export default MainPage
