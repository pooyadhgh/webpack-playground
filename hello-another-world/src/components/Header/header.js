import './header.scss';

class Header {
  render() {
    const body = document.querySelector('body');
    const header = document.createElement('div');
    header.innerHTML = `
    <h1>Hello Another World</h1>
    `;
    header.classList.add('hello-world-header');
    body.appendChild(header);
  }
}

export default Header;
