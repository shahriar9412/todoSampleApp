import React from 'react';
import Card from './Components/Card';
import Data from './data.json';

function App(){
    // let items = [];
    // for(let i=0; i<Data.length; i++){
    //     items.push(<Card titleText={Data[i].title} descText={Data[i].desc} />)
    // }
    console.log("Hello console!");
    return  <div>

                <h1 className='heading'>Todo App</h1>
                {Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)}

            </div>
}
export default App;