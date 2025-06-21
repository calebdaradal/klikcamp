import './Footer.css'
import FooterCompany from './footer/FooterCompany'
import FooterServices from './footer/FooterServices'
import FooterContact from './footer/FooterContact'

function Footer({ columnWidths = [1, 1, 1] }) {
  // Convert proportions to CSS grid fractions
  const gridTemplate = columnWidths.map(width => `${width}fr`).join(' ');
  
  return (
    <div className="footer">
      <div 
        className="footer-component-container"
        style={{ gridTemplateColumns: gridTemplate }}
      >
        <div className="footer-column">
          <FooterCompany />
        </div>
        
        <div className="footer-column">
          <FooterServices />
        </div>
        
        <div className="footer-column">
          <FooterContact />
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 KlikCamp. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer