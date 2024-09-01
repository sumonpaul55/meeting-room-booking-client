export interface RoomData {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  roomImg: string[];
  _id: string;
  isDeleted: boolean;
}
