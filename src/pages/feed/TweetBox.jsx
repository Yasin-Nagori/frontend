import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import {
  AddPhotoAlternate,
  AddPhotoAlternateOutlined,
} from "@mui/icons-material";
import axios from "axios";
import useLoggedInUser from "../../hooks/useLoggedInUser";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
function TweetBox() {
  const [post, setPost] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser] = useLoggedInUser();
  const [user] = useAuthState(auth);
  const email = user?.email;
  function handleTweet(e) {
    e.preventDefault();

    if (user.providerData[0].providerId === "password") {
      fetch(
        `https://twitter-clone-3sf0.onrender.com/loggedInUser?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setName(data[0]?.name);
          setUsername(data[0]?.username);
        });
    } else {
      setName(user?.displayName);
      setUsername(email?.split("@")[0]);
    }

    if (name) {
      const userPost = {
        post: post,
        photo: imageURL,
        name: name,
        username: username,
        email: email,
      };

      setImageURL("");
      setPost("");
      fetch("https://twitter-clone-3sf0.onrender.com/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPost),
      })
        .then((res) => res.json())
        .then((data) => console.log("this is user post", data))
        .catch((error) => console.error("Error posting tweet:", error));

      console.log(userPost);
    }
  }

  function handleUploadImage(e) {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=c56bbcbd32dbb80b10a51c72787ed38e",
        formData
      )
      .then((res) => {
        setIsLoading(true);
        setImageURL(res.data.data.display_url);
        console.log(res.data.data.display_url);
        setIsLoading(false);
      });
  }

  const userProfile = loggedInUser?.profileImage
    ? loggedInUser?.profileImage
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

  useEffect(() => {}, []);

  return (
    <div className="tweetBox">
      <form onSubmit={handleTweet}>
        <div className="tweetBox__input">
          <Avatar src={userProfile} />
          <input
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            required
          />
        </div>
        <div className="imageIcon_tweetButton">
          <label htmlFor="image" className="imageIcon">
            {isLoading ? (
              <p> Image Uploading"</p>
            ) : (
              <p>
                {imageURL ? "Image Uploaded" : <AddPhotoAlternateOutlined />}
              </p>
            )}
          </label>
          <input
            type="file"
            id="image"
            className="imageInput"
            onChange={handleUploadImage}
          />
          <Button className="tweetBox__tweetButton" type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
