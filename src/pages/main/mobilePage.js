import iphone from "../../assets/imgs/아이폰.png"
import galaxy from "../../assets/imgs/갤럭시.png"
import icon from "../../assets/imgs/100shot_icon.png"
import * as m from "../../styles/mobileStyle"

const MobilePage = () => {

  return (
    <m.MobileContainer>
      <m.IconContainer>
        <img src={icon} alt="안녕"/>
        <h3>백발백준</h3>
      </m.IconContainer>
      <m.ImageContainer>
        <img src={iphone} className="iphone" alt="안녕"/>
        <img src={galaxy} className="galaxy" alt="안녕"/>
      </m.ImageContainer>
      <m.TextContainer>
        <h3>백발백준은 모바일 뷰를 지원하지 않습니다</h3>
        <p>화면 너비를 늘려주세요 :)</p>
      </m.TextContainer>

    </m.MobileContainer>
  )
}

export default MobilePage;