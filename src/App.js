import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import DataList from './DataList'
import SearchBar from './SearchBar'
import Button from './Button'
import ButtonReset from './ButtonReset'
import ButtonSortData from './ButtonSortData'

export const localhostName = 'http://localhost:3001/'

class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedChar : [],
      userData : [],
      doNameSearch : this.doNameSearch,
      doAlphabatelSort : this.doAlphabatelSort,
      doResetData : this.doResetData,
      doRatingSort : this.doRatingSort,
      toggleFilters : this.toggleFilters,
      rating : false,
      disableName : false,
      reset : true,
      noResultFound : 'Search...'
      } 
    
   }

componentDidMount() {
    axios(`${localhostName}data/data.js`).
    
    then((response)=>{
        this.setState({
           userData : [...response.data],
           prevData : [...response.data],
           filterData : [...response.data],
           sortedData : [...response.data]
        })
    })
} 

doNameSearch = (char) =>{
    const filterResult = [] ;
    for(let filerData of this.state.filterData){
  
     if( ( (filerData.name).toLowerCase()).indexOf(char) > -1) {
        var obj = {
                name : filerData.name,
                color : filerData.color,
                city : filerData.city,
                rating : filerData.rating
              }
          
        filterResult.push(obj);
         }
         else{
           this.setState({
             noResultFound : 'Try to do search with other character'
           })
         }
    }
    if(filterResult.length > 0){
      this.setState({
        userData : filterResult,
      })
    }
    else{
      this.setState({
        userData : this.state.userData,
        
    })
    }
}

doResetData = () => {
  this.setState({
       userData : this.state.prevData,
       rating : false,
       disableName : false
       
    })
  }



doAlphabatelSort = (e) => {
 
  const sortData = (this.state.sortedData).sort((current, next) => {
        const currentName = current.name.toUpperCase();
        const nextName = next.name.toUpperCase();
        let flag;

        (currentName < nextName) ? flag = -1 : flag =  1;
        
        return flag;
        
    })
   
    this.setState({
     userData : sortData,
     reset : false,
     rating : false,
     disableName : !this.state.disableName
    })
    
}


doRatingSort = (e) => {
 
  const sortData = (this.state.sortedData).sort((current, next) => {
      const currentName = current.rating;
      const nextName = next.rating;
      let flag;
      
      (currentName < nextName) ? flag = -1 : flag =  1;
      
      return flag;
   })

    this.setState({
      userData : sortData,
      reset : false,
      rating : !this.state.rating,
      disableName : false
    })
    
}


render() {
   return(
      <section className="wrapper">
      <section className="searchBar">
        <SearchBar doNameSearch = {this.state.doNameSearch}/>
        </section>
       

        <section className="filterWrapper">
          <Button 
            doAlphabatelSort={this.state.doAlphabatelSort} 
            disableName={this.state.disableName}/>

          <ButtonSortData 
             doRatingSort={this.state.doRatingSort}  
             rating={this.state.rating}/>
                       
          <ButtonReset 
              doResetData={this.state.doResetData} 
              reset={this.state.reset}/>
        </section>

        <DataList userData = {this.state.userData} />
        
      </section>
    )
  }
}

export default App;
