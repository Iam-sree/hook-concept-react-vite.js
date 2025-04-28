import Counter from './components/Counter';
import GithubUser from './components/GithubUser';
import InputsExample from './components/InputsExample';
import Countercall from './components/Countercall';
import ExpensiveCalculation from './components/ExpensiveCalculation';
import SearchList from './components/SearchList';
import Counterreducer from './components/Counterreducer';
import UserProvider from './context/UserProvider';
import Parent from './components/Parent/Parent';


function App() {
  return (
    <div>
      <Counter />
      <GithubUser />
      <InputsExample />
      <Countercall />
      <ExpensiveCalculation />
      <SearchList />
      <Counterreducer />


      <UserProvider>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h1>useContext with Compound Folder Structure</h1>
        <Parent />
      </div>
    </UserProvider>


    </div>
  );
}

export default App;
