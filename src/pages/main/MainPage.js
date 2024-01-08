import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MainButton from "../../components/common/mainButton";
import TaveAnimation from "../../components/main/tave_animation";
import * as w from "../../styles/mainPageStyle";
import axios from "axios";

const MainPage = ({click}) => {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // axios.get('/test/hello')
  //   // .then(response => setMessage(response.data))
  //   axios({
  //     method: 'GET',
  //     url: 'http://43.200.95.44:8080/test/hello'
  //   }).then(response => setMessage(response.data));
    

  // }, []);


  return (
    <div>
      <Header click={click} />
      <TaveAnimation/>
      <w.ButtonWrapper>
        <MainButton text={'GET SOLUTION'} navigatePage={'/search-solution'}/>
        <MainButton text={'GET RECOMMEND'} navigatePage={'/recommend'}/>
      </w.ButtonWrapper>
      {/* <h1>백엔드에서 가져온 데이터 : {message}</h1> */}
    </div>
  
  )
}

export default MainPage;