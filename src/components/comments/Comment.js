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
        <li>
          {this.props.comment.content}
        </li>
        <button onClick={this.handleOnClick}>X</button>
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
