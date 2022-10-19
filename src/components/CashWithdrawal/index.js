// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deleteAmount = value => {
    const {amount} = this.state

    if (amount >= 500) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    } else if (amount >= 200 && amount < 500) {
      if (value !== 500) {
        this.setState(prevState => ({amount: prevState.amount - value}))
      }
    } else if (amount >= 100 && amount < 200) {
      if (value === 100 || value === 50) {
        this.setState(prevState => ({amount: prevState.amount - value}))
      }
    } else if (amount >= 50 && amount < 100) {
      if (value === 50) {
        this.setState(prevState => ({amount: prevState.amount - value}))
      }
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="user-details">
            <p className="user-image">S</p>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <p className="balance-amount">{amount}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denomination={eachDenomination}
                deleteAmount={this.deleteAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
