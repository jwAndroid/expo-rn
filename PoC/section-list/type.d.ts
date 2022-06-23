export interface RoomEntity {
  id: number;
  date: string;
  message: string;
  name: string;
}

export interface SectionEntity {
  title: string;
  data: RoomEntity[];
}
