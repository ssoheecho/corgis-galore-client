import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CorgisShow from './CorgisShow'

const CorgisList = ({ match, corgiData }) => {
  const renderCorgis = corgiData.map((corgi, index) =>
    <Link key={corgi.id} to={`/corgis/${corgi.id}`}><img key={index} src={corgi.images.fixed_height.url} alt={corgi.title} /></Link>
  )

  return (
    <div className="corgis-list">
      <Route path={`${match.url}/:corgiId`} component={CorgisShow} />
      <Route exact path={match.url} render={() => renderCorgis} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    corgiData: state.corgis
  }
}

export default connect(mapStateToProps)(CorgisList)
