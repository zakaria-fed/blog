import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./Article.css";
import Comment from "./Comment";

const Article: React.FC = () => {
  const { articleName } = useParams<{ articleName?: string }>();
  let articleNameFromUser = articleName?.trim().toLocaleLowerCase();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ comment: string; name: string }[]>(
    []
  );
  const [availibilaty, setAvailibilaty] = useState<boolean>();
  const [articleFromFire, setArticleFromFire] = useState<{
    title: string;
    image: string;
    para: string;
    category: string;
  }>();

  // Here I need to check wether the Article name exist in Firebase
  useEffect(() => {
    db.collection("articles")
      .get()
      .then((snap) =>
        snap.docs.forEach((doc) =>
          doc.ref
            .collection("articles")
            .get()
            .then((snap) =>
              snap.docs.forEach((doc: any) => {
                let titleUndashed = doc.data().title.toLowerCase();
                if (titleUndashed === articleNameFromUser) {
                  setArticleFromFire(doc.data());
                  doc.ref
                    .collection("comments")
                    .get()
                    .then((snap: any) =>
                      snap.docs.forEach((doc: any) =>
                        setComments((prev: any) => [...prev, doc.data()])
                      )
                    );
                  setAvailibilaty(true);

                }
              })
            )
            .catch((err) => alert(err.message))
        )
      );

      // Clear Comments from duplicate
  }, []);

  return (
    <div>
      {availibilaty && comments.length > 0 && (
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

          <div className="article__comments">
            {/* Where to comment */}
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="comment"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <textarea
                    value={comment}
                    onChange={(e: any) => setComment(e.target.value)}
                    className="input"
                    placeholder="Write a comment"
                  ></textarea>{" "}
                  <br />
                  <Button color="primary" variant="contained">
                    Submit
                  </Button>
                </div>
              </div>
            </div>

            {/* Back Button */}
            

            {/* Comments of People */}
            <div className="container comments__container">
              <h4>Comments</h4>
              {console.log(comments)}
              {/* {comments.map(com => <Comment  />)} */}
            </div>
          </div>
        </div>
      )}
      {!availibilaty && (
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
