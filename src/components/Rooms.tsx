import { Bed, Users, Wifi, Coffee, Phone } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      title: 'Deluxe Room',
      image: '/images/delu.jpeg',
      description: 'Spacious room with stunning Malnad hill views and modern amenities',
      features: ['King Size Bed', 'Up to 2 Guests', 'Free WiFi', 'Complimentary Breakfast'],
      price: 'Contact for pricing',
    },
    {
      title: 'Family Suite',
      image: '/images/bed.jpeg',
      description: 'Perfect for families with extra space and comfortable furnishings',
      features: ['2 Queen Beds', 'Up to 4-6 Guests', 'Free WiFi', 'Complimentary Breakfast'],
      price: 'Contact for pricing',
    },
    {
      title: 'Dormitory',
      image: '/images/dorm.jpeg',
      description: 'Luxurious villa with private balcony overlooking the hills',
      features: ['Deluxe Size Beds', 'Up to 20 Guests', 'Free WiFi', 'Complimentary Breakfast'],
      price: 'Contact for pricing',
    },
  ];

  const iconMap: { [key: string]: JSX.Element } = {
    'King Size Bed': <Bed size={20} />,
    '2 Queen Beds': <Bed size={20} />,
    'Up to 2 Guests': <Users size={20} />,
    'Up to 3 Guests': <Users size={20} />,
    'Up to 4 Guests': <Users size={20} />,
    'Free WiFi': <Wifi size={20} />,
    'Complimentary Breakfast': <Coffee size={20} />,
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Rooms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comfortable accommodations designed for your perfect getaway in the Malnad hills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="space-y-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      {iconMap[feature]}
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-semibold text-gray-900">
                    {room.price}
                  </span>
                  <a
                    href="tel:9187088861"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Phone size={16} />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
