import React from "react";
import { Switch, Link, Route, withRouter } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

axios.defaults.withCredentials = true;

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { title, text } = this.state;
    const { userinfo, movie, review } = this.props;
    return (
      <div>
        <Switch>
          <Route
            path="/movie/movie_id/write_review"
            render={() => {
              if (!review.review_id) {
                return (
                  <div>
                    <h1>리뷰 작성</h1>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        return axios
                          .post(
                            "http://localhost:5000/movie/movie_id/write_review",
                            {
                              title: title,
                              text: text,
                              movie_id: movie.movie_id,
                            }
                          )
                          .then(() => {
                            this.props.history.push("/movie/movie_id/reviews");
                          })
                          .catch((err) => {
                            alert("WriteReview failed");
                            console.log(err);
                          });
                      }}
                    >
                      <div>
                        {" "}
                        <span>작성자</span>
                        <span>{`${userinfo.nickName}`}</span>
                      </div>
                      <div>
                        {" "}
                        제목
                        <input
                          style={{
                            width: "300px",
                            height: "30px",
                            margin: "10px",
                            borderRadius: "5px",
                          }}
                          type="title"
                          placeholder="제목"
                          onChange={this.handleInputValue("title")}
                        ></input>
                      </div>
                      <div>
                        {" "}
                        내용
                        <textarea
                          style={{
                            width: "300px",
                            height: "30px",
                            margin: "10px",
                            borderRadius: "5px",
                          }}
                          type="text"
                          placeholder="내용"
                          onChange={this.handleInputValue("text")}
                        ></textarea>
                      </div>
                      <button
                        style={{
                          width: "200px",
                          height: "30px",
                          margin: "5px",
                          backgroundColor: "ivory",
                        }}
                        type="submit"
                      >
                        작성
                      </button>
                    </form>
                  </div>
                );
              }
              return (
                <div>
                  <a>리뷰 작성</a>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      return axios
                        .post(
                          "http://localhost:5000/movie/movie_id/write_review",
                          {
                            title: title,
                            text: text,
                            movie_id: movie.movie_id,
                          }
                        )
                        .then(() => {
                          this.props.history.push("/movie/movie_id/reviews");
                        })
                        .catch((err) => {
                          alert("WriteReview failed");
                          console.log(err);
                        });
                    }}
                  >
                    <div>
                      {" "}
                      <span>작성자</span>
                      <span>{`${userinfo.nickName}`}</span>
                    </div>
                    <div>
                      {" "}
                      제목
                      <input
                        style={{
                          width: "300px",
                          height: "30px",
                          margin: "10px",
                          borderRadius: "5px",
                        }}
                        type="title"
                        placeholder={`${review.title}`}
                        onChange={this.handleInputValue("title")}
                      ></input>
                    </div>
                    <div>
                      {" "}
                      내용
                      <textarea
                        style={{
                          width: "300px",
                          height: "30px",
                          margin: "10px",
                          borderRadius: "5px",
                        }}
                        type="text"
                        placeholder={`${review.text}`}
                        onChange={this.handleInputValue("text")}
                      ></textarea>
                    </div>
                    <button
                      style={{
                        width: "200px",
                        height: "30px",
                        margin: "5px",
                        backgroundColor: "ivory",
                      }}
                      type="submit"
                    >
                      작성
                    </button>
                  </form>
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
WriteReview.propTypes = {
  history: PropTypes.array,
  userinfo: PropTypes.object,
  movie: PropTypes.string,
  review: PropTypes.object,
};
export default withRouter(WriteReview);
