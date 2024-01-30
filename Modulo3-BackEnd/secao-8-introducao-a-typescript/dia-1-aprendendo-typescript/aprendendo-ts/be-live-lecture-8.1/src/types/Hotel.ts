import Reservation from './Reservation';
import Room from './Room';

type Hotel = {
  name: string;
  rooms: Room[];
  reservations: Reservation[];
};

export default Hotel;