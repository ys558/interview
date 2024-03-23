import { ReactNode, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  themes,
  white,
  textGrey,
  avatarGrey,
  inputBorderRadius,
} from "./const";

type ThemeName = keyof typeof themes;
function App() {
  const [theme, setTheme] = useState<ThemeName>("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const activeTheme = themes[theme];
  const {
    backgroundColor,
    textColor,
    closeBtnBgColor,
    inputBgColor,
    border,
    inputTextColor,
    transferBtnBgColor,
    transferBtnTextColor,
  } = activeTheme;

  const Modal = styled.section<{ $bgColor: string }>`
    width: 28.5rem;
    height: 31.56rem;
    border-radius: 0.8rem;
    background: ${({ $bgColor }) => $bgColor};
  `;
  const HeaderTitle = styled.div<{ $textColor: string }>`
    font-size: 1.1rem;
    margin: 1rem;
    font-weight: bold;
    color: ${({ $textColor }) => $textColor};
  `;
  const Header = styled.header`
    display: flex;
    align-items: flex-start;
  `;
  type ButtonTypes = {
    $bgColor?: string;
    $fontSize?: string;
    $width?: string;
    $height?: string;
  };
  const Button = styled.button<ButtonTypes>`
    background-color: ${({ $bgColor }) => $bgColor ?? closeBtnBgColor};
    border: none;
    border-radius: ${inputBorderRadius};
    width: ${({ $width }) => $width ?? "2rem"};
    height: ${({ $height }) => $height ?? "2rem"};
    margin: 0.8rem 0.8rem 0 auto;
    cursor: pointer;
    color: ${textColor};
    font-size: ${({ $fontSize }) => $fontSize ?? "1rem"};
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
    flex: ${({ $flex }) => $flex};
    font-size: 0.8rem;
    border-radius: 1rem;
    height: ${({ $height }) => $height};
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
  const InputContainer = styled.div<{ $bgColor?: string }>`
    border-radius: ${inputBorderRadius};
    display: flex;
    align-items: center;
    background-color: ${({ $bgColor }) => $bgColor ?? "transparent"};
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

  type InputContainerMaxType = {
    $bgColor?: string;
    $borderColor: string;
  };
  const InputContainerMax = styled(InputContainer)<InputContainerMaxType>`
    width: 100%;
    background: none;
    background-color: ${({ $bgColor }) => $bgColor ?? "none"};
    border: 1px solid ${({ $borderColor }) => $borderColor};
    height: 4rem;
  `;
  const ToolTip = styled.div<{ $lastElement?: boolean }>`
    color: ${textGrey};
    background-color: ${closeBtnBgColor};
    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
    border-radius: ${inputBorderRadius};
    margin-right: ${(props) => (props.$lastElement ? "0" : "0.6rem")};
    margin-top: 0.5rem;
    font-weight: bold;
    cursor: pointer;
  `;

  const Indicator = styled(InputContainer)`
    background-color: ${inputBgColor};
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
    font-size: ${({ $fontSize }) => $fontSize ?? "0.7rem"};
    color: ${textGrey};
    margin: 0 0.3rem;
  `;
  const TextBold = styled(Text)`
    color: ${textColor};
    font-weight: bolder;
  `;

  type InputProps = {
    $width?: string;
    $height?: string;
    $bgColor?: string;
    $paddingLeft?: string;
    $color?: string;
  };
  const Input = styled.input<InputProps>`
    width: ${({ $width }) => $width ?? "3rem"};
    height: ${({ $height }) => $height ?? "3.9rem"};
    background-color: ${(props) => props.$bgColor ?? "none"};
    border: none;
    color: ${inputTextColor};
    font-size: 1rem;
    padding-left: ${(props) => props.$paddingLeft ?? "1rem"};
  `;
  const ButtonTransfer = styled(Button)`
    background-color: ${transferBtnBgColor};
    color: ${transferBtnTextColor};
  `;

  const ToggleThemeButton = styled(Button)`
    margin-bottom: 1rem;
  `;

  return (
    <ThemeProvider theme={activeTheme}>
      <ToggleThemeButton
        $width="10rem"
        onClick={toggleTheme}
        $bgColor={backgroundColor}
      >
        Toggle theme: {theme}
      </ToggleThemeButton>

      <Modal $bgColor={backgroundColor}>
        <Header>
          <HeaderTitle $textColor={textColor}>Deposit Atom</HeaderTitle>
          <Button $bgColor={closeBtnBgColor}>X</Button>
        </Header>

        <Pane>
          <AccountSection $flex="10">
            <Title>From Cosmos Hub</Title>
            <InputContainer $bgColor={inputBgColor}>
              <Avatar $color={avatarGrey} />
              <AccountHash $fontSize="0.7rem">atom1xy5y...m6wwz9a</AccountHash>
            </InputContainer>
          </AccountSection>
          <AccountToIcon>→</AccountToIcon>
          <AccountSection $flex="7">
            <Title>From Cosmos Hub</Title>
            <InputContainer $bgColor={inputBgColor}>
              <Avatar $color={white} />
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
          <InputContainerMax $bgColor={backgroundColor} $borderColor={border}>
            <Container $flex="1">
              <Avatar $color={avatarGrey} $size="0.43rem" />
            </Container>
            <Container $flex="8" $borderLeft={`1px solid ${border}`}>
              <Input type="number" $width="100%" $bgColor={backgroundColor} />
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
          <ButtonTransfer $width="100%" $height="3.8rem">
            Transfer
          </ButtonTransfer>
          <StyledLink>Cancel</StyledLink>
        </Pane>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
