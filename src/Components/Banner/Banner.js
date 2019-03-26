import React from 'react';
import { 
  BannerWrap,
  BannerCont,
  BannerText,
  BannerH1,
  BannerButtons,
  BannerButton,
  BannerTwitch,
  BannerYoutube,
  ButtonHover,
  Triangle,
  ButtonBox,
  Pepega,
 } from '../../Styles/Banner/BannerStyles.js';

const Banner = () => {
  return (
    <div>
      <BannerWrap>
      </BannerWrap>

      <BannerCont>
        <BannerText>
          <BannerH1>Exploiti Boi</BannerH1>
          <BannerH1>Mendo</BannerH1>
        </BannerText>

        <BannerButtons>
          <BannerButton>
            <BannerTwitch>Twitch</BannerTwitch>
            <ButtonHover>
              <Triangle/>
              <ButtonBox>I stream at pepega hours<Pepega/></ButtonBox>
            </ButtonHover>
          </BannerButton>
          
          <BannerButton>
            <BannerYoutube>Youtube</BannerYoutube>
            <ButtonHover>
              <Triangle/>
              <ButtonBox>New video everyday!</ButtonBox>
            </ButtonHover>
          </BannerButton>
        </BannerButtons>
      </BannerCont>
    </div>      
  );
}

export default Banner;