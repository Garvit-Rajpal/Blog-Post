import {createContext,useState} from 'react';
import { baseUrl } from '../baseUrl';
import {useNavigate} from 'react-router-dom';

// step1 Create the context

export const AppContext=createContext();

// Step2 Providing the data/Context
export default function AppContextProvider({children}){
    const [loading,setLoading]= useState(false);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const [posts,setPosts]=useState([]);
    const navigate=useNavigate();
    

    async function fetchPageData(page,tag=null,category){
        let url=`${baseUrl}?page=${page}`;

        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
            console.log(url);
        }

        setLoading(true);
        try{
            
            const data=await fetch(url);
            const output=await data.json();
            setTotalPages(output.totalPages);
            setPosts(output.posts);

        }
        catch{
            console.log("The Data was not able to fetch");
            setTotalPages(null);
            setPosts([]);

        }
        setLoading(false);
    }

    function pageHandler(page){
        navigate({search : `?page=${page}`});
        setPage(page);
        
    }

    const value={
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchPageData,
        pageHandler
    }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>  
}

