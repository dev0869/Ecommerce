import React from 'react'
import '../Cart/index.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { db } from '../../Config/Firebase'
import { collection,onSnapshot} from "firebase/firestore";

const Cartsss = () => {
  const { user } = useAuthContext()
  const [data, setData] = useState([]);
  useEffect(() => {
    const uuid = user && user.uid;
    if (!uuid) {
      return;
    }
    const unsubscribe = onSnapshot(
      collection(db, uuid),
      (snapshot) => {
        const List = [];
        snapshot.docs.forEach(doc => {
          List.push({ id: doc.id, ...doc.data() });
        })
        setData(List)
      },
      (error) => {
        console.log(error)
      });
    return () => {
      unsubscribe()
    }

  }, [user])



  return (
    <>
      <span>{data.length}</span>
    </>
  )
}

export default Cartsss