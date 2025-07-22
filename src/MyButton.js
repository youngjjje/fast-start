import {useState} from 'react'
import './MyButton.css'

const user = {
    name: 'Hedy Lavarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 100,
}

function MyButton({onButtonClick, count, onClick}) {
    function handleClick() {
        alert('you clicked')
    }

    const [tCount, setTCount] = useState(0)
    
    function handleTClick() {
        setTCount(tCount + 1)
        console.log('tt')
    }
    return (
        <>
            <h1>
                {user.name}
            </h1>
            <img
                className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name}
            />
            <div>
                <button className='my-button' onClick={onButtonClick}>Im a button</button>
            </div>
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
            
            <button onClick={handleTClick}>Clicked {tCount} times</button>
        </>
    )
}

export default MyButton