export interface RoomData {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  roomImg: string[];
  isDeleted: boolean;
}
