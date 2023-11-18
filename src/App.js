import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([])
    const [inputData, setInputData] = useState('')
    const addPost = () => {
        setTasks([...tasks, inputData])
    }
    return (
        <div className="App">
            <input type="text" value={inputData} onChange={(event) => {
                setInputData(event.target.value)
            }}/>
            <button onClick={addPost}>Create post</button>

            <ul>
                {tasks.map((task) => (
                    <li>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
