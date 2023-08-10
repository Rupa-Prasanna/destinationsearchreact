import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg_container">
        <h1> DESTINATION SEARCH </h1>
        <div className="search_container">
          <input
            type="search"
            className="search"
            placeholder="search"
            onChange={this.onChangeSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="destinations_list">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} eachDestination={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
