import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchreduxApiCalling } from './Store/thunkFunction';
import Loading from './Components/Lodaing/Loading';
import Card from './Components/Cards/card';


function App() {
    // this is the url you need to use for fetching resources'http://localhost:3004/data'
    const isLoading = useSelector((state)=>state.reduxApiCalling.isLoading);
    const data = useSelector((state)=>state.reduxApiCalling.data);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchreduxApiCalling());
    },[dispatch]);
    
  return (
    <div className="App">
      <h1>Temates name</h1>
      <div className='line'></div>
      <div className='actualdata'>
    {
      //When using the card compoent use the personalDetail as prop
      isLoading ? 
        (<Loading/>)
      :(
          data && data.map((person, index) => (
            <Card key={index} personDetail={person} />
          ))
        )
    }
      </div>
    </div>
  );
}

export default App;
