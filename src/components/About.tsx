import { MapPin, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Hillock Vista
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nestled in the Sakleshpur lush Malnad region, Hillock Vista Homestay offers a perfect escape from the hustle and bustle of city life. Our property combines modern comfort with the natural beauty of the Western Ghats, providing an unforgettable experience for every guest.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Wake up to the sound of chirping birds, enjoy breathtaking views of misty hills, and immerse yourself in the serenity of nature. Whether you're seeking a peaceful retreat, a family vacation, or a romantic getaway, Hillock Vista is your home away from home.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-3">
                  <MapPin size={32} />
                </div>
                <h3 className="font-bold text-gray-900">Prime Location</h3>
                <p className="text-sm text-gray-600"> Saklespura, Karnataka - Malnad Region</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-3">
                  <Award size={32} />
                </div>
                <h3 className="font-bold text-gray-900">Premium Quality</h3>
                <p className="text-sm text-gray-600">5-Star Comfort</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-3">
                  <Heart size={32} />
                </div>
                <h3 className="font-bold text-gray-900">Warm Hospitality</h3>
                <p className="text-sm text-gray-600">Personalized Service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/down.jpeg"
                alt="Hillock Vista Property"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-3xl font-bold text-blue-600 mb-1">200+</p>
              <p className="text-gray-700">Happy Guests Every Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
