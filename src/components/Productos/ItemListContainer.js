import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Spinner } from 'reactstrap'



function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Items');
    if (categoryId) {
      const queryFilter = query(queryCollection, where('categoryId', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
    }
  }, [categoryId])

  return (
    <div>
        <ItemList data={data} />
        <Spinner />
    </div>
  )
}

export default ItemListContainer
