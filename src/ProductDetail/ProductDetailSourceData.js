import React, { Component } from "react";
import "./PartnerProfile.scss";



export default class ProductDetailSourceData extends Component {


  render() {
    const { everySource } = this.props;

    return (
        <div className="Source">
        <div className="underline" />
        <div className="refund_info_title p-a">
          <div className="SourceBtn">
            <p>전성분</p>
            <button
              className={moreBtn ? "btn_plus" : "btn_minus"}
              type="button"
              onClick={this.moreBtnClickHandler}
            >
              {moreBtn ? "+" : "_"}
            </button>
          </div>
        </div>

        {moreBtn ? (
          <section className="refund_info_list">
            <div className="exchange_guide">
              <ul className="gray-20-font info-list-style">
                <li>
                 <p className="sourceText">{sourceCode}</p>
                </li>
              </ul>
            </div>
          </section>
        ) : (
          ""
        )}
          <div className="review-cate">
            <h5>{program[Math.floor(Math.random() * program.length)]}</h5>
            <ul>
              <li>{keyword[Math.floor(Math.random() * 6) + 0]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 6]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 12]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 18]}</li>
              <li>{keyword[Math.floor(Math.random() * 5) + 24]}</li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}
