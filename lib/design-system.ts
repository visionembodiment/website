export const designSystem = {
  colors: {
    background: {
      primary: 'bg-vision-licorice',        // Main background - eggplant black (#1a0e18)
      secondary: 'bg-vision-dark-purple',   // Section contrast - deep aubergine (#3d1f35)
      alternative: 'bg-vision-dark-purple', // Alternative background (#3d1f35)
      accent: 'bg-vision-dark-purple',      // Dark accent for buttons, overlays (#3d1f35)
      footer: 'bg-vision-licorice',         // Footer same as primary (#1a0e18)
    },
    text: {
      primary: 'text-vision-isabelline',       // Lightest text for dark backgrounds (#f4f0ed)
      secondary: 'text-vision-dun',            // Dun for subtitles on dark backgrounds (#DDCDBB)
      accent: 'text-vision-lion',              // Champagne gold for highlights (#bfa181)
      inverse: {
        primary: 'text-vision-licorice',       // Primary dark text on light backgrounds (#1a0e18)
        secondary: 'text-vision-chinese-violet', // Secondary dark text on light backgrounds (#8d6b8f)
      },
      success: 'text-emerald-500',             // Success state text
      warning: 'text-amber-400',               // Warning state text
      placeholder: {
        primary: 'placeholder-vision-dun',     // Placeholder for dark backgrounds (#DDCDBB)
        inverse: 'placeholder-vision-chinese-violet', // Placeholder for light backgrounds (#8d6b8f)
      },
    },
    border: {
      primary: 'border-vision-lion',           // Champagne gold border (#bfa181)
      divider: 'border-t border-vision-lion',  // Gold divider line
    },
    gradient: {
      primary: 'bg-gradient-to-b from-vision-dark-purple to-vision-licorice', // Hero/feature sections gradient
    },
    hover: {
      gold: 'hover:bg-vision-dun',             // Dun hover state (#DDCDBB)
      accent: 'hover:bg-vision-lion',          // Lion gold hover
    },
    focus: 'focus:ring-2 focus:ring-vision-lion', // Focus rings for accessibility
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
    base: "relative bg-vision-isabelline rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-vision-lion/20 overflow-hidden",
    hover: "hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-vision-lion hover:-translate-y-1 transition-all duration-300",
    padding: "p-6",
    bordered: "border border-vision-lion",
    dark: "bg-vision-dark-purple border-vision-lion/30",
  },

  buttons: {
    primary: "inline-block bg-vision-dark-purple text-vision-isabelline px-8 py-4 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors font-medium",
    primarySmall: "inline-block bg-vision-dark-purple text-vision-isabelline px-6 py-3 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors font-medium",
    secondary: "inline-block border-2 border-vision-lion text-vision-isabelline px-8 py-4 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors font-medium",
    secondarySmall: "inline-block border-2 border-vision-lion text-vision-isabelline px-6 py-3 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors font-medium",
    primaryInverse: "inline-block bg-vision-dark-purple text-vision-isabelline px-8 py-4 rounded-button hover:bg-vision-licorice transition-colors font-medium",
    secondaryInverse: "inline-block border-2 border-vision-dark-purple text-vision-dark-purple px-8 py-4 rounded-button hover:bg-vision-dark-purple hover:text-vision-isabelline transition-colors font-medium",
    cta: "inline-block bg-vision-dark-purple text-vision-isabelline px-8 py-3 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors font-medium",
    block: "block w-full text-center",
  },

  links: {
    base: "text-vision-lion hover:text-vision-dun hover:underline transition-colors",
    subtle: "text-vision-dun hover:text-vision-lion transition-colors",
  },

  inputs: {
    base: "bg-vision-isabelline text-vision-licorice border border-vision-lion/30 focus:border-vision-lion focus:outline-none rounded-button",
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
      xl: "font-playfair text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter-custom",
      lg: "font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter-custom",
      md: "font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter-custom",
      sm: "font-playfair text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter-custom",
    },

    h1: "font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter-custom",
    h2: "font-playfair text-2xl md:text-4xl font-semibold tracking-tighter-custom",
    h3: "font-playfair text-xl md:text-2xl font-semibold tracking-tighter-custom",
    h4: "font-playfair text-lg md:text-xl font-semibold tracking-tighter-custom",
    h5: "font-playfair text-base md:text-lg font-semibold tracking-tighter-custom",
    h6: "font-playfair text-sm md:text-base font-semibold tracking-tighter-custom",

    body: {
      xl: "font-inter text-lg md:text-xl leading-body",
      lg: "font-inter text-base md:text-lg leading-body",
      md: "font-inter text-base leading-body",
      sm: "font-inter text-sm md:text-base leading-body",
      xs: "font-inter text-xs md:text-sm leading-body",
    },

    accent: "font-montserrat uppercase tracking-wider text-sm",
    heroTitle: "font-playfair text-3xl md:text-7xl font-semibold tracking-tighter-custom drop-shadow-lg",
    caption: "font-inter text-sm",
  } as const,
  
  badges: {
    featured: "absolute top-0 right-0 bg-vision-lion text-vision-licorice px-3 py-1 text-sm font-medium rounded-bl-lg",
    promotion: "bg-vision-lion text-vision-licorice py-3 px-4",
  },

  avatars: {
    background: "bg-vision-lion",
    text: "text-vision-licorice",
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