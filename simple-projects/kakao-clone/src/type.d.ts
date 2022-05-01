// export interface UserEntity {
//   title: string;
//   data: {
//     id: number;
//     name: string;
//     image_url: string;
//   };
// }

export interface UserEntity {
  id: number;
  name: string;
  image_url: string;
}

export interface IUser {
  title: string;
  data: UserEntity[];
}
