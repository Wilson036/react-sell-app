import { PosInfo, ResponseData, Response } from 'model/model';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailModal from './DetailModal';
import IconComm from './common/icon/IconComm';

export const Header: React.FC = () => {
  const [posInfo, setPosInfo] = useState<PosInfo>();
  const [isDetailShow, setDetailShow] = useState(false);
  useEffect(() => {
    fetchPoiInfo();
  }, []);

  const fetchPoiInfo = () => {
    fetch('http://localhost:4000/sell/order')
      .then((resp: any) => resp.json())
      .then((resp: Response<ResponseData>) => {
        if (resp?.code === 0) {
          setPosInfo(resp?.data?.poi_info ?? {});
        }
      })
      .catch((error) => console.log('error:', error));
  };

  return (
    <HeaderWrapper>
      <TopWrapper>
        <BackWrapper>
          <IconComm icon="arrow_lift" size={12} color="red" />
        </BackWrapper>
        <SearchWrapper>
          <SearchIcon />
          <SearchBar type="text" placeholder="搜索店內商品" />
        </SearchWrapper>
        <MoreWrapper>
          <SpellingButton href="!#">拼單</SpellingButton>
          <MoreButton>
            <Dot />
            <Dot />
            <Dot />
          </MoreButton>
        </MoreWrapper>
      </TopWrapper>
      <ContentWrapper>
        <StoreIcon
          style={{ backgroundImage: `url(${posInfo?.pic_url ?? ''})` }}
        />
        <StoreName>
          <h3>{posInfo?.name ?? '-'}</h3>
        </StoreName>
        <Collect>
          <img src="img/star.png" alt="" />
          <span>收藏</span>
        </Collect>
      </ContentWrapper>
      <BulletinWrapper>
        <BulletinIcon src={posInfo?.discounts2[0].icon_url} />
        <Text>{posInfo?.discounts2[0].info}</Text>
        <Detail>
          {posInfo?.discounts2.length}個活動{' '}
          <IconComm
            icon="keyboard_arrow_right"
            size={16}
            onClick={() => {
              setDetailShow(true);
            }}
          />{' '}
        </Detail>
      </BulletinWrapper>
      <Banner $bgImg={posInfo?.head_pic_url} />
      <DetailModal
        posInfo={posInfo}
        isDetailShow={isDetailShow}
        setDetailShow={setDetailShow}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 130px;
  padding-top: 20px;
`;

const TopWrapper = styled.div`
  position: relative;
`;

const BackWrapper = styled.div`
  width: 50px;
  height: 31px;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 31px;
`;

const SearchWrapper = styled.form`
  width: 100%;
  height: 31px;
  /*background: purple;*/
  padding: 0 104px 0 50px;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 31px;
  border: 0;
  /* 设置盒子从边框开始计算*/
  box-sizing: border-box;
  background: #cdcdcc;
  border-radius: 25px;
  padding-left: 28px;
  /* 去除选中时蓝色边框*/
  outline: none;
`;

const SearchIcon = styled.span`
  width: 28px;
  height: 31px;
  background: url(img/titans_h5_search@2x.png) no-repeat 11px center;
  background-size: 13px 13px;
  position: absolute;
`;

const MoreWrapper = styled.div`
  /* width: 65px; */
  width: 102px;
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 7px 15px 0 24px;
`;

const SpellingButton = styled.a`
  width: 30px;
  height: 17px;
  color: white;
  line-height: 17px;
  border: 1px solid white;
  text-align: center;
  float: left;
  text-decoration: none;
  font-size: 10px;
`;

const MoreButton = styled.div`
  float: right;
  width: 20px;
  height: 24px;
  margin-left: 13px;
  margin-top: 6px;
`;

const Dot = styled.i`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  border: 1px solid white;
  display: block;
  float: left;
  margin-right: 1px;
`;

const Banner = styled.div<{ $bgImg: string | undefined }>`
  width: 100%;
  height: 146px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-size: 100% 135%;
  background-position: center -12px;
  background-image: url(${({ $bgImg }) => $bgImg});
`;

const ContentWrapper = styled.div`
  padding: 17px 10px 11px;
  height: 77px;
`;

const StoreIcon = styled.div`
  width: 50px;
  height: 50px;
  background-size: 135% 100%;
  background-position: center;
  border-radius: 5px;
  float: left;
`;

const StoreName = styled.div`
  float: left;
  padding: 18px 0 0 12px;
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
`;

const Collect = styled.div`
  width: 25px;
  height: 37px;
  float: right;
  text-align: center;
  padding-top: 6px;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    margin-top: 7px;
    color: white;
    font-size: 11px;
  }
`;

const BulletinWrapper = styled.div`
  height: 16px;
  padding: 0 10px;
`;

const BulletinIcon = styled.img`
  width: 16px;
  height: 16px;
  float: left;
  margin-right: 6px;
`;

const Text = styled.span`
  font-size: 11px;
  color: white;
  float: left;
  line-height: 16px;
`;

const Detail = styled.div`
  color: white;
  float: right;
  font-size: 11px;
  line-height: 16px;
  display: flex;
`;
