const rightContent = document.querySelector('#right-content');
const signUpBtn = document.querySelector('#signup-btn');
const loginContent = rightContent.innerHTML;

function renderSignUpPage() {
  const renderSignUpHTML = `
    <form action="/signup" class="d-flex flex-column align-items-center" id="form">
      <div class="col-lg-10 mb-2">
        <input required class="form-control border border-dark" type="text" name="username" id="username-input" placeholder="Username">
      </div>
      <div class="col-lg-10 mb-3">
        <input required class="form-control border border-dark" type="email" name="email" id="email-input" placeholder="Email">
      </div>
      <div class="col-lg-10 mb-3">
        <input required class="form-control border border-dark" type="password" name="password" id="password-input" placeholder="Password">
      </div>
      <div class="col-lg-10 mb-3">
        <input required class="form-control border border-dark" type="password" name="confirm-password" id="confirm-password-input" placeholder="Confirm Password">
      </div>
      <button type="submit" class="btn btn-lg btn-outline-dark col-lg-10 fw-bold">Sign Up</button>
    </form>
    <div>
      <p class="d-flex justify-content-center mt-5 mb-5 fw-bold">OR</p>
    </div>
    <div>
      <p class="d-flex justify-content-center">If you already have an account, click here to login!</p>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <button class="btn btn-lg btn-outline-dark col-lg-10 fw-bold" id="login-btn">Login</button>
    </div>`;

  rightContent.innerHTML = renderSignUpHTML;
}

rightContent.addEventListener('click', (event) => {
  if (event.target && event.target.id === 'signup-btn') {
    renderSignUpPage();
  } else if (event.target && event.target.id === 'login-btn') {
    rightContent.innerHTML = loginContent;
  }
});

signUpBtn.addEventListener('click', renderSignUpPage);

//FORM VALIDATION

const form = document.querySelector('#form');
const userNameInput = document.querySelector('#username-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const confirmPasswordInput = document.querySelector('#confirm-password-input');
