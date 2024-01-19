import Sky from "../../assets/imgs/recommend_sky.jpg"
import { TfiBarChart } from "react-icons/tfi";
import { AiOutlineTeam } from "react-icons/ai";
import * as r from "../../styles/RecommendMainStyle";
import { useSelector } from "react-redux";


const UserProfile = () => {
  const bojName = localStorage.getItem('bojName');
  const bojTier = localStorage.getItem('bojTier');
  const gitUserImg = localStorage.getItem('profileImg');

  const rightCnt = localStorage.getItem('userRightNum');
  const wrongCnt = localStorage.getItem('userWrongNum');
  const userRank = localStorage.getItem('userRank');
  const userRivalNum = localStorage.getItem('userRivalNum');

  const getBackgroundColor = (bojTier) => {
    switch (bojTier) {
      case 'BRONZE':
        return '#AD5700';
      case 'SILVER':
        return '#8688A1';
      case 'GOLD':
        return '#F1A627';
      case 'PLATINUM':
        return '#3BF8C4';
      case 'DIAMOND':
        return '#3EC2FE';
      case 'RUBY':
        return '#F957AD';
      case 'MASTER':
        return '#EDBBF8';
      default:
        return '#17CE3B'; // 기본값
    }
  };
  const bojTierColor = getBackgroundColor(bojTier);
  console.log("티어 색 : ", bojTierColor);

  return (
    <r.UserProfileLayout className="layout">
      <r.UserProfileBox className="profile">
        <r.UserProfilePicture className="profile__picture">
          <img src={gitUserImg} alt="프로필사진"/>
        </r.UserProfilePicture>
        <r.UserProfileHeader className="profile__header">
          <r.UserProfileAccount className="profile__account">
            <h4 className="profile__username">{bojName}</h4>
            <p 
              className="profile__button" 
              href="#" 
              bojTierColor={bojTierColor}
              >
                {bojTier}
            </p>
          </r.UserProfileAccount>
        </r.UserProfileHeader>

        <r.UserProfileStats className="profile__stats">
          <r.UserProfileStat className="profile__stat">
            <r.UserProfileIcon className="profile__icon profile--rank">
              <TfiBarChart />
            </r.UserProfileIcon>
            <r.UserProfileValue className="profile__value profile--rank">
              {userRank}
              <r.UserProfileKey className="profile__key profile--rank">MY RANK</r.UserProfileKey>
            </r.UserProfileValue>
          </r.UserProfileStat>

          <r.UserProfileStat className="profile__stat">
            <r.UserProfileIcon className="profile__icon profile--rival">
              <AiOutlineTeam />
            </r.UserProfileIcon>
            <r.UserProfileValue className="profile__value profile--rival">
              {userRivalNum}
              <r.UserProfileKey className="profile__key profile--rival">MY RIVAL</r.UserProfileKey>
            </r.UserProfileValue>
          </r.UserProfileStat>

          <r.UserProfileStat className="profile__stat">
            <r.UserProfileValue className="profile__value profile--correct">
              {rightCnt}
              <r.UserProfileKey className="profile__key profile--correct">Correct</r.UserProfileKey>
            </r.UserProfileValue>
            <div className="slash"></div>
            <r.UserProfileValue className="profile__value profile--wrong">
              {wrongCnt}
              <r.UserProfileKey className="profile__key profile--wrong">Wrong</r.UserProfileKey>
            </r.UserProfileValue>
          </r.UserProfileStat>
        </r.UserProfileStats>
      </r.UserProfileBox>
    </r.UserProfileLayout>
  )
}

export default UserProfile;