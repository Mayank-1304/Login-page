import React from 'react'
import { BiSolidUserDetail,BiLockAlt } from "react-icons/bi";
import styled from 'styled-components';
import image from './image/key.jpg'

const App = () => {

  //Styled components

  const Image = styled.div`
    background-image: url(${image});
   background-repeat: no-repeat;
   background-size: cover;

  `
  const Wrapper = styled.section`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  .outer-container{
    display: flex;
    justify-content: center;
   align-items: center;
   min-height : 100vh;
   background-image: url("image/key.jpg");
   background-repeat: no-repeat;
   background-size: cover;
  font-family: 'Roboto', sans-serif;
  }
  
  .container{
    width: 400px;
    color:#333;
    background-image: black;
    padding: 30px 40px;
    border-radius: 10px;
  }
  
  .container .input-box{
  width: 100%;
  height: 50px;
  margin: 30px 0px;;
  }
  
  .container h1{
    text-align: center;
  }
  
  .input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 1px solid #333;
    border-radius: 40px 0px 0px 40px;
    font-size: 16px;
    color: #333;
    padding: 20px 45px 20px 20px;
  }
  
  .input-box{
  display: flex;
  position: relative;
  align-items: center;
  }
  
  .icon{
    border: 1px solid #333;
    border-radius: 0px 40px 40px 0px;
    padding: 14px;
  }
  
  .container .remember{
    font-size: 14px;
    margin: -15px 0 15px;
  }
  
  .remember label input{
    accent-color: #fff;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  
  .remember a{
    color: #333;
    text-decoration: none;
  }
  
  .remember a:hover{
    text-decoration: underline;
  }
  
  .container .login-btn{
    width: 100%;
    height: 45px;
    background-color: #333;
    color:#fff;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }
  .container .register-link{
    font-size: 14px;
    text-align: center;
    margin: 20px 0 15px;
  }
  
  .register-link span a{
    color: #333;
    text-decoration: none;
    font-weight: 600;
    margin-left: 3px;
  }
  .register-link span a:hover{
    text-decoration: underline;
  }
  .container .login-btn:hover{
    cursor: pointer;
    background-color: #000;
  }
  
  @media only screen and (max-width: 400px) {
    .container {
      width: 300px;
    }
  }
  `
  return (
<Wrapper>
  <Image>
  <div className='outer-container'
  >
   <div className='container'>
    <form action="#">
      <h1>Login</h1>
      <div className='input-box'>
        <input type='text' placeholder='Username' required></input>
       <div className='icon'> {<BiSolidUserDetail/>}</div>
      </div>
      <div className='input-box'>
        <input type='password' placeholder='Password' required></input>
         <div className='icon'>{<BiLockAlt/>}</div>
      </div>
      <div className='remember'>
        <label><input type='checkbox'></input>Remember me?</label>

      </div>
      <div className='remember'>
        <label><input type='checkbox'/><span>Agree to</span></label>
        <a href='#'>Terms and condition</a>
      </div>
      <button type='submit' className='login-btn'>Login</button>
      <div className='register-link'>
        <span>Dont have an account?<a href='#'>Register here</a></span>
      </div>
    </form>

   </div>
   </div>
   </Image>
   </Wrapper>
  )
}

export default App
