import React , {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
             char : []
        }
    }
    
    CharacterSearch = (e) => {
        this.setState({ 
            char: e.target.value 
        }, () => {
            this.props.doNameSearch(this.state.char)
            })
        }
   
   render(){
    return(
        <React.Fragment>
        <input type="text" 
            className="inputSearch"
            value={this.state.char}
            name="search"
            placeholder="Type any character..."
            onChange={this.CharacterSearch}/>
        
        <p>{this.state.noResultFound}</p>
        </React.Fragment>
    )
    }
}

export default SearchBar