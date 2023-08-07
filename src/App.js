import {useContext} from 'react';
import { AppContext } from "./Context/AppContext";
import "./App.css";
import {useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Tag from "./Pages/Tag";
import BlogPost from "./Pages/BlogPost";
import Category from "./Pages/Category";
import {useSearchParams,useLocation} from 'react-router-dom'

export default function App() {
   
  const {fetchPageData}=useContext(AppContext);
  const[searchParam,setSearchParam]=useSearchParams();
  const location=useLocation();
   
  useEffect(()=>{
    const page= searchParam.get("page") ?? 1;
    if(location.pathname.includes("tag")){
        const tag= location.pathname.split("/").at(-1).replaceAll("-", " ");
        fetchPageData(Number(page),tag);
    }
    else if(location.pathname.includes("category")){
      // const category=location.pathname.split("/").at(-1).replaceAll("-", " ");
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log(category);
      fetchPageData(Number(page),null,category);
    }
    else{
      console.log("Isme gya hu");
      fetchPageData(Number(page));
    }

    
},[location.pathname,location.search])
  return (
  <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/blog/:blogId" element={<BlogPost/>}></Route>
     <Route path="/tag/:tag" element={<Tag/>}></Route>
     <Route path="/category/:category" element={<Category/>}></Route>
  </Routes>
  )
}
