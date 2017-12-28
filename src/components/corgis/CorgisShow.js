import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from '../comments/CommentForm'
import CommentsList from '../comments/CommentsList'
import { addToFavorite } from '../../actions/corgisAction'

class CorgisShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    }
  }

  handleOnClick = () => {
    this.setState({
      favorite: true
    })
    const favoriteCorgi = {
      favorite: this.state,
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
        <button onClick={this.handleOnClick}>Favorite</button>
        <div className="corgi-gif">
          <img src={this.props.corgi.images.fixed_height.url} />
        </div>
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
  bindActionCreators({ addToFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CorgisShow)
