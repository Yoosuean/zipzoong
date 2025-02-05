'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
import styles from '@/components/Common/Header.module.scss';
import useUserInfoStore from '@/stores/userInfo';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    ZustandNickname,
    setZustandNickname,
    ZustandImageUrl,
    setZustandImageUrl,
    ZustandToken,
  } = useUserInfoStore();
  // const userName = "라벤더";

  useEffect(() => {
    if (ZustandToken.length > 10) {
      setIsLogin(true);
    }
  }, [ZustandToken]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const logout = () => {
    // setZustandIsLogin(false);
    setIsLogin(false);
    setZustandImageUrl('/Images/profileImg.png');
    setZustandNickname('');
  };

  // console.log(ZustandImageUrl)
  // console.log(ZustandNickname)

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <a href="/">
          <Image
            src="/Images/LOGO1.png"
            width={140}
            height={110}
            alt="zipjung_logo"
          />
        </a>
      </div>

      <div className={styles.Navbar}>
        <a href="/survey/1">추천</a>

        <a href="/board">게시판</a>

        {isLogin ? (
          <div className={styles.Logoutdiv}>
            <div className={styles.Logout}>
              <div>
                {ZustandNickname} 님
                <button onClick={toggleDropdown} id="dropdownButton">
                  <IoIosArrowDown />
                </button>
              </div>
              <div className={styles.LogoutToggle}>
                {isDropdownOpen && (
                  <div className={styles.LogoutToggleContents}>
                    <button onClick={logout}>로그아웃</button>
                  </div>
                )}
              </div>
            </div>
            <a href="/mypage">
              <Image
                src={ZustandImageUrl}
                width={40}
                height={40}
                alt="user_img"
                className={styles.profileImg}
              />
            </a>
          </div>
        ) : (
          <a href="./user/login">로그인</a>
        )}
      </div>
    </div>
  );
}

export default Header;
