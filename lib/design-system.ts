// Look into global.css for colors, fonts etc...
export const designSystem = {
  colors: {
    background: {
      primary: 'bg-vision-dark-purple-2',        // Main background 
      secondary: 'bg-vision-dark-purple',        // Section contrast
      inverse: 'bg-vision-isabelline',           // Light background
    },
    text: {
      primary: 'text-vision-isabelline',       // Lightest text for dark backgrounds (#f4f0ed)
      secondary: 'text-vision-dun',            // Dun for subtitles on dark backgrounds (#DDCDBB)
      accent: 'text-vision-lion',              // Champagne gold for highlights (#bfa181)
      inverse: {
        primary: 'text-vision-dark-purple-2',       // Primary dark text on light backgrounds (#1a0e18)
        secondary: 'text-vision-chinese-violet', // Secondary dark text on light backgrounds (#8d6b8f)
      },
      placeholder: 'placeholder-vision-chinese-violet', // Placeholder text (#674F69)
    },
    border: {
      primary: 'border-vision-lion',           // Champagne gold border for dark backgrounds (#bfa181)
      inverse: 'border-vision-dark-purple',    // Dark purple border for light backgrounds (#3d1f35)
    },
    gradient: {
      primary: 'bg-gradient-primary', // Uses --background-image-gradient-primary from globals.css
    },
    hover: {
      background: {
        gold: 'hover:bg-vision-dun',           // Dun hover state (#DDCDBB)
        accent: 'hover:bg-vision-lion',        // Lion gold hover
      },
      text: {
        accent: 'hover:text-vision-lion',      // Lion gold text hover
        dun: 'hover:text-vision-lion',          // Dun text hover
      },
    },
    focus: 'focus:ring-2 focus:ring-vision-lion', // Focus rings for accessibility
  },

  dividers: {
    get horizontal() { return `border-t ${designSystem.colors.border.primary}` },
    get horizontalInverse() { return `border-t ${designSystem.colors.border.primary}` },
    get vertical() { return `border-l ${designSystem.colors.border.primary}` },
    get verticalInverse() { return `border-l ${designSystem.colors.border.primary}` },
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
    get base() { return `relative ${designSystem.colors.background.inverse} ${designSystem.rounded['2xl']} ${designSystem.shadows.card} border ${designSystem.colors.border.primary}/20 overflow-hidden` },
    get hover() { return `${designSystem.shadows.cardHover} ${designSystem.colors.border.primary} hover:-translate-y-1 transition-all duration-300` },
    get padding() { return designSystem.spacing.padding.md },
    get bordered() { return `border ${designSystem.colors.border.primary}` },
    get dark() { return `${designSystem.colors.background.secondary} ${designSystem.colors.border.primary}/30` },
  },

  // primary, secondary, primary inverse , secondary inverse ,
  buttons: {
    get primary() {
      return `inline-block ${designSystem.colors.background.secondary} ${designSystem.colors.text.primary} px-8 py-4 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors ${designSystem.fontWeight.medium}`
    },
    get secondary() {
      return `inline-block border-2 ${designSystem.colors.border.primary} ${designSystem.colors.text.primary} px-8 py-4 rounded-button hover:bg-vision-lion hover:text-vision-licorice transition-colors ${designSystem.fontWeight.medium}`
    },
    get primaryInverse() {
      return `inline-block ${designSystem.colors.background.secondary} ${designSystem.colors.text.primary} px-8 py-4 rounded-button hover:bg-vision-licorice transition-colors ${designSystem.fontWeight.medium}`
    },
    get secondaryInverse() {
      return `inline-block border-2 ${designSystem.colors.border.inverse} ${designSystem.colors.text.inverse.secondary} px-8 py-4 rounded-button hover:bg-vision-dark-purple hover:text-vision-isabelline transition-colors ${designSystem.fontWeight.medium}`
    },
    sizes: {
      small: "!px-6 !py-3",
    },
    layout: {
      block: "!block w-full text-center",
    },
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
    subtle: "shadow-subtle",
    card: "shadow-card",
    cardHover: "shadow-card-hover",
    elevated: "shadow-elevated",
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