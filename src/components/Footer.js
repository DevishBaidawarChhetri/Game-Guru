import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        copyright &copy; <span>Game Guru</span> {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  background: #f3f3f3;
  p{
    padding: 1.5rem 2rem 1rem;
    font-size: 1.2rem !important;
    text-align: center;
    text-transform: capitalize;
  }
`;

export default Footer;
