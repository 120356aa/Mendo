import styled from 'styled-components';
import Profile from '../../Resrouces/mendo-raw.webp';

export const AboutWrap = styled.div`
  width: 100%;
  padding: 80px 0 80px 0;
  background-color: #8dbe55;
`;

  export const AboutW = styled.div`
    width: 80%;
    margin: 0px auto;
    // padding: 0 40px 0 40px;
  `;

    export const ProfileIMG = styled.div`
      width: 100%;
      height: 200px;
      border: 2px solid #FBFBFB;
      background: url('${Profile}');
      background-size: cover;
      display: none;
    `;

    export const ProfileCont = styled.div`
      width: 100%;
    `;

      export const AboutH2 = styled.h2`
        color: #FBFBFB;
        font-family: 'Alegreya Sans SC', sans-serif;
        font-size: 34px;
        text-align: center;
      `;

      export const AboutP = styled.p`
        color: #FBFBFB;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
        line-height: 22px;
      `;