import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #141619;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%; /* 이미지가 이미지 컨테이너를 가득 채우도록 설정 */
  object-fit: cover; /* 이미지의 너비를 화면에 가득 차도록 설정 */
`;
