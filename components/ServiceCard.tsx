import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  href: string;
  icon?: string;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  href,
}: ServiceCardProps) {
  return (
    <div
      className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      
      <div className="p-6">        
        <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 min-h-[60px]">{description}</p>
        
        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Price:</span>
            <span className="text-2xl font-bold text-purple-900">{price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Duration:</span>
            <span className="text-gray-700">{duration}</span>
          </div>
        </div>
        
        <Link
          href={href}
          className="block w-full text-center bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}