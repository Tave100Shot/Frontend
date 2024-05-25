import * as mm from "../../../styles/manage/manageMainStyle"
import * as mem from "../../../styles/manage/manageMemberStyle"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const MemberHeader = () => {
/*   const navigate = useNavigate();
  const moveToPost = () => {
    navigate('/manage/letter/view/:letterId')
  } */

  return (
    <mem.SixItemBtn>
      <div 
        className="item-box"
/*         onClick={moveToPost} */
      >
        <p>성함</p>
        <p>|</p>
        <p>구독여부</p>
        <p>|</p>
        <p>구독여부</p>
        <p>|</p>
        <p>구독종류</p>
        <p>|</p>
        <p>2차인증</p>
        <p>|</p>
        <p>이메일</p>
      </div>
    </mem.SixItemBtn>
  )
}
export default MemberHeader;