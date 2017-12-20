import React from 'react';

const CorgisList = ({ corgis }) => {
  const renderCorgis = corgis.map(corgi =>
    <img src={corgi.url} height="275" width="400"/>
  )

  return (
    <div className="corgis-list">
      {renderCorgis}
    </div>
  )
}

export default CorgisList
