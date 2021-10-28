import React, { Component } from "react";
import "./Main.scss";

// 1. 댓글을 입력한다.
// 1.1 인풋에 입력된 값을 state에 저장

// 2. 게시 버튼을 누른다.
// 2.1 저장된 댓글 상태값을 댓글 리스트에 추가

// 3. 입력된 댓글이 댓글 리스트에 추가된다.
// 3.1 추가된 댓글 리스트를 기반으로 화면 재렌더링

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      commentLists: [],
    };
  }

  addComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  addCommentLists = () => {
    // spread operator, 전개구문
    const { comment, commentLists } = this.state;

    this.setState({
      commentLists: commentLists.concat(comment),
      comment: "",
    });
  };

  render() {
    // console.log(this.state.commentLists);
    return (
      <>
        <nav className="nav">
          <div className="navInner">
            <div className="titleWrapper">
              <i className="fab fa-instagram"></i>
              <span>|</span>
              <h1 className="title">westagram</h1>
            </div>

            <div className="searchWrapper">
              <i className="fas fa-search"></i>
              <p>검색</p>
            </div>

            <div>
              <i className="far fa-compass"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-user"></i>
            </div>
          </div>
        </nav>

        <main className="mainContainer">
          <article>
            <section className="feed">
              <div className="feedHeader">
                <div>
                  <i className="fas fa-user-circle"></i>
                  <p>wecode_bootcamp</p>
                </div>
                <i className="fas fa-ellipsis-h"></i>
              </div>

              <div className="feedImg"></div>

              <div className="commentWrapper">
                <div className="commentIconWrapper">
                  <div>
                    <i className="fas fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-envelope-open"></i>
                  </div>
                  <i className="far fa-bookmark"></i>
                </div>

                <div className="commentLike">
                  <i className="fas fa-user-circle"></i>
                  <p>
                    <span className="name">we-dohyeon</span>님 외 10명이
                    좋아합니다
                  </p>
                </div>

                <ul id="commentLists">
                  <li>
                    <span className="name">soon_tae</span>
                    <span>위워크에서 진행한 축구 클래스...</span>
                  </li>
                  {this.state.commentLists.map((ele, idx) => {
                    return (
                      <li key={idx}>
                        <span className="name">soon_tae</span>
                        <span>{ele}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="comment">
                <input
                  id="commentInput"
                  type="text"
                  value={this.state.comment}
                  placeholder="댓글 달기..."
                  onChange={this.addComment}
                />
                <button id="submit" onClick={this.addCommentLists}>
                  게시
                </button>
              </div>
            </section>
          </article>

          <aside>
            <section className="sectionWrapper">
              <i className="fas fa-user-circle"></i>
              <div className="sectionInner">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </section>

            <div className="contentWrapper">
              <div className="contentHeader">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
              {[1, 2, 3, 4].map((ele, idx) => {
                return (
                  <section className="sectionWrapper">
                    <i className="fas fa-user-circle"></i>
                    <div className="sectionInner">
                      <p>wecode_bootcamp</p>
                      <p>Wecode | 위코드</p>
                    </div>
                  </section>
                );
              })}
            </div>

            <section className="recommendationWrapper"></section>
          </aside>
        </main>
      </>
    );
  }
}

export default Main;
