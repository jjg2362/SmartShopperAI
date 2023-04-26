import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import * as Styled from './styles'

const HeaderMenuList = [
  {
    id: 0,
    name: 'Home',
    path: ''
  },
  {
    id: 1,
    name: 'About',
    path: '/about'
  },
  {
    id: 2,
    name: 'Blog',
    path: 'https://medium.com/@luckmon '
  },
  {
    id: 3,
    name: 'Contact',
    path: '/contact'
  }
]

const Header = () => {
  const { pathname } = useLocation();
  const navagate = useNavigate();
  const [isToggleHam, setIsToggleHam] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if(pathname.includes('about')){
      setCurrentPath('about');
    }
    else if(pathname.includes('contact')) {
      setCurrentPath('contact');
    }
    else{
      setCurrentPath('');
    }
  }, [pathname])

  const onClickHeaderMenu = (path) => {
    if(path.includes('https')) {
      window.open(path, "_blank")
    }
    else {
      navagate(path)
    }
  }

  console.log(currentPath)

  return (
      <Styled.Container>
        <Styled.HeaderWrapper>
        <Styled.Logo onClick={() => navagate('/')}>
          <svg
            width="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              d="M18.1847 12.13V17.1834L18.2013 17.1846L18.2013 20.7071L18.1614 20.7229L18.2013 25.8696C18.2015 27.5659 18.7312 29.2241 19.7234 30.6344C20.7155 32.0447 22.1256 33.1439 23.7753 33.793C25.425 34.442 27.2403 34.6118 28.9915 34.2808C30.7428 33.9498 32.3514 33.1329 33.614 31.9335C34.8766 30.734 35.7365 29.2058 36.0849 27.5421C36.4333 25.8784 36.2546 24.1539 35.5714 22.5867C34.8882 21.0194 33.7312 19.6799 32.2466 18.7373C30.762 17.7947 29.0166 17.2915 27.2311 17.2913L25.4077 17.2913L25.409 20.7229H27.2298C28.3013 20.7227 29.3487 21.0244 30.2397 21.5899C31.1306 22.1553 31.8251 22.959 32.2352 23.8994C32.6453 24.8398 32.7527 25.8746 32.5437 26.873C32.3347 27.8713 31.8187 28.7884 31.0611 29.5082C30.3034 30.2279 29.3381 30.7181 28.2872 30.9166C27.2363 31.1152 26.147 31.0132 25.1572 30.6236C24.1673 30.234 23.3212 29.5743 22.7261 28.7278C22.1309 27.8814 21.8133 26.8863 21.8135 25.8684L21.8135 20.8418L21.7969 12.1312C21.7971 10.4347 21.2678 8.77624 20.2758 7.36554C19.2839 5.95483 17.8738 4.85527 16.224 4.20593C14.5742 3.55658 12.7588 3.38662 11.0073 3.71753C9.25576 4.04844 7.6469 4.86536 6.38415 6.06498C5.12141 7.26459 4.26149 8.79302 3.91317 10.4569C3.56484 12.1209 3.74375 13.8456 4.42727 15.4129C5.11079 16.9802 6.26821 18.3198 7.75316 19.2621C9.23811 20.2045 10.9839 20.7074 12.7697 20.7071L14.5904 20.7071V17.2768L12.7684 17.2756C11.6969 17.2757 10.6495 16.974 9.75849 16.4086C8.86752 15.8431 8.17306 15.0394 7.76295 14.099C7.35284 13.1586 7.24549 12.1238 7.45449 11.1255C7.66348 10.1271 8.17943 9.21004 8.93708 8.49027C9.69473 7.7705 10.66 7.28035 11.7109 7.0818C12.7618 6.88325 13.8511 6.98523 14.841 7.37484C15.8309 7.76445 16.6769 8.42418 17.2721 9.27061C17.8673 10.117 18.1849 11.1121 18.1847 12.13Z"
              fill="#80C51B"
            ></path>{' '}
            <path
              d="M12.7703 20.7235L18.1629 20.7235L21.8141 20.7078L27.233 20.7078C29.0186 20.7075 30.764 20.2043 32.2486 19.2618C33.7331 18.3192 34.8901 16.9796 35.5733 15.4124C36.2565 13.8452 36.4352 12.1207 36.0868 10.457C35.7384 8.79331 34.8786 7.26511 33.616 6.06564C32.3534 4.86617 30.7447 4.04929 28.9935 3.7183C27.2422 3.38732 25.427 3.55708 23.7773 4.20612C22.1276 4.85517 20.7175 5.95435 19.7253 7.36468C18.7332 8.77502 18.2035 10.4332 18.2033 12.1295L18.2033 17.292H21.8154L21.8154 12.1307C21.8153 11.1128 22.1328 10.1177 22.728 9.27126C23.3232 8.42484 24.1692 7.76511 25.1591 7.3755C26.149 6.98589 27.2383 6.88391 28.2892 7.08246C29.3401 7.281 30.3054 7.77116 31.063 8.49093C31.8207 9.2107 32.3366 10.1278 32.5456 11.1261C32.7546 12.1245 32.6473 13.1593 32.2372 14.0997C31.8271 15.0401 31.1326 15.8438 30.2416 16.4092C29.3507 16.9747 28.3032 17.2764 27.2317 17.2762H21.9405L21.9393 17.292L12.7716 17.292C10.9858 17.2917 9.24006 17.7946 7.75511 18.737C6.27017 19.6793 5.11274 21.0189 4.42922 22.5862C3.74571 24.1535 3.56679 25.8782 3.91512 27.5421C4.26345 29.2061 5.12336 30.7345 6.38611 31.9341C7.64886 33.1337 9.25772 33.9507 11.0092 34.2816C12.7607 34.6125 14.5762 34.4425 16.226 33.7932C17.8758 33.1438 19.2858 32.0443 20.2778 30.6336C21.2698 29.2229 21.7991 27.5644 21.7988 25.8679L21.8141 20.7078L18.1629 20.7235L18.1867 25.8691C18.1868 26.887 17.8692 27.8821 17.2741 28.7285C16.6789 29.5749 15.8328 30.2346 14.843 30.6243C13.8531 31.0139 12.7638 31.1158 11.7129 30.9173C10.662 30.7187 9.69669 30.2286 8.93904 29.5088C8.18139 28.7891 7.66544 27.872 7.45644 26.8736C7.24745 25.8753 7.3548 24.8405 7.76491 23.9001C8.17502 22.9597 8.86947 22.1559 9.76044 21.5905C10.6514 21.0251 11.6989 20.7234 12.7703 20.7235Z"
              fill="#AFEE3C"
            ></path>
          </svg>

          <h1>LUCKMON</h1>
        </Styled.Logo>

        <Styled.HeaderButtonList>
          {HeaderMenuList.map((item) => {
            const isActive = item.path.replace('/', '') === currentPath;
            return <li key={`header_${item.id}`}>
            <Styled.HeaderButton isActive={isActive} onClick={() => onClickHeaderMenu(item.path)}>
              {item.name}
            </Styled.HeaderButton>
          </li>
          })}
        </Styled.HeaderButtonList>

        <Styled.HamButton isOpen={isToggleHam} onClick={() => setIsToggleHam(!isToggleHam)}>
            <span></span>
            <span></span>
            <span></span>
        </Styled.HamButton>

        <Styled.SideBarWrapper isOpen={isToggleHam}>
        <Styled.SidebarButtonList>
          {HeaderMenuList.map((item) => {
            const isActive = item.path.replace('/', '') === currentPath;
              return <li key={`sidebar_${item.id}`}>
              <Styled.SidebarButton isActive={isActive}  onClick={() => onClickHeaderMenu(item.path)}>
                {item.name}
              </Styled.SidebarButton>
            </li>
            })}
        </Styled.SidebarButtonList>
        </Styled.SideBarWrapper>
        </Styled.HeaderWrapper>
      </Styled.Container>
  )
}

export default Header;