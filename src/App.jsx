import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Overview, Signup, Login } from './pages'
import { Navbar, Recipes } from './components'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(true);
    console.log(user);
  }

  const handleLogout = () => {
    setUser(null);
    // console.log();
  }

  return (
    <>
      <div className="flex w-screen h-screen bg-black">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={ <Overview /> }></Route>
          <Route path="/signup" element={ <Signup /> }></Route>
          <Route path="/login" element={ <Login onLogin={handleLogin} /> }></Route>
          <Route path="/recipes" element={ <Recipes /> }></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
