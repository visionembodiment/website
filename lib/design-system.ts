export const designSystem = {
  colors: {
    background: {
      primary: 'bg-slate-900',        // Main background - eggplant black (#1A0E18)
      secondary: 'bg-pink-950',       // Alternative background - deep aubergine (#3D1F35)
      accent: 'bg-stone-400',         // Light accent for avatars, badges - champagne gold (#BFA181)
    },
    text: {
      primary: 'text-stone-100',      // Main body text - lightest for readability (#F4F0ED)
      secondary: 'text-stone-400',    // Supporting text - champagne gold (#BFA181)
      muted: 'text-zinc-500',         // De-emphasized text - mauve metallic (#8D6B8F)
      inverse: 'text-slate-900',      // Dark text on light backgrounds (#1A0E18)
      accent: 'text-stone-400',       // Brand-colored emphasis - champagne gold (#BFA181)
      success: 'text-emerald-500',    // Success state text
      warning: 'text-amber-400',      // Warning state text
      placeholder: 'placeholder-zinc-500', // Input placeholder - mauve metallic
    },
    border: {
      primary: 'border-stone-400',    // Main border - champagne gold
      secondary: 'border-zinc-500',   // Alternative border - mauve metallic
      accent: 'border-stone-400',     // Accent border for emphasis
      divider: 'border-t border-zinc-500', // Horizontal divider line
    },
    gradient: {
      primary: 'bg-gradient-to-b from-pink-950 to-slate-900', // Hero/feature sections gradient
    },
    hover: 'hover:bg-zinc-500',      // Hover state - mauve metallic (#8D6B8F)
    focus: 'focus:ring-2 focus:ring-zinc-500', // Focus rings for accessibility
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
    base: "relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-stone-400/20 overflow-hidden",  // Subtle champagne gold border
    hover: "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-stone-400 hover:-translate-y-1 transition-all duration-300",  // Gold border on hover
    padding: "p-6",
    bordered: "border border-stone-400",  // Stronger champagne gold border when needed
  },
  
  buttons: {
    primary: "bg-stone-400 text-slate-900 px-8 py-4 rounded-lg hover:bg-zinc-500 hover:text-stone-100 transition-colors font-medium",      // Champagne gold CTA with dark text
    primarySmall: "bg-stone-400 text-slate-900 px-6 py-3 rounded-lg hover:bg-zinc-500 hover:text-stone-100 transition-colors font-medium",
    secondary: "border-2 border-stone-400 text-stone-100 px-8 py-4 rounded-lg hover:bg-stone-400 hover:text-slate-900 transition-colors font-medium",  // Outlined style
    secondarySmall: "border-2 border-stone-400 text-stone-100 px-6 py-3 rounded-lg hover:bg-stone-400 hover:text-slate-900 transition-colors font-medium",
    cta: "bg-stone-400 text-slate-900 px-8 py-3 rounded-lg hover:bg-zinc-500 hover:text-stone-100 transition-colors font-medium",             // Same as primary for consistency
    block: "block w-full text-center",
  },

  inputs: {
    base: "bg-white text-slate-900 border border-stone-400/30 focus:border-stone-400 focus:outline-none",  // White input with champagne gold border
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
      responsive: {
        sm: {
          xs: "sm:gap-2",
          sm: "sm:gap-4",
          md: "sm:gap-6",
          lg: "sm:gap-8",
          xl: "sm:gap-12",
        },
        md: {
          xs: "md:gap-2",
          sm: "md:gap-4",
          md: "md:gap-6",
          lg: "md:gap-8",
          xl: "md:gap-12",
        },
        lg: {
          xs: "lg:gap-2",
          sm: "lg:gap-4",
          md: "lg:gap-6",
          lg: "lg:gap-8",
          xl: "lg:gap-12",
        },
      },
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