import './App.css'
import Navbar from './components/Navbar/Navbar';
import TimeLabel from './components/TimeLabel/TimeLabel';
import Card from './components/Card/Card'
import PlusIcon from '../src/assets/plus - purple.svg'

function App() {
  return (
    <>
   <div className="split left">
      <Navbar />
   </div>

   <div className="split right">
      <p className="page-header">Product Roadmap</p>

      <div className="quarter-column">
      <TimeLabel 
        quarter = "Q1 2019" 
        month = "January - March"
      />

      <div className="card-tray">
        <Card 
          cardTitle = "Re-designed the zero-g doggie bags. No more spills!" 
          progressPercentage = "64%"
        />

        <Card 
          cardTitle = "Travel & Relocation Support" 
          progressPercentage = "12%"
        />

        <button>
          <img src={PlusIcon} className="plus icon" />
          Create New Task
        </button>


      </div>
      </div>

   </div>


    </>
  )
}

export default App
