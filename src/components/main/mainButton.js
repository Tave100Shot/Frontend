import { useNavigate } from "react-router-dom";
import { SetModal } from "../../redux/actions/mainAction";
import { useDispatch } from "react-redux";
import lockIcon from '../../assets/imgs/lock_icon.png'
import * as b from "../../styles/main/mainButtonStyle";

const MainButton = ({text, navigatePage}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movePage = () => {
    navigate(navigatePage);
  }

  return (
        <b.MainButton onClick={movePage}>
          {text}
        </b.MainButton>
  )
}

export default MainButton;