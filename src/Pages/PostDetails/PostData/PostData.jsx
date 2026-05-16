/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const PostData = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <>
      <div className="container">
        <Card
          variant="outlined"
          sx={{ margin: "20px auto" }}
          className="border-0">
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="h2">
              <span>{post.title}</span>
            </Typography>
            <Typography variant="body1">{post.body}</Typography>
          </Box>
        </Card>
        <Divider orientation="horizontal" flexItem />
        {/* ==================Comments================== */}
        <div className="commentsSection">
          <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
            Comments ({comments.length})
          </Typography>
          {comments.length > 0
            ? comments.map((comments, index) => (
                <div className="commentsBox" key={index}>
                  <Card
                    variant="outlined"
                    sx={{ mt: 2, borderColor: "#ccc", borderRadius: 2 }}>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body1" component="div">
                        <span style={{ fontWeight: "bold" }}>
                          {comments.name}
                        </span>
                        <br />
                        <small className="mb-5">{comments.email}</small>
                        <Divider orientation="horizontal" flexItem />
                        <br />
                        <span>{comments.body}</span>
                      </Typography>
                    </Box>
                  </Card>
                </div>
              ))
            : "No comments yet."}
        </div>
      </div>
    </>
  );
};

export default PostData;
