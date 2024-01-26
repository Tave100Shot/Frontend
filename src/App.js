import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from './pages/main/MainPage';
import SearchPage from './pages/solution/SearchPage';
import RecommendPage from './pages/recommend/RecommendPage';
import CommunityPage from './pages/community/CommunityPage';
import BronzePage from './pages/community/BronzePage';
import DiamondPage from './pages/community/DiamondPage';
import GoldPage from './pages/community/GoldPage';
import PlatinumPage from './pages/community/PlatinumPage';
import WritePage from './pages/community/WritePage';
import WritePlatinumPage from "./pages/community/WritePlatinumPage";
import WriteGoldPage from "./pages/community/WriteGoldPage";
import WriteHighPage from "./pages/community/WriteHighPage";
import PostDetailPage from './pages/community/PostDetailPage';
import PostEditPage from './pages/community/PostEditPage';
import CompilingPage from './pages/compiling/CompilingPage';
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import SolutionPage from "./pages/solution/solutionPage";
import RecommendMe from "./pages/recommend/RecommendMePage";
import RecommendRank from "./pages/recommend/RecommendRankPage";
import { useDispatch } from "react-redux";
import { SetTheme } from "./redux/actions/solutionAction";
import Modal from 'react-modal';
import MobilePage from "./pages/main/mobilePage";

function App() {
  Modal.setAppElement('#root');
  const dispatch = useDispatch();
  
  const [themeMode, setThemeMode] = useState('lightTheme');
  const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme;
  const toggleTheme = () => 
  {
    setThemeMode(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 740); // 초기에 화면 크기에 따라 isMobile 상태를 설정합니다.

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 740); // 화면 크기가 변경될 때마다 isMobile 상태를 업데이트합니다.
    };

    window.addEventListener('resize', handleResize); // resize 이벤트를 감지하여 handleResize 함수를 실행합니다.

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트가 unmount될 때 resize 이벤트 리스너를 제거합니다.
    };
  }, []);

  useEffect(() => {
    dispatch(SetTheme(themeMode));
    // console.log(themeMode)
  }, [theme]);

  return (
    <BrowserRouter> 
      <ThemeProvider theme={theme}> 
        <GlobalStyle/>
        <Routes>
          {isMobile ? (
            <Route path='/' element={<MobilePage />} />
          ) : (
            <Route path='/' element={<MainPage click={toggleTheme}/>} />
          )}
          {isMobile ? (
            <Route path='/search-solution' element={<MobilePage />} />
          ) : (
            <Route path='/search-solution' element={<SearchPage />}/>
          )}
          {isMobile ? (
            <Route path='/result-solution' element={<MobilePage />} />
          ) : (
            <Route path='/result-solution' element={<SolutionPage />}/>
          )}
          {isMobile ? (
            <Route path='/recommend' element={<MobilePage />} />
          ) : (
            <Route path='/recommend' element={<RecommendPage/>}/>
            )}
          {isMobile ? (
            <Route path='/recommend-me' element={<MobilePage />} />
          ) : (
            <Route path='/recommend-me' element={<RecommendMe/>}/>
            )}
          {isMobile ? (
            <Route path='/recommend-latest' element={<MobilePage />} />
          ) : (
            <Route path='/recommend-latest' element={<RecommendRank />}/>
            )}
          {isMobile ? (
            <Route path='/compile' element={<MobilePage />} />
          ) : (
            <Route path='/compile' element={<CompilingPage theme={theme}/>}/>
            )}
          {isMobile ? (
            <Route path='/community' element={<MobilePage />} />
          ) : (
            <Route path='/community' element={<CommunityPage />}/>
            )}
          {isMobile ? (
            <Route path='/community/bronze' element={<MobilePage />} />
          ) : (
            <Route path='/community/bronze' element={<BronzePage/>}/>
            )}
          {isMobile ? (
            <Route path='/community/gold' element={<MobilePage />} />
          ) : (
            <Route path='/community/gold' element={<GoldPage/>}/>
            )}
          {isMobile ? (
            <Route path='/community/platinum' element={<MobilePage />} />
          ) : (
            <Route path='/community/platinum' element={<PlatinumPage/>}/>
            )}
          {isMobile ? (
            <Route path='/community/diamond' element={<MobilePage />} />
          ) : (
            <Route path='/community/diamond' element={<DiamondPage/>}/>
            )}
          {isMobile ? (
            <Route path='/community/write' element={<MobilePage />} />
          ) : (
            <Route path='/community/write' element={<WritePage />}/>
            )}
          {isMobile ? (
            <Route path='/community/gold/write' element={<MobilePage />} />
          ) : (
            <Route path='/community/gold/write' element={<WriteGoldPage />}/>
            )}
          {isMobile ? (
            <Route path='/community/platinum/write' element={<MobilePage />} />
          ) : (
            <Route path='/community/platinum/write' element={<WritePlatinumPage />}/>
            )}
          {isMobile ? (
            <Route path='/community/high/write' element={<MobilePage />} />
          ) : (
            <Route path='/community/high/write' element={<WriteHighPage />}/>
            )}
          {isMobile ? (
            <Route path='/community/post/:postId' element={<MobilePage />} />
          ) : (
            <Route path='/community/post/:postId' element={<PostDetailPage/>}/>
            )}
          {isMobile ? (
            <Route path='/community/post/:postId/edit' element={<MobilePage />} />
          ) : (
            <Route path='/community/post/:postId/edit' element={<PostEditPage/>}/>
            )}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
