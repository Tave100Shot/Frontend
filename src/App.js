import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from './pages/main/MainPage'
import SearchPage from './pages/solution/SearchPage'
import RecommendPage from './pages/recommend/RecommendPage'
import CommunityPage from './pages/community/CommunityPage'
import CompilingPage from './pages/compiling/CompilingPage'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/solution' element={<SearchPage/>}/>
        <Route path='/recommend' element={<RecommendPage/>}/>
        <Route path='/community' element={<CommunityPage/>}/>
        <Route path='/compile' element={<CompilingPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
