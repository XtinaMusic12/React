import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      const commentDisplay = comments.map(comment => {
        return (
          <div key={comment.id} className="col-12 col-md-5 m-1">
            <Card>
              <li>{comment.comment}</li>
              <li>
                {comment.author} - {comment.date}
              </li>
            </Card>
          </div>
        );
      });
      return (
        <div classeName="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {commentDisplay}
        </div>
      );
    } else return <div />;
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.dish)};
          {this.renderComments(this.props.dish.comments)};
        </div>
      );
    } else return <div />;
  }
}

export default DishDetail;
