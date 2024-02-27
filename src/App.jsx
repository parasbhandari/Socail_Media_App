import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Createpost from "./components/Createpost";
import PostList from "./components/PostList";
import {useState} from "react";
import PostListProvider from "./store/post-list-store";

function App(){
  const [selectedTab,setSelectedTab] = useState("Home");
  return( 
    <>
    <PostListProvider>
    <div className="app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></Sidebar>
    <div className="content"> 
    <Header></Header>  
    {selectedTab==="Home"? <PostList></PostList>:<Createpost></Createpost>}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    </>

  );
}
export default App;