import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as Styled from './styles';

const HeaderMenuList = [
  {
    id: 0,
    name: 'Home',
    path: '/'
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
];

const Header = () => {
  const { pathname } = useLocation();
  const navagate = useNavigate();
  const [isToggleHam, setIsToggleHam] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname.includes('about')) {
      setCurrentPath('about');
    } else if (pathname.includes('contact')) {
      setCurrentPath('contact');
    } else {
      setCurrentPath('');
    }
  }, [pathname]);

  const onClickHeaderMenu = (path) => {
    if (path.includes('https')) {
      window.open(path, '_blank');
    } else {
      navagate(path);
    }
  };

  return (
    <Styled.Container isSticky={isSticky}>
      <Styled.HeaderBackground isSticky={isSticky} />

      <Styled.HeaderWrapper>
        <Styled.Logo onClick={() => navagate('/')}>
          <svg
            width="46"
            height="35"
            viewBox="0 0 357 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09937 215.363L23.179 119.006L116.151 206.107L83.1553 248.648C71.9397 263.108 52.7734 268.84 35.4602 262.913C15.6505 256.131 3.65288 236.016 7.09937 215.363Z"
              fill="#0FAF0F"
              stroke="#08A608"
              strokeWidth="2"
            />
            <path
              d="M350.285 214.926L334.858 117.792L233.408 193.565L274.476 247.392C285.601 261.973 304.821 267.779 322.158 261.796C341.663 255.065 353.522 235.304 350.285 214.926Z"
              fill="#45FB45"
              stroke="#6EF26E"
              strokeWidth="2"
            />
            <path
              d="M120.647 55.5833L65.0003 73.6267C65.0284 62.6388 67.0011 46.0568 73.0158 31.4842C79.286 16.2926 89.8448 3.50037 106.974 1.19578C112.019 0.517055 114.545 1.66145 115.857 3.58012C117.263 5.63669 117.542 8.9116 117.219 13.1203C117.014 15.7809 116.589 18.6562 116.144 21.6586C115.889 23.3791 115.628 25.1413 115.399 26.9288C114.78 31.7649 114.408 36.7126 115.174 41.0731C116.403 48.0708 117.818 50.5059 119.207 52.8968C119.693 53.7332 120.176 54.5643 120.647 55.5833Z"
              fill="#19BA19"
              stroke="#12B112"
              strokeWidth="2"
            />
            <path
              d="M238.353 55.5833L294 73.6267C293.972 62.6388 291.999 46.0568 285.984 31.4842C279.714 16.2926 269.155 3.50037 252.026 1.19578C246.981 0.517055 244.455 1.66145 243.143 3.58012C241.737 5.63669 241.458 8.9116 241.781 13.1203C241.986 15.7809 242.411 18.6562 242.856 21.6586C243.111 23.3791 243.372 25.1413 243.601 26.9288C244.22 31.7649 244.592 36.7126 243.826 41.0731C242.597 48.0708 241.182 50.5059 239.793 52.8968C239.307 53.7332 238.824 54.5643 238.353 55.5833Z"
              fill="#28EC28"
              stroke="#22E422"
              strokeWidth="2"
            />
            <g filter="url(#filter0_d_9538_2935)">
              <mask id="path-5-inside-1_9538_2935" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M107 47C59.5035 47 21 85.5035 21 133V141C21 188.496 59.5035 227 107 227H251C298.496 227 337 188.496 337 141V133C337 85.5035 298.496 47 251 47H107ZM87 107C87 99.268 93.268 93 101 93C108.732 93 115 99.268 115 107V123H131C138.732 123 145 129.268 145 137C145 144.732 138.732 151 131 151H115V167C115 174.732 108.732 181 101 181C93.268 181 87 174.732 87 167V151H71C63.268 151 57 144.732 57 137C57 129.268 63.268 123 71 123H87V107ZM241 140C250.941 140 259 148.059 259 158C259 167.941 250.941 176 241 176C231.059 176 223 167.941 223 158C223 148.059 231.059 140 241 140ZM297 116C297 106.059 288.941 98 279 98C269.059 98 261 106.059 261 116C261 125.941 269.059 134 279 134C288.941 134 297 125.941 297 116Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M107 47C59.5035 47 21 85.5035 21 133V141C21 188.496 59.5035 227 107 227H251C298.496 227 337 188.496 337 141V133C337 85.5035 298.496 47 251 47H107ZM87 107C87 99.268 93.268 93 101 93C108.732 93 115 99.268 115 107V123H131C138.732 123 145 129.268 145 137C145 144.732 138.732 151 131 151H115V167C115 174.732 108.732 181 101 181C93.268 181 87 174.732 87 167V151H71C63.268 151 57 144.732 57 137C57 129.268 63.268 123 71 123H87V107ZM241 140C250.941 140 259 148.059 259 158C259 167.941 250.941 176 241 176C231.059 176 223 167.941 223 158C223 148.059 231.059 140 241 140ZM297 116C297 106.059 288.941 98 279 98C269.059 98 261 106.059 261 116C261 125.941 269.059 134 279 134C288.941 134 297 125.941 297 116Z"
                fill="url(#paint0_linear_9538_2935)"
              />
              <path
                d="M115 123H113V125H115V123ZM115 151V149H113V151H115ZM87 151H89V149H87V151ZM87 123V125H89V123H87ZM23 133C23 86.6081 60.6081 49 107 49V45C58.3989 45 19 84.3989 19 133H23ZM23 141V133H19V141H23ZM107 225C60.6081 225 23 187.392 23 141H19C19 189.601 58.3989 229 107 229V225ZM251 225H107V229H251V225ZM335 141C335 187.392 297.392 225 251 225V229C299.601 229 339 189.601 339 141H335ZM335 133V141H339V133H335ZM251 49C297.392 49 335 86.6081 335 133H339C339 84.3989 299.601 45 251 45V49ZM107 49H251V45H107V49ZM101 91C92.1634 91 85 98.1634 85 107H89C89 100.373 94.3726 95 101 95V91ZM117 107C117 98.1634 109.837 91 101 91V95C107.627 95 113 100.373 113 107H117ZM117 123V107H113V123H117ZM131 121H115V125H131V121ZM147 137C147 128.163 139.837 121 131 121V125C137.627 125 143 130.373 143 137H147ZM131 153C139.837 153 147 145.837 147 137H143C143 143.627 137.627 149 131 149V153ZM115 153H131V149H115V153ZM117 167V151H113V167H117ZM101 183C109.837 183 117 175.837 117 167H113C113 173.627 107.627 179 101 179V183ZM85 167C85 175.837 92.1634 183 101 183V179C94.3726 179 89 173.627 89 167H85ZM85 151V167H89V151H85ZM71 153H87V149H71V153ZM55 137C55 145.837 62.1634 153 71 153V149C64.3726 149 59 143.627 59 137H55ZM71 121C62.1634 121 55 128.163 55 137H59C59 130.373 64.3726 125 71 125V121ZM87 121H71V125H87V121ZM85 107V123H89V107H85ZM261 158C261 146.954 252.046 138 241 138V142C249.837 142 257 149.163 257 158H261ZM241 178C252.046 178 261 169.046 261 158H257C257 166.837 249.837 174 241 174V178ZM221 158C221 169.046 229.954 178 241 178V174C232.163 174 225 166.837 225 158H221ZM241 138C229.954 138 221 146.954 221 158H225C225 149.163 232.163 142 241 142V138ZM279 100C287.837 100 295 107.163 295 116H299C299 104.954 290.046 96 279 96V100ZM263 116C263 107.163 270.163 100 279 100V96C267.954 96 259 104.954 259 116H263ZM279 132C270.163 132 263 124.837 263 116H259C259 127.046 267.954 136 279 136V132ZM295 116C295 124.837 287.837 132 279 132V136C290.046 136 299 127.046 299 116H295Z"
                fill="url(#paint1_linear_9538_2935)"
                mask="url(#path-5-inside-1_9538_2935)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_9538_2935"
                x="13"
                y="43"
                width="332"
                height="196"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0320833 0 0 0 0 0.641667 0 0 0 0 0.0320833 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_9538_2935"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_9538_2935"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_9538_2935"
                x1="183"
                y1="227"
                x2="147.845"
                y2="45.8656"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13D213" />
                <stop offset="1" stopColor="#1EDD1E" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_9538_2935"
                x1="293"
                y1="141.5"
                x2="80.0893"
                y2="99.4806"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3AD13A" />
                <stop offset="1" stopColor="#11D511" />
              </linearGradient>
            </defs>
          </svg>
        </Styled.Logo>

        <Styled.HeaderButtonList>
          {HeaderMenuList.map((item) => {
            const isActive = item.path.replace('/', '') === currentPath;
            return (
              <li key={`header_${item.id}`}>
                <Styled.HeaderButton
                  isActive={isActive}
                  onClick={() => onClickHeaderMenu(item.path)}
                >
                  {item.name}
                </Styled.HeaderButton>
              </li>
            );
          })}
        </Styled.HeaderButtonList>

        <Styled.HamButton
          isOpen={isToggleHam}
          onClick={() => setIsToggleHam(!isToggleHam)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Styled.HamButton>

        <Styled.SideBarWrapper isOpen={isToggleHam}>
          <Styled.SidebarButtonList>
            {HeaderMenuList.map((item) => {
              const isActive = item.path.replace('/', '') === currentPath;
              return (
                <li key={`sidebar_${item.id}`}>
                  <Styled.SidebarButton
                    isActive={isActive}
                    onClick={() => onClickHeaderMenu(item.path)}
                  >
                    {item.name}
                  </Styled.SidebarButton>
                </li>
              );
            })}
          </Styled.SidebarButtonList>
        </Styled.SideBarWrapper>
      </Styled.HeaderWrapper>
    </Styled.Container>
  );
};

export default Header;
