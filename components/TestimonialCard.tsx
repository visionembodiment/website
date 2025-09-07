import { designSystem, cn } from '@/lib/design-system';

interface TestimonialCardProps {
  name: string;
  service: string;
  content: string;
  rating?: number;
  image?: string;
}

export default function TestimonialCard({
  name,
  service,
  content,
  rating = 5,
  image,
}: TestimonialCardProps) {
  return (
    <div className={cn(designSystem.cards.base, designSystem.cards.hover)}>
      <div className={designSystem.cards.padding}>
        <div className="flex items-start mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mr-4", designSystem.colors.background.tertiary)}>
            <span className={cn(designSystem.colors.text.brandLight, designSystem.fontWeight.bold, designSystem.fontSize.lg)}>
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <h4 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.primary)}>{name}</h4>
          <p className={cn(designSystem.fontSize.sm, designSystem.colors.text.brandLight)}>{service}</p>
        </div>
        
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? designSystem.colors.text.warning : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        </div>
        
        <p className={cn(designSystem.text.bodySmall, "italic")}>&ldquo;{content}&rdquo;</p>
      </div>
    </div>
  );
}