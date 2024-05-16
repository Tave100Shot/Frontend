import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import DevLetterList from "../../components/manage/letter/devLetterList";
import EmployLetterList from "../../components/manage/letter/employLetterList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SetDevLetter, SetEmployLetter } from "../../redux/actions/letterAction";
const ManageAllLetter = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const storedToken = localStorage.getItem('accessToken');

    // DEV-Letter 글 조회 API 호출
    axios.get('/api/admin/newsletter?inputCategory=DEV_LETTER', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      console.log(response.data.result.newsletterResponses);
      const devLetterArray = response.data.result.newsletterResponses;

      // Redux State 내에 결과값 저장
      dispatch(SetDevLetter(devLetterArray));

    })
    .catch(error => {
      console.error(error);
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
    });
    
    // EMPLOY-Letter 글 조회 API 호출
    axios.get('/api/admin/newsletter?inputCategory=EMPLOYEE_LETTER', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      console.log(response.data.result.newsletterResponses);
      const employLetterArray = response.data.result.newsletterResponses;
      
      // Redux State 내에 결과값 저장
      dispatch(SetEmployLetter(employLetterArray));

    })
    .catch(error => {
      console.error(error);
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
    });
  }, [])

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterContainer>
        <DevLetterList/>
        <EmployLetterList/>
      </ml.LetterContainer>
    </mm.ManageContainer>
  )
}
export default ManageAllLetter;