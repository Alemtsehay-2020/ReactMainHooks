
import './App.css';
import ForUseEffect from './ForUseEffect';
import ForUseReducer from './ForUseReducer';
import ForUseRef from './ForUseRef';
import ForUseImperativeHandle from './ForUserImperativeHandle/ForUseImperativeHandle';
import ForUseState from './ForUseState';
import ForContext from './ForUseContext/ForContext';
import ForContextAPI from "./ForUseContextApi/ForContextAPI"
import ForUseMemoHook from './ForUseMemoHook';
import ForUseCallback from './ForUseCallback/ForUseCallback';
import ParentComponent from './ForUseCallbackTWO/ParentComponent';
function App() {
  return (
    <div className="App">
     <h2>React Hooks Practice</h2>
     {/* <ForUseState /> */}
     {/* <ForUseEffect/> */}
     {/* <ForUseReducer /> */}
     {/* <ForUseRef /> */}
     {/* <ForUseImperativeHandle/> */}
      {/* <ForContext/>      */}
      {/* <ForContextAPI/> */}
      {/* <ForUseMemoHook/> */}
      {/* <ForUseCallback/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
