import React, { Component } from 'react';

class CommentLi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  handleOnClick = () => {
    console.log(this)
    this.setState({
      counter: this.state.counter += 1
    })
  }

  render() {
    return (
      <div>
        <p key={this.props.comment.id}>{this.props.comment.content}</p>
        <button onClick={this.handleOnClick}>like</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}


export default CommentLi
