export const designSystem = {
  cards: {
    base: "relative bg-white rounded-2xl shadow-xl overflow-hidden",
    hover: "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
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
  
  sections: {
    mobilePadding: "py-6",
    desktopPadding: "md:py-16",
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
  },
  
  text: {
    heading1: "text-5xl md:text-6xl font-bold text-purple-900",
    heading2: "text-4xl font-bold text-purple-900",
    heading3: "text-2xl font-bold text-purple-900",
    heading4: "text-xl font-bold text-purple-900",
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