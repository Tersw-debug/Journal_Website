import Header from "../components/Header";
import Entry from "../components/Entry";
import { useState, useEffect,Fragment } from 'react';
import {getCache, setCache} from './cache'



export default function Testing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cache = getCache('data.json');
    if(cache) {
      setData(data);
    }
    else{
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          setCache('data.json', data)
          setData(data);
        });
  }
}, []);
  if(!data) return <div>Loading...</div>
  return (
    <Fragment>
      <Header></Header>
      <main>
      {data.map((element) => (
        <Entry key={element.id} {...element} />
      ))}
      </main>
    </Fragment>
  );
}




// export default function App() {
    
//     const entryElements = data.map((entry) => {
//         return (
//             <Entry
//                 key={entry.id}
//                 {...entry}
//             />
//         )
//     })
    
//     return (
//         <>
//             <Header />
//             <main className="container">
//                 {entryElements}
//             </main>
//         </>
//     )
// }