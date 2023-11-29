import Header from "../../components/common/Header";
import TaveAnimation from "../../components/main/tave_animation";

const MainPage = ({click}) => {
  return (
    <div>
      <Header click={click}/>
      <TaveAnimation/>
    </div>
  
  )
}

export default MainPage;