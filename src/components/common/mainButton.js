import * as b from "../../styles/mainButtonStyle";
import lockIcon from '../../assets/imgs/lock_icon.png'
import unLockIcon from '../../assets/imgs/unLock_icon.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainButton = ({text, navigatePage}) => {
  const navigate = useNavigate()

  const movePage = () => {
    navigate(navigatePage);
  }

  return (
      <b.MainButton onClick={movePage}>
        <img src={lockIcon}/>
        {text}
      </b.MainButton>
  )
}

export default MainButton;