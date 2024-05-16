import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AllLetterItem = ({title, content, writtenTime}) => {
  const navigate = useNavigate();
  const moveToPost = () => {
    navigate('/manager/letter/view/:letterId')
  }
  console.log(writtenTime)

  return (
    <mm.TwoItemBtn>
      <div 
        className="item-box"
        onClick={moveToPost}
      >
        <p>{title}</p>
        <p>|</p>
        <p>{writtenTime}</p>
      </div>
    </mm.TwoItemBtn>
  )
}
export default AllLetterItem;