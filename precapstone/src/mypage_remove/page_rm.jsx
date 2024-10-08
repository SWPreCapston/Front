import React from 'react';
import './vars.css';
import './style.css';

function UserProfile() {
    return (
        <div className="div">
            <div className="header">
                <div className="blue-print">BluePrint</div>
                <img className="user-profile-01" src="user-profile-010.svg" alt="User Profile" />
                <div className="div2">회원이름</div>
                <div className="div3">로그아웃</div>
                <div className="div4">마이페이지</div>
            </div>
            <div className="div5">비밀번호변경</div>
            <div className="div6">비밀번호</div>
            <div className="div7">비밀번호 확인</div>
            <div className="div8">회원정보변경</div>
            <div className="div9">발송내역</div>
            <div className="div10">회원 탈퇴</div>
            <div className="rectangle-18"></div>
            <div className="rectangle-19"></div>
            <div className="rectangle-9"></div>
            <div className="div11">회원 탈퇴</div>
            <div className="div12">********</div>
            <div className="div13">********</div>
            <div className="div14">문자 내용 보기</div>
            <div className="div15">보관함</div>
        </div>
    );
}

export default UserProfile;
