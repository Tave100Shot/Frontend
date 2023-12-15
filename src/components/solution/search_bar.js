import * as s from "../../styles/searchBarStyle";
import search_black from '../../assets/imgs/search_black.png'
import search_white from '../../assets/imgs/search_white.png'
const SearchBar = () => {


  return (
    <s.SearchBarContainer action="/result-solution" method="">
        <s.SearchInputBox>
          <img src={search_white}/>
          <input type="text" placeholder="Search your problem with number !"></input>
        </s.SearchInputBox>
        <select name="languages" id="lang">
          <option value="select" disabled selected>LANGUAGE</option>
          <option value="python">PYTHON</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
          <option value="c#">C#</option>
          <option value="java">JAVA</option>
          <option value="javascript">JAVASCRIPT</option>
          <option value="php">PHP</option>
          <option value="ruby">RUBY</option>
        </select>
        <button>SEARCH</button>
    </s.SearchBarContainer>
  )
}

export default SearchBar;