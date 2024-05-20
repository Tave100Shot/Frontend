import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const RecentLetterItem = ({title, letterType, writtenTime}) => {
  const navigate = useNavigate();
  const [letterCategory, setLetterCategory] = useState(letterType);
  useEffect(() => {
    if(letterType === 'EMPLOYEE_LETTER') {
      setLetterCategory('EMPLOY');
    }
    else if(letterType === 'DEV_LETTER') {
      setLetterCategory('DEV');
    }

  }, [letterType])

  const moveToPost = () => {
    navigate('/manager/letter/view/:letterId')
  }

  return (
    <mm.ThreeItemBtn>
      <div 
        className="item-box"
        onClick={moveToPost}
      >
        <p>{letterCategory}</p>
        <p>|</p>
        <p className="letter-title">{title}</p>
        <p>|</p>
        <p>{writtenTime}</p>
      </div>
    </mm.ThreeItemBtn>
  )
}
export default RecentLetterItem;