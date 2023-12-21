import Sky from "../../assets/imgs/recommend_sky.jpg"
import { TfiBarChart } from "react-icons/tfi";
import { AiOutlineTeam } from "react-icons/ai";
import * as r from "../../styles/RecommendMainStyle";

const UserProfile = () => {


  return (
    <r.UserProfileLayout className="layout">
      <r.UserProfileBox className="profile">
        <r.UserProfilePicture className="profile__picture">
          <img src={Sky} alt="프로필사진"/>
        </r.UserProfilePicture>

        <r.UserProfileHeader className="profile__header">
          <r.UserProfileAccount className="profile__account">
            <h4 className="profile__username">YOUNG19</h4>
            <p className="profile__button" href="#">Bronze III</p>
          </r.UserProfileAccount>
        </r.UserProfileHeader>

        <r.UserProfileStats className="profile__stats">
          <r.UserProfileStat className="profile__stat">
            <r.UserProfileIcon className="profile__icon profile--rank">
              <TfiBarChart />
            </r.UserProfileIcon>
            <r.UserProfileValue className="profile__value profile--rank">
              47
              <r.UserProfileKey className="profile__key profile--rank">MY RANK</r.UserProfileKey>
            </r.UserProfileValue>
          </r.UserProfileStat>

          <r.UserProfileStat className="profile__stat">
            <r.UserProfileIcon className="profile__icon profile--rival">
              <AiOutlineTeam />
            </r.UserProfileIcon>
            <r.UserProfileValue className="profile__value profile--rival">357
              <r.UserProfileKey className="profile__key profile--rival">MY RIVAL</r.UserProfileKey>
            </r.UserProfileValue>
          </r.UserProfileStat>

          <r.UserProfileStat className="profile__stat">
            <r.UserProfileIcon className="profile__icon profile--pink">
              <i className="fas fa-heart"></i>
            </r.UserProfileIcon>
            <r.UserProfileValue className="profile__value">4
              <r.UserProfileKey className="profile__key">Lives</r.UserProfileKey>
            </r.UserProfileValue>
          </r.UserProfileStat>
        </r.UserProfileStats>
      </r.UserProfileBox>
    </r.UserProfileLayout>
  )
}

export default UserProfile;