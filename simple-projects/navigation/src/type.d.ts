export type TestType = {
  id: number;
  text: string;
};

export type newTestType = TestType & { name: string };

export const obj = { id: 2, text: '새로운 객체', name: '지웅' };
