import { PageContainer, ComponentWrapper } from "../components/layout/common";
import CareerCaseCard from "../components/careerCase/ CareerCaseCard";
import { CareerCase } from "../components/careerCase/types";
import { Grid } from "@mui/material";
// 30개의 예시 데이터 생성
const careerCases: CareerCase[] = [
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~60개",
    successRate: "15~25%",
    employmentDate: "24년 2분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "IT 서비스",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "50~100명",
    certifications: "없음",
    techStack: "Java, Spring Boot",
    tips: ["프로젝트 경험 강조", "기술 블로그 작성"],
    interviewQuestion: "Java에서의 메모리 관리에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~70개",
    successRate: "20~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "스타트업",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "20~50명",
    certifications: "없음",
    techStack: "React, TypeScript",
    tips: ["코드 샘플 준비", "UI/UX 디자인 이해"],
    interviewQuestion: "React의 상태 관리 방법에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~40개",
    successRate: "10~15%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "클라우드 서비스",
    companyLocation: "경기",
    companySalary: "5천 초반",
    companySize: "200~500명",
    certifications: "AWS Certified Solutions Architect",
    techStack: "Docker, Kubernetes, AWS",
    tips: ["실습 경험 중시", "CI/CD 파이프라인 이해"],
    interviewQuestion: "CI/CD 파이프라인 구축 경험에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~30개",
    successRate: "25~35%",
    employmentDate: "24년 1분기",
    preparationPeriod: "3개월",
    bootcamp: "아니다",
    companyType: "금융업",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "100~200명",
    certifications: "없음",
    techStack: "Node.js, PostgreSQL",
    tips: ["실무 경험 강조", "문제 해결 능력 부각"],
    interviewQuestion: "Node.js의 비동기 처리 방식에 대해 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "12~20%",
    employmentDate: "24년 2분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "빅데이터 분석",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "300~500명",
    certifications: "Google Cloud Certified - Data Engineer",
    techStack: "Python, SQL, Apache Spark",
    tips: ["데이터 분석 프로젝트 경험", "클라우드 플랫폼 이해"],
    interviewQuestion: "Apache Spark의 기본 개념에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~55개",
    successRate: "18~28%",
    employmentDate: "24년 2분기",
    preparationPeriod: "6개월",
    bootcamp: "아니다",
    companyType: "eCommerce",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "150~300명",
    certifications: "없음",
    techStack: "Python, Django",
    tips: ["API 설계 경험", "문서화 중요"],
    interviewQuestion: "Django의 ORM에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~65개",
    successRate: "15~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "핀테크",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "50~100명",
    certifications: "없음",
    techStack: "Vue.js, Vuex",
    tips: ["SPA 개발 경험", "SEO 최적화 이해"],
    interviewQuestion: "Vue.js의 생명주기 메서드에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~45개",
    successRate: "15~20%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "소프트웨어 개발",
    companyLocation: "경기",
    companySalary: "5천 초반",
    companySize: "200~400명",
    certifications: "Docker Certified Associate",
    techStack: "Docker, Jenkins, Terraform",
    tips: ["실습 위주 학습", "자동화 도구 이해"],
    interviewQuestion: "Terraform의 상태 관리에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "3년",
    resumeSubmission: "~35개",
    successRate: "30~40%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "IT 서비스",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "100~200명",
    certifications: "없음",
    techStack: "Ruby, Rails",
    tips: ["애자일 개발 경험", "코드 리뷰 참여"],
    interviewQuestion:
      "Rails에서의 데이터베이스 마이그레이션에 대해 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~55개",
    successRate: "20~30%",
    employmentDate: "24년 2분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "AI 스타트업",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "100~200명",
    certifications: "AWS Certified Big Data - Specialty",
    techStack: "Python, SQL, Hadoop",
    tips: ["데이터 파이프라인 경험", "머신러닝 기초 이해"],
    interviewQuestion: "Hadoop의 기본 구성요소에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "22~30%",
    employmentDate: "24년 2분기",
    preparationPeriod: "6개월",
    bootcamp: "아니다",
    companyType: "헬스케어",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~300명",
    certifications: "없음",
    techStack: "C#, .NET",
    tips: ["API 설계 및 개발 경험", "의료 데이터 이해"],
    interviewQuestion: ".NET에서의 의존성 주입에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~60개",
    successRate: "17~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "미디어",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "80~150명",
    certifications: "없음",
    techStack: "Angular, TypeScript",
    tips: ["앱 성능 최적화", "커스터마이징 경험"],
    interviewQuestion:
      "Angular에서의 컴포넌트 간 데이터 통신에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~40개",
    successRate: "12~18%",
    employmentDate: "24년 3분기",
    preparationPeriod: "5개월",
    bootcamp: "국비",
    companyType: "게임 개발",
    companyLocation: "서울",
    companySalary: "5천 초반",
    companySize: "150~300명",
    certifications: "Kubernetes Certified Administrator",
    techStack: "Kubernetes, Ansible",
    tips: ["실제 프로젝트 경험", "컨테이너 관리"],
    interviewQuestion:
      "Kubernetes의 서비스 디스커버리 방식에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~30개",
    successRate: "28~35%",
    employmentDate: "24년 2분기",
    preparationPeriod: "3개월",
    bootcamp: "아니다",
    companyType: "전자상거래",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~400명",
    certifications: "없음",
    techStack: "Java, MySQL",
    tips: ["트래픽 처리 경험", "데이터베이스 최적화"],
    interviewQuestion: "MySQL에서의 인덱스 활용에 대해 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "18~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "6개월",
    bootcamp: "아니다",
    companyType: "디지털 마케팅",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "100~200명",
    certifications: "Google Data Engineer",
    techStack: "SQL, BigQuery",
    tips: ["데이터 시각화 경험", "쿼리 최적화"],
    interviewQuestion: "BigQuery에서의 데이터 파티셔닝에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~45개",
    successRate: "20~30%",
    employmentDate: "24년 2분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "모바일 게임",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "300~500명",
    certifications: "없음",
    techStack: "Go, MongoDB",
    tips: ["프로젝트 포트폴리오", "API 설계"],
    interviewQuestion: "Go 언어의 고루틴에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~70개",
    successRate: "15~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "헬스케어",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "50~100명",
    certifications: "없음",
    techStack: "Svelte, Tailwind CSS",
    tips: ["컴포넌트 설계 경험", "반응형 디자인"],
    interviewQuestion: "Svelte의 반응형 선언 방식에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~35개",
    successRate: "10~15%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "핀테크",
    companyLocation: "서울",
    companySalary: "5천 초반",
    companySize: "100~200명",
    certifications: "Azure DevOps Engineer",
    techStack: "Azure, GitLab CI",
    tips: ["클라우드 플랫폼 이해", "자동화 도구 사용 경험"],
    interviewQuestion:
      "Azure에서의 DevOps 파이프라인 구성 방법에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~40개",
    successRate: "25~35%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "IT 컨설팅",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~400명",
    certifications: "없음",
    techStack: "Node.js, MongoDB",
    tips: ["서버 성능 최적화 경험", "RESTful API 설계"],
    interviewQuestion:
      "Node.js에서의 비동기 처리를 어떻게 구현하는지 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~60개",
    successRate: "20~30%",
    employmentDate: "24년 2분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "유통업",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "300~500명",
    certifications: "AWS Certified Data Analytics",
    techStack: "Python, AWS Glue",
    tips: ["ETL 프로세스 경험", "클라우드 데이터베이스 이해"],
    interviewQuestion: "AWS Glue의 주요 기능에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "22~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "IoT",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "100~200명",
    certifications: "없음",
    techStack: "Java, Spring Boot",
    tips: ["실제 프로젝트 경험", "클라우드 서비스 활용"],
    interviewQuestion:
      "Spring Boot에서의 REST API 구현 방법에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~65개",
    successRate: "17~25%",
    employmentDate: "24년 2분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "교육",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "50~100명",
    certifications: "없음",
    techStack: "React, Redux",
    tips: ["상태 관리 라이브러리 경험", "디자인 패턴 이해"],
    interviewQuestion: "Redux의 동작 방식에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~30개",
    successRate: "12~18%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "빅데이터",
    companyLocation: "경기",
    companySalary: "5천 초반",
    companySize: "300~500명",
    certifications: "Google Cloud Professional DevOps Engineer",
    techStack: "Kubernetes, Helm",
    tips: ["클러스터 관리 경험", "배포 자동화"],
    interviewQuestion:
      "Kubernetes에서의 Helm 차트 사용 방법에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~45개",
    successRate: "28~35%",
    employmentDate: "24년 2분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "온라인 미디어",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~300명",
    certifications: "없음",
    techStack: "Python, Flask",
    tips: ["RESTful API 설계", "서버 성능 모니터링"],
    interviewQuestion: "Flask에서의 라우팅과 뷰 함수에 대해 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "15~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "헬스케어",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "100~200명",
    certifications: "AWS Certified Data Analytics - Specialty",
    techStack: "SQL, Redshift",
    tips: ["데이터 모델링 경험", "클라우드 데이터 플랫폼 이해"],
    interviewQuestion: "AWS Redshift의 분산 방식에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "20~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "6개월",
    bootcamp: "아니다",
    companyType: "소셜 네트워크",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~400명",
    certifications: "없음",
    techStack: "Node.js, Express",
    tips: ["API 설계 경험", "서버 사이드 렌더링 이해"],
    interviewQuestion: "Express에서의 미들웨어 사용에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~60개",
    successRate: "18~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "eCommerce",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "80~150명",
    certifications: "없음",
    techStack: "Vue.js, Vuetify",
    tips: ["컴포넌트 재사용성 고려", "UX 디자인 최적화"],
    interviewQuestion: "Vue.js의 computed 프로퍼티에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~35개",
    successRate: "15~20%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "게임",
    companyLocation: "경기",
    companySalary: "5천 초반",
    companySize: "150~300명",
    certifications: "Docker Certified Associate",
    techStack: "Docker, GitHub Actions",
    tips: ["컨테이너 오케스트레이션 경험", "CI/CD 구축 경험"],
    interviewQuestion:
      "GitHub Actions에서의 워크플로우 설정 방법에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~30개",
    successRate: "25~35%",
    employmentDate: "24년 2분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "헬스케어",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~300명",
    certifications: "없음",
    techStack: "Go, MySQL",
    tips: ["API 성능 최적화", "데이터베이스 튜닝"],
    interviewQuestion:
      "Go에서의 데이터베이스 연결 관리를 어떻게 구현하는지 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~60개",
    successRate: "20~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "온라인 교육",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "100~200명",
    certifications: "Google Professional Data Engineer",
    techStack: "Python, Apache Kafka",
    tips: ["데이터 스트리밍 경험", "ETL 프로세스 이해"],
    interviewQuestion: "Apache Kafka의 파티셔닝에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~50개",
    successRate: "22~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "6개월",
    bootcamp: "아니다",
    companyType: "게임",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~400명",
    certifications: "없음",
    techStack: "C#, .NET",
    tips: ["게임 서버 개발 경험", "성능 분석"],
    interviewQuestion: ".NET Core에서의 의존성 주입에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~70개",
    successRate: "20~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "이커머스",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "150~300명",
    certifications: "없음",
    techStack: "React, Styled-components",
    tips: ["컴포넌트 재사용성", "스타일링 경험"],
    interviewQuestion: "Styled-components의 장점에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~40개",
    successRate: "12~18%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "클라우드 서비스",
    companyLocation: "경기",
    companySalary: "5천 초반",
    companySize: "200~400명",
    certifications: "AWS Certified DevOps Engineer",
    techStack: "AWS, Terraform",
    tips: ["클라우드 인프라 설계 경험", "배포 자동화"],
    interviewQuestion:
      "Terraform에서의 상태 파일 관리 방법에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~35개",
    successRate: "25~35%",
    employmentDate: "24년 2분기",
    preparationPeriod: "3개월",
    bootcamp: "아니다",
    companyType: "온라인 쇼핑몰",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "300~500명",
    certifications: "없음",
    techStack: "Java, MySQL",
    tips: ["성능 최적화 경험", "데이터베이스 설계"],
    interviewQuestion: "MySQL에서의 쿼리 최적화 방법에 대해 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~55개",
    successRate: "18~25%",
    employmentDate: "24년 1분기",
    preparationPeriod: "6개월",
    bootcamp: "아니다",
    companyType: "제조업",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "150~300명",
    certifications: "Google Professional Data Engineer",
    techStack: "Python, BigQuery",
    tips: ["데이터 처리 경험", "클라우드 데이터베이스 이해"],
    interviewQuestion:
      "BigQuery에서의 데이터 처리 성능 최적화 방법에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~45개",
    successRate: "20~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "핀테크",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "100~200명",
    certifications: "없음",
    techStack: "Ruby on Rails, PostgreSQL",
    tips: ["API 설계 경험", "ORM 활용"],
    interviewQuestion:
      "Rails에서의 Active Record 사용 방법에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~65개",
    successRate: "17~25%",
    employmentDate: "24년 2분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "교육",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "50~100명",
    certifications: "없음",
    techStack: "Angular, Tailwind CSS",
    tips: ["모바일 최적화", "UI/UX 디자인 경험"],
    interviewQuestion:
      "Angular에서의 양방향 데이터 바인딩에 대해 설명해주세요.",
  },
  {
    title: "데브옵스 엔지니어 취업 사례",
    salary: "5천 초반",
    experience: "신입",
    resumeSubmission: "~30개",
    successRate: "10~15%",
    employmentDate: "24년 3분기",
    preparationPeriod: "6개월",
    bootcamp: "국비",
    companyType: "클라우드 서비스",
    companyLocation: "서울",
    companySalary: "5천 초반",
    companySize: "100~200명",
    certifications: "AWS Certified DevOps Engineer",
    techStack: "AWS, Terraform",
    tips: ["클라우드 보안 지식", "자동화 스크립트 작성"],
    interviewQuestion: "AWS에서의 IAM 역할과 정책에 대해 설명해주세요.",
  },
  {
    title: "서버 개발자 취업 사례",
    salary: "4천 중반",
    experience: "2년",
    resumeSubmission: "~30개",
    successRate: "25~35%",
    employmentDate: "24년 2분기",
    preparationPeriod: "3개월",
    bootcamp: "아니다",
    companyType: "전자상거래",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~400명",
    certifications: "없음",
    techStack: "Java, Spring Boot",
    tips: ["API 설계 경험", "성능 최적화"],
    interviewQuestion:
      "Spring Boot에서의 비즈니스 로직을 어떻게 구현하는지 설명해주세요.",
  },
  {
    title: "데이터 엔지니어 취업 사례",
    salary: "4천 후반",
    experience: "신입",
    resumeSubmission: "~55개",
    successRate: "18~25%",
    employmentDate: "24년 2분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "IT 서비스",
    companyLocation: "서울",
    companySalary: "4천 후반",
    companySize: "100~200명",
    certifications: "AWS Certified Data Analytics",
    techStack: "Python, Redshift",
    tips: ["ETL 파이프라인 구축 경험", "쿼리 최적화"],
    interviewQuestion:
      "AWS Redshift의 쿼리 성능을 최적화하는 방법에 대해 설명해주세요.",
  },
  {
    title: "백엔드 개발자 취업 사례",
    salary: "4천 중반",
    experience: "신입",
    resumeSubmission: "~45개",
    successRate: "22~30%",
    employmentDate: "24년 1분기",
    preparationPeriod: "5개월",
    bootcamp: "아니다",
    companyType: "소셜 미디어",
    companyLocation: "서울",
    companySalary: "4천 중반",
    companySize: "200~400명",
    certifications: "없음",
    techStack: "Node.js, PostgreSQL",
    tips: ["API 성능 최적화", "데이터베이스 설계"],
    interviewQuestion:
      "Node.js에서의 비동기 처리와 이벤트 루프에 대해 설명해주세요.",
  },
  {
    title: "프론트엔드 개발자 취업 사례",
    salary: "3천 후반",
    experience: "신입",
    resumeSubmission: "~60개",
    successRate: "18~25%",
    employmentDate: "24년 2분기",
    preparationPeriod: "4개월",
    bootcamp: "아니다",
    companyType: "헬스케어",
    companyLocation: "서울",
    companySalary: "3천 후반",
    companySize: "50~100명",
    certifications: "없음",
    techStack: "Svelte, Tailwind CSS",
    tips: ["반응형 디자인", "상태 관리"],
    interviewQuestion: "Svelte에서의 스토어와 상태 관리에 대해 설명해주세요.",
  },
];

function CareerCasePage() {
  return (
    <PageContainer>
      <ComponentWrapper>
        <Grid container spacing={2} mt={5}>
          {careerCases.map((caseData, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CareerCaseCard data={caseData} />
            </Grid>
          ))}
        </Grid>
      </ComponentWrapper>
    </PageContainer>
  );
}
export default CareerCasePage;
