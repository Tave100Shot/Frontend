import * as s from "../../styles/solutionStyle";
import { useEffect, useState } from "react";


const SolutionItem = ({title, link, snippet, blog, createdDate}) => {
  const [blogName, setBlogName] = useState("custom blog");
  const [blogIcon, setBlogIcon] = useState("");
  const GoToLink = () => {
    window.open(link, "", "");
  };
  
  const SetBlog = (blog) => {
    if (blog === 'tistory') {
      setBlogIcon(require("../../assets/imgs/tistoryIcon.png"));
      setBlogName("tistory");
    }
    else if (blog === 'github') {
      setBlogIcon(require("../../assets/imgs/githubBlog.png"));    
      setBlogName("github");
    }
    else if (blog === null) {
      setBlogIcon(require("../../assets/imgs/verlogIcon.png"));   
      setBlogName("verlog"); 
    }
    else if (blog === 'verlog') {
      setBlogIcon(require("../../assets/imgs/verlogIcon.png"));   
      setBlogName("verlog"); 
    }
    else if (blog === 'com/viewer/postView') {
      setBlogIcon(require("../../assets/imgs/naverIcon.png"));        setBlogName("naver blog");  
    }
    else {
      setBlogIcon(require("../../assets/imgs/personIcon.png"));
    }
  }

  useEffect(() => {
    SetBlog(blog)
  }, [title]);

  return (
    <s.SolutionItemBox onClick={GoToLink}>
      <s.SolutionImgBox>
      {createdDate && <p className="uploadDate">{createdDate}</p>}        <div>
          <img src={blogIcon} alt="블로그 아이콘"/>
          <hr/>
        </div>
      </s.SolutionImgBox>
      <div className="notHover">
        <p className="blogPlatform">{blogName}</p>
        <p className="blogTitle">{title}</p>
      </div>
      <div className="hover">
        <p className="snippet">{snippet}</p>
      </div>
    </s.SolutionItemBox>
  )
}

export default SolutionItem;