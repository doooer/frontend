# @pkgs/eslint-config

3DO 내에서 사용하는 eslint-config를 정의합니다.

## 설치방법

사용할 프로젝트에 아래 명령어를 실행합니다.
```
$ yarn workspace {workname} add --dev @zdk/eslint-config
```

## 설정방법

프로젝트 루트에 .eslintrc.js를 생성한 후 아래와 같이 입력합니다.

```
module.exports = {
  // node apps
  extends: ['@pkgs/eslint-config/base'],
  // frontend
  extends: ['@pkgs/eslint-config'],
};
```
