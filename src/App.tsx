import styled from "styled-components";

function App() {
  const Div = styled.section`
    width: 28.5rem;
    height: 31.56rem;
    border-radius: 0.8rem;
    background: #212328;
  `;
  const TextWhite = styled.div`
    color: #e9eef5;
  `;
  const TextGrey = styled.div`
    color: #657485;
  `;

  const HeaderTitle = styled.div`
    font-size: 1.1rem;
    margin: 1rem;
  `;
  const Header = styled.header`
    display: flex;
    align-items: flex-start;
  `;
  const Button = styled.button`
    background-color: #2b3138;
    border: none;
    border-radius: 0.3rem;
    width: 2rem;
    height: 2rem;
    margin: 0.8rem 0.8rem 0 auto;
    cursor: pointer;
  `;

  const AccoutTrasfer = styled.div`
    display: flex;
    margin: 1.5rem 1rem 0 1rem;
    align-items: center;
  `;
  const AccountTitle = styled.div`
    margin-bottom: 0.7rem;
    font-weight: bold;
  `;
  const AccountToIcon = styled.div`
    flex: 1;
    font-size: 0.7rem;
    margin: 2rem 0 0 0.5rem;
  `;
  const AccountContainer = styled.div`
    flex: 10;
    font-size: 0.8rem;
    border-radius: 1rem;
  `;
  const AccountIput = styled.div`
    background-color: #151317;
    border-radius: 0.3rem;
    height: 3rem;
    display: flex;
    align-items: center;
  `;
  const AccountAvatarContainer = styled.div`
    flex: 2;
  `;
  const AccountAvatarLeft = styled.div`
    border-radius: 50rem;
    width: 1.7rem;
    height: 1.7rem;
    background-color: #3a394c;
    margin-left: 1rem;
    margin-right: 0.5rem;
  `;
  const AccountAvatarRight = styled.div`
    border-radius: 50rem;
    width: 1.7rem;
    height: 1.7rem;
    background-color: #fff;
    margin-left: 1rem;
    margin-right: 0.5rem;
  `;
  const AccountHash = styled.div`
    flex: 8;
  `;
  const AccountIconPen = styled.div`
    margin: 1rem;
    cursor: pointer;
  `;

  return (
    <Div>
      <Header>
        <HeaderTitle>
          <TextWhite>Deposit Atom</TextWhite>
        </HeaderTitle>
        <Button>
          <TextWhite>X</TextWhite>
        </Button>
      </Header>

      <AccoutTrasfer>
        <AccountContainer>
          <AccountTitle>
            <TextGrey>From Cosmos Hub</TextGrey>
          </AccountTitle>
          <AccountIput>
            <AccountAvatarContainer>
              <AccountAvatarLeft />
            </AccountAvatarContainer>
            <AccountHash>
              <TextGrey>atom1xy5y...m6wwz9a</TextGrey>
            </AccountHash>
          </AccountIput>
        </AccountContainer>
        <AccountToIcon>
          <TextGrey>→</TextGrey>
        </AccountToIcon>
        <AccountContainer>
          <AccountTitle>
            <TextGrey>To Osmosis</TextGrey>
          </AccountTitle>
          <AccountIput>
            <AccountAvatarContainer>
              <AccountAvatarRight />
            </AccountAvatarContainer>
            <AccountHash>
              <TextGrey>osom1xy5y...w9a</TextGrey>
            </AccountHash>
            <AccountIconPen>
              <img src="../public/pencil.png" width="12" />
            </AccountIconPen>
          </AccountIput>
        </AccountContainer>
      </AccoutTrasfer>
    </Div>
  );
}

export default App;
