
import './App.css';
import React, { Component } from 'react';

export class App extends Component() {
  state = {
    current: '0'
  }
  inputChanged = e => {
    this.setState({
      current: (this.state.current !=== '0' ? this.state.current : '') + e.target.value
  });
}
calculate(){
  let newCurrent;
  switch (this.state.operator) {
    case '+': newCurrent = Number(this.state.current) + Number(this.state.last);
      break;
    case '-': newCurrent = Number(this.state.last) - Number(this.state.current);
      break;
    case '*': newCurrent = Number(this.state.current) * Number(this.state.last);
      break;
    case '/': newCurrent = Number(this.state.last) / Number(this.state.current);
      break;
    case 'C': this.setState({
      last: '',
      operator: null,
      current: 0
    });
      break;

  }
  handleClick(btn) {
    switch (btn) {
      case '/':
      case '+':
      case '-':
      case '*':
        this.setState({
          last: 'this.state.current',
          operator: btn,
          current: ''
        })
        break;
      case '=':
        this.calculate();
        break;
      case '.':
        if (this.state.current.indexOf('.') >= 0) {
          return;
        });
        break;
    }
    this.setState({
      last: '';
      current: newCurrent.toString();
    })
    default: this.setState({
      current: Number(this.state.current) + Number(this.state.last)
    })

  }
  this.setState({
    current: (this.state.current !=== '0' ? this.state.current : '') + btn
});

}
render() {
  return (
    <div className='calcuator'>
      <div>
        <input value={this.state.current} onChange={this.inputChanged} />
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '+', '=', '/', '*', '-', 'C']
          .map(n => <button onClick={() => this.handleClick(n)}></button>});
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div>
        <button>0</button>
      </div>
    </div>
  );
}
}

export default App;
