import React from 'react';

export default function SignUp() {
  return (
  
<form class="border border-light p-5">

<p class="h4 mb-4 text-center">Sign up</p>

<input type="text"  class="form-control" placeholder="First name"/>

<input type="text"  class="form-control" placeholder="Last name"/>

<input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"/>

<input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>

<small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">Minimal 8 characters lenght</small>

<input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>

<small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">Optional - for two step authentication</small>

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter"/>
    <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
</div>

<button class="btn btn-info my-4 btn-block" type="submit">Sign up</button>

<div class="text-center">
    <p>or sign up with:</p>

    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-twitter"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-github"></i>
    </a>



    <p>By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a> and
        <a href="" target="_blank">terms of service</a>.
    </p>
</div>
</form>

  );
}