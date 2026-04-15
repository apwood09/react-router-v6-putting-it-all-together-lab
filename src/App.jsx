import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList"; // Added missing import
import DirectorForm from "./pages/DirectorForm";
import DirectorCard from "./pages/DirectorCard";
import MovieForm from "./pages/MovieForm";
import MovieCard from "./pages/MovieCard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        
        <Route path="/directors" element={<DirectorContainer />}>
            
            <Route index element={<DirectorList />} />
            
            
            <Route path="new" element={<DirectorForm />} />

            
            <Route path=":id" element={<DirectorCard />}>
                
                <Route path="movies/new" element={<MovieForm />} />
                <Route path="movies/:movieId" element={<MovieCard />} />
            </Route>
        </Route>

        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;