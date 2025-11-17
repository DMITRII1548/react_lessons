import { useState } from "react"

function App() {
    const [person, setPerson] = useState({
        name: 'Root'
    })

    const changeName = () => {
        const name = prompt('What is your name?')

        if (name) {
            setPerson({
                name: name
            })
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="bg-white w-1/2 border border-gray-200 my-2 p-3 mx-auto">
                <div class="mb-4">
                    Name: {person.name}
                </div>

                <div>
                    <button 
                        className="inline-block text-xs text-white bg-sky-500 border border-sky-600 px-2 py-1 rounded cursor-pointer"
                        onClick={() => changeName()}
                    >Change name</button>
                </div>
            </div>


        </div>
    )
}

export default App
