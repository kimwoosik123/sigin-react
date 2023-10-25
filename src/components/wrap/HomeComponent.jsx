import React from 'react';
// import { Link } from 'react-router-dom';

export default function HomeComponent() {
  
  // react js 230911_bhg
  const onClickSignin = () => {
    window.location.href = '/signin';
  };

  // vanilla js 230911_bhg
  // let signinBtn = document.querySelector('.signin__btn');
  // // signinBtn이 존재할 경우
  // if (signinBtn) {
  //   signinBtn.addEventListener('click', () => { // 클릭 이벤트 리스너
  //     window.location.href = '/signin'; // 경로 이동
  //   });
  // }
  // else {
  //   console.log('signin__btn 버튼이 존재하지 않습니다.'); // 새로고침 혹은 뒤로가기시 signin__btn 버튼이 존재하지 않음
  // }

  return (
    <div id="home">
        <button className="signin__btn btn" onClick={onClickSignin}>로그인</button>
    </div>
  )
}
