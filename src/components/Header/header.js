import './header.scss';

class Header {
  render() {
    const body = document.querySelector('body');
    const header = document.createElement('div');
    header.innerHTML = `
    <h1>Hello World</h1>
    <nav>
        <ul>
            <li><a href='/'>Home Page</a></li>
            <li><a href='/about.html'>About Page</a></li>
        </ul>   
    </nav>
    `;
    header.classList.add('hello-world-header');
    body.appendChild(header);
  }
}

export default Header;
