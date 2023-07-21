import { BrowserRouter,  Routes,Route } from "react-router-dom";
import { Home } from './pages/Home';
import Board from "./pages/Board";
import MyRecipes from "./pages/MyRecipes";
import AddRecipe from "./pages/AddRecipe";
import './App.css';
import UpdateRecipeForm from "./pages/UpdateRecipeForm";


function App() {

  return (
    <div className="container h-[100vh] w-[100vw]">

      <BrowserRouter>
      <Routes>

        <Route path="/"  exact={true} element={<Home/>}></Route>
        <Route path="/add"  exact={true} element={<AddRecipe/>}></Route>
        <Route path="/board"  exact={true} element={<Board/>}></Route>
        <Route path="/list"  exact={true} element={<MyRecipes/>}></Route>
        <Route path="/list"  exact={true} element={<MyRecipes/>}></Route>
        <Route path="/update/:id" exact={true} element={<UpdateRecipeForm/>} ></Route>
      </Routes>
       
      
      </BrowserRouter>
    </div>
  )
}

export default App
