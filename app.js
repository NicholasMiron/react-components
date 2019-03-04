var App = () => (
    <div>
        <GroceryList todos={['Eat a hippo', 'Be a hippo', 'Rule the Jungle']}/>
    </div>
);

var GroceryList = (props) => {
  return (
    <ul>
          {/* <GroceryListItem item='water buffalo'/> */}
          {props.todos.map((todo) => { return <GroceryListItem key={todo} item={todo} />})}
      </ul>
    );
  };
  
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      done: false,
      hovered: false,
    }
  }
  onListItemClick(event) {
    console.log("I love hippos!", this.state.done)
    this.setState({done:!this.state.done});
  };

  onMouseHover(event) {
    this.setState({hovered: true});
  }
  
  onMouseExit(event) {
    this.setState({hovered: false});
  }
  render() {
    var style = { textDecoration: this.state.done ? 'line-through' : 'none', fontWeight: this.state.hovered ? 'bold' : 'normal'};
    return (
      <li 
        style={style} 
        onMouseOver={this.onMouseHover.bind(this)}
        onMouseLeave={this.onMouseExit.bind(this)} 
        onClick={this.onListItemClick.bind(this)}
      
      >{this.props.item}</li>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));