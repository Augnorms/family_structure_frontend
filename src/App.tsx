import { Loginpictorial } from "./component/reusables/components/Loginpictorial"
import { Heirarchical } from "./component/reusables/components/Heirarchical"

interface Node {
  id: number;
  label:string;
  children?: Node[];
}



function App() {
  
  const hierarchyData: Node = {
    id: 1,
    label: 'Root Node',
    children: [
      {
        id: 2,
        label: 'Parent Node 2',
        children: [
          {
            id: 1,
            label: 'child Node 1',
          },
          {
            id: 2,
            label: 'child Node 2',
          },
        ],
      },
      {
        id: 3,
        label: 'Parent Node 3',
        children: [
          {
            id: 1,
            label: 'child Node 1',
          },
        ],
      },
      {
        id: 4,
        label: 'Parent Node 4',
        children:[]
      },
      {
        id: 5,
        label: 'Parent Node 5',
        children:[
          {
            id:1,
            label:'child Node 1',
            children:[
              {
                id:1,
                label:'grand child Node 1',
                children:[]
              },
              {
                id:2,
                label:'grand child Node 2',
                children:[]
              },
              {
                id:1,
                label:'grand child Node 3',
                children:[]
              },
              {
                id:1,
                label:'grand child Node 4',
                children:[
                  {
                    id:1,
                    label:'grand child Node 1',
                    children:[]
                  },
                ]
              }
            ]
          },
          {
            id:2,
            label:'child Node 2',
            children:[]
          },
          {
            id:3,
            label:'child Node 3',
            children:[]
          },
          {
            id:4,
            label:'child Node 4',
            children:[]
          }
        ]
      },
    ],
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const innerText = event.currentTarget.innerText;
    console.log(innerText);
  };

  return (
    <>

      <div className='w-full h-screen'>
      <Heirarchical {...hierarchyData} handleClick={handleClick}/>
       
        <Loginpictorial/>
        
      </div>

    </>
  )
}

export default App
