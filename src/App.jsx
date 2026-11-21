import { useState } from 'react'
import './App.css'
import ShowHeader from './Header'
import Filters from './UserFilter'
import Browse from './AddonBrowser'

function App() {
  const [query, setQuery] = useState("");

  return (
    <main className='container-fluid'>
      <ShowHeader/>   
      <div className='row'>
        <aside className='col-md-2'>
          <Filters query={query} setQuery={setQuery}/>
        </aside>
        
        <aside className='col-md-10'>
          <Browse query={query}/> 
        </aside>
      </div>
           
    </main>
  )
}

export default App
