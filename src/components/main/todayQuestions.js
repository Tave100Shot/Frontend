import * as t from "../../styles/main/todayQuestionStyle";
import newsImage from '../../assets/imgs/today.png';

const TodayQuestion = () => {


  return (
    <t.TodayQuestionsWrapper>
      <t.mainBox>
        <t.informationWrapper>
        <t.titleBox>백발백준 뉴스레터,<br />
        <t.Highlight>기술</t.Highlight>과 <t.Highlight>취업</t.Highlight> 정보를 한눈에!</t.titleBox><br />
        <t.informationBox>요즘 <t.Highlight>HOT</t.Highlight>한 기술들의 대한 정보 뿐만 아니라,<br />내가 모르는 취업 공고까지 받아보세요!</t.informationBox><br />
        <t.moreButton>더 알아보기</t.moreButton>
      </t.informationWrapper>
      <t.Image src={newsImage}/>
      </t.mainBox>
    </t.TodayQuestionsWrapper>
  )
}

export default TodayQuestion;