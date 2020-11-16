import React from "react"
import { withRouter, Link } from "react-router-dom";
import PropTypes from 'prop-types'

class MovieReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.likeClick = this.likeClick.bind(this)
  }
  likeClick = () => {

  }

  render() {
    const {reviewId, title} = this.props
    return (
    <div>
      <Link to="/movie/movie_id/review">{`${title}`}</Link>
      <button onClick={this.likeClick}>좋아요</button>
    </div>
    )
  }
}
MovieReviewListEntry.propTypes = {
  reviewId:PropTypes.number,
  title:PropTypes.string

}

export default MovieReviewListEntry;
