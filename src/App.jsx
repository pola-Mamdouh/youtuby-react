import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import WatchPage from './pages/WatchPage'
import ChannelPage from './pages/ChannelPage'
import SearchResultsPage from './pages/SearchResultsPage'
import HistoryPage from './pages/HistoryPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="watch" element={<WatchPage />} />
          <Route path="channel" element={<ChannelPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
