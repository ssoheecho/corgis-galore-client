import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../../actions/commentsAction'
import CommentForm from '../comments/CommentForm'

class CorgisShow extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="corgis-show">
        <h3>breadloaf</h3>
        <div className="corgi-gif">
          <img src={this.props.corgi.images.fixed_height.url} />
        </div>
        <div className="comments">
          <CommentForm corgiId={this.props.corgi.id}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const corgi = state.corgis.find(corgi => corgi.id === ownProps.match.params.corgiId)

  if (corgi) {
    return { corgi }
  } else {
    return { corgi: {} }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CorgisShow)
