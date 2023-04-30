import Heading from './components/heading/Heading';

import Card from './components/card/Card';
import Button from './components/button/Button';

import Todo from './components/todo/Todo';
import Spacer from './components/spacer/Spacer';

import './App.css';


function App() {
  return (
    <div className='app'>
      <Heading text="ToDo - React"></Heading>
      <Card>
        <Todo text="I am a Text way to long to fit into a single line. bla bla bla bla" done={false}></Todo>
        <Spacer />
        <Button text="Add ToDo"></Button>
      </Card>
    </div>
  );
}

export default App;
