import { h, render, Component } from 'preact';
import AddIcon from './AddIcon';

import './App.scss';

class App extends Component {
    
  render() {
    return (
      <div>
        <AddIcon />
      </div>
    )
  }
}

export default function mountApp (ele) {
  render(<App />,  ele);
}
