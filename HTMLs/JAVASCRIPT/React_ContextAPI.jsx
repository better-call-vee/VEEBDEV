// storage.jsx (Context creation file)
import { createContext } from 'react';

// 1. Create Context - Always use "Context" in the name for clarity
export const AssetContext = createContext(''); //default value ''

// App.jsx (Provider setup)
import { AssetContext } from './storage';
import Grandpa from './Grandpa';

function App() {
  const asset = 'diamond'; // Value to share
  
  // 2. Wrap components with Provider
  return (
    <AssetContext.Provider value={asset}>
      {/* Components tree can now access context without prop drilling 
      The value prop contains data to be shared across components
      Any component in the Provider's tree can access this value
      When value changes, all consuming components re-render
      */}
      <Grandpa /> 
    </AssetContext.Provider>
  );
}

export default App;

// ChildComponent.jsx (Context consumption)
import { useContext } from 'react';
import { AssetContext } from './storage';

function ChildComponent() {
  // 3. Access context value anywhere in the tree
  const asset = useContext(AssetContext);

  return (
    <div>
      Current Asset: {asset} {/* Direct access without props */}
    </div>
  );
}

export default ChildComponent;


/**
 * 
 * Why needed?
 * 
 * Solves Prop drilling (multiple components replacement)
 * 
 * Reduces component coupling and improves code
 * 
 * 
 * createContext: creates a context object with Provider/Consumer components
 * Provider: Wraps components to make context value available to descendants
 * useContext: Hook to access context value in any child component 
 * 
 */


//another example:
// Parent Component
import { createContext, useState } from 'react';

// 1. Create context with default value (array in this case)
export const MoneyContext = createContext([0, () => {}]);

function ParentComponent() {
  // 2. Create state
  const [money, setMoney] = useState(0);

  // 3. Provide both value and setter via context
  return (
    <MoneyContext.Provider value={[money, setMoney]}>
      <ChildComponent />
    </MoneyContext.Provider>
  );
}

// Child Component
import { useContext } from 'react';
import { MoneyContext } from './ParentComponent';

function ChildComponent() {
  // 4. Access context value
  const [money, setMoney] = useContext(MoneyContext);

  // 5. Use the state and setter
  return (
    <div>
      <p>Current money: {money}</p>
      <button onClick={() => setMoney(prev => prev + 10)}>
        Add $10
      </button>
    </div>
  );
}