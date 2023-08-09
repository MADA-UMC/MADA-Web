import { SET_IMAGE_NAME } from './imageActionTypes';

export const setImageName = (imageName) => ({
  type: SET_IMAGE_NAME,
  payload: imageName,
});

// 다른 액션 생성자 함수들도 정의 가능