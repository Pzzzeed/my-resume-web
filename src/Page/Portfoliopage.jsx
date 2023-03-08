import '../component/portfolio.css'
import { Link } from 'react-router-dom'

function PortfolioPage() {
    return (
        <div>
            <div className='port-header'>
                <h1>My Portfolio</h1>
                <button className='back'><Link to="/">Back to Homepage</Link></button>
            </div>
            <div className='portfolio-img-box'>
                <div className='portfolio-img-item'>
                    <a href='http://www.example.com/'>
                        <img src="https://dummyimage.com/350x250/000/fff" alt="" className='portfolio-img'/>
                    </a>
                </div>
                <div className='portfolio-img-item'>
                    <a href='http://www.example.com/'>
                        <img src="https://dummyimage.com/350x250/000/fff" alt="" className='portfolio-img'/>
                    </a>
                </div>
                <div className='portfolio-img-item'>
                    <a href='http://www.example.com/'>
                        <img src="https://dummyimage.com/350x250/000/fff" alt="" className='portfolio-img'/>
                    </a>
                </div>
                <div className='portfolio-img-item'>
                    <a href='http://www.example.com/'>
                        <img src="https://dummyimage.com/350x250/000/fff" alt="" className='portfolio-img'/>
                    </a>
                </div>
                <div className='portfolio-img-item'>
                    <a href='http://www.example.com/'>
                        <img src="https://dummyimage.com/350x250/000/fff" alt="" className='portfolio-img'/>
                    </a>
                </div>
                <div className='portfolio-img-item'>
                    <a href='http://www.example.com/'>
                        <img src="https://dummyimage.com/350x250/000/fff" alt="" className='portfolio-img'/>
                    </a>
                </div>
            </div>
        </div> 
    )
  }
  
  export default PortfolioPage