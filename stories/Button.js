import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  isHovered = false,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary' ;
  const hover =  isHovered? 'isHovered' : 'not-hoverd' ;
  btn.className = ['storybook-button', `storybook-button--${size}`, mode , hover].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
