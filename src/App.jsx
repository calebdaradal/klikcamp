import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  // Body components with stretch configuration
  const bodyComponents = [
    {
      component: <Banner />,
      stretched: true,  // Full width banner
      key: 'banner'
    },
    // Add more components here as needed
    // {
    //   component: <AboutSection />,
    //   stretched: false, // This will be contained
    //   key: 'about'
    // },
  ]

  return (
    <div className="app">
      {/* Sticky Header */}
      <Header />
      
      {/* Dynamic Body Content */}
      <main className="body-content">
        {bodyComponents.map((item, index) => {
          const { component, stretched = false, key } = item
          
          return (
            <section 
              key={key || index} 
              className={`body-section ${stretched ? 'body-section-stretched' : 'body-section-contained'}`}
            >
              {stretched ? (
                // Full width component
                component
              ) : (
                // Contained component
                <div className="body-container">
                  {component}
                </div>
              )}
            </section>
          )
        })}
        
        {/* Placeholder content when no components */}
        {bodyComponents.length === 0 && (
          <section className="body-section body-section-contained">
            <div className="body-container">
              <h2>Welcome to KlikCamp</h2>
              <p>Add your components to the bodyComponents array above.</p>
              <p>Use the 'stretched' property to control full-width vs contained layout.</p>
            </div>
          </section>
        )}
      </main>
      
      {/* Footer - Now contains its own container structure */}
      <Footer columnWidths={[50, 20, 30]}/>
    </div>
  )
}

export default App