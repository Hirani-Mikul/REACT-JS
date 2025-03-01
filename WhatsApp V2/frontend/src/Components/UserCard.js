import React from 'react';

import img from './p4.jpg';

export default function UserCard({ data }) {
  return (
    <div className='card-tile'>
      <div className='card-details'>
        <div className='user-profile row'>
          <div className='flex Ycenter'>
            <div className='user-profile-img c-small round pointer bgrey'>
              <img className='round small' src={data.image} alt='p5' />
            </div>
            <div className='user-details column'>
              <div>
                <span className='card-name pointer'>{data.username}</span>
                <span>{data.tagLine}</span>
              </div>
              <span>{data.uploaded}</span>
            </div>
          </div>
          <div className='ellipses pointer'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='card-image'>
        <img src={data.image} alt='p4' />
      </div>
      <div className='card-actions flex column'>
        <div className='card-actions-top row'>
          <span>
            {data.commonFriend} and {data.totalLikes} others
          </span>
          <span>{data.totalComments} comments</span>
        </div>
        <div className='card-actions-bottom flex'>
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
