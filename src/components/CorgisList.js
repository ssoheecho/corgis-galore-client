import React from 'react';
import { Link } from 'react-router-dom';

const CorgisList = ({ corgis }) => {
  const renderCorgis = corgis.map((corgi, index) =>
    <Link key={corgi.id} to={`/corgis/${corgi.id}`}><img key={index} src={corgi.images.fixed_height.url} alt={corgi.title} /></Link>
  )

  return (
    <div className="corgis-list">
      {renderCorgis}
    </div>
  )
}

export default CorgisList
