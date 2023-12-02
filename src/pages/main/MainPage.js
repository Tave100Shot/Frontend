import Header from "../../components/common/Header";
import MainButton from "../../components/common/mainButton";
import TaveAnimation from "../../components/main/tave_animation";
import * as w from "../../styles/mainPageStyle";

const MainPage = ({click}) => {

  return (
    <div>
      <Header click={click}/>
      <TaveAnimation/>
      <w.ButtonWrapper>
        <MainButton text={'GET SOLUTION'} navigatePage={'/solution'}/>
        <MainButton text={'GET RECOMMEND'} navigatePage={'/recommend'}/>
      </w.ButtonWrapper>
    </div>
  
  )
}

export default MainPage;