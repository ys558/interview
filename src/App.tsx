import { ReactNode } from "react";
import styled from "styled-components";
import {
  bgGrey,
  white,
  textGrey,
  borderGrey,
  black,
  avatarGrey,
  toolTipBgColor,
  inputBorderRadius,
  modalBgColor,
} from "./const";

function App() {
  const Modal = styled.section`
    width: 28.5rem;
    height: 31.56rem;
    border-radius: 0.8rem;
    background: ${modalBgColor};
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
  type ButtonPropsTypes = {
    $bgColor?: string;
    $fontColor?: string;
    $fontSize?: string;
    $width?: string;
    $height?: string;
  };
  const Button = styled.button<ButtonPropsTypes>`
    background-color: ${(props) => props.$bgColor ?? bgGrey};
    border: none;
    border-radius: ${inputBorderRadius};
    width: ${(props) => props.$width ?? "2rem"};
    height: ${(props) => props.$height ?? "2rem"};
    margin: 0.8rem 0.8rem 0 auto;
    cursor: pointer;
    color: ${(props) => props.$fontColor ?? white};
    font-size: ${(props) => props.$fontSize ?? "1rem"};
  `;

  const Pane = styled.div<{ $isColumn?: boolean }>`
    display: flex;
    margin: 1.5rem 1rem 1rem 1rem;
    align-items: center;
    flex-direction: ${(props) => (props.$isColumn ? "column" : "row")};
  `;

  const AccountToIcon = styled.div`
    flex: 1;
    font-size: 0.7rem;
    margin: 2rem 0 0 0.5rem;
    color: ${textGrey};
  `;
  const AccountSection = styled.div<{ $flex?: string; $height?: string }>`
    flex: ${(props) => props.$flex};
    font-size: 0.8rem;
    border-radius: 1rem;
    height: ${(props) => props.$height};
  `;
  const Title = styled.div`
    margin-bottom: 0.8rem;
    font-weight: bold;
    color: ${textGrey};
  `;
  const SubTitle = styled(Title)`
    font-weight: normal;
    font-size: 0.7rem;
  `;
  type ContainterPropsTypes = {
    $justifyContent?: string;
    $flex?: string;
    $borderLeft?: string;
  };
  const Container = styled(Pane)<ContainterPropsTypes>`
    align-items: baseline;
    margin: 0;
    justify-content: ${(props) => props.$justifyContent ?? "flex-start"};
    width: 100%;
    flex: ${(props) => props.$flex ?? "1"};
    border-left: ${(props) => props.$borderLeft ?? "none"};
  `;
  const InputContainer = styled.div`
    border-radius: ${inputBorderRadius};
    display: flex;
    align-items: center;
    background-color: ${(props) => props.color ?? black};
    height: 3rem;
  `;
  const Avatar = styled.div<{ $color: string; $size?: string }>`
    border-radius: 50rem;
    width: 1.7rem;
    height: 1.7rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: ${(props) => props.$color};
    padding: ${(props) => props.$size ?? 0};
  `;
  const AccountHash = styled.div<{ $fontSize?: string }>`
    flex: 8;
    color: ${textGrey};
    font-size: ${({ $fontSize }) => $fontSize};
  `;

  const InputContainerMax = styled(InputContainer)`
    width: 100%;
    background: none;
    border: 0.12rem solid ${borderGrey};
    height: 4rem;
  `;
  const ToolTip = styled.div<{ $lastElement?: boolean }>`
    color: ${textGrey};
    background-color: ${toolTipBgColor};
    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
    border-radius: ${inputBorderRadius};
    margin-right: ${(props) => (props.$lastElement ? "0" : "0.6rem")};
    margin-top: 0.5rem;
    font-weight: bold;
  `;

  const Indicator = styled(InputContainer)`
    background-color: ${black};
    width: 100%;
    height: 2.3rem;
    border-radius: ${inputBorderRadius};
    margin-bottom: 0.2rem;
  `;

  const Link = ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => <a className={className}>{children}</a>;
  const StyledLink = styled(Link)`
    color: ${textGrey};
    margin-top: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
  `;

  const IconContainer = styled.div`
    margin: 0.8rem;
    cursor: pointer;
  `;
  const Image = styled.img<{ width?: string }>`
    width: ${(props) => props.width ?? "0.75rem"};
  `;
  const Text = styled.div<{ $fontSize?: string }>`
    font-size: ${(props) => props.$fontSize ?? "0.6rem"};
    color: ${textGrey};
    margin: 0 0.3rem;
  `;
  const TextBold = styled(Text)`
    font-weight: bolder;
  `;

  type InputProps = {
    $width?: string;
    $height?: string;
    $bgColor?: string;
    $paddingLeft?: string;
  };
  const Input = styled.input<InputProps>`
    width: ${(props) => props.$width ?? "3rem"};
    height: ${(props) => props.$height ?? "3.7rem"};
    background-color: ${(props) => props.$bgColor ?? "none"};
    border: none;
    color: ${white};
    font-size: 1rem;
    padding-left: ${(props) => props.$paddingLeft ?? "1rem"};
  `;

  return (
    <Modal>
      <Header>
        <HeaderTitle>Deposit Atom</HeaderTitle>
        <Button $fontColor="white">X</Button>
      </Header>

      <Pane>
        <AccountSection $flex="10">
          <Title>From Cosmos Hub</Title>
          <InputContainer color={black}>
            <Avatar $color={avatarGrey} />
            <AccountHash $fontSize="0.7rem">atom1xy5y...m6wwz9a</AccountHash>
          </InputContainer>
        </AccountSection>
        <AccountToIcon>→</AccountToIcon>
        <AccountSection $flex="7">
          <Title>From Cosmos Hub</Title>
          <InputContainer color={black}>
            <Avatar $color={`${white}`} />
            <AccountHash $fontSize="0.7rem">atom1xy5y...m6wwz9a</AccountHash>
            <IconContainer>
              <Image src="pencil.png" />
            </IconContainer>
          </InputContainer>
        </AccountSection>
      </Pane>

      <Pane $isColumn={true}>
        <Container $justifyContent="space-between">
          <Title>Select Amount</Title>
          <SubTitle>Avaliable 2 ATOM</SubTitle>
        </Container>
        <InputContainerMax>
          <Container $flex="1">
            <Avatar $color={avatarGrey} $size="0.43rem" />
          </Container>
          <Container $flex="8" $borderLeft={`0.12rem solid ${borderGrey}`}>
            <Input type="number" $width="100%" $bgColor={modalBgColor} />
          </Container>
          <Container $flex="1" $justifyContent="flex-end">
            <TextBold>ATOM</TextBold>
          </Container>
          <Container $flex="2">
            <Text>≈ $1,013</Text>
          </Container>
        </InputContainerMax>
        <Container $justifyContent="flex-end">
          <ToolTip>Max</ToolTip>
          <ToolTip>1/2</ToolTip>
          <ToolTip $lastElement={true}>1/3</ToolTip>
        </Container>
      </Pane>

      <Pane $isColumn={true}>
        <Indicator>
          <IconContainer>
            <Image src="clock.png" width="1rem" />
          </IconContainer>
          <Text $fontSize="0.85rem">Estimated time:</Text>
          <TextBold $fontSize="0.8rem">20 seconds</TextBold>
        </Indicator>
        <Button
          $bgColor={white}
          $fontColor={black}
          $width="100%"
          $height="3.8rem"
        >
          Transfer
        </Button>
        <StyledLink>Cancel</StyledLink>
      </Pane>
    </Modal>
  );
}

export default App;
