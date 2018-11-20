import React, { Component } from 'react';

class DataList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    createList(){
        return this.props.userData.map((elm, index) => {
            return <li key={index}>{elm.name}</li>
        })
    }
    
    createListColor(){
        return this.props.userData.map((elm, index) => {
            return <li key={index}>{elm.color}</li>
        })
    }

    createListCity(){
        return this.props.userData.map((elm, index) => {
            return <li key={index}>{elm.city}</li>
        })
    }

    createListRating(){
        return this.props.userData.map((elm, index) => {
            return <li key={index}>{elm.rating}</li>
        })
    }
    
    render(){
        return(
               <section className="gridWrapper">
                  <div>
                      <span>name</span>
                      <ul>{this.createList()}</ul>
                  </div>
                  <div>
                      <span>color</span>
                      <ul>{this.createListColor()}</ul>
                  </div>
                  <div>
                      <span>City</span>
                      <ul>{this.createListCity()}</ul>
                  </div>
                  <div>
                      <span>Rating</span>
                      <ul>{this.createListRating()}</ul>
                  </div>
               </section>
            )
        }
}

export default DataList;