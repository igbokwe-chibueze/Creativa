import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components";
import { CTASection, Content, Feature, FooterSection, Hero } from "./sections";
import { ThemeProvider } from './wrappers/ThemeContext';

export default function  App() {
  return (
    <ThemeProvider>
      <main className="font-baseFont">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <section>
                    <Hero />
                    <Content />
                    <Feature />
                    <CTASection />
                    <FooterSection />
                  </section>
                </div>
              }
            />
          </Routes>
        </Router>
      </main>
    </ThemeProvider>
  );
}