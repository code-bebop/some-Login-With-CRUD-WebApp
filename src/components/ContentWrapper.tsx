import React from "react";
import styled from "styled-components";

const ContentWrapperBlock = styled.div`
  padding: 0 320px;
`;

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ContentWrapperBlock>{children}</ContentWrapperBlock>;
};

export default ContentWrapper;
