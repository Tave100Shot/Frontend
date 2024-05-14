import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import { useNavigate } from "react-router-dom";

const ManageLetterEdit = () => {
  const navigate = useNavigate();

  // 레터 작성 취소 함수
  const letterCancel = () => {
    var cancelResult = window.confirm('정말 작성 중단하시겠습니까?');
    if(cancelResult) {
      navigate(-1);
    } else {
    }
  }

  // 레터 저장 함수
  const letterSave = () => {
    var saveResult = window.confirm("레터를 저장하시겠습니까?");
    if(saveResult){
      navigate('/manager/letter');
    }
  }

  const OPTIONS = [
    { value: "DEV_LETTER", name: "DEVELOP" },
    { value: "EMPLOY_LETTER", name: "EMPLOY" },
  ];

  const SelectBox = (props) => {
    return (
      <select>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterEditContainer>
        <div className="letter-header">
          <input 
            className="letter-title"
            placeholder="레터 제목"
          />
          <select className="letter-select">
            {OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
          </select>
          <input 
            className="letter-date"
            type="date"  
            name="letter-date"
          />
        </div>
        <textarea className="letter-body"/>
        <div className="btn-box">
          <button className="letter-btn" onClick={letterCancel}>취소</button>
          <button className="letter-btn" onClick={letterSave}>저장</button>
        </div>
      </ml.LetterEditContainer>
    </mm.ManageContainer>
  )

}
export default ManageLetterEdit;