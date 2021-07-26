import { Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./Article.css";
import Comment from "./Comment";

const Article: React.FC = () => {
  const { articleName } = useParams<{ articleName?: string }>();
  let articleNameFromUser = articleName?.trim().toLocaleLowerCase();

  const [articleId, setArticleId] = useState<string>();

  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ comment: string; name: string }[]>([]);
  const [articleFromFire, setArticleFromFire] = useState<
    | {
        title: string;
        image: string;
        para: string;
        category: string;
      }
    | undefined
  >();

  // Here I need to check wether the Article name exist in Firebase
  useEffect(() => {
    db.collection("articles")
      .get()
      .then((snap) =>
        snap.docs
          .filter((doc) => doc.data().title !== articleNameFromUser)
          .forEach((docu: any) => {
            setArticleFromFire(docu.data());
            docu.collection("comments")
              .get()
              .then((snap: any) =>
                snap.docs.forEach((doc: any) =>
                  setComments((prev: any) => [...prev, doc.data()])
                )
              );
          })
      );
  }, []);

  // Handle Submit of Comment
  const handleSubmitComment = (e: any): void => {
    e.preventDefault();

    if (userName === "" || comment.length < 5) {
      alert("Please, try to fill the inputs with enough Text");
    } else {
      console.log(articleFromFire?.category);
    }
  };

  return (
    <div>
      {articleFromFire !== undefined && (
        <div>
          <div className="article">
            <div
              className="article__image"
              style={{ backgroundImage: `url(${articleFromFire?.image})` }}
            ></div>

            <div className="article__content">
              <h1>{articleFromFire?.title}</h1>
              <p>{articleFromFire?.para}</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="article__back">
            <Link to="/">
              <Button color="secondary" variant="contained">
                Back to Articles
              </Button>
            </Link>
          </div>

          <div className="article__comments">
            {/* Where to comment */}
            <form className="container">
              <div className="row">
                <div className="col-6">
                  <div className="comment"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Input
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e: any) => setUserName(e.target.value)}
                  />
                  <textarea
                    value={comment}
                    onChange={(e: any) => setComment(e.target.value)}
                    className="input"
                    placeholder="Write a comment"
                  ></textarea>{" "}
                  <br />
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={handleSubmitComment}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>

            {/* Comments of People */}
            <div className="container comments__container">
              <h4>Comments</h4>
              {console.log(comments)}
              {comments.map((com) => (
                <Comment comment={`${com.name}: ${com.comment}`} />
              ))}
              {comments.length <= 0 && <h5>No Comment up till Now !</h5>}
            </div>
          </div>
        </div>
      )}
      {articleFromFire === undefined && (
        <div>
          <h1>
            Sorry, But the Article that you are looking for isn't available for
            Now !
          </h1>
          <section className="error-container">
            <span>
              <span>4</span>
            </span>
            <span>0</span>
            <span>
              <span>4</span>
            </span>
          </section>
        </div>
      )}
    </div>
  );
};

export default Article;
