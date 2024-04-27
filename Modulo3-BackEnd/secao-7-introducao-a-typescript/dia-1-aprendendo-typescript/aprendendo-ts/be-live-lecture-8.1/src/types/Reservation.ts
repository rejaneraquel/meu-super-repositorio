import Room from './Room';

type Reservation = {
  guestName: string;
  room?: Room;
  checkIn: Date;
  checkOut?: Date;
};

export default Reservation;