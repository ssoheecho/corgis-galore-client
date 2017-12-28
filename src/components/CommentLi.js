import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLikes } from '../actions/commentsAction'

class CommentLi extends Component {

  handleOnClick = () => {
    const updateInfo = {
      likes: this.props.comment.likes += 1,
      id: this.props.comment.id
    }
    this.props.updateLikes(updateInfo);
  }

  render() {
    return (
      <div>
        <p key={this.props.comment.id}>{this.props.comment.content}</p>
        <button onClick={this.handleOnClick}>like</button>
        <p>{this.props.comment.likes}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLikes }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentLi)
