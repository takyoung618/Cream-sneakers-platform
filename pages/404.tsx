import styled from "@emotion/styled";

export default function ErrorPage() {
  return (
    <ErrorWrapper>
      <Wrapper>
        <ErrorImg src="images/404page.png" />
      </Wrapper>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  width: fit-content;
  margin: auto;
`;

const ErrorImg = styled.img`
  width: 700px;
  margin: 100px 0 200px 0;
`;
