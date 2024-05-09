import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import { useEffect, useState } from "react"

const RecentLetterItem = () => {

  return (
    <mm.FlexItemBtn>
      <div className="item-box">
        <p>DEV</p>
        <p>|</p>
        <p>레터 제목</p>
        <p>|</p>
        <p>2024.05.07</p>
      </div>
    </mm.FlexItemBtn>
  )
}
export default RecentLetterItem;