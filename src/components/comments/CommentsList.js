import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../../actions/commentsAction'
import Comment from './Comment'


class CommentsList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {

    const associatedComments = this.props.commentData.filter(comment => comment.corgi_id === this.props.corgiId)
    const comments = associatedComments.map((comment) => {
      console.log(comment)
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
