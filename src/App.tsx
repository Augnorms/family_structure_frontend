import { DashboardComponent } from './component/reusables/components/DashboardComponent';
import money from "./component/reusables/assets/money.svg"
import wallet from "./component/reusables/assets/wallet.svg"
import { Procurement } from './component/nonreusables/Procurement';
import { Loans } from './component/nonreusables/Loans';


function App() {

  const content = [
    {
      image:money,
      content:"procurement"
    },
    {
      image:wallet,
      content:"Loans"
    }
  ];

  const component = [
    {
      dashContentname:"procurement",
      components:<Procurement />
    },
    {
      dashContentname:"Loans",
      components:<Loans />
    },
  ];

  return (
    <>

      <div className='h-screen'>
       
        <DashboardComponent content={content} components={component}/>

      </div>

    </>
  )
}

export default App
