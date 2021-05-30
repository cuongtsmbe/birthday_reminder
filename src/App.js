
import './App.css';
import ItemPeople from "./components/ItemPeople";
import {data} from "./const/index";
import react,{useState} from "react";
function App() {
  const [peoples,setData]=useState(data);

  return (
    <div className="container">
        <div className="ListPeople">
              {
                peoples.map(e=>{
                  return (
                      <ItemPeople key={e.id} people={e} />
                    );
                })
              }
               {(peoples.length!==0)?(<button onClick={()=>{setData([])}}>Clear All</button>):""}

               {(peoples.length===0)?(<button type="button" className="btn btn-danger" onClick={()=>{setData(data)}}>get data</button>):''}
        </div>
        
    </div>
  );
}

export default App;
