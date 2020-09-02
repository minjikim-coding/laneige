import React, { Component } from "react";

import "./ProductDetail.scss";

export default class ProductDetailCard extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      source: [],
    };
  }

  // 클릭 시 리뷰창이 펼쳐지고 닫히는 이벤트
  openReviewHandler = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div className="ReviewBoard">
        <div className="review_board_top">
          <div className="review_board_bottom">
            <span className="rating_star">  
              별점
            </span>
          </div>
          코멘트{" "}
        </div>{" "}
        </div>
    );
  }
}
