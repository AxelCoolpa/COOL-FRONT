import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Room } from '../../types/index'

interface RoomcardProp {
    room: Room
}
const RoomCard: React.FC<RoomcardProp> = ({ room }) => {
    return (
      <div>
        <img src={room.images[0]} alt="Habitación" />
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <p>{room.location}</p>
        <p>Categoría: {room.category}</p>
        <p>Precio: {room.price}</p>
        
      </div>
    );
  };

export default RoomCard