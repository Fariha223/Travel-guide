import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./view/LoginPage";  
import SignUp from "./view/Signup";
function App(){
    return(
     <div className= "app">
        <BrowserRouter>
          <Routes>
            <Route path= "/login" element={<LoginPage/>} />
            <Route path= "/signup" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>

    </div>
    );
}

export default App;
