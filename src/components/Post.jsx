import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
function Post(props){
  const {deletePost} =useContext(PostList);
  return (
 <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{props.post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete onClick={()=>deletePost(props.post.id)}></MdDelete>
    <span className="visually-hidden">unread messages</span>
  </span>
    </h5>
    <p className="card-text">{props.post.body}</p>
   {props.post.tags.map(tag=>(
        <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
    ))}
    <div className="alert alert-success reactions" role="alert">
 This post has been reacted by {props.post.reactions} people.
</div>
  </div>
</div>
  );
}
export default Post;