import * as s from "../../styles/solutionStyle";


const SolutionItem = ({title, link, snippet}) => {

  return (
    <s.SolutionItemBox>
      <h3>{title}</h3>
      <h3>{link}</h3>
      <h3>{snippet}</h3>
    </s.SolutionItemBox>
  )
}

export default SolutionItem;