import React from "react";
import styled from "@emotion/styled";

const FooterDiv = styled.div`
  /* background: linear-gradient(to left, #38707a 0%, #324d4d 61%); */
  background: #1f3d42;
  border-radius: 15px 15px;
  text-align: center;
  padding: 1.5rem;
`;

const TextoFooter = styled.p`
  font-size: 3.5remi;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
`;

const Footer = ({ texto, titulo }) => {
  return (
    <FooterDiv>
      <TextoFooter>
        {titulo} <br /> {texto}
      </TextoFooter>
    </FooterDiv>
  );
};

export default Footer;
