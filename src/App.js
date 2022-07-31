import './app.css'
import { getLocalStorage, clearLocalStorage } from './localStorage';
import { useEffect, useState } from 'react'


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    const token = getLocalStorage('token')
    token ? setIsLogin(true) : setIsLogin(false)
  }, [update])


  const handleLogout = () => {
    clearLocalStorage('token')
    setUpdate(prev => !prev)
  }
  const handleLogin = (type) => {
    window.open(`http://localhost:8888/api/v1/auth/${type}`, "_self")
  }
  return (
    <div className="app d-flex justify-content-center align-items-center">
      {isLogin
        ? <div className='w-100'>
          Login is successfully !
          <small>token : {getLocalStorage('token')}</small>
          <button onClick={handleLogout} className='btn btn-danger'>Log out</button>
        </div>
        : <form className='box-login'>
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label" htmlFor="form2Example2">Password</label>
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <button type="button" className="btn btn-primary w-100 btn-block mb-4">Sign in</button>
          <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-danger btn-floating mx-1" onClick={() => handleLogin('google')} >
              Google
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1" onClick={() => handleLogin('facebook')} >
              Facebook
            </button>
          </div>
        </form>}
    </div>
  );
}

export default App;
