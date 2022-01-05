/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import {
  Modal, BoxLeft, BoxRight, Icons,
} from './styled';

function Login() {
  return (
    <Modal>
      <BoxLeft>
        <h1>Welcome Back!</h1>
        <span>
          To continue, sign in with
          <br />
          your account.
        </span>

        <form>
          <button type="submit">Sign In</button>
        </form>
      </BoxLeft>

      <BoxRight>
        <div>
          <h1>Create Account</h1>

          <Icons>
            <button type="submit"><FaGooglePlusG size={20} /></button>
            <button type="submit"><FaFacebookF size={20} /></button>
            <button type="submit"><FaLinkedinIn size={20} /></button>
          </Icons>

          <span>Or use your email to register</span>

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>

        </div>
      </BoxRight>
    </Modal>
  );
}

export default Login;
