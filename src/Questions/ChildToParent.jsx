import { useState } from 'react';


export function ParentComponent() {
    const [childData, setChildData] = useState(null);

    const handleChildData = (data) => {
        setChildData(data);
    };

    return (
        <div>
            <h1>Parent</h1>
            <p>
                Data from child: {childData}
            </p>
            <ChildComponent sendDataToParent={handleChildData} />
        </div>
    )
}

function ChildComponent(props) {
    return (
        <div>
            <h3>Child</h3>
            <input 
            placeholder='Child Input'
            onChange={(e) => props.sendDataToParent(e.target.value)}
            ></input>
        </div>

    )
}
