import React from 'react';

const Footer = () => {
  return (
    <div>
      <div>
        <div>thanks to</div>
        <div>
          <div>
            <a href="">yeon.me</a>
            <span>Sever Development</span>
          </div>
          <div>
            <a href="">vid3d.net</a>
            <span>3D Icon Modeling</span>
          </div>
        </div>
      </div>
      <div aria-label="Made by Nana with love">
        <span>Made by</span>
        <span>Nana</span>
        <span>with</span>
        <span>❤️</span>
      </div>
      <div>(C) 2023 nykim.net</div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <div>Contact</div>
      <div>배경 E</div>
      <div>
        <strong>nykim@nykim.net</strong>
        <button>메일 주소 복사하기</button>
      </div>
      <button>이력서 다운로드</button>
      <p>
        함께 할 프로젝트가 있다면 메일을 보내주세요! 1~2일 내로 회신을 드릴게요. 저와
        나누고 싶은 얘기가 있으신가요? 포트폴리오나 웹 퍼블리싱과 관련이 없는 내용이여도
        좋아요. 궁금한 내용이 있다면 연락해 주세요.
      </p>
      <p>
        외주 요청 시, 간단한 프로젝트 소개와 희망 착수일/완료일 등을 함께 보내주시면 더
        빠르고 편하게 협업을 시작하실 수 있습니다!
      </p>
      <a href="">메일 보내기</a>
      <a href="">크몽으로 의뢰하기</a>
    </div>
  );
};

export default Contact;
