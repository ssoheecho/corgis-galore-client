import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from '../comments/CommentForm'
import CommentsList from '../comments/CommentsList'
import { addToFavorite } from '../../actions/corgisAction'

class CorgisShow extends Component {

  handleOnClick = () => {
    const favoriteCorgi = {
      favorite: true,
      corgiId: this.props.corgi.id
    }
    this.props.addToFavorite(favoriteCorgi);
  }

  onUnload = (event) => {
    event.returnValue = "Please don't reload!"
  }

  componentDidMount = () => {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount = () => {
    window.removeEventListener("beforeunload", this.onUnload)
  }


  render() {
    return (
      <div className="corgis-show">
        <h3>breadloaf</h3>
        <div className="corgi-gif">
          <img src={this.props.corgi.images.fixed_height.url} />
        </div>
        <button onClick={this.handleOnClick}>Favorite!</button>
        <div className="comments-show">
          <CommentForm corgiId={this.props.corgi.id}/>
          <CommentsList corgiId={this.props.corgi.id}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const corgi = state.corgis.find(corgi => corgi.id === ownProps.match.params.corgiId)
  return { corgi }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CorgisShow)
