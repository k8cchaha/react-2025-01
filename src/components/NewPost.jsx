import {useState} from 'react'

function NewPost() {
    const [ enteredBody, setEnteredBody ] = useState('')
    function changeBodyHandler(event) {
        console.log(event.target.value)
        setEnteredBody(event.target.value)
    }

    return (
        <div>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            { enteredBody }
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required />
            </p>
        </div>
    )
}

export default NewPost