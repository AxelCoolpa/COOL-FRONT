export const ListRooms =[
    {
        id: '1',
        name: 'Hotel en la playa',
        description: 'Un hermoso hotel frente al mar',
        roomsCount: 10,
        bedsCount: 2,
        maxOccupancy: 4,
        bathroomsCount: 1,
        amenities: ['Piscina', 'Wifi', 'Estacionamiento'],
        location: 'Playa del Sol, Costa Rica',
        category: 'Beach',//Sacarlo , informacion redundante que se puede pedir desde el proveedor-registro
        zone: 'Beach',
        images: [
          'https://example.com/images/beach-room-1.jpg',
          'https://example.com/images/beach-room-2.jpg',
          'https://example.com/images/beach-room-3.jpg',
        ],
        startDate: '2023-08-01',
        endDate: '2023-08-10',
        price: 150,
      },
      {
        id: '2',
        name: 'Hotel en la montaña',
        description: 'Un encantador hotel en medio de la montaña',
        roomsCount: 5,
        bedsCount: 1,
        maxOccupancy: 2,
        bathroomsCount: 1,
        amenities: ['Spa', 'Restaurante', 'Senderismo'],
        location: 'Montaña Serena, Suiza',
        category: 'Mountain',
        zone: 'Mountain',
        images: [
          'https://example.com/images/mountain-room-1.jpg',
          'https://example.com/images/mountain-room-2.jpg',
          'https://example.com/images/mountain-room-3.jpg',
        ],
        startDate: '2023-08-01',
        endDate: '2023-08-10',
        price: 200,
      }
]