import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MainButton from "../../components/main/mainButton";
import TaveAnimation from "../../components/main/tave_animation";
import * as w from "../../styles/mainPageStyle";
import axios from "axios";

const MainPage = ({click}) => {


  return (
    <div>
      <Header click={click} />
      <TaveAnimation/>
      <w.ButtonWrapper>
        <MainButton 
          text={'GET SOLUTION'} 
          navigatePage={'/search-solution'}
          lockImg={'none'}
        />
        <MainButton 
          text={'GET RECOMMEND'} 
          navigatePage={'/recommend'}
          lockImg={'locked'}
        />
      </w.ButtonWrapper>
      {/* <h1>백엔드에서 가져온 데이터 : {message}</h1> */}
    </div>
  
  )
}

export default MainPage;