import { FirstContainer, MainContainer, GridContainer, LevelBox, Typography, LevelTypography, Description,
  HorizontalLine, EnterButton, TypographyDcp  } from '../../styles/communityStyle';
import Header from "../../components/common/header";
import {useNavigate} from 'react-router-dom';

const CommunityPage = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  const handleEnterClick = (level) => {
    navigate(`/community/${level.toLowerCase()}`);
    //toLowerCase: JavaScript의 문자열 메서드, 문자열의 모든 문자 -> 소문자로 변환
  };

  return (
    <div>
      <Header click={moveToMain}/>
      <MainContainer>
        <FirstContainer>
          <Typography>COMMUNITY</Typography>
          <HorizontalLine></HorizontalLine>
          <TypographyDcp>모든 레벨 입장 가능하지만 본인 레벨 이하 채널에서만 작성 가능합니다.</TypographyDcp>
          <GridContainer>
            <LevelBox>
              <LevelTypography>BRONZE & SILVER</LevelTypography>
              <Description>
                브론즈, 실버 회원들의 채널방
              </Description>
              <EnterButton onClick={() => handleEnterClick('BRONZE')}>ENTER</EnterButton>
            </LevelBox>
            <LevelBox>
              <LevelTypography>GOLD</LevelTypography>
              <Description>
              골드 회원들의 채널방
              </Description>
              <EnterButton onClick={() => handleEnterClick('GOLD')}>ENTER</EnterButton>
              </LevelBox>
            <LevelBox>
              <LevelTypography>PLATINUM</LevelTypography>
              <Description>
              플래티넘 회원들의 채널방
              </Description>
              <EnterButton onClick={() => handleEnterClick('PLATINUM')}>ENTER</EnterButton>
              </LevelBox>
            <LevelBox>
              <LevelTypography>HIGH</LevelTypography>
              <Description>
              다이아, 루비, 마스터 회원들의 채널방
              </Description>
              <EnterButton onClick={() => handleEnterClick('DIAMOND')}>ENTER</EnterButton>
              </LevelBox>
          </GridContainer>
        </FirstContainer>
      </MainContainer>
    </div>
  )
}

export default CommunityPage;