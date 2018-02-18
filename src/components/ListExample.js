import React, { Component } from 'react';
import axios from 'axios';

const ListItem = props => (
  <div>
    <hr />
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </div>
);

export default class ListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
  }
  componentWillMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ listItems: res.data }))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        list items
        {this.state.listItems.length > 0
          ? this.state.listItems.map(item => <ListItem title={item.title} body={item.body} />)
          : 'Loading...'}
      </div>
    );
  }
}
