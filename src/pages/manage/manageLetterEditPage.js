import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateLetterInfo } from "../../redux/actions/letterAction";

const ManageLetterEdit = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  let letterInfoList = useSelector( (state)=>{ return state.letterInfo } );
  
  // 레터 종류 선택
  const LETTER_OPTIONS = [
    { value: "DEV_LETTER", name: "DEVELOP" },
    { value: "EMPLOYEE_LETTER", name: "EMPLOY" },
  ];

  const [letterId, setLetterId] = useState(letterInfoList.newsletterId)  // 레터 ID
  const [letterTitle, setLetterTitle] = useState(letterInfoList.title)  // 레터 제목
  const [letterCategory, setLetterCategory] = useState(LETTER_OPTIONS[0].value); // 레터 종류 
  const [letterDate, setLetterDate] = useState(letterInfoList.writtenTime) // 레터 날짜 
  const [letterContent, setLetterContent] = useState(letterInfoList.content) // 레터 내용

  
  // letterInfoList에 정보가 들어있다면 값 넣어서 수정 받기
  useEffect(() => {
    if (letterInfoList.length !== 0) {
      // letterInfoList에 정보 들어있음 = 수정 필요
      console.log('letterInfoList에 정보 들어있음', letterInfoList);
      setIsEdit(true);
      setLetterId(letterInfoList.newsletterId); // 현재 뉴스레터ID 설정
      setLetterCategory(letterInfoList.letterType); // letterCategory 상태 변수 업데이트
    } else {
      // letterInfoList에 정보 없음 = 생성 필요
      console.log('letterInfoList에 정보 비어있음', letterInfoList);
      setIsEdit(false);
      setLetterCategory(LETTER_OPTIONS[0].value); // letterCategory 상태 변수 초기화
    }
  }, [letterInfoList]);

  // 레터 내용 변경 함수
  // console.log('letterTitle : ',letterTitle)
  // console.log('letterCategory : ',letterCategory)
  // console.log('letterDate : ',letterDate)
  // console.log('letterContent : ',letterContent)

  // 레터 생성 API 호출
  const createLetter = async (letterInfo) => {
    const storedToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.post('/api/admin/newsletter', {
        title: letterInfo.title,
        content: letterInfo.content,
        letterType: letterInfo.letterType,
      },{
        headers : {
          Authorization : `Bearer ${storedToken}`
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating letter:', error.response.data);
      console.error('Error creating letter:', error.response.data.errorCode);
      console.error('Error creating letter:', error.response.data.message);
      throw error;
    }
  };
  
  
  
  // 레터 수정 API 호출
  const updateLetter = async (letterInfo) => {
    const storedToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.patch('/api/admin/newsletter', {
        newsletterId: letterInfo.newsletterId,
        title: letterInfo.title,
        content: letterInfo.content,
      }, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating letter:', error.response.data);
      console.error('Error updating letter:', error.response.data.errorCode);
      console.error('Error updating letter:', error.response.data.message);
      throw error;
    }
  };

  // 레터 저장 함수
  const letterSave = async (e) => {
    e.preventDefault();
    var saveResult = window.confirm("레터를 저장하시겠습니까?");
    if (saveResult) {
      if (isEdit) { // Letter 수정
        const UpdateLetterInfo = {
          newsletterId: letterId,
          title: letterTitle,
          content: letterContent,
        };
        try {
          await updateLetter(UpdateLetterInfo);
          alert('저장 완료')
          navigate('/manager/letter');
        } catch (error) {
          alert('저장 실패')
          // 에러 처리 로직 추가
        }
      }
      else { // Letter 생성
        const NewLetterInfo = {
          title: letterTitle,
          content: letterContent,
          letterType: letterCategory,
        };
        console.log('NewwLetterInfo : ', NewLetterInfo)
        try {
          await createLetter(NewLetterInfo);
          alert('저장 완료')
          navigate('/manager/letter');
        } catch (error) {
          alert('저장 실패')
          // 에러 처리 로직 추가
        }

      }
    }
  };

  // 레터 작성 취소 함수
  const letterCancel = () => {
    var cancelResult = window.confirm('정말 작성 중단하시겠습니까?');
    if(cancelResult) {
      navigate(-1);
    } 
  }

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterEditContainer>
        <div className="letter-header">
          <input 
            className="letter-title"
            placeholder="레터 제목"
            value={letterTitle}
            onChange={(e) => setLetterTitle(e.target.value)}
          />
          <select 
            className="letter-select"
            value={letterCategory}
            onChange={(e) => {
              setLetterCategory(e.target.value); 
              console.log('letterCategory : ',letterCategory);
            }}
            disabled={isEdit}
          >
            {LETTER_OPTIONS.map((option) => (
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
            value={letterDate}
            onChange={(e) => setLetterDate(e.target.value)}
          />
        </div>
        <textarea 
          className="letter-body"
          value={letterContent}
          onChange={(e) => setLetterContent(e.target.value)}
        />
        <div className="btn-box">
          <button className="letter-btn" type="button" onClick={letterCancel}>취소</button>
          <button className="letter-btn" type="button" onClick={letterSave}>저장</button>
        </div>
      </ml.LetterEditContainer>
    </mm.ManageContainer>
  )

}
export default ManageLetterEdit;