import './App.css';
import { ParentComponent } from './Questions/ChildToParent';
import { LazyLoad } from './Questions/LazyLoading';
import { RenderOutside } from './Questions/RenderOutside';



function App() {
  return (
    <div className="App">
     <ParentComponent />
     <RenderOutside />
     <LazyLoad />
    </div>
  );
}

export default App;
