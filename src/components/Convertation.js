import React from 'react';

class Convertation extends React.Component{
  

  state = {
    fromConvert:'USD',
    toConvert: 'UAH',
    fromInput:0,
    toInput:0,
    out:0,
  }
  
   getValueFrom(){
    fetch(`https://api.exchangerate.host/latest?base=${this.state.fromConvert}&symbols=${this.state.toConvert}`)
    .then(res => res.json())
    .then(data => { 
  
      this.setState({out:data.rates[`${this.state.toConvert}`]})
      this.setState({toInput:this.state.out * this.state.fromInput})
    
  })
  }
  
   getValueTo() {
    fetch(`https://api.exchangerate.host/latest?base=${this.state.fromConvert}&symbols=${this.state.toConvert}`)
    .then(res => res.json())
    .then(data => {

    this.setState({out:data.rates[`${this.state.toConvert}`]})
    this.setState({fromInput: this.state.toInput / this.state.out})
    
  }) 
  }
  
     fromSet = (e) => {
      this.setState({fromConvert:e.target.value})
      this.getValueFrom()
    }
  
     toSet = (e) => {
      this.setState({toConvert :e.target.value})
      this.getValueTo()
      
    }
  
     from = (e) => {
      this.setState({fromInput: e.target.value})
      this.getValueFrom()
      
    }
  
     to = (e) => {
      this.setState({toInput: e.target.value})
      this.getValueTo()
    }
  render(){
        return (
            <main className="main">
                <div className="">
                    <select value={this.state.fromConvert} onChange={this.fromSet}>
                      <option value='USD'>USD</option>
                      <option value='EUR'>EUR</option>
                      <option value='UAH'>UAH</option>
                    </select>
                    <input value={this.state.fromInput} onChange={this.from} />
                </div>
                <div className="">
                    <select value={this.state.toConvert} onChange={this.toSet}>
                      <option value='USD'>USD</option>
                      <option value='EUR'>EUR</option>
                      <option value='UAH'>UAH</option>
                    </select>
                    <input value={this.state.toInput} onChange={this.to} />
                </div>
            </main>
        );
}
}
 
export default Convertation;