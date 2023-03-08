import './profile.css'

function Profile () {

    return (
        <div className='container-profile'>
            <div className='profile-text'>
                <div className='greeting-text'>
                    <h2>Hi!</h2>
                    <h1>I'm Peeranat Phengsalaeh</h1>
                    <h1>a Software developer</h1>
                </div>
                <p>I am coding with a clean and beautiful problem solving in mind.</p>
                <div className='follow-me'>
                    <span>Follow Me</span>
                    <div className='icon-item-img'>
                    <a href='https://www.facebook.com/seed.nardarn/' target="_blank"> <img src="./src/image/facebook_profile.png" alt="facebook-icon" className='img-icon'/> </a>
                    </div>
                    <div className='icon-item-img'>
                    <a href='https://twitter.com/pzzzeeeddd' target="_blank"> <img src="./src/image/twitter_profile.png" alt="twiter-icon" className='img-icon'/> </a>
                    </div>
                    <div className='icon-item-img'>
                    <a href='https://www.instagram.com/p.zeed/' target="_blank"> <img src="./src/image/instagram_profile.png" alt="instagram-icon" className='img-icon'/> </a>
                    </div>
                    <div className='icon-item-img'>
                    <a href='https://github.com/Pzzzeed' target="_blank"> <img src="./src/image/github_profile.png" alt="github-icon" className='img-icon'/> </a>
                    </div>
                </div>
                <div className='button-profile'>
                    <button className='request-btn'>
                        <a href="mailto:seed.peeranat@gmail.com">Send Request</a>
                    </button>
                    <button className='cv-btn'>
                        <a href="./src/file/CV_Peeranat_P.pdf" download="CV_Peeranat_P.pdf">Download CV</a>
                    </button>
                </div>
            </div>
            <div className='container-profile-img'>
                <div className='profile-img-item'>
                    <div className='profile-img-item1'>
                        <img src="./src/image/Peeranat.jpg" alt="profile picture" className='profile-img'/>
                    </div>
                    <div className='profile-img-item2'>
                        <img src="./src/image/Bulletpoints.png" alt="" />
                    </div>
                    <div className='profile-img-item3'>
                        <img src="./src/image/Bulletpoints.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
  
  export default Profile