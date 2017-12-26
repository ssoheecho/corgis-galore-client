import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../../actions/commentsAction'


class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }


  handleOnChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const comment = {
      content: this.state.content,
      corgi_id: this.props.corgiId
    }
    this.props.addComment(comment)
    this.setState({
      content: ''
    })
  }


  render() {
    return (
      <div className="comments-form">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Comment & Enter</label><br />
          <input type="text" value={this.state.content} onChange={event => this.handleOnChange(event)} />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentForm)
