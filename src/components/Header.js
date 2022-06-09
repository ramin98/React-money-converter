import React from "react"


class Header extends React.Component{

state = {
    outEur: '',
    outUsd: ''
}

componentDidMount() {
  fetch('https://api.exchangerate.host/latest?base=EUR&symbols=UAH')
  .then(res => res.json())
  .then(data => this.setState({outEur: Object.values(data.rates)[0]}))
  }

componentDidMount() {
  fetch('https://api.exchangerate.host/latest?base=USD&symbols=UAH')
  .then(res => res.json())
  .then(data => this.setState({outUsd: Object.values(data.rates)[0]}))
  }
  
render(){
        return (
            <header className="header">
                  <p>1 USD = {this.state.outUsd} UAH</p>   
                  <p>1 EUR = {this.state.outEur} UAH</p>
            </header>
        );
}
}
 
export default Header;