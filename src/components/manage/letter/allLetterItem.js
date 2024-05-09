import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import { useEffect, useState } from "react"

const AllLetterItem = () => {

  return (
    <mm.TwoItemBtn>
      <div className="item-box">
        <p>레터 제목</p>
        <p>|</p>
        <p>2024.05.07</p>
      </div>
    </mm.TwoItemBtn>
  )
}
export default AllLetterItem;