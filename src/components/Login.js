import React from 'react'


export default function Login() {
    return (
        <div id="body1">
        <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2 style={{paddingBottom:"10px"}}>LOGIN</h2>
        <div class="underline-title"></div>
      </div>
      <form method="post" class="form">
        <label for="user-email" id="label1" style={{paddingTop:"13px"}}>
            <br/>Email
          </label>
        <input id="user-email" class="form-content" type="email" name="email" autocomplete="on" required />
        <div class="form-border"></div>
        <label for="user-password" style={{paddingTop:"23px"}}><br/>Password
          </label>
        <input id="user-password" class="form-content" type="password" name="password" required />
        <div class="form-border"></div>
        <a href="#">
          <legend id="forgot-pass">Forgot password?</legend>
        </a>
        <input href="https://5500-yellow-raven-etgdmtun.ws-us15.gitpod.io/index.html" id="submit-btn" type="submit" name="submit" value="LOGIN" />
        <a href="#" id="signup">Don't have account yet?</a>
      </form>
    </div>
  </div>
  <img id="img1" src="https://i.imgur.com/yXbRSMV.png"></img>
        </div>
    )
}
