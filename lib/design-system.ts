export const designSystem = {
  colors: {
    background: {
      primary: 'bg-rose-900',
      secondary: 'bg-rose-900',
      tertiary: 'bg-rose-900',
      accent: 'bg-rose-900',
      muted: 'bg-gray-50',
      dark: 'bg-red',
      darkAlt: 'bg-yellow-800',
    },
    text: {
      primary: 'text-rose-900',
      secondary: 'text-rose-900',
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
      primary: 'border-rose-900',
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
    padding: {
      xs: "p-1",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-12",
      horizontal: {
        xs: "px-1",
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
        xl: "px-12",
      },
      vertical: {
        xs: "py-1",
        sm: "py-3",
        md: "py-6",
        lg: "py-8",
        xl: "py-12",
      },
    },
    margin: {
      bottom: {
        xs: "mb-2",
        sm: "mb-4",
        md: "mb-6",
        lg: "mb-8",
        xl: "mb-12",
      },
      top: {
        xs: "mt-2",
        sm: "mt-4",
        md: "mt-6",
        lg: "mt-8",
        xl: "mt-12",
      },
      left: {
        xs: "ml-2",
        sm: "ml-4",
        md: "ml-6",
        lg: "ml-8",
        xl: "ml-12",
      },
      right: {
        xs: "mr-2",
        sm: "mr-4",
        md: "mr-6",
        lg: "mr-8",
        xl: "mr-12",
      },
      horizontal: {
        xs: "mx-2",
        sm: "mx-4",
        md: "mx-6",
        lg: "mx-8",
        xl: "mx-12",
        auto: "mx-auto",
      },
      vertical: {
        xs: "my-2",
        sm: "my-4",
        md: "my-6",
        lg: "my-8",
        xl: "my-12",
      },
    },
  },

  layout: {
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      full: "max-w-full",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
  },
  
  sections: {
    mobilePadding: "py-8",
    desktopPadding: "md:py-12",
  },
  
  text: {
    display: {
      xl: "text-5xl md:text-7xl lg:text-8xl font-bold",
      lg: "text-4xl md:text-6xl lg:text-7xl font-bold",
      md: "text-3xl md:text-5xl lg:text-6xl font-bold",
      sm: "text-2xl md:text-4xl lg:text-5xl font-bold",
    },

    h1: "text-3xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-2xl md:text-4xl font-bold",
    h3: "text-xl md:text-2xl font-bold",
    h4: "text-lg md:text-xl font-bold",
    h5: "text-base md:text-lg font-bold",
    h6: "text-sm md:text-base font-bold",

    body: {
      xl: "text-lg md:text-xl",
      lg: "text-base md:text-lg",
      md: "text-base",
      sm: "text-sm md:text-base",
      xs: "text-xs md:text-sm",
    },

    heroTitle: "text-3xl md:text-7xl font-bold drop-shadow-lg",
    caption: "text-sm",
  } as const,
  
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