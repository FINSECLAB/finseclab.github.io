# 🚀 Project Guide

본 프로젝트의 로컬 개발 및 배포를 위한 가이드라인입니다.

---

## 💻 실행 및 배포 명령어

### 0. 기본 세팅
```bash
npm install
```

### 1. 로컬 미리보기 (Local Preview)
작업 중인 내용을 로컬 환경에서 확인하려면 아래 명령어를 입력합니다.
```bash
npm start
```
### 2. 소스 코드 업로드 (Main Branch)

```bash
git add .
git commit -m "Update: 변경 내용 입력"
git push origin main
```
### 3. GitHub Pages 배포
```bash
npm run deploy
```