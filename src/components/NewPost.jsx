import {useState} from 'react'

function NewPost() {
    const [ enteredBody, setEnteredBody ] = useState('')
    function changeBodyHandler(event) {
        console.log('pre-value: ', enteredBody)
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