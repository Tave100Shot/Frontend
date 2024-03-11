import { useNavigate } from "react-router-dom";
import { SetModal } from "../../redux/actions/mainAction";
import { useDispatch } from "react-redux";
import lockIcon from '../../assets/imgs/lock_icon.png'
import * as b from "../../styles/main/mainButtonStyle";

const MainButton = ({text, navigatePage, lockImg}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movePage = () => {
    if (lockImg === 'locked') {
      dispatch(SetModal(true)); 
    } else {
      navigate(navigatePage);
    }
  }

  return (
       (lockImg === 'none') ? 
        <b.MainButton onClick={movePage}>
          {text}
        </b.MainButton>
        : 
        <b.MainButton onClick={movePage}>
          {lockImg === 'locked' ?
            <img src={lockIcon} alt="안녕"/> :
            <></>
          }
          {text}
        </b.MainButton>


  )
}

export default MainButton;