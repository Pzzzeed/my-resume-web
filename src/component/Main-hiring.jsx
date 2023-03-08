import './main-hiring.css'

function Hiring () {

    return (
        <div className='container-hiring'>
            <div className='hiring-title'><h1>Why Hire Me?</h1></div>
            <div className='hiring-box'>
                <div className='hiring-item'>
                    <div className='hiring-item-img'>
                        <img src="/conversation.png" alt="communicative" className='hiring-img'/>
                    </div>
                    <h3>Communicative</h3>
                    <p>I am a highly communicative individual who enjoys working with others to achieve common goals.<br></br> I possess excellent verbal and written communication skills, which allows me to effectively convey my ideas and thoughts to others. <br></br> Moreover, I am an active listener, which helps me to understand the needs of others and work collaboratively towards achieving shared objectives.</p>
                </div>
                <div className='hiring-item'>
                    <div className='hiring-item-img'>
                        <img src="/techsupport.png" alt="techsupport" className='hiring-img'/>
                    </div>
                    <h3>Professional</h3>
                    <p>I am a consummate professional who values integrity, honesty, and respect in all of my interactions with colleagues and clients. I am always punctual, well-prepared, and have a positive attitude towards my work. I believe in leading by example, and I am always willing to go above and beyond what is required of me to ensure that my work is of the highest quality.</p> 
                </div>
                <div className='hiring-item'>
                <div className='hiring-item-img'>
                    <img src="/collaborative.png" alt="collaborative" className='hiring-img'/>
                    </div>
                    <h3>Collaborative</h3>
                    <p>I am a collaborative team player who thrives in diverse and multicultural environments. I value the perspectives and ideas of others, and I work well in both leadership and support roles. I believe that effective collaboration is key to achieving success, and I am always willing to work with others to achieve our shared goals.</p>
                    
                </div>
                <div className='hiring-item'>
                <div className='hiring-item-img'>
                    <img src="/star.png" alt="star" className='hiring-img'/>
                    </div>
                    <h3>Client's Favourite</h3>
                    <p>I have been consistently recognized by clients as their favourite point of contact. This is because I possess excellent interpersonal skills, which allow me to build strong and meaningful relationships with clients. <br></br> I am always responsive to their needs and concerns, and I am committed to providing the highest levels of customer service possible.</p>
                </div>
            </div>
        </div>
    )
}
  
  export default Hiring