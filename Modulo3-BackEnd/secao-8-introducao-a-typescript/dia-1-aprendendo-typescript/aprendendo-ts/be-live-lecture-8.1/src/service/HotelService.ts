import HotelDB from '../database/HotelDB';
import Room from '../types/Room';

const getAllAvailableRooms = (): Room[] => {
  const rooms = HotelDB.getRooms();
  const availableRooms = rooms.filter((room) => room.isAvailable);
  return availableRooms;
};

const getAllRooms = (): Room[] => {
  const rooms = HotelDB.getRooms();
  return rooms;
};

const countTotalAvailableRooms = (): number => {
  const availableRooms = getAllAvailableRooms();
  return availableRooms.length;
};

const countTotalRooms = (): number => {
  const rooms = getAllRooms();
  return rooms.length;
};

const chooseAnAvailableRoom = (): Room => {
  const availableRooms = getAllAvailableRooms();
  const roomIndex = Math.floor(Math.random() * availableRooms.length); 
  const selectedRoom = availableRooms[roomIndex];
  if (!selectedRoom) {
    throw new Error('No available rooms');
  }
  return selectedRoom;
};

export default {
  getAllAvailableRooms,
  getAllRooms,
  countTotalAvailableRooms,
  countTotalRooms,
  chooseAnAvailableRoom,
};