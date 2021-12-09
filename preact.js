import { Component, h, render } from "https://cdn.skypack.dev/preact";
import { useState } from 'https://cdn.skypack.dev/preact/hooks';

function MyComponent(props) {
  const [message, setMessage] = useState("Hello!");
  return h(
    "div",
    { id: "app" },
    h(Header, { message: message })
  );
}

// Usage
const App = <MyComponent name="John Doe" />;

render(h(App), document.body);