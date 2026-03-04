import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const faculty = {
  name: '강 형 우',
  email: 'kanghw@korea.ac.kr',
  office: '고려대학교 자연계캠퍼스 정운오IT교양관\n315호',
  researchArea: '금융보안, 가상자산보안',
  photo: `${process.env.PUBLIC_URL}/people-photos/강형우 교수님.jpg`,
};

const fullTimeStudents = [
  {
    name: '배준호',
    degree: '석사',
    cohort: '47기',
    major: '융합보안',
    email: 'bjhbae@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/배준호.png`,
  },
  {
    name: '손예원',
    degree: '석사',
    cohort: '48기',
    major: '정보보안',
    email: 'fjqm4155@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/손예원.jpg`,
  },
  {
    name: '박천호',
    degree: '석사',
    cohort: '50기',
    major: '정보보안',
    email: 'pch3467@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/박천호.jpg`,
  },
  {
    name: '임시온',
    degree: '석사',
    cohort: '50기',
    major: '정보보안',
    email: 'ssionn02@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/임시온.JPG`,
  },
  {
    name: '민기단',
    degree: '석사',
    cohort: '51기',
    major: '융합보안',
    email: 'airmass22@gmail.com',
    photo: `${process.env.PUBLIC_URL}/people-photos/민기단.jpg`,
  },
];

const undergraduateInterns = [
  {
    name: '정진호',
    degree: '',
    cohort: '',
    major: '',
    email: 'wlsgh0062@naver.com',
    photo: `${process.env.PUBLIC_URL}/people-photos/정진호.png`,
  },
  {
    name: '조은',
    degree: '',
    cohort: '',
    major: '',
    email: 's1lv3r@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/조은.jpg`,
  },
];

const doctoralStudents = [
  {
    name: '이영광',
    degree: '박사',
    cohort: '51기',
    company: '금융감독원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이영민',
    degree: '박사',
    cohort: '51기',
    company: '한화생명',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
];

const alumniKo = [
  {
    name: '박민주',
    degree: '석사',
    cohort: '47기',
    company: 'UBS 증권',
  },
  {
    name: '이상훈',
    degree: '석사',
    cohort: '47기',
    company: '금융감독원',
  },
  {
    name: '김강철',
    degree: '석사',
    cohort: '47기',
    company: '한국예탁결제원',
  },
  {
    name: '유범석',
    degree: '석사',
    cohort: '47기',
    company: 'LS 증권',
  },
];

const partTimeStudents = [
  {
    name: '남현수',
    degree: '석사',
    cohort: '47기',
    company: '금융감독원',
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
    company: 'IR 큐더스',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '류신영',
    degree: '석사',
    cohort: '49기',
    company: '-',
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
    company: '신한 DS',
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
    company: '신한 DS',
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
  {
    name: '이진규',
    degree: '석사',
    cohort: '51기',
    company: '한국정보통신기술협회',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '박원민',
    degree: '석사',
    cohort: '51기',
    company: '카카오',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/박원민.png`,
  },
  {
    name: '배성민',
    degree: '석사',
    cohort: '51기',
    company: '생명보험협회',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/배성민.jpg`,
  },
  {
    name: '김민혁',
    degree: '석사',
    cohort: '51기',
    company: '금융보안원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김민혁.jpg`,
  },
  {
    name: '유지안',
    degree: '석사',
    cohort: '51기',
    company: 'KB국민은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/유지안.jpeg`,
  },
  {
    name: '이한석',
    degree: '석사',
    cohort: '51기',
    company: '우리은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이한석.jpeg`,
  },
  {
    name: '이호연',
    degree: '석사',
    cohort: '51기',
    company: '신한금융지주',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이호연.jpeg`,
  },
  {
    name: '김호창',
    degree: '석사',
    cohort: '51기',
    company: '우리금융지주',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김효진',
    degree: '석사',
    cohort: '51기',
    company: '금융감독원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이원중',
    degree: '석사',
    cohort: '51기',
    company: '지슨',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이원중.jpeg`,
  },
  {
    name: '국태호',
    degree: '석사',
    cohort: '51기',
    company: '오늘의집',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/국태호.jpg`,
  },
  {
    name: '고병산',
    degree: '석사',
    cohort: '51기',
    company: '한국투자증권',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/고병산.jpg`,
  },
  {
    name: '김승주',
    degree: '석사',
    cohort: '51기',
    company: 'KB국민은행',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김승주.jpg`,
  },
  {
    name: '제하성',
    degree: '석사',
    cohort: '51기',
    company: '한국투자캐피탈',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '고영천',
    degree: '석사',
    cohort: '51기',
    company: '금융감독원',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이지유',
    degree: '석사',
    cohort: '51기',
    company: '한화생명',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
];

const cohortOrderKo = { '47기': 1, '49기': 2, '50기': 3, '51기': 4 };
const sortedPartTimeStudentsKo = [...partTimeStudents].sort((a, b) => {
  const co = (cohortOrderKo[a.cohort] || 9) - (cohortOrderKo[b.cohort] || 9);
  if (co !== 0) return co;
  return a.name.localeCompare(b.name, 'ko-KR');
});
const sortedDoctoralStudentsKo = [...doctoralStudents].sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));

const formatDegreeCohort = (degree, cohort) => [degree, cohort].filter(Boolean).join(' ');

const Faculty_ko = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Members | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 구성원 소개. 고려대 정보보호대학원 금융보안 연구원." />
      </Helmet>
      <div className="container members-page">
        <section className="members-section">
          <h2 className="members-heading">교수</h2>
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
                  <li>이메일:<br /><a href={`mailto:${faculty.email}`}>{faculty.email}</a></li>
                  <li>연구실:<br />{faculty.office.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</li>
                  <li>연구 분야:<br />{faculty.researchArea}</li>
                </ul>
                <div style={{ marginTop: 'var(--space-2)' }}>
                  <Link to="/professor-kang" className="homepage-link">프로필</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="members-section">
          <h2 className="members-heading">석사 과정 (풀타임)</h2>
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
                  {formatDegreeCohort(student.degree, student.cohort) && (
                    <p className="members-cohort">{formatDegreeCohort(student.degree, student.cohort)}</p>
                  )}
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
          <h2 className="members-heading">학부 인턴</h2>
          <div className="members-grid members-grid-intern">
            {undergraduateInterns.map((student) => (
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
                  {formatDegreeCohort(student.degree, student.cohort) && (
                    <p className="members-cohort">{formatDegreeCohort(student.degree, student.cohort)}</p>
                  )}
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
          <h2 className="members-heading">박사 과정 (풀타임)</h2>
          <div className="members-grid members-grid-phd">
            {sortedDoctoralStudentsKo.map((student) => (
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
                  {formatDegreeCohort(student.degree, student.cohort) && (
                    <p className="members-cohort">{formatDegreeCohort(student.degree, student.cohort)}</p>
                  )}
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
          <h2 className="members-heading">석사 과정 (파트타임)</h2>
          <div className="members-grid">
            {sortedPartTimeStudentsKo.map((student) => (
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
                  {formatDegreeCohort(student.degree, student.cohort) && (
                    <p className="members-cohort">{formatDegreeCohort(student.degree, student.cohort)}</p>
                  )}
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
          <h2 className="members-heading">Alumni</h2>
          <div className="alumni-card">
            <ul className="alumni-list">
              {alumniKo.map((person) => (
                <li key={person.name} className="alumni-item">
                  <span className="alumni-name">{person.name}</span>
                  <span className="alumni-meta">{person.degree} {person.cohort} · {person.company}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculty_ko;
