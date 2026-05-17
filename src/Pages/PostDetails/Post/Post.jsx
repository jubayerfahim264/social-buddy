import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Post.css";
import { Link } from "react-router";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { ShareOutlined } from "@mui/icons-material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddComments from "../AddComments/AddComments";

const Post = () => {
  const [post, setPost] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [likesCount, setLikesCount] = useState({});
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isLikedHandler = (id) => {
    // already liked ?
    const alReadyLiked = likedPosts[id];

    // like toggle
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !alReadyLiked,
    }));

    // like count update
    setLikesCount((prev) => ({
      ...prev,
      [id]: alReadyLiked ? (prev[id] || 1) - 1 : (prev[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row my-3">
          {post > 0
            ? "Post is loading...."
            : post.map((post) => (
                <div className="col-12 col-lg-4 col-md-6 my-2" key={post.id}>
                  <Card variant="outlined">
                    <Box sx={{ p: 2 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        <span className="postTitle"> {post.title}</span>
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}>
                        <span className="postDesc">{post.body}</span>
                      </Typography>
                    </Box>
                    <Divider />
                    <div className="icons">
                      <button
                        onClick={() => isLikedHandler(post.id)}
                        disabled={likedPosts[post.id]}
                        color={likedPosts[post.id] ? "primary" : "secondary"}>
                        {likedPosts[post.id] ? (
                          <ThumbUpIcon className="likedIcon" />
                        ) : (
                          <ThumbUpOutlinedIcon className="likeIcon" />
                        )}
                        <p>{likesCount[post.id] || 0} Likes</p>
                      </button>

                      <button>
                        <AddCommentIcon
                          className="commentIcon"
                          onClick={handleOpen}
                        />
                        <p>
                          {
                            comments.filter(
                              (comment) => comment.postId === post.id,
                            ).length
                          }{" "}
                          Comments
                        </p>
                      </button>
                      <button>
                        <ShareOutlined className="shareIcon" />
                        <p>50K Share</p>
                      </button>
                    </div>
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
      <AddComments handleClose={handleClose} open={open} />
    </>
  );
};

export default Post;
