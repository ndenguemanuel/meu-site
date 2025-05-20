// Definição da paleta de cores para o site
export const colors = {
  // Cores principais
  primary: {
    main: '#2563EB', // Azul principal
    light: '#3B82F6',
    dark: '#1D4ED8',
    contrast: '#FFFFFF'
  },
  // Cores secundárias
  secondary: {
    main: '#10B981', // Verde sustentabilidade
    light: '#34D399',
    dark: '#059669',
    contrast: '#FFFFFF'
  },
  // Cores neutras
  neutral: {
    white: '#FFFFFF',
    lightest: '#F9FAFB',
    light: '#F3F4F6',
    medium: '#E5E7EB',
    gray: '#9CA3AF',
    darkGray: '#4B5563',
    dark: '#1F2937',
    darkest: '#111827',
    black: '#000000'
  },
  // Cores de destaque
  accent: {
    orange: '#F97316', // Para chamadas à ação
    purple: '#8B5CF6', // Para inovação
    teal: '#14B8A6', // Para metodologias
    amber: '#F59E0B'  // Para educação transformadora
  },
  // Cores de feedback
  feedback: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  }
};

// Exporta também um tema para facilitar o uso
export const theme = {
  colors,
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
    mono: "'Roboto Mono', monospace"
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
};
