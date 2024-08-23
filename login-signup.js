const rightContent = document.querySelector('#right-content');
const signUpBtn = document.querySelector('#signup-btn');
const loginContent = rightContent.innerHTML;

function renderSignUpPage() {
  const renderSignUpHTML = `
    <form action="/signup" class="d-flex flex-column align-items-center" id="form">
      <div class="col-lg-10 mb-2">
        <input class="form-control border border-dark" type="text" name="username" id="username-input" placeholder="Username">
      </div>
      <div class="col-lg-10 mb-3">
        <input class="form-control border border-dark" type="email" name="email" id="email-input" placeholder="Email">
      </div>
      <div class="col-lg-10 mb-3">
        <input class="form-control border border-dark" type="password" name="password" id="password-input" placeholder="Password">
      </div>
      <div class="col-lg-10 mb-3">
        <input class="form-control border border-dark" type="password" name="confirm-password" id="confirm-password-input" placeholder="Confirm Password">
      </div>
      <p class="error-message text-center"></p>
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
  attachFormListener();
}

function renderLoginPage() {
  rightContent.innerHTML = loginContent;
  attachFormListener();
}

function attachFormListener() {
  const form = document.querySelector('#form');
  const errorMessage = document.querySelector('.error-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      const userNameInput = document.querySelector('#username-input');
      const emailInput = document.querySelector('#email-input');
      const passwordInput = document.querySelector('#password-input');
      const confirmPasswordInput = document.querySelector('#confirm-password-input');
      
      let errors = [];

      if (userNameInput) {
        errors = getSignUpFormErrors(userNameInput.value, emailInput.value, passwordInput.value, confirmPasswordInput.value);
      } else {
        errors = getLoginFormErrors(emailInput.value, passwordInput.value);
      }

      if (errors.length > 0) {
        e.preventDefault();
        errorMessage.innerText = errors.join(". ");
      }
    });
  }
}

rightContent.addEventListener('click', (event) => {
  if (event.target && event.target.id === 'signup-btn') {
    renderSignUpPage();
  } else if (event.target && event.target.id === 'login-btn') {
    renderLoginPage();
  }
});

attachFormListener();

function getSignUpFormErrors(username, email, password, confirmPassword) { 
  let errors = [];

  if (!username) { 
    errors.push('Username is required');
  }
  if (!email) { 
    errors.push('Email is required');
  }
  if (!password) { 
    errors.push('Password is required');
  }
  if (password.length < 8) { 
    errors.push('Password must have at least 8 characters');
  }
  if (confirmPassword !== password) { 
    errors.push('Passwords do not match');
  }

  return errors;
}

function getLoginFormErrors(email, password) { 
  let errors = [];

  if (!email) { 
    errors.push('Email is required');
  }
  if (!password) { 
    errors.push('Password is required');
  }

  return errors;
}