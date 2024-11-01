import './App.css'
import Navbar from './components/Navbar/Navbar';
import TimeLabel from './components/TimeLabel/TimeLabel';
import Card from './components/Card/Card'
import Button from './components/Button/Button'

function App() {
  // Data untuk setiap kuartal
  const data = [
    {
      quarter: "Q1 2019",
      month: "January - March",
      tasks: [
        { cardTitle: "Re-designed the zero-g doggie bags. No more spills!", progressPercentage: "64%" },
        { cardTitle: "Travel & Relocation Support", progressPercentage: "12%" },
      ]
    },
    {
      quarter: "Q2 2019",
      month: "April - June",
      tasks: []
    },
    {
      quarter: "Q3 2019",
      month: "July - September",
      tasks: [
        { cardTitle: "Bundle interplanetary analytics for improved transmission", progressPercentage: "90%" },
      ]
    },
    {
      quarter: "Q4 2019",
      month: "October - December",
      tasks: [
        { cardTitle: "Data Migration: Performance & Culture End Game", progressPercentage: "63%" },
      ]
    }
  ];

  return (
    <>
      <div className="split left">
        <Navbar />
      </div>

      <div className="split right">
        <p className="page-header">Product Roadmap</p>

        <div className="page-container">
          {data.map((quarterData, index) => (
            <div className="quarter-column" key={index}>
              <TimeLabel 
                quarter={quarterData.quarter} 
                month={quarterData.month}
              />

              <div className="card-tray">
                {quarterData.tasks.length > 0 ? (
                  quarterData.tasks.map((task, taskIndex) => (
                    <Card 
                      key={taskIndex}
                      cardTitle={task.cardTitle} 
                      progressPercentage={task.progressPercentage}
                    />
                  ))
                ) : (
                  <p className="no-task">No Task Available</p>
                )}

                <Button 
                  buttonText="Create new task"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
