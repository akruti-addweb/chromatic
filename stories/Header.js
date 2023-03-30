import './header.css';
import { createButton } from './Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `<div>
    <h1>ADDWEB SOLUTION</h1>
  </div>`;

  wrapper.insertAdjacentHTML('afterbegin', logo);

  const account = document.createElement('div');
  if (user) {
    const welcomeMessage = `<span class="welcome">Welcome, <b>${user.name}</b>!</span>`;
    account.innerHTML = welcomeMessage;
    account.appendChild(createButton({ size: 'small', label: 'Log out', onClick: onLogout }));
  } else {
    account.appendChild(createButton({ size: 'small', label: 'Log in', onClick: onLogin }));
    account.appendChild(
      createButton({
        size: 'small',
        label: 'Sign up',
        onClick: onCreateAccount,
        primary: true,
      })
    );
  }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return header;
};
