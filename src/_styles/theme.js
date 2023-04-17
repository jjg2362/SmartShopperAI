import baseStyled from 'styled-components';

const customMediaQuery = (maxWidth) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  desktop: customMediaQuery(1296),
  tablet: customMediaQuery(769),
  phone: customMediaQuery(459),
};

const theme = {
  media,
};

export const styled = baseStyled;
export default theme;
