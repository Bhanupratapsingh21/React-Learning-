import { useEffect, useState } from 'react';
import './App.css';
import PostItem from './Components/PostItem';

function App() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const postPerPage = 10;
  const totalPosts = 100; // You can adjust this based on the total number of posts from the API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postPerPage}&_page=${page}`);
        const jsonData = await response.json();
        setdata((prevData) => [...prevData, ...jsonData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);

  const nextPage = () => {
    if (data.length < totalPosts) {
      setpage((prevpage) => prevpage + 1);
    }
  };

  const backpage = () => {
    if (page > 1) {
      setpage((prevpage) => prevpage - 1);
    }
  };

  const startindex = (page - 1) * postPerPage;
  const endindex = startindex + postPerPage;

  return (
    <>
      <div className='box'>
        <button onClick={backpage}>
          Back
        </button>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Posts</h1>
        <button onClick={nextPage}>
          Next
        </button>
      </div>
      <div>
        <ul className='tasksbox'>
          {data.slice(startindex, endindex).map((postData, index) => (
            <PostItem key={index} data={postData} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
