import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FavoriteCorgis extends Component {
  render() {
    const favoriteCorgis = this.props.corgis.filter(corgi => corgi.favorite === true)
    const favoriteCorgi = favoriteCorgis.map(corgi => <Link key={corgi.id} to={`/corgis/${corgi.id}`}><img alt={corgi.title} key={corgi.id} src={corgi.images.fixed_height.url} /></Link>)

    return (
      <div className="favorite-corgis">
        <h3>Favorite Corgis</h3>
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
