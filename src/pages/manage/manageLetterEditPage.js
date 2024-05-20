import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { updateLetterInfo } from "../../redux/actions/letterAction";

const ManageLetterEdit = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [dateErrorMessage, setDateErrorMessage] = useState('');

  let letterInfoList = useSelector( (state)=>{ return state.letterInfo } );
  
  // 레터 종류 선택
  const LETTER_OPTIONS = [
    { value: "DEV_LETTER", name: "DEVELOP" },
    { value: "EMPLOYEE_LETTER", name: "EMPLOY" },
  ];

  const [letterId, setLetterId] = useState(letterInfoList.newsletterId)  // 행사 ID
  const [letterTitle, setLetterTitle] = useState(letterInfoList.title)  // 행사 제목
  const [letterCategory, setLetterCategory] = useState(LETTER_OPTIONS[0].value); // 행사 종류 
  const [letterStartDate, setLetterStartDate] = useState(letterInfoList.writtenTime) // 행사 시작 날짜 
  const [letterEndDate, setLetterEndDate] = useState(letterInfoList.writtenTime) // 레터 종료 날짜 
  const [letterContent, setLetterContent] = useState(letterInfoList.content) // 행사 내용

  
  // letterInfoList에 정보가 들어있다면 값 넣어서 수정 받기
  useEffect(() => {
    if (letterInfoList.length !== 0) {
      // letterInfoList에 정보 들어있음 = 수정 필요
      setIsEdit(true);
      setLetterId(letterInfoList.newsletterId); // 현재 뉴스레터ID 설정
      setLetterCategory(letterInfoList.letterType); // letterCategory 상태 변수 업데이트
    } else {
      // letterInfoList에 정보 없음 = 생성 필요
      setIsEdit(false);
      setLetterCategory(LETTER_OPTIONS[0].value); // letterCategory 상태 변수 초기화
    }
  }, [letterInfoList]);

  // 레터 내용 변경 함수
  // console.log('letterTitle : ',letterTitle)
  // console.log('letterCategory : ',letterCategory)
  // console.log('letterDate : ',letterDate)
  // console.log('letterContent : ',letterContent)

  // 레터 유효성 검사
  const handleLetterTitleChange = (e) => {
    setLetterTitle(e.target.value);
    if (!e.target.value) {
      setTitleErrorMessage('제목은 필수 입력 항목입니다.');
    } else {
      setTitleErrorMessage('');
    }
  };

  const handleLetterEndDateChange = (e) => {
    setLetterEndDate(e.target.value);
    if (new Date(e.target.value) < new Date(letterStartDate)) {
      setDateErrorMessage('종료 날짜는 시작 날짜보다 이후여야 합니다.');
    } else {
      setDateErrorMessage('');
    }
  };
  

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
      // Letter 수정
      if (isEdit) { 
        const UpdateLetterInfo = {
          newsletterId: letterId,
          title: letterTitle,
          content: letterContent,
        };
        try {
          // API 호출
          await updateLetter(UpdateLetterInfo);
          alert('저장 완료')
          navigate('/manager/letter');
        } catch (error) {
          alert('저장 실패')
          // 에러 처리 로직 추가
        }
      }
      // Letter 생성
      else { 
        const NewLetterInfo = {
          title: letterTitle,
          content: letterContent,
          letterType: letterCategory,
        };
        console.log('NewwLetterInfo : ', NewLetterInfo)
        try {
          // API 호출
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
          <div className="error-box">
            <input 
              className="letter-title"
              placeholder="행사 제목"
              value={letterTitle}
              onChange={handleLetterTitleChange}
            />
            {titleErrorMessage && <div className="error-message">{titleErrorMessage}</div>}
          </div>
          <select 
            className="letter-select"
            value={letterCategory}
            onChange={(e) => {
              setLetterCategory(e.target.value); 
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
          <div className="error-box">
            <div className="date-box">
              <input 
                className="letter-date"
                type="date"  
                name="letter-date"
                value={letterStartDate}
                onChange={(e) => setLetterStartDate(e.target.value)}
                required
              />
              <p>~</p>
              <input 
                className="letter-date"
                type="date"  
                name="letter-date"
                value={letterEndDate}
                onChange={handleLetterEndDateChange}
                required
              />
            </div>
            {dateErrorMessage && <div className="error-message">{dateErrorMessage}</div>}
          </div>
        </div>
        <textarea 
          className="letter-body"
          placeholder="행사 내용을 작성해주세요 :)"
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