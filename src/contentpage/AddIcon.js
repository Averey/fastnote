import { h, Component } from 'preact';

const icon = chrome.runtime.getURL('assets/addnote.png')

export default class AddIcon extends Component {
  state = {
    left: 0,
    top: 0,
    display: 'none',
  }

  selectedEvent = (e) => {
    const text = window.getSelection().toString();
    if (!text) {
      this.setState({ display: 'none' });
      return ;
    }

      
    this.setState({
      left: e.clientX,
      top: e.clientY - 50,
      display: 'block'
    })
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.selectedEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.selectedEvent);
  }

  handleClick = () => {
    // do some thing
    this.setState({ display: 'none' });
    
  }

  render({},{left, top, display}) {
    return(
      <img 
        onClick={this.handleClick}
        class="add-icon"
        src={icon}
        style={{ left, top, display }}
      />
    )
  }
}
