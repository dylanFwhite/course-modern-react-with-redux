import Button from "../components/Button"
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!!')
    }
    return (
        <div>
            <div>
                {/* Items entered between custom component tags will 
                automatically be passed down as a prop called `children` */}
                <Button success rounded outline onClick={handleClick}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button warning rounded >
                    <GoDatabase />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloudDownload />
                    See Deal
                </Button>
            </div>
            <div>
                <Button primary>Action!</Button>
            </div>
        </div>
    )
}

export default ButtonPage