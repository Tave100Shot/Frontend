import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
import { SetLetterInfo } from "../../../redux/actions/letterAction"

const AllLetterItem = ({newsletterId, title, writtenTime}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToPost = () => {

    const storedToken = localStorage.getItem('accessToken');

    // 전체 글 조회 API 호출
    axios.get(`/api/admin/newsletter/${newsletterId}`, {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      // console.log(response.data.result);
      const letterInfoArray = response.data.result;
      dispatch(SetLetterInfo(letterInfoArray));
    
      navigate(`/manager/letter/view/${newsletterId}`)
    })
    .catch(error => {
      console.error(error);
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);

    });

  }

  return (
    <mm.TwoItemBtn>
      <div 
        className="item-box"
        onClick={moveToPost}
      >
        <p className="letter-title">{title}</p>
        <p>|</p>
        <p>{writtenTime}</p>
      </div>
    </mm.TwoItemBtn>
  )
}
export default AllLetterItem;