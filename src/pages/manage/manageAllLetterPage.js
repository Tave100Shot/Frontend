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
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
      if(errorCode ==='JWT_4001') {
        alert('JWT Token이 올바르지 않습니다.. 다시 로그인 해주세요 :)')
      } 
      else if(errorCode ==='JWT_4010') {
        alert('로그인 유지 시간이 만료되었습니다. 다시 로그인 해주세요 :)')
      }
      else if(errorCode ==='SERVER_500') {
        alert('알 수 없는 서버 에러입니다.')
      } else {
        alert('문제가 발생했습니다. 다시 로그인 부탁드립니다 :)')
      }
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
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
      if(errorCode ==='JWT_4001') {
        alert('JWT Token이 올바르지 않습니다.. 다시 로그인 해주세요 :)')
      } 
      else if(errorCode ==='JWT_4010') {
        alert('로그인 유지 시간이 만료되었습니다. 다시 로그인 해주세요 :)')
      }
      else if(errorCode ==='SERVER_500') {
        alert('알 수 없는 서버 에러입니다.')
      } else {
        alert('문제가 발생했습니다. 다시 로그인 부탁드립니다 :)')
      }
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