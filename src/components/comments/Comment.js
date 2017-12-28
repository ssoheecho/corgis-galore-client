import React, { Component } from 'react';
import { removeComment } from '../../actions/commentsAction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Comment extends Component {

  handleOnClick = () => {
    this.props.removeComment(this.props.comment)
  }

  render() {

    return (
      <div>
        <li key={this.props.comment.id}>
          <span className="comment">{this.props.comment.content}</span>
        </li>
        <button className="delete-button" onClick={this.handleOnClick}>X</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeComment
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Comment);
