import React from 'react';
import { Link } from 'react-router-dom';

const faculty = {
  name: '강형우',
  email: 'kanghw@korea.ac.kr',
  office: '정운오IT교양관 315호',
  researchArea: '금융보안, 가상자산보안',
  photo: `${process.env.PUBLIC_URL}/people-photos/강형우 교수님.jpg`,
};

const fullTimeStudents = [
  {
    name: '배준호',
    degree: '석사',
    cohort: '47기',
    major: '융합보안',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/배준호.png`,
  },
  {
    name: '손예원',
    degree: '석사',
    cohort: '48기',
    major: '정보보안',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/손예원.jpg`,
  },
  {
    name: '박천호',
    degree: '석사',
    cohort: '50기',
    major: '정보보안',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/박천호.jpg`,
  },
  {
    name: '임시온',
    degree: '석사',
    cohort: '50기',
    major: '정보보안',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/임시온.JPG`,
  },
  {
    name: '민기단',
    degree: '석사',
    cohort: '51기',
    major: '융합보안',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/민기단.jpg`,
  },
  {
    name: '김준호',
    degree: '',
    cohort: '학부연구생',
    major: '',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김준호.jpg`,
  },
  {
    name: '정진호',
    degree: '',
    cohort: '학부연구생',
    major: '',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정진호.png`,
  },
  {
    name: '조은',
    degree: '',
    cohort: '학부연구생',
    major: '',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/조은.jpg`,
  },
];

const partTimeStudents = [
  {
    name: '박민주',
    degree: '석사',
    cohort: '47기',
    company: 'UBS 증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이상훈',
    degree: '석사',
    cohort: '47기',
    company: '금융감독원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '남현수',
    degree: '석사',
    cohort: '47기',
    company: '금융감독원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김강철',
    degree: '석사',
    cohort: '47기',
    company: '한국예탁결제원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김강철.png`,
  },
  {
    name: '유범석',
    degree: '석사',
    cohort: '47기',
    company: 'LS증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '성호열',
    degree: '석사',
    cohort: '49기',
    company: '우리은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이동운',
    degree: '석사',
    cohort: '49기',
    company: '안랩',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이동운.jpg`,
  },
  {
    name: '박성수',
    degree: '석사',
    cohort: '49기',
    company: '농협은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '장은지',
    degree: '석사',
    cohort: '49기',
    company: '신한은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이재형',
    degree: '석사',
    cohort: '49기',
    company: '신한투자증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '정혜성',
    degree: '석사',
    cohort: '49기',
    company: '금융보안원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정혜성.jpg`,
  },
  {
    name: '유효종',
    degree: '석사',
    cohort: '49기',
    company: '한국산업은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '정용준',
    degree: '석사',
    cohort: '49기',
    company: '신한투자증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정용준.jpg`,
  },
  {
    name: '백승미',
    degree: '석사',
    cohort: '49기',
    company: '삼성 SDS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/백승미.jpg`,
  },
  {
    name: '유정재',
    degree: '석사',
    cohort: '49기',
    company: 'IR큐더스',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '류신영',
    degree: '석사',
    cohort: '49기',
    company: '글로벌사이버인재양성 프로그램 참여',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '장세인',
    degree: '석사',
    cohort: '49기',
    company: '토스증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김정훈',
    degree: '석사',
    cohort: '49기',
    company: '넷마블',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김정훈.jpg`,
  },
  {
    name: '백하나',
    degree: '석사',
    cohort: '49기',
    company: '한국산업은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '양병수',
    degree: '석사',
    cohort: '49기',
    company: '교보증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/양병수.jpeg`,
  },
  {
    name: '박지영',
    degree: '석사',
    cohort: '50기',
    company: '신한카드',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '문요셉',
    degree: '석사',
    cohort: '50기',
    company: '신한라이프',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김효진',
    degree: '석사',
    cohort: '50기',
    company: '신한DS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '권성민',
    degree: '석사',
    cohort: '50기',
    company: '기업은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '지상희',
    degree: '석사',
    cohort: '50기',
    company: '신한DS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '강정근',
    degree: '석사',
    cohort: '50기',
    company: '피앤피시큐어',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '어진철',
    degree: '석사',
    cohort: '50기',
    company: '시큐아이',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/어진철.jpeg`,
  },
];

const Faculty = () => {
  return (
    <div className="page">
      <div className="container members-page">
        <section className="members-section">
          <h2 className="members-heading">Professor</h2>
          <div className="faculty-card-wrapper">
            <div className="members-card faculty-card">
              <div className="members-photo-wrapper">
                <img
                  src={faculty.photo}
                  alt={`${faculty.name} 프로필`}
                  className="members-photo large"
                />
              </div>
              <div className="members-info">
                <h3 className="members-name">{faculty.name}</h3>
                <ul className="members-meta">
                  <li>이메일: <a href={`mailto:${faculty.email}`}>{faculty.email}</a></li>
                  <li>연구실: {faculty.office}</li>
                  <li>분야: {faculty.researchArea}</li>
                </ul>
                <div style={{ marginTop: 'var(--space-2)' }}>
                  <Link to="/professor-kang" className="homepage-link">Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="members-section">
          <h2 className="members-heading">Full-time</h2>
          <div className="members-grid">
            {fullTimeStudents.map((student) => (
              <div className="members-card" key={student.name}>
                <div className="members-photo-wrapper">
                  <img
                    src={student.photo}
                    alt={`${student.name} 프로필`}
                    className="members-photo"
                  />
                </div>
                <div className="members-info">
                  <h3 className="members-name">{student.name}</h3>
                  {student.major && <p className="members-major">{student.major}</p>}
                  <p className="members-cohort">
                    {student.degree && `${student.degree} `}{student.cohort}
                  </p>
                  {student.email && (
                    <p className="members-email">
                      <a href={`mailto:${student.email}`}>{student.email}</a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="members-section">
          <h2 className="members-heading">Part-time</h2>
          <div className="members-grid">
            {partTimeStudents.map((student) => (
              <div className="members-card" key={student.name}>
                <div className="members-photo-wrapper">
                  <img
                    src={student.photo}
                    alt={`${student.name} 프로필`}
                    className="members-photo"
                  />
                </div>
                <div className="members-info">
                  <h3 className="members-name">{student.name}</h3>
                  <p className="members-company">{student.company}</p>
                  <p className="members-cohort">
                    {student.degree && `${student.degree} `}{student.cohort}
                  </p>
                  {student.email && (
                    <p className="members-email">
                      <a href={`mailto:${student.email}`}>{student.email}</a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculty;