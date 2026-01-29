import { Waves, Mountain, Utensils, Car, Wifi, Coffee, TreePine, Camera } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Waves size={40} />,
      title: 'Swimming Pool',
      description: 'Enjoy our beautiful infinity pool with stunning valley views',
    },
    {
      icon: <Mountain size={40} />,
      title: 'Hill Views',
      description: 'Breathtaking panoramic views of the Malnad hills',
    },
    {
      icon: <Utensils size={40} />,
      title: 'In-House Dining',
      description: 'Delicious local cuisine and continental dishes',
    },
    {
      icon: <Car size={40} />,
      title: 'Free Parking',
      description: 'Ample parking space for all our guests',
    },
    {
      icon: <Wifi size={40} />,
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary internet',
    },
    {
      icon: <Coffee size={40} />,
      title: 'Complimentary Breakfast',
      description: 'Start your day with a hearty breakfast',
    },
    {
      icon: <TreePine size={40} />,
      title: 'Nature Trails',
      description: 'Explore scenic walking paths around the property',
    },
    {
      icon: <Camera size={40} />,
      title: 'Photo Spots',
      description: 'Perfect locations for memorable photographs',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/whatsapp_image_2026-01-25_at_4.31.52_pm.jpeg"
            alt="Pool View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Experience Luxury</h3>
              <p className="text-lg">
                Relax and unwind in our world-class facilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
