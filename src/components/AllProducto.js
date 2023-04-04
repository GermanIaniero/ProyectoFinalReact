import axios from 'axios';

const todosProductos = async (state) => {
const peticion = await axios.get('https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/Products/')   
state(peticion.data.results)
}

const unicoProducto = async (id, state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}



export{todosProductos, unicoProducto
}