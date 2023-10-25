import React from 'react';

export default function SigninComponent() {
    // const userPwInput = document.querySelector('#userPw'); // vanilla js 230911_bhg
    const userPwInput = React.useRef(); // react js 230911_bhg
    // 비밀번호 보임/숨김 토글 이벤트 230911_bhg
    const onClickTogglePw = (e) => {
        e.target.classList.toggle('active');
        userPwInput.current.type = userPwInput.current.type === "password" ? "text" : "password";

        // userPwInput.classList.toggle('active'); // vanilla js 230911_bhg
        // userPwInput.type = userPwInput.type === "password" ? "text" : "password"; // vanilla js 230911_bhg
    };
    
    // signup 버튼 클릭 링크 이동 이벤트 230911_bhg
    const onClickSignup = () => {
        window.location.href = '/signup';
    };

    // input - label 포커스 이벤트 230912_bhg
    const onFocusInput = (e) => {
        const labelHtml = e.target.id;
        const label = document.querySelector(`label[for=${labelHtml}]`); // vanilla js 230912_bhg
        label.classList.add('active');
        e.target.addEventListener('blur', (e) => {
            if(e.target.value === '') {
                label.classList.remove('active');
            }
        });
    };

    // 비밀번호 찾기 이벤트 230918_bhg
    const onClickPwFind = (e) => {
        window.location.href= '/findpw';
    }

  return (
    <div id="signin">
        <div className="container">
            <div className="title">
                <h2>Login</h2>
            </div>
            <div className="contents">
                <form action="" id="signinForm" method='get'>
                    <ul className="signin__list">
                        <li className="signin__item">
                            <label htmlFor="userId">아이디</label>
                            <input type="text" id="userId" name="userId" onFocus={onFocusInput} required autoComplete='off' />
                        </li>
                        <li className="signin__item">
                            <label htmlFor="userPw">비밀번호</label>
                            <input type="password" id="userPw" name="userPw" ref={userPwInput} onFocus={onFocusInput} required autoComplete='off' />
                            <button type='button' className='toggle__btn btn' onClick={onClickTogglePw}></button>
                        </li>
                    </ul>
                    <div className="signin__btns">
                        <button className="signin__btn btn" type="submit">로그인</button>
                        <button className="signin__btn btn" type="button" onClick={onClickSignup}>회원가입</button>
                    </div>
                    <div className="pw-find__box">
                        <button className="pw-find__btn" type='button' onClick={onClickPwFind}>비밀번호 찾기</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}