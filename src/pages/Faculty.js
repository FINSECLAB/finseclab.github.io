import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const faculty = {
  name: 'Hyungwoo Kang',
  email: 'kanghw@korea.ac.kr',
  office: 'Room 315, Jung Woonoh IT & General Education Center',
  researchArea: 'Financial Security, Virtual Asset Security',
  photo: `${process.env.PUBLIC_URL}/people-photos/강형우 교수님.jpg`,
};

const fullTimeStudents = [
  {
    name: 'Junho Bae',
    degree: 'M.S.',
    cohort: '47th',
    major: 'Convergence Security',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/배준호.png`,
  },
  {
    name: 'Yewon Son',
    degree: 'M.S.',
    cohort: '48th',
    major: 'Information Security',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/손예원.jpg`,
  },
  {
    name: 'Cheonho Park',
    degree: 'M.S.',
    cohort: '50th',
    major: 'Information Security',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/박천호.jpg`,
  },
  {
    name: 'Sion Lim',
    degree: 'M.S.',
    cohort: '50th',
    major: 'Information Security',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/임시온.JPG`,
  },
  {
    name: 'Gidan Min',
    degree: 'M.S.',
    cohort: '51th',
    major: 'Convergence Security',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/민기단.jpg`,
  },
];

const undergraduateInterns = [
  {
    name: 'Jinho Jung',
    degree: '',
    cohort: '',
    major: '',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정진호.png`,
  },
  {
    name: 'Eun Jo',
    degree: '',
    cohort: '',
    major: '',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/조은.jpg`,
  },
];

const doctoralStudents = [
  { name: 'Yeonggwang Lee', nameKo: '이영광', degree: 'Ph.D.', cohort: '51th', company: 'FSS', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/익명.png` },
  { name: 'Youngmin Lee', nameKo: '이영민', degree: 'Ph.D.', cohort: '51th', company: 'Hanwha Life', email: '', photo: `${process.env.PUBLIC_URL}/people-photos/익명.png` },
];

const partTimeStudents = [
  {
    name: '박민주',
    degree: 'M.S.',
    cohort: '47th',
    company: 'UBS Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이상훈',
    degree: 'M.S.',
    cohort: '47th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '남현수',
    degree: 'M.S.',
    cohort: '47th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김강철',
    degree: 'M.S.',
    cohort: '47th',
    company: 'Korea Securities Depository',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김강철.png`,
  },
  {
    name: '유범석',
    degree: 'M.S.',
    cohort: '47th',
    company: 'LS Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '성호열',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Woori Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이동운',
    degree: 'M.S.',
    cohort: '49th',
    company: 'AhnLab',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이동운.jpg`,
  },
  {
    name: '박성수',
    degree: 'M.S.',
    cohort: '49th',
    company: 'NH Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '장은지',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Shinhan Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '이재형',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Shinhan Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '정혜성',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Financial Security Institute',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정혜성.jpg`,
  },
  {
    name: '유효종',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Korea Development Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '정용준',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Shinhan Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정용준.jpg`,
  },
  {
    name: '백승미',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Samsung SDS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/백승미.jpg`,
  },
  {
    name: '유정재',
    degree: 'M.S.',
    cohort: '49th',
    company: 'IR KUDOS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '류신영',
    degree: 'M.S.',
    cohort: '49th',
    company: '-',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '장세인',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Toss Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김정훈',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Netmarble',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김정훈.jpg`,
  },
  {
    name: '백하나',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Korea Development Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '양병수',
    degree: 'M.S.',
    cohort: '49th',
    company: 'KYOBO Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/양병수.jpeg`,
  },
  {
    name: '박지영',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan Card',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '문요셉',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan Life Insurance',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '김효진',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan DS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '권성민',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Industrial Bank of Korea',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '지상희',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan DS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '강정근',
    degree: 'M.S.',
    cohort: '50th',
    company: 'PNPSecure',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: '어진철',
    degree: 'M.S.',
    cohort: '50th',
    company: 'SECUI',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/어진철.jpeg`,
  },
  {
    name: 'Byeongsan Ko',
    nameKo: '고병산',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Korea Investment & Securities Co., Ltd.',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/고병산.jpg`,
  },
  {
    name: 'Yeongcheon Go',
    nameKo: '고영천',
    degree: 'M.S.',
    cohort: '51th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Taeho Kuk',
    nameKo: '국태호',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Bucketplace',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/국태호.jpg`,
  },
  {
    name: 'Minhyuk Kim',
    nameKo: '김민혁',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Financial Security Institute',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김민혁.jpg`,
  },
  {
    name: 'Seungjoo Kim',
    nameKo: '김승주',
    degree: 'M.S.',
    cohort: '51th',
    company: 'KOOKMIN BANK',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김승주.jpg`,
  },
  {
    name: 'Hochang Kim',
    nameKo: '김호창',
    degree: 'M.S.',
    cohort: '51th',
    company: 'WOORI FINANCIAL GROUP',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Hyojin Kim',
    nameKo: '김효진',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Financial Supervisory Service',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Wonmin Park',
    nameKo: '박원민',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Kakao Corp.',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/박원민.png`,
  },
  {
    name: 'Seongmin Bae',
    nameKo: '배성민',
    degree: 'M.S.',
    cohort: '51th',
    company: 'KLIA',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/배성민.jpg`,
  },
  {
    name: 'Jiahn Yoo',
    nameKo: '유지안',
    degree: 'M.S.',
    cohort: '51th',
    company: 'KB Kookmin Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/유지안.jpeg`,
  },
  {
    name: 'Wonjoong Lee',
    nameKo: '이원중',
    degree: 'M.S.',
    cohort: '51th',
    company: 'GITSN',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이원중.jpeg`,
  },
  {
    name: 'Hanseok Lee',
    nameKo: '이한석',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Wooribank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이한석.jpeg`,
  },
  {
    name: 'Hoyeon Lee',
    nameKo: '이호연',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Shinhan Financial Group',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이호연.jpeg`,
  },
  {
    name: 'Jingyu Lee',
    nameKo: '이진규',
    degree: 'M.S.',
    cohort: '51th',
    company: 'TTA',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Jiyu Lee',
    nameKo: '이지유',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Hanwha Life Insurance',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Hasung Jea',
    nameKo: '제하성',
    degree: 'M.S.',
    cohort: '51th',
    company: 'KOREAINVESTMENT CAPITAL',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
];

const formatDegreeCohort = (degree, cohort) => [degree, cohort].filter(Boolean).join(' ');

const Faculty = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Members | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 구성원 소개. 고려대 정보보호대학원 금융보안 연구원." />
      </Helmet>
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
                  <li>Email:<br></br><a href={`mailto:${faculty.email}`}>{faculty.email}</a></li>
                  <li>Office:<br></br>{faculty.office}</li>
                  <li>Research:<br></br>{faculty.researchArea}</li>
                </ul>
                <div style={{ marginTop: 'var(--space-2)' }}>
                  <Link to="/professor-kang" className="homepage-link">Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="members-section">
          <h2 className="members-heading">Master Students (Full-time)</h2>
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
          <h2 className="members-heading">Undergraduate Intern</h2>
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
          <h2 className="members-heading">Ph.D. Students</h2>
          <div className="members-grid">
            {doctoralStudents.map((student) => (
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
          <h2 className="members-heading">Master Students (Part-time)</h2>
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
      </div>
    </div>
  );
};

export default Faculty;