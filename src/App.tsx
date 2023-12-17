import { DashboardComponent } from './component/reusables/components/DashboardComponent';
import money from "./component/reusables/assets/money.svg"
import wallet from "./component/reusables/assets/wallet.svg"
import { Procurement } from './component/nonreusables/Procurement';
import { Loans } from './component/nonreusables/Loans';
import { Heirarchical } from './component/reusables/components/Heirarchical';

interface Node {
  id: number;
  label:string;
  children?: Node[];
}



function App() {

  // const content = [
  //   {
  //     image:money,
  //     content:"procurement"
  //   },
  //   {
  //     image:wallet,
  //     content:"Loans"
  //   }
  // ];

  // const component = [
  //   {
  //     dashContentname:"procurement",
  //     components:<Procurement />
  //   },
  //   {
  //     dashContentname:"Loans",
  //     components:<Loans />
  //   },
  // ];

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
                label:'grand child Node 1',
                children:[]
              },
              {
                id:1,
                label:'grand child Node 1',
                children:[]
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
  };
  
  

  return (
    <>

      <div className='w-full h-screen'>
       
        {/* <DashboardComponent content={content} components={component}/> */}
        <Heirarchical {...hierarchyData} handleClick={handleClick}/>

      </div>

    </>
  )
}

export default App
