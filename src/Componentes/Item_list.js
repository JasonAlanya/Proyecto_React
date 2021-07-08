import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item'
import { getFireStore } from '../firebase';


export default function Item_list(){
    const [items, setItems]= useState([])
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
    setLoading(true)
    const db=getFireStore()
    const itemCollection = db.collection("Items")
    itemCollection.get().then(
        (querySnapshot)=>{
        if(querySnapshot.size===0){
            console.log('no hay resultados')
        }
        setItems(querySnapshot.docs.map(doc=>doc.data()))
        }
    ).catch((error)=>{console.log('Error buscando Items', error)}).finally(()=>{setLoading(false)})
    },[])

    return (
        <div>
            {
                items.map((post,index)=> {return <Item identificador={index} id={post.id} imagen={post.image} nombre={post.name} precio={post.price} descripcion={post.description}/>
                     })
            }
        </div>
    )

}