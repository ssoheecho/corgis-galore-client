import React, { Component } from 'react';
import { removeComment } from '../../actions/commentsAction'
import { updateLikes } from '../../actions/commentsAction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Comment extends Component {

  handleOnClickLike = () => {
    const updateInfo = {
      likes: this.props.comment.likes += 1,
      id: this.props.comment.id
    }
    this.props.updateLikes(updateInfo);
  }

  handleOnClick = () => {
    this.props.removeComment(this.props.comment)
  }

  render() {

    return (
      <div>
        <li key={this.props.comment.id}>
          <span className="comment">{this.props.comment.content}</span>
        </li>
        <label className ="likes">{this.props.comment.likes} 👍🏻</label>
        <button className="like-button" onClick={this.handleOnClickLike}>like</button>
        <button className="delete-button" onClick={this.handleOnClick}>X</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeComment, updateLikes }, dispatch)
}

export default connect(null, mapDispatchToProps)(Comment);
