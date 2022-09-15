import React from 'react';


class SearchBar extends React.Component{

    onInputChange (event) {
      console.log(event.target.value);
    }

    onInputClick(event){
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }


    state = {term :''};


    render(){


        return (
        <div className='ui segment'>
          <form className='ui form' onSubmit={this.onFormSubmit}>
              <div className='field'>
                  <label>Image Search</label>
              <input type='text' name='images' 
              value = {this.state.term}
              onChange={(event)=> this.setState({term : event.target.value })}
              onClick={this.onInputClick}/>
              </div>
          </form>
        </div>)
    }
}

export default SearchBar;