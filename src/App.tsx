import styled from "styled-components";

function App() {
  const grey = "#2b3138";
  const white = "#fff";
  const textGrey = "#657485";

  const Modal = styled.section`
    width: 28.5rem;
    height: 31.56rem;
    border-radius: 0.8rem;
    background: #212328;
  `;
  const HeaderTitle = styled.div`
    font-size: 1.1rem;
    margin: 1rem;
    color: #fff;
  `;
  const Header = styled.header`
    display: flex;
    align-items: flex-start;
  `;
  const Button = styled.button`
    background-color: ${grey};
    border: none;
    border-radius: 0.3rem;
    width: 2rem;
    height: 2rem;
    margin: 0.8rem 0.8rem 0 auto;
    cursor: pointer;
  `;

  const Pane = styled.div`
    display: flex;
    margin: 1.5rem 1rem 1rem 1rem;
    align-items: center;
  `;

  const AccountToIcon = styled.div`
    flex: 1;
    font-size: 0.7rem;
    margin: 2rem 0 0 0.5rem;
    color: #657485;
  `;
  const AccountSection = styled.div<{ $flex?: string; $height?: string }>`
    flex: ${(props) => props.$flex};
    font-size: 0.8rem;
    border-radius: 1rem;
    height: ${(props) => props.$height};
  `;
  const TitleSection = styled.div`
    margin-bottom: 0.8rem;
    font-weight: bold;
    color: #657485;
  `;
  const InputContainer = styled.div`
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.color ?? "#151317"};
    height: 3rem;
  `;
  const Avatar = styled.div`
    border-radius: 50rem;
    width: 1.7rem;
    height: 1.7rem;
    margin-left: 1rem;
    margin-right: 0.5rem;
    background-color: ${(props) => props.color};
  `;
  const AccountHash = styled.div<{ $fontSize?: string }>`
    flex: 8;
    color: ${textGrey};
    font-size: ${(props) => props.$fontSize};
  `;
  const AccountIconPen = styled.div`
    margin: 1rem;
    cursor: pointer;
  `;

  return (
    <Modal>
      <Header>
        <HeaderTitle>Deposit Atom</HeaderTitle>
        <Button>X</Button>
      </Header>

      <Pane>
        <AccountSection $flex="10">
          <TitleSection>From Cosmos Hub</TitleSection>
          <InputContainer color="#151317">
            <Avatar color="#3a394c" />
            <AccountHash $fontSize="0.7rem">atom1xy5y...m6wwz9a</AccountHash>
          </InputContainer>
        </AccountSection>
        <AccountToIcon>→</AccountToIcon>
        <AccountSection $flex="7">
          <TitleSection>From Cosmos Hub</TitleSection>
          <InputContainer color="#151317">
            <Avatar color="#fff" />
            <AccountHash $fontSize="0.7rem">atom1xy5y...m6wwz9a</AccountHash>
            <AccountIconPen>
              <img src="../public/pencil.png" width="12" />
            </AccountIconPen>
          </InputContainer>
        </AccountSection>
      </Pane>
    </Modal>
  );
}

export default App;
