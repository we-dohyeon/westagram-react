import React, { Component } from "react";
import "./Login.scss";

// 1. 아이디 및 비밀번호 입력
// 1.1 인풋에 접근 후 해당하는 값을 가져온다.
// 1.2 값이 조건에 해당되는지 판별
// 1.3 판별한 결과에 따라서 버튼을 활성화(색상 등 스타일링)

// 2. 로그인 버튼을 클릭
// 2.1 사용자가 입력한 값이 백엔드로 넘어간다.
// 2.2 로그인 성공 여부를 받음
// 2.3 성공 여부에 따라 메인으로 이동

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      pw: "",
    };
  }

  // handleIdInput = (e) => {
  //   this.setState({
  //     id: e.target.value,
  //   });
  // };

  // hadlePwInput = (e) => {
  //   this.setState({
  //     pw: e.target.value,
  //   });
  // };

  handleInputs = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // 로그인 테스트하시려면 id: testtest, pw: 123456 으로 해주세요!
  submitLoginInfo = () => {
    fetch("https://westagram-signup.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({ id: this.state.id, password: this.state.pw }),
    })
      .then((res) => res.json())
      .then((res) => {
        // if (res.msg === "SUCCESS") {
        //   localStorage.setItem("accessToken", res.token);
        //   this.props.history.push("/main");
        // } else {
        //   alert("로그인을 다시 시도해주세요!");
        // }
      });
  };

  render() {
    const validation = this.state.id.length > 0 && this.state.pw.length > 0;

    return (
      <main id="main" className="loginContainer">
        <div className="loginInner">
          <h1>Westagram</h1>
          <form className="loginForm">
            <input
              // id="id"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInputs}
            />
            <input
              // id="pw"
              name="pw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInputs}
            />
            <button
              id="loginBtn"
              type="button"
              className={validation ? "able" : "disable"}
              disabled={!validation}
              onClick={this.submitLoginInfo}
            >
              로그인
            </button>
          </form>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </main>
    );
  }
}

export default Login;
