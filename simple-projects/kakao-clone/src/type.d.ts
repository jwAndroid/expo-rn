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

export interface RoomEntity {
  roomId: number;
  lastMessage: string;
  lastUpdateOn: number;
  chatCount: number;
  isFavorites: boolean;
  isRead: boolean;
  isPin: boolean;
  isAlram: boolean;
  isChatLook: boolean;
  user: UserEntity;
}

export interface IRoom {
  data: RoomEntity[];
  title: string;
}

export interface BannerEntity {
  id: number;
  status: boolean;
  image_url: string;
}
