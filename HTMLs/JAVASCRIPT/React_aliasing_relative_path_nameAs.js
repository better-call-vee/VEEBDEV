// myModule.js
const longFunctionName = () => { return "Hello!" };
export { longFunctionName as shortName }; // aliasing

// otherFile.js
import { shortName } from './myModule';
console.log(shortName()); // "Hello!"


//relative path
/*
src /
 ├── components /
 │    └── Button.js
 └── App.js

From App.js, you can import Button.js using a relative path like:
import Button from './components/Button'; // Same level, inside components folder

If you were in Button.js and needed to import something from App.js (going up one level), you’d use .. like:
import App from '../App'; // Goes up one level to find App.js
*/
