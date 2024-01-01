import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchTopic } from "../Scripts/api";
import Description from "../Details/description";


const Details = ({}) => {
    let { id } = useParams();

    const [topic, setTopic] = useState(null)

    useEffect(()=>{
        fetchTopic(id).then(res =>{
            setTopic(res.data)
        }).catch(err => {
            console.log(err)
        })
        console.log(topic)
    },[])

    return (
        <>
        {topic ? <Description topic ={topic}/>: ""}
        
        </>        
    )
}

export default Details