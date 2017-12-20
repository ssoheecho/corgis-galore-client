import React from 'react';

const CorgisList = ({ corgis }) => {
  const renderCorgis = corgis.map((corgi, index) =>
    <img key={index} src={corgi.images.fixed_height.url} />
  )

  return (
    <div className="corgis-list">
      {renderCorgis}
    </div>
  )
}

export default CorgisList
