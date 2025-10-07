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
        <h3 className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.xs)}>{title}</h3>

        <p className={cn(designSystem.text.body.sm, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.sm, "min-h-[60px]")}>{description}</p>

        <div className={cn(designSystem.colors.border.divider, designSystem.spacing.margin.top.sm, designSystem.spacing.margin.bottom.sm, "pt-4")}>
          <div className={cn("flex justify-between items-center", designSystem.spacing.margin.bottom.xs)}>
            <span className={cn(designSystem.text.body.sm, designSystem.colors.text.inverse.secondary)}>Price:</span>
            <span className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary)}>{price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={cn(designSystem.text.body.sm, designSystem.colors.text.inverse.secondary)}>Duration:</span>
            <span className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>{duration}</span>
          </div>
        </div>

        <Link
          href={href}
          className={cn(designSystem.buttons.primarySmall, designSystem.buttons.block)}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}