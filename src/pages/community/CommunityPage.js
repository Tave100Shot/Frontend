import { Header, MainContainer, FirstContainer, GridContainer, LevelBox, Typography, LevelTypography, Description, HorizontalLine, EnterButton, Footer } from '../../styles/CommunityStyle';

const CommunityPage = () => {
  return (
    <>
      <Header>HEADER</Header>
      <MainContainer>
        <FirstContainer>
          <Typography>COMMUNITY</Typography>
          <HorizontalLine></HorizontalLine>
          <p>본인 레벨 이하에만 입장 가능</p>
          <GridContainer>
            <LevelBox>
              <LevelTypography>BRONZE</LevelTypography>
              <Description>
              설명 어쩌구 저쩌구~~ 이 단계는 어떤 회원한테 적합하고 설명을 써놓고~~~어떤 문제들이 있는지~only for bronze 12324890675379845~!#@~@#~!#%#$%
              </Description>
              <EnterButton>ENTER</EnterButton>
            </LevelBox>
            <LevelBox>
              <LevelTypography>SILVER</LevelTypography>
              <Description>
              설명 어쩌구 저쩌구~~ 이 단계는 어떤 회원한테 적합하고 설명을 써놓고~~~어떤 문제들이 있는지~only for bronze 12324890675379845~!#@~@#~!#%#$%
              </Description>
              <EnterButton>ENTER</EnterButton></LevelBox>
            <LevelBox>
              <LevelTypography>GOLD</LevelTypography>
              <Description>
              설명 어쩌구 저쩌구~~ 이 단계는 어떤 회원한테 적합하고 설명을 써놓고~~~어떤 문제들이 있는지~only for bronze 12324890675379845~!#@~@#~!#%#$%
              </Description>
              <EnterButton>ENTER</EnterButton></LevelBox>
            <LevelBox>
              <LevelTypography>PLATINUM</LevelTypography>
              <Description>
              설명 어쩌구 저쩌구~~ 이 단계는 어떤 회원한테 적합하고 설명을 써놓고~~~어떤 문제들이 있는지~only for bronze 12324890675379845~!#@~@#~!#%#$%
              </Description>
              <EnterButton>LOCKED</EnterButton></LevelBox>
          </GridContainer>
        </FirstContainer>
      </MainContainer>
      <Footer>
        <p>FOOTER</p>
      </Footer>
    </>
  )
}

export default CommunityPage;