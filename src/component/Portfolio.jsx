import './portfolio.css'
import { Link } from 'react-router-dom'

function Portfolio () {

    return (
        <div className='container-portfolio'>
            <div className='portfolio-header'>
                <h1>Portfolio</h1>
                <button className='see-more'><Link to="/portfolio">See More &rarr;</Link></button>
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
  
  export default Portfolio