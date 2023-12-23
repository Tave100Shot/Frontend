import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from './pages/main/MainPage'
import SearchPage from './pages/solution/SearchPage'
import RecommendPage from './pages/recommend/RecommendPage'
import CommunityPage from './pages/community/CommunityPage'
import BronzePage from './pages/community/BronzePage'
import DiamondPage from './pages/community/DiamondPage'
import GoldPage from './pages/community/GoldPage'
import PlatinumPage from './pages/community/PlatinumPage'
import WritePage from './pages/community/WritePage'
import PostPage from './pages/community/PostPage'
import CompilingPage from './pages/compiling/CompilingPage'
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import SolutionPage from "./pages/solution/solutionPage";
import RecommendMe from "./pages/recommend/RecommendMePage";
import RecommendRank from "./pages/recommend/RecommendRankPage";

function App() {
  const [themeMode, setThemeMode] = useState('lightTheme');
  const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme;

  const toggleTheme = () => 
  {setThemeMode(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  //   console.log(theme); // theme.js에서 해당 themeMode props 가져옴
  //   console.log(themeMode);
  }

  return (
    <BrowserRouter> 
      <ThemeProvider theme={theme}> 
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<MainPage click={toggleTheme}/>}/>
          <Route path='/search-solution' element={<SearchPage />}/>
          <Route path='/result-solution' element={<SolutionPage />}/>
          <Route path='/recommend' element={<RecommendPage/>}/>
          <Route path='/recommend-me' element={<RecommendMe/>}/>
          <Route path='/recommend-rank' element={<RecommendRank />}/>
          <Route path='/community' element={<CommunityPage/>}/>
          <Route path='/compile' element={<CompilingPage/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
