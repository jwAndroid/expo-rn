export interface TodoType {
  postId: string;
  text: string;
  status: number;
  createdAt: number;
  updatedAt: number;
  isPin: boolean;
  cursor: number;
}
