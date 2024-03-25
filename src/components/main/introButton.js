import { useState } from "react";
import Intro from "../../assets/imgs/introButton.png"
import ModalImage from "../../assets/imgs/modalImage.png"

import * as i from "../../styles/main/introBtnStyle";

const IntroButton = () => {
    const [showIntro, setShowIntro] = useState(true);

    
    const moveToIntroPage = () => {
        window.open('https://tave12-100shot.notion.site/a338cacc63cb4435899e6868e30620c5?pvs=4')
    }

    return (
        <div>
            {showIntro ? 
                <i.IntroModalBox>
                    <i.TitleBox>
                        <h2>백발백준의 더 많은 이야기가 궁금하다면?</h2>
                        <i.ModalCloseBtn onClick={()=>{setShowIntro(!showIntro)}}/>
                    </i.TitleBox>
                    <i.TextContainer>
                        <i.TextBox>
                            <i.CheckIcon/>
                            <p>어떤 멤버들이 참여했는지 볼 수 있어요.</p>
                        </i.TextBox>
                        <i.TextBox>
                            <i.CheckIcon/>
                            <p>어떤 방식으로 프로젝트가 진행되는지 볼 수 있어요.</p>
                        </i.TextBox>
                    </i.TextContainer>
                    <i.IntroPageBox>
                        <button onClick={moveToIntroPage}>이야기 보러가기</button>
                        <img src={ModalImage}/>
                    </i.IntroPageBox>
                </i.IntroModalBox>
                :
                <></>
            }
            {showIntro ?
                <></>
                :
                <i.IntroBtn onClick={()=>{setShowIntro(!showIntro)}}>
                    <img src={Intro} alt="백발백준 이미지"/>
                </i.IntroBtn>
            }
        </div>
    )
}

export default IntroButton;