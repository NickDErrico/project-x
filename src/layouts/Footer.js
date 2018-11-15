import React from "react";
import styled from "styled-components";

const Footer = props => {
  const PrimaryFooter = styled.div`
    display: flex;
    background-color: #253b39;
    color: #f1f2ed;
  `;

  const FooterContent = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <PrimaryFooter>
      <FooterContent>
        <h2>Nick D'Errico built this</h2>
        <h2>copyrighted</h2>
      </FooterContent>
    </PrimaryFooter>
  );
};

export default Footer;
