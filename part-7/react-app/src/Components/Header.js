import React, { useContext, useState } from 'react';

import '../style.css';
import '../icons/css/all.min.css';
import { GlobalContext } from '../Utils/Context/GlobalContext';

/*
  ARROW-BACK = <i class="fas fa-arrow-left"></i>
  PHONE-CALL = <i class="fas fa-phone-alt"></i>
  ATTACHMENT = <i class="fas fa-paperclip"></i>
  MENU-BAR = <i class="fas fa-ellipsis-v"></i>
*/

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { users, changeUser } = useContext(GlobalContext);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleChangeUser = (e) => {
    setShowMenu(!showMenu);
    const selectedUser = e.target.innerHTML;
    changeUser(selectedUser);
  };

  const styles = {
    backgroundImage: `url('https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60')`,
  };

  return (
    <header>
      <nav className='left-nav align-center'>
        <i className='fas fa-arrow-left'></i>
        <div className='opponent flex-row align-center'>
          <div style={styles} className='opponent-img pointer'></div>
          <div className='opponent-info'>
            <h2 className='pointer'>Luis Villasmil</h2>
            <span className='cursor-default'>Last seen Today 11.01 AM</span>
          </div>
        </div>
      </nav>
      <nav className='right-nav align-center space-around'>
        <span className='header-icon'>
          <i className='fas fa-phone-alt'></i>
        </span>
        <span className='header-icon'>
          <i className='fas fa-paperclip'></i>
        </span>
        <span
          className={`header-icon chat-page-menu ${showMenu && 'showMenu'}`}
        >
          <i
            onClick={handleClick}
            className={`
              ${showMenu ? 'fas fa-times' : 'fas fa-ellipsis-v'}
            `}
          ></i>
          <ul className='chat-page-menu-item flex-column space-around cursor-default'>
            {users.map((user) => {
              return (
                <li key={user.id} onClick={handleChangeUser}>
                  {user.userName}
                </li>
              );
            })}
            {/* <li>Open Profile</li>
            <li>Block Contact</li>
            <li>Mute Notification</li> */}
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
