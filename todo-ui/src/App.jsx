
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { TodoListComponent } from './components/TodoListComponent'
import TodoComponent from './components/TodoComponent'
import RegisterCompoent from './components/RegisterCompoent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  const SecurityRoute = ({children}) => {
    if (isUserLoggedIn()) {
      return children;
    }else{
      return <Navigate to='/login'/>
    }    
  }

  return (
    <>
      <BrowserRouter>
      {/* Header, Footer Components will be fix that meant it will be included every page */}
        <HeaderComponent/> 

        <Routes>
          <Route path='/' element={
            <SecurityRoute>
              <TodoListComponent/>
            </SecurityRoute>
            }/>
          <Route path='/add-todo' element={
            <SecurityRoute>
            <TodoComponent/>
            </SecurityRoute>
            }/>
          <Route path='/update-todo/:id' element={
            <SecurityRoute>
              <TodoComponent/>
            </SecurityRoute>
            }/>
          <Route path='/register' element={<RegisterCompoent/>}/>
          <Route path='/login' element={<LoginComponent/>}/>
        </Routes>
        
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
