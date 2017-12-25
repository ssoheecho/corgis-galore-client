import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../../actions/commentsAction'


class CommentsList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    return(
      <div>
        {this.props.commentData.map(comment => {
          return <li>{comment.content}</li>
        })}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    commentData: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
