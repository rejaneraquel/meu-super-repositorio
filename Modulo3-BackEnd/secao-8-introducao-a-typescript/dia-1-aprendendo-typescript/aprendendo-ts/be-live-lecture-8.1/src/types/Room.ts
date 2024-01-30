type Room = {
  id: number;
  apartment: number;
  type: 'single' | 'double' | 'suite';
  price: number;
  isAvailable: boolean;
};

export default Room;