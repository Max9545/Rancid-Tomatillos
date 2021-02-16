import  React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.filterMovies(this.state.value)
  }

  render() {
    return (
      <form className='search-body' onSubmit={this.handleSubmit}>
        <label>Search by title or filter by your minimum desired movie rating:</label>
        <input
          type="text"
          name="filter"
          className='input-field'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className='search-button'>ENTER</button>
      </form>
    )
  }
}

export default Form
