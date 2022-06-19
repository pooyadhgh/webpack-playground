import Header from '../components/Header/header';

const header = new Header();
header.render();

import('HelloWorldApp/HelloWorldButton').then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  const button = new HelloWorldButton();
  button.render();
});
