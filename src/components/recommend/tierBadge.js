import * as t from "../../styles/RecommendMainStyle";

const TierBadge = ({bojTier}) => {

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
    <t.TierBadgeBox bojTierColor={bojTierColor}>
      {bojTier}
    </t.TierBadgeBox>
  )
}

export default TierBadge;