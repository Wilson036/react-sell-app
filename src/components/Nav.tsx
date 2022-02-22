import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <NavWrapper>
      <li>
        <StyledLink to={'/goods'}>
          Goods<span></span>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'/ratings'}>
          Ratings<span></span>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'/store'}>
          Store<span></span>
        </StyledLink>
      </li>
    </NavWrapper>
  );
};

const NavWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  li {
    flex: 1;
    text-align: center;
    font-size: 13px;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
  }
`;

const StyledLink = styled(NavLink)`
  color: #666666;
  &.active {
    color: #ffbb22;
    span {
      width: 20px;
      height: 2px;
      display: inline-block;
      background: #ffbb22;
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-left: -10px;
    }
  }
`;
