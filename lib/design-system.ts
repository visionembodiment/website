export const designSystem = {
  colors: {
    background: {
      primary: 'rose-900',
      secondary: 'rose-900',
      tertiary: 'rose-900',
      accent: 'rose-900',
      muted: 'bg-gray-50',
      dark: 'bg-purple-900',
      darkAlt: 'bg-purple-800',
    },
    text: {
      primary: 'rose-900',
      secondary: 'rose-900',
      muted: 'text-gray-600',
      mutedAlt: 'text-gray-500',
      inverse: 'text-white',
      brand: 'text-purple-900',
      brandLight: 'text-purple-600',
      brandLighter: 'text-purple-200',
      brandLightest: 'text-purple-100',
      accent: 'text-yellow-600',
      success: 'text-green-500',
      warning: 'text-yellow-400',
    },
    border: {
      primary: 'rose-900',
      secondary: 'border-purple-900',
      accent: 'border-purple-800',
      divider: 'border-t',
    },
    gradient: {
      hero: 'bg-gradient-to-b from-purple-50 to-white',
      promotion: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      newsletter: 'bg-gradient-to-b from-purple-900 to-purple-800',
    },
    hover: {
      primaryBg: 'hover:bg-purple-800',
      secondaryBg: 'hover:bg-purple-50',
      accentBg: 'hover:bg-yellow-50',
      mutedBg: 'hover:bg-gray-50',
      lightBg: 'hover:bg-gray-100',
      primaryText: 'hover:text-purple-900',
      inverseText: 'hover:text-white',
      accentButton: 'hover:bg-yellow-700',
    },
    focus: {
      ring: 'focus:ring-2 focus:ring-yellow-500',
    },
  },
  
  fontSize: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
  },
  
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  
  cards: {
    base: "relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden",
    hover: "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300",
    padding: "p-6",
    bordered: "border border-gray-200",
  },
  
  buttons: {
    primary: "bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium",
    primarySmall: "bg-purple-900 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium",
    secondary: "border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium",
    secondarySmall: "border-2 border-purple-900 text-purple-900 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium",
    cta: "bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium",
    block: "block w-full text-center",
  },
  
  spacing: {
    section: {
      mobile: "py-8",
      desktop: "md:py-12",
      full: "py-8 md:py-12",
    },
    gap: {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
    margin: {
      xs: "mb-2",
      sm: "mb-4",
      md: "mb-6",
      lg: "mb-8",
      xl: "mb-12",
    },
  },
  
  sections: {
    mobilePadding: "py-8",
    desktopPadding: "md:py-12",
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
  },
  
  text: {
    heading1: "text-5xl md:text-6xl font-bold text-purple-900",
    heading2: "text-4xl font-bold text-purple-900",
    heading3: "text-2xl font-bold text-purple-900",
    heading4: "text-xl font-bold text-purple-900",
    heroTitle: "text-3xl md:text-7xl font-bold text-white drop-shadow-lg",
    body: "text-lg text-gray-700",
    bodySmall: "text-gray-600",
    caption: "text-sm text-gray-600",
  },
  
  badges: {
    featured: "absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg",
    promotion: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4",
  },
  
  shadows: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  },
  
  rounded: {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  },
};

export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}