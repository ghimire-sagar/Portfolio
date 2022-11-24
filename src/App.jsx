import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTA from './CTA';
import {Home, WorksLists, AboutMe, HireMe, Kinbech, Searchstudy, Linkup, Swachha, DexitApp, EverestTravel} from './components'
import {Route, Routes} from "react-router-dom"

function App() {
return (
  <>
      < Navbar />
      <div>
        <Routes>
          <Route path="/" element={< Home />}  />
          <Route path="/WorksLists" element={< WorksLists />}  />
          <Route path="/AboutMe" element={< AboutMe />}  />
          <Route path="/HireMe" element={< HireMe />}  />
          <Route path="/Kinbech" element={< Kinbech />}  />
          <Route path="/Linkup" element={< Linkup />}  />
          <Route path="/Searchstudy" element={< Searchstudy />}  />
          <Route path="/Swachha" element={< Swachha />}  />
          <Route path="/EverestTravel" element={< EverestTravel />}  />
          <Route path="/DexitApp" element={< DexitApp />}  />
        </Routes>
      </div>
      < CTA />
      <Footer />
  </>
)
}

export default App