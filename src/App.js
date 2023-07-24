import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import Board from "./pages/Board";
import MyRecipes from "./pages/MyRecipes";
import AddRecipe from "./pages/AddRecipe";
import './App.css';
// import UpdateRecipeForm from "./pages/UpdateRecipeForm";


function App() {

  return (
    <div className="container h-[100vh] w-[100vw]">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" exact element={<AddRecipe />} />
          <Route path="/board" exact element={<Board />} />
          <Route path="/list" exact element={<MyRecipes />} />
          {/* <Route path="/update/:id" exact element={<UpdateRecipeForm />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
