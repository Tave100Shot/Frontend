import { SetModal } from "../../redux/actions/mainAction";
import { useDispatch } from "react-redux";
import * as b from "../../styles/main/mainButtonStyle";

const AltButton = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(SetModal(true)); 
  }


  return (
        <b.MainButton className="bojUpdateBtn" onClick={openModal}>
          <p className="hoverBefore">BOJ UPDATE</p>
          <p className="hoverAfter">R U SERIOUS??</p>
        </b.MainButton>
  )
}

export default AltButton;