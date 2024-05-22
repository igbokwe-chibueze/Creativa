import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './wrappers/ThemeContext';
import { Sections } from './components';

export default function  App() {
  return (
    <ThemeProvider>
      <main className="font-baseFont">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sections/>
                </>
              }
            />
          </Routes>
        </Router>
      </main>
    </ThemeProvider>
  );
}