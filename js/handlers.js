import { isValidColor } from './colors';

export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;

  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if its a valid colour
  if (!isValidColor(color)) return; // thats all folks
  console.log('This is a valid color!');
  // if it is, then show the UI for that
  const colorspan = document.querySelector(`.${color}`);
  colorspan.classList.add('got');
  console.log(color);
  // change the background color
  document.body.style.backgroundColor = color;
}
