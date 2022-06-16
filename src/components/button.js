import './button.css';

class Button {
  render() {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.innerText = 'Click';
    button.onclick = () => {
      alert('Hello World!');
    };
    button.classList.add('hello-world-button');
    body.appendChild(button);
  }
}

export default Button;
