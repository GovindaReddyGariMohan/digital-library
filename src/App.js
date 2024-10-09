import { useEffect, useState } from 'react';
import './App.css';
import Routerid from './Components/Router';
import './Styling/app.scss'
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [students, setStudents] = useState([])
  const [issuedBook, setIssuedbook] = useState([])
  useEffect(() => {
    axios.get('https://digital-librara-data.onrender.com/books')
      .then((response) => {
        setData(response.data);
      });

  }, []);
  useEffect(() => {
    axios.get('https://digital-librara-data.onrender.com/students')
      .then((response) => {
        setStudents(response.data);
      });
  }, [])
  useEffect(() => {
    axios.get('https://digital-librara-data.onrender.com/IssueBook')
      .then((response) => {
        setIssuedbook(response.data);
      });
  }, [])

  return (
    <div>
      <Routerid data={data} setData={setData} students={students} issuedBook={issuedBook} setIssuedbook={setIssuedbook} />
    </div>
  );
}

export default App;
