import Link from 'next/link';
import { designSystem, cn } from '@/lib/design-system';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  href,
}: ServiceCardProps) {
  return (
    <div className={cn(designSystem.cards.base, designSystem.cards.hover)}>
      
      <div className={designSystem.cards.padding}>        
        <h3 className={cn(designSystem.text.heading4, "mb-2")}>{title}</h3>
        
        <p className={cn(designSystem.text.bodySmall, "mb-4 min-h-[60px]")}>{description}</p>
        
        <div className="border-t pt-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Price:</span>
            <span className={cn(designSystem.text.heading3, "!text-2xl")}>{price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Duration:</span>
            <span className="text-gray-700">{duration}</span>
          </div>
        </div>
        
        <Link
          href={href}
          className={cn(designSystem.buttons.primarySmall, designSystem.buttons.block, "!py-3")}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}