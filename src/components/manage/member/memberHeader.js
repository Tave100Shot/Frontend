import * as mem from "../../../styles/manage/manageMemberStyle"
import { useEffect, useState } from "react"
import axios from "axios"

const MemberHeader = () => {
  const [members, setMembers] = useState([]);
  const storedToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchPosts = async () => {
        try {
          const response = await axios.get('/api/admin/members', {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
            params : {
    
              page : 0
            }
          });
          console.log('멤버조회', response);
          setMembers(response.data.result.memberSingleResponses);
        } catch (error) {
          if (error.response && error.response.data.errorCode === 'JWT_4010') {
            alert("로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)");
          } else {
            console.error(error);
          }
        }
    };
    fetchPosts();
  }, []);

  const renderMembers = () => {
    return (
      members.map((member) => (
        <mem.SixItemBtn key={member.id}>
          <div className="item-box">
            <p>{member.bojName === "x" ? "X" : member.bojName}</p>
            <p>|</p>
            <p>{member.gitLoginId === "x" ? "X" : member.gitLoginId}</p> 
            <p>|</p>
            <p>{member.subStatus ? "✔" : 'X'}</p>
            <p>|</p>
            <p>{member.letterType}</p>
            <p>|</p>
            <p>{member.secondCertified ? "O" : "X"}</p>
            <p>|</p>
            <p>{member.email === "x" ? "이메일이 없습니다." : member.email}</p>
          </div>
        </mem.SixItemBtn>
      ))
    );
  };

  return (
    <div>
      <mem.MemberHeader>
        <div className="item-box">
          <p>Github ID</p>
          <p>|</p>
          <p>BOJ ID</p>
          <p>|</p>
          <p>구독여부</p>
          <p>|</p>
          <p>구독종류</p>
          <p>|</p>
          <p>2차인증</p>
          <p>|</p>
          <p>이메일</p>
        </div>
      </mem.MemberHeader>
      <div>
        {members.length > 0 ? (
          <>
            {renderMembers()}
          </>
        ) : (
          <p></p>
        )}
      </div>
      </div>
  );
};
export default MemberHeader;