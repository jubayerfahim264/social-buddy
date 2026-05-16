import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Post.css";
import { Link } from "react-router";



const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row my-3">
          {post.map((post) => (
            <div className="col-12 col-lg-4 col-md-6 my-2" key={post.id}>
              <Card variant="outlined">
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="postTitle"> {post.title}</span>
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <span className="postDesc">{post.body}</span>
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Link
                    to={`/post/${post.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <Button
                      variant="outlined"
                      size="lg"
                      fullWidth
                      className="postBtn">
                      Read More
                    </Button>
                  </Link>
                </Box>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
