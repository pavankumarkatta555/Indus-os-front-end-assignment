import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import SavedTexts from './components/savedtexts'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/savedtexts/" element={<SavedTexts />} />
    </Routes>
  </BrowserRouter>
)

export default App
