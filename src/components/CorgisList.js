import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CorgisList = ({ corgiData }) => {
  const renderCorgis = corgiData.map((corgi, index) =>
    <Link key={corgi.id} to={`/corgis/${corgi.id}`}><img key={index} src={corgi.images.fixed_height.url} alt={corgi.title} /></Link>
  )

  return (
    <div className="corgis-list">
      {renderCorgis}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    corgiData: state.corgis
  }
}

export default connect(mapStateToProps)(CorgisList)
