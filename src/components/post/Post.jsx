import React, { useState } from "react";
import "./post.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { Link } from "react-router-dom";
import { Comments } from "../comments/Comments";
export const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    // TEMPORARY
    const liked = true;
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link
                                to={`/profile/${post.userId}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizRoundedIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? (
                            <FavoriteRoundedIcon />
                        ) : (
                            <FavoriteBorderRoundedIcon />
                        )}
                        12 Likes
                    </div>
                    <div
                        className="item"
                        onClick={() => setCommentOpen(!commentOpen)}
                    >
                        <TextsmsRoundedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareRoundedIcon />
                        12 Shares
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    );
};
