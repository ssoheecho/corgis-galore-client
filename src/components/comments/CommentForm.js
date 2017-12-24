import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    return (
      <div className="comments-form">
        <form>
          <label>Comment below:</label><br />
          <input type="text" value={this.state.text} onChange={event => this.handleOnChange(event)} />
        </form>
      </div>
    )
  }
}

export default CommentForm
