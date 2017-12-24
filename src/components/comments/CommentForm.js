import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    text: ''
  }

  

  render() {
    console.log(this.state.text)
    return (
      <div className="comments-form">
        <form>
          <label>Comment below:</label><br />
          <input type="text" value={this.state.text} />
        </form>
      </div>
    )
  }
}

export default CommentForm
