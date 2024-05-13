import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Hero } from "./sections";


export default function App() {
  return (
    <main className="font-baseFont">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar/>
                <section>
                  <Hero/>
                </section>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}