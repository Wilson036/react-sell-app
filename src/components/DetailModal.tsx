import { PosInfo } from 'model/model';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import IconComm from './common/icon/IconComm';
import Star from './common/Star';

const DetailModal: React.FC<{
  posInfo?: PosInfo;
  isDetailShow: boolean;
  setDetailShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ posInfo, isDetailShow, setDetailShow }) => {
  return (
    <CSSTransition
      in={isDetailShow}
      timeout={300}
      unmountOnExit
      classNames="transition"
      key={'modal'}
    >
      <Detail>
        <DetailWrapper>
          <MainWrapper
            style={{ backgroundImage: `url(${posInfo?.poi_back_pic_url})` }}
          >
            <ModalIcon
              style={{ backgroundImage: `url(${posInfo?.pic_url ?? ''})` }}
            />
            <h3>{posInfo?.name}</h3>
            <Score>
              <Star score={posInfo?.wm_poi_score ?? 0} />
              <span>{posInfo?.wm_poi_score}</span>
            </Score>
            <Tip>
              {posInfo?.min_price_tip} <i></i>
              {posInfo?.shipping_fee_tip} <i></i>
              {posInfo?.delivery_time_tip}
            </Tip>
            <Time>配送時間:{posInfo?.shipping_time}</Time>
            <Discounts>
              <p>
                <img src={posInfo?.discounts2[0].icon_url} alt="" />
                <span>{posInfo?.discounts2[0].info}</span>
              </p>
            </Discounts>
          </MainWrapper>
          <CloseWrapper>
            <IconClose>
              <IconComm
                icon="close"
                size={14}
                onClick={() => {
                  setDetailShow(false);
                }}
              />
            </IconClose>
          </CloseWrapper>
        </DetailWrapper>
      </Detail>
    </CSSTransition>
  );
};

export default DetailModal;

const Detail = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(98, 98, 98, 0.8);
  z-index: 999;
  transition: 0.3s all;
`;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 43px 20px 125px;
  box-sizing: border-box;
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  border-radius: 10px;
  text-align: center;
  h3 {
    font-size: 15px;
    color: white;
    margin-top: 13px;
  }
`;

const ModalIcon = styled.div`
  width: 60px;
  height: 60px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  display: inline-block;
  margin-top: 40px;
`;

const CloseWrapper = styled.div`
  padding-top: 20px;
  height: 40px;
  text-align: center;
`;

const IconClose = styled.span`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  font-size: 14px;
  color: white;
  display: inline-block;
  background: rgba(118, 118, 118, 0.7);
  border: 1px solid rgba(140, 140, 140, 0.9);
`;

const Tip = styled.p`
  font-size: 15px;
  color: white;
  margin-top: 13px;
  i {
    margin: 0 7px;
  }
`;

const Time = styled.p`
  font-size: 11px;
  color: #bababc;
  margin-top: 13px;
`;

const Discounts = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  p {
    padding-top: 20px;
    border-top: 1px solid #bababc;
  }
  img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  span {
    font-size: 11px;
    line-height: 16px;
    color: white;
  }
`;
const Score = styled.div`
  height: 10px;
  margin-top: 6px;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    font-size: 10px;
    color: white;
  }
`;
