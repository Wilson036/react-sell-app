import React from 'react';
import styled from 'styled-components';

const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

const Star: React.FC<{ score: number }> = ({ score }) => {
  const length = Math.floor(score);
  const result = new Array(length).fill(CLS_ON);
  //對分數進行處理 向下取0.5的倍數
  const s = Math.floor(score * 2) / 2;
  const hasDecimal = s % 1 !== 0;
  if (hasDecimal) {
    result.push(CLS_HALF);
  }
  if (result.length < LENGTH) {
    result.concat(new Array(LENGTH - result.length).fill(CLS_OFF));
  }

  return (
    <StarWrapper>
      {result.map((item, idx) => (
        <StarItem
          key={idx}
          style={{ backgroundImage: `url(img/star24_${item}@2x.png)` }}
        />
      ))}
    </StarWrapper>
  );
};

export default Star;

const StarWrapper = styled.div`
  font-size: 0;
`;

const StarItem = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-size: 10px;
  &:last-child {
    margin-right: 0;
  }
`;
