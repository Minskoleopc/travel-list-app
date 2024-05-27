import {useState} from "react"

export default function Form({onAddItems}){

    const [description ,setDescription] = useState("");
    const [quanity , setQuantity] = useState(1);

    function handleSubmit(e){

        const newItem = {description,quanity,packed:false, id:Date.now()}

    }






}