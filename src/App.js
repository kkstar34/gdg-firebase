import { useState } from 'react';
import './App.css';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import db from './firbase/config';
import { useEffect } from 'react';

import { getDocs , query} from 'firebase/firestore';

function App() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [questions, setQuestions] = useState([]);


  useEffect(() =>{

    const get =async()=>{
      const q = query(collection(db, "questions"));
      let querySnapshot = await getDocs(q);
      const questionList = querySnapshot.docs.map(doc => doc.data());
      console.log(questionList)
      setQuestions(questionList)
    }


    const q = query(collection(db, "questions"));
    const unsub = onSnapshot(q, async(querySnapshot) => {
      const questionList = querySnapshot.docs.map(doc => doc.data());
      setQuestions(questionList)
    })

    return () => {
      unsub();
    };

  }, [title])

  const onSubmit = async(e) => {
    e.preventDefault();
    const question = {
      title, content
    }
    try {
      const docRef = await addDoc(collection(db, "questions"), question)
      setTitle("");
      setContent("");
    }
    catch(err){
      console.error(err.message)
    }
   
  }
  return (
    <div className="App">
        <div className="form-box">
          <form onSubmit={onSubmit}>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
            <br />
            <br />
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=> setContent(e.target.value)} value={content}></textarea>
            <br />
            <input type="submit" />
          </form>
        </div>

        <div className="list">
            <div>
              {questions && questions.map(q => {
                return <> <h1>{q.title}</h1>
                <p>{q.content}</p>
                </> 
              })}
           
            </div>
        </div>
    </div>
  );
}

export default App;
