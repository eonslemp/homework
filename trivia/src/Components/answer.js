import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

function Answer(){

    const url = 'http://jservice.io/api/random'

    const [answer, setAnswer] = useState("")

    const getAnswer = async() => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setAnswer(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() =>{
        getAnswer()
    }, [])

    return(
        <form onClick=''>
          <button>Random Answer</button>
        </form>
    )
}

export default Answer;