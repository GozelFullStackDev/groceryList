import './App.css';
import image from './shop.jpg';
import imageTwo from './man.jpg';
import {GroceryList} from './GroceryList';

function App() {
  return (
   <div className="app">
    <div className="container">
    <img src={ image } alt="shopping"  width="200px" />
    </div>
    <div className="container">
    <h1>Grocery List</h1>
    </div>
    <GroceryList />
    <div className="container">
    <img src={ imageTwo } width="200px" alt="shoppingMan" />
    </div>
   </div>
  );
}

export default App;
