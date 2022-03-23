import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersLength: 0}

  onChangeSearchText = event => {
    this.setState({lettersLength: event.target.value.length})
  }

  render() {
    const {lettersLength} = this.state
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
        <div className="sub-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>

          <label className="description form-control" htmlFor="inputElement">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            className="search-box form-control"
            placeholder="Enter the phrase"
            id="inputElement"
            onChange={this.onChangeSearchText}
          />

          <p className="count-description">No.of letters: {lettersLength}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
