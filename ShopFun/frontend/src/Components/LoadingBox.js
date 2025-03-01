import React from 'react';

export default function LoadingBox() {
  const style = {
    fontSize: '2.6rem',
    color: '#333',
  };

  return (
    <div className='loading t-center'>
      <i style={style} className='fa fa-spinner fa-spin'></i>
    </div>
  );
}
