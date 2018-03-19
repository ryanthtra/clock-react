class Clock extends React.Component {
  constructor(props)
  {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: (new Date()).toLocaleString()
    };
  }
  
  launchClock()
  {
    setInterval(() =>
    {
      console.log('Updating time...');
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000);
  }

  render()
  {
    console.log('Rendering...');
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime}/>
        <DigitalDisplay time={this.state.currentTime}/>
        <Link href="https://bing.com" text="Go to Bing.com" />
      </div>
    );
  }
}

const Link = (props) =>
{
  return (
    <div>
      <a 
        href={props.href}
        target="_blank"
        className="btn btn-primary">
        {props.text}
      </a>
    </div>
  )
};