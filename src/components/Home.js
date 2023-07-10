import React,{useEffect} from 'react'
import { useNavigate,useLocation} from 'react-router-dom';


export default function Home() {
    const history=useNavigate();
    const location = useLocation();

    useEffect(() => {
      const url = "http://localhost:4000/login";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  
    const url = "http://localhost:4000/logout";
    const out = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          history('/login')
      } catch (error) {
          console.log("error", error);
      }
  };

 /// fetchDa();
 //}

  return (
  <>
    <div>
      <h3>Hello, welcome to the page</h3>
      
    </div>
    <div>
    <button onClick={out}>Logout</button>
    </div>
    </>
  )
}
