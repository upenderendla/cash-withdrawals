// Write your code here
import './index.css'

import {Component} from 'react'

class DenominationItem extends Component {
  onDeleteAmount = () => {
    const {denomination, deleteAmount} = this.props
    const {value} = denomination
    deleteAmount(value)
  }

  render() {
    const {denomination} = this.props
    const {value} = denomination
    return (
      <li className="list-items">
        <button
          type="button"
          className="denomination value"
          onClick={this.onDeleteAmount}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
