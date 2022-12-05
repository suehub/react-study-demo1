import { useState } from "react";
import Item from "./Item";


function App() {
    const [names, setNames] = useState('');
    const [nameInput, setNameInput] = useState('');

    const onClickButton = () => {
        setNames([...names, nameInput]);

        // setNames(nameInput);
        // console.log(names);
    };

    const dummy = [ // list
        {
            url: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
            title: "신규1",
        },
        {
            url: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
            title: "신규2",
        },
        {
            url: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
            title: "신규3",
        },
        {
            url: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
            title: "신규4",
        },
        {
            url: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
            title: "신규5",
        },
    ];
    
    return (
        <div>
            {dummy.map((item, index) => {
                return (
                    <Item 
                    key={index}
                    url={Item.url} 
                    title={Item.title}
                    />
                );
            })}

            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
            <button onClick={onClickButton}>입력</button>
        </div>
    );
}

export default App;