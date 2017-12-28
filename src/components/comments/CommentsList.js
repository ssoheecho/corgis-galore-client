import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comment from './Comment'


class CommentsList extends Component {

  render() {

    const associatedComments = this.props.commentData.filter(comment => comment.corgi_id === this.props.corgiId)
    const comments = associatedComments.map((comment) => {
      return <Comment comment={comment}/>
    })

    if (comments) {
      return(
        <div className="comments">
          <ul>
            {comments}
          </ul>
        </div>
      )
    }
  }

}

function mapStateToProps(state) {
  return {
    commentData: state.comments
  }
}

export default connect(mapStateToProps)(CommentsList)
