import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentLi from './CommentLi'

class Comments extends Component {


  renderComments() {
    //debugger
    return (
      this.props.comments.map(c =>
        <CommentLi comment={c} />
      )
    )
  }
  render() {
    return (
      <div>
        {this.renderComments()}
      </div>
    )
  }
}

export default connect(state => {
  return {

    comments: state.comments
  }
})(Comments)
