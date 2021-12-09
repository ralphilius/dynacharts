import { Component, h, render } from "https://cdn.skypack.dev/preact";
import htm from 'https://cdn.skypack.dev/htm';
import { useState } from 'https://cdn.skypack.dev/preact/hooks';
const html = htm.bind(h);

function App(props) {
  const [message, setMessage] = useState("Hello!");
  return html`<h1>Hello ${message}!</h1>`;
}

render(html`<${App} />`, document.body);