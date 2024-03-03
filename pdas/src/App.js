import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
// Only use image imports when including images from local project repo
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                    Personal Digital Assistents
                    </p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard 
                                title='Alexa' 
                                handle='@alexa99' 
                                image={AlexaImage} 
                                description="Alexa was created by amazon"
                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard 
                                title='Cortana' 
                                handle='@cortana32' 
                                image={CortanaImage} 
                                description="Cortana was made by Microsoft"
                            />    
                        </div>
                        <div className='column is-3'>
                            <ProfileCard 
                                title='Siri' 
                                handle='@siri01' 
                                image={SiriImage} 
                                description="Siri was made by apple"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
