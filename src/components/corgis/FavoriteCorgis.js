import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteCorgis extends Component {
  render() {
    const favoriteCorgis = this.props.corgis.filter(corgi => corgi.favorite === true)
    const favoriteCorgi = favoriteCorgis.map(corgi => <img alt={corgi.title} key={corgi.id} src={corgi.images.fixed_height.url} />)

    return (
      <div className="favorite-corgis">
        <h2>Favorite Corgis:</h2>
        {favoriteCorgi}
      </div>
    )
  }
}

export default connect(state=> {
  return {
    corgis: state.corgis
  }
})(FavoriteCorgis)
