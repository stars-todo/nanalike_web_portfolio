import React from 'react';
import PageLayout from '@layouts/PageLayout';
import classNames from 'classnames/bind';
import * as styles from './WorkDetail.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import ArticleTitle from '@components/ArticleTitle/ArticleTitle';
import CustomLink from '@components/CustomLink/CustomLink';
import WorkIcon from '@components/Works/WorkIcon/WorkIcon';
import MailAddress from '@components/MailAddress/MailAddress';
import Copyright from '@components/Copyright/Copyright';
import CustomButton from '@components/CustomButton/CustomButton';
import { worksList } from '@components/Works/WorkItem/WorkItem';
const c = classNames.bind(styles);

const myWorks = [
  {
    id: 'workboard',
    title: '카카오워크 워크보드',
    year: '23-22',
    skills: ['React', 'TypeScript'],
    place: '카카오엔터프라이즈'
  },
  {
    id: 'email',
    title: '이메일 템플릿',
    year: '23-22',
    skills: ['Email', 'Gatsby'],
    place: '카카오엔터프라이즈'
  },
  {
    id: 'interpark',
    title: '인터파크 개편 & 유지보수',
    year: '21-20',
    skills: ['Cross-browsing', 'jQuery']
  },
  {
    id: 'dooin',
    title: '두인경매 지도 검색',
    year: '21',
    skills: ['Markup', 'jQuery']
  },
  {
    id: 'cosmos',
    title: '코스모스랩 기업 홈페이지',
    year: '21',
    skills: ['Scroll Interaction'],
    place: '블록오디세이'
  },
  {
    id: 'stars',
    title: '별별할일',
    year: '23',
    skills: ['Next.js', 'UX Design'],
    isOngoing: true
  }
];

const WorkDetail = () => {
  return (
    <>
      <article className={c('work_detail')}>
        <div className={c('btn_back')}>
          <CustomButton icon="back" href="/">
            Go Home
          </CustomButton>
        </div>
        <div className={c('info')}>
          <StaticImage
            className={c('thumbnail')}
            alt="프로필 사진"
            src="https://source.unsplash.com/random/?cat"
          />
          <div className={c('summary')}>
            <ArticleTitle>Work Detail</ArticleTitle>
            <h2 className={c('work_title')}>카카오워크 워크보드</h2>
            <ul className={c('skills')}>
              <li className={c('skills_item')}>React</li>
              <li className={c('skills_item')}>TypeScript</li>
            </ul>
            <p className={c('desc')}>
              워크보드는 업무 정보와 자료를 공유하기 위한 웹 서비스입니다. 종합 업무
              플랫폼 ‘카카오워크’에 포함된 서비스 중 하나로, 내용을 빠르게 확인할 수 있는
              게시판 형태로 개발되었습니다.
            </p>
            <p className={c('desc')}>
              Figma를 활용해 UX/UI 방향을 논의한 뒤 React/TypeScript 환경에서 UI 개발을
              진행했습니다. 아토믹 디자인을 활용한 디자인 시스템을 택했으며, Storybook으로
              UI 컴포넌트를 관리했습니다.
            </p>
            <CustomLink href="/">웹사이트 바로가기</CustomLink>
          </div>
        </div>
        <div className={c('main')}>
          <div className={c('contents', 'full')}>
            <figure>
              <StaticImage
                className={c('shot')}
                alt="작업한 내용 스크린샷"
                src="https://source.unsplash.com/random/?dog"
              />
              <figcaption className={c('contents_desc')}>
                <p>
                  구축부터 유지보수까지 지속적으로 참여한 프로젝트입니다. 기획, 개발,
                  테스트에 이르기까지 모든 실무자가 함께 공통의 과제를 바라보는 스프린트
                  방식으로 작업했습니다. 초기부터 함께 했기에 더욱 애정이 담긴
                  프로젝트입니다.
                </p>
                <p>
                  프레임워크 기반의 UI 개발 경험을 통해 컴포넌트의 재사용성을 고민하고
                  높일 수 있었습니다. 구축 단계에 함께 작업했던 UI 개발자가 있어 논의하고
                  맞춰나가며 즐겁게 협업할 수 있었습니다. 마크업 개발을 통한 프로토타입을
                  먼저 공유할 수 있어 UX를 재검토하고 향상시켜나갈 수 있었습니다.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className={c('flex')}>
            <div className={c('contents')}>
              <figure>
                <StaticImage
                  className={c('shot')}
                  alt="작업한 내용 스크린샷"
                  src="https://source.unsplash.com/random/?dog"
                />
                <figcaption className={c('contents_desc')}>
                  <p>
                    확장 가능성이 높은 신규 서비스인 만큼, 기본 요소를 잘 활용할 수 있도록
                    컴포넌트를 정리했습니다. Storybook으로 UI 컴포넌트를 정리하여 유지보수
                    작업이 보다 쉬워지도록 했습니다.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className={c('contents')}>
              <figure>
                <StaticImage
                  className={c('shot')}
                  alt="작업한 내용 스크린샷"
                  src="https://source.unsplash.com/random/?dog"
                />
                <figcaption className={c('contents_desc')}>
                  <p>
                    TypeScript를 통해 안전하고 편하게 컴포넌트를 사용할 수 있도록
                    했습니다. 정해진 prop만 받도록 해 예외 케이스에서 UI가 어긋나는 문제를
                    방지했습니다. 또, 목 데이터를 사용하는 경우 미리 타입을 지정해두어 API
                    연동 시의 혼동을 줄였습니다.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <ul className={c('slide')}>
          {myWorks.map((work, index) => (
            <li className={c('slide_item')} key={work.id}>
              <a href={`/work/${work.id}`} target="_blank" rel="noopener noreferrer">
                <WorkIcon id={work.id as worksList} />
                <span className={c('slide_name')}>{work.title}</span>
                <span className={c('slide_bg')}></span>
              </a>
            </li>
          ))}
        </ul>
      </article>
      <footer className={c('work_footer')}>
        <div className={c('inner')}>
          <div className={c('footer_title')}>웹 퍼블리싱이 필요한 프로젝트가 있나요?</div>
          <MailAddress size="small" />
          <Copyright className={c('copy')} />
        </div>
      </footer>
    </>
  );
};

export default WorkDetail;
