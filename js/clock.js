class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    console.log('Rendering...');
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime }),
      React.createElement(Link, { href: 'https://bing.com', text: 'Go to Bing.com' })
    );
  }
}

const Link = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'a',
      {
        href: props.href,
        target: '_blank',
        className: 'btn btn-primary' },
      props.text
    )
  );
};