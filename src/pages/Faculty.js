import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const faculty = {
  name: 'Hyung Woo Kang',
  email: 'kanghw@korea.ac.kr',
  office: 'Room 315, Jung Woonoh IT & General Education Center',
  researchArea: 'Financial Security, Virtual Asset Security',
  photo: `${process.env.PUBLIC_URL}/people-photos/강형우 교수님.jpg`,
};

const fullTimeStudents = [
  {
    name: 'Jun Ho Bae',
    degree: 'M.S.',
    cohort: '47th',
    major: 'Convergence Security',
    email: 'bjhbae@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/배준호.png`,
  },
  {
    name: 'Ye Won Son',
    degree: 'M.S.',
    cohort: '48th',
    major: 'Information Security',
    email: 'fjqm4155@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/손예원.jpg`,
  },
  {
    name: 'Cheon Ho Park',
    degree: 'M.S.',
    cohort: '50th',
    major: 'Information Security',
    email: 'pch3467@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/박천호.jpg`,
  },
  {
    name: 'Si On Lim',
    degree: 'M.S.',
    cohort: '50th',
    major: 'Information Security',
    email: 'ssionn02@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/임시온.JPG`,
  },
  {
    name: 'Gi Dan Min',
    degree: 'M.S.',
    cohort: '51th',
    major: 'Convergence Security',
    email: 'airmass22@gmail.com',
    photo: `${process.env.PUBLIC_URL}/people-photos/민기단.jpg`,
  },
];

const undergraduateInterns = [
  {
    name: 'Jin Ho Jung',
    degree: '',
    cohort: '',
    major: '',
    email: 'wlsgh0062@naver.com',
    photo: `${process.env.PUBLIC_URL}/people-photos/정진호.png`,
  },
  {
    name: 'Eun Jo',
    degree: '',
    cohort: '',
    major: '',
    email: 's1lv3r@korea.ac.kr',
    photo: `${process.env.PUBLIC_URL}/people-photos/조은.jpg`,
  },
];

const doctoralStudents = [
  {
    name: 'Young Seol Son',
    nameKo: '손영설',
    degree: 'Ph.D.',
    cohort: '51th',
    company: 'Samsung Card',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`
  },
  {
    name: 'Yeong Gwang Lee',
    nameKo: '이영광',
    degree: 'Ph.D.',
    cohort: '51th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`
  },
  {
    name: 'Young Min Lee',
    nameKo: '이영민',
    degree: 'Ph.D.',
    cohort: '51th',
    company: 'Hanwha Life',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`
  },
];

const alumniEn = [
  {
    name: 'Min Ju Park',
    degree: 'M.S.',
    cohort: '47th',
    company: 'UBS Securities'
  },
  {
    name: 'Sang Hoon Lee',
    degree: 'M.S.',
    cohort: '47th',
    company: 'FSS'
  },
  {
    name: 'Kang Cheol Kim',
    degree: 'M.S.',
    cohort: '47th',
    company: 'Korea Securities Depository'
  },
  {
    name: 'Beom Seok Yoo',
    degree: 'M.S.',
    cohort: '47th',
    company: 'LS Securities'
  },
];

const partTimeStudents = [
  {
    name: 'Hyun Soo Nam',
    nameKo: '남현수',
    degree: 'M.S.',
    cohort: '47th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Ho Yeol Seong',
    nameKo: '성호열',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Woori Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Dong Woon Lee',
    nameKo: '이동운',
    degree: 'M.S.',
    cohort: '49th',
    company: 'AhnLab',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이동운.jpg`,
  },
  {
    name: 'Seong Soo Park',
    nameKo: '박성수',
    degree: 'M.S.',
    cohort: '49th',
    company: 'NH Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Eun Ji Jang',
    nameKo: '장은지',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Shinhan Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Jae Hyung Lee',
    nameKo: '이재형',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Shinhan Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Hye Sung Jeong',
    nameKo: '정혜성',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Financial Security Institute',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정혜성.jpg`,
  },
  {
    name: 'Hyo Joon Yoo',
    nameKo: '유효종',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Korea Development Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Yong Jun Jeong',
    nameKo: '정용준',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Shinhan Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/정용준.jpg`,
  },
  {
    name: 'Seung Mi Baek',
    nameKo: '백승미',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Samsung SDS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/백승미.jpg`,
  },
  {
    name: 'Jeong Jae Yoo',
    nameKo: '유정재',
    degree: 'M.S.',
    cohort: '49th',
    company: 'IR KUDOS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Shin Young Ryu',
    nameKo: '류신영',
    degree: 'M.S.',
    cohort: '49th',
    company: '-',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Se In Jang',
    nameKo: '장세인',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Toss Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Jeong Hoon Kim',
    nameKo: '김정훈',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Netmarble',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김정훈.jpg`,
  },
  {
    name: 'Ha Na Baek',
    nameKo: '백하나',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Korea Development Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Byung Soo Yang',
    nameKo: '양병수',
    degree: 'M.S.',
    cohort: '49th',
    company: 'Kyobo Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/양병수.jpeg`,
  },
  {
    name: 'Ji Young Park',
    nameKo: '박지영',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan Card',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Yo Sep Moon',
    nameKo: '문요셉',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan Life Insurance',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Hyo Jin Kim',
    nameKo: '김효진',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan DS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Seong Min Kwon',
    nameKo: '권성민',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Industrial Bank of Korea',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Sang Hee Ji',
    nameKo: '지상희',
    degree: 'M.S.',
    cohort: '50th',
    company: 'Shinhan DS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Jeong Geun Kang',
    nameKo: '강정근',
    degree: 'M.S.',
    cohort: '50th',
    company: 'PNPSecure',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Jin Cheol Oh',
    nameKo: '어진철',
    degree: 'M.S.',
    cohort: '50th',
    company: 'SECUI',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/어진철.jpeg`,
  },
  {
    name: 'Byeong San Ko',
    nameKo: '고병산',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Korea Investment & Securities',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/고병산.jpg`,
  },
  {
    name: 'Yeong Cheon Go',
    nameKo: '고영천',
    degree: 'M.S.',
    cohort: '51th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Tae Ho Kuk',
    nameKo: '국태호',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Bucketplace',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/국태호.jpg`,
  },
  {
    name: 'Kim Dong Ha',
    nameKo: '김동하',
    degree: 'M.S.',
    cohort: '51th',
    company: 'NH Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Min Hyuk Kim',
    nameKo: '김민혁',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Financial Security Institute',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김민혁.jpg`,
  },
  {
    name: 'Seung Joo Kim',
    nameKo: '김승주',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Kookmin Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김승주.jpg`,
  },
  {
    name: 'Jae Kwan Kim',
    nameKo: '김재관',
    degree: 'M.S.',
    cohort: '51th',
    company: 'SECUDAim',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/김재관.jpg`,
  },
  {
    name: 'Ho Chang Kim',
    nameKo: '김호창',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Woori Financial Group',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Hyo Jin Kim',
    nameKo: '김효진',
    degree: 'M.S.',
    cohort: '51th',
    company: 'FSS',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Won Min Park',
    nameKo: '박원민',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Kakao Corp.',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/박원민.png`,
  },
  {
    name: 'Park Hyun Min',
    nameKo: '박현민',
    degree: 'M.S.',
    cohort: '51th',
    company: 'SHIN & KIM LLC.',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Seong Min Bae',
    nameKo: '배성민',
    degree: 'M.S.',
    cohort: '51th',
    company: 'KLIA',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/배성민.jpg`,
  },
  {
    name: 'Ji Ahn Ryu',
    nameKo: '유지안',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Kookmin Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/유지안.jpeg`,
  },
  {
    name: 'Won Joong Lee',
    nameKo: '이원중',
    degree: 'M.S.',
    cohort: '51th',
    company: 'GITSN',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이원중.jpeg`,
  },
  {
    name: 'Han Seok Lee',
    nameKo: '이한석',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Woori Bank',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이한석.jpeg`,
  },
  {
    name: 'Ho Yeon Lee',
    nameKo: '이호연',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Shinhan Financial Group',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이호연.jpeg`,
  },
  {
    name: 'Jin Gyu Lee',
    nameKo: '이진규',
    degree: 'M.S.',
    cohort: '51th',
    company: 'TTA',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/이진규.png`,
  },
  {
    name: 'Ji Yu Lee',
    nameKo: '이지유',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Hanwha Life Insurance',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
  {
    name: 'Ha Sung Jea',
    nameKo: '제하성',
    degree: 'M.S.',
    cohort: '51th',
    company: 'Korea Investment Capital',
    email: '',
    photo: `${process.env.PUBLIC_URL}/people-photos/익명.png`,
  },
];

const cohortOrderEn = { '47th': 1, '49th': 2, '50th': 3, '51th': 4 };
const sortedPartTimeStudentsEn = [...partTimeStudents].sort((a, b) => {
  const co = (cohortOrderEn[a.cohort] || 9) - (cohortOrderEn[b.cohort] || 9);
  if (co !== 0) return co;
  const na = a.nameKo != null ? a.nameKo : a.name;
  const nb = b.nameKo != null ? b.nameKo : b.name;
  return na.localeCompare(nb, 'ko-KR');
});

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
          <h2 className="members-heading">Ph.D. Students (Part-time)</h2>
          <div className="members-grid members-grid-phd">
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
            {sortedPartTimeStudentsEn.map((student) => (
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
              {alumniEn.map((person) => (
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

export default Faculty;