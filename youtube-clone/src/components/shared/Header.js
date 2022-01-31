import React, { useState } from 'react';
import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Header({onClickMenu}) {

    const[value, setValue] = useState('');
    function onSearch() {
        console.log(value)
        setValue('')
    }

    function onChange(e) {
        setValue(e.target.value)
    }

  return (
    <div className={styles.header}>
      <div className={styles.tab}>
        <FiMenu className={styles.icon} onClick={onClickMenu} />
        <Link to="/">  <img src={youtube_logo} alt="로고" className={styles.logo} />
       </Link>
      </div>
      <div className={styles['center-tab']}>
        <input className={styles.input} onChange={onChange} value={value} />
        <IoSearchOutline className={styles['search-icon']} onClick={onSearch}/>
      </div>
      <div className={styles.tab}>
        <BsGrid3X3Gap className={styles.icon} />
        <HiOutlineDotsVertical className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;