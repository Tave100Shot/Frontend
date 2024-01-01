import * as b from "../../styles/mainButtonStyle";
import lockIcon from '../../assets/imgs/lock_icon.png'
import unLockIcon from '../../assets/imgs/unLock_icon.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainButton = ({text, navigatePage, lockImg}) => {
  const navigate = useNavigate()

  const movePage = () => {
    navigate(navigatePage);
  }

  return (
       (lockImg === 'none') ? 
        <b.MainButton onClick={movePage}>
          {text}
        </b.MainButton>
        : 
        <b.MainButton onClick={movePage}>
          {lockImg === 'locked' ?
            <img src={lockIcon}/> :
            <img src={unLockIcon}/>
          }
          {text}
        </b.MainButton>
  )
}

export default MainButton;