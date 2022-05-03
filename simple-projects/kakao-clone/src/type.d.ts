export interface UserEntity {
  id: number;
  name: string;
  introduction: string;
  music: string;
  image_url: string;
  section: number;
}

export interface IUser {
  title: string;
  data: UserEntity[];
}
