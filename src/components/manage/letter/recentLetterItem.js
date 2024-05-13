import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RecentLetterItem = () => {
  const navigate = useNavigate();
  const moveToPost = () => {
    navigate('/manage/letter/view/:letterId')
  }

  return (
    <mm.ThreeItemBtn>
      <div 
        className="item-box"
        onClick={moveToPost}
      >
        <p>DEV</p>
        <p>|</p>
        <p>레터 제목</p>
        <p>|</p>
        <p>2024.05.07</p>
      </div>
    </mm.ThreeItemBtn>
  )
}
export default RecentLetterItem;