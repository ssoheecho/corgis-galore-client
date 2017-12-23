import React from 'react';
import { connect } from 'react-redux';

const CorgisShow = ({ corgi }) =>
  <div className="corgis-show">
    <h3>breadloaf</h3>
    <div className="corgi-gif">
      <img src={corgi.images.fixed_height.url} />
    </div>
    <div className="comments">
    </div>
  </div>

function mapStateToProps(state, ownProps) {
  const corgi = state.corgis.find(corgi => corgi.id === ownProps.match.params.corgiId)
  console.log(corgi)
  if (corgi) {
    return { corgi }
  } else {
    return { corgi: {} }
  }
}

export default connect(mapStateToProps)(CorgisShow)
