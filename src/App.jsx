import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { CTASection, Content, Feature, FooterSection, Hero } from "./sections";


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
                <section className=" dark:theme-dark bg-skin-fill ">
                  <Hero/>
                  <Content/>
                  <Feature/>
                  <CTASection/>
                  <FooterSection/>
                </section>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}