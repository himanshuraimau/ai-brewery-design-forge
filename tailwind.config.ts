
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// AI Brewery color palette
				brewery: {
					background: '#050505',
					secondary: '#0F0915',
					"primary-purple": '#8B5CF6',
					"secondary-pink": '#EC4899',
					"accent-blue": '#3B82F6',
					"text-light": '#D1D5DB',
				}
			},
			fontFamily: {
				'space': ['Space Grotesk', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'satoshi': ['Satoshi', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'count-up': {
					'0%': { content: '0' },
					'100%': { content: 'attr(data-target)' }
				},
				'border-glow': {
					'0%, 100%': { borderColor: 'rgba(139, 92, 246, 0.3)' },
					'50%': { borderColor: 'rgba(139, 92, 246, 0.8)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.7)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'border-glow': 'border-glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'glassmorphic-primary': 'linear-gradient(to bottom right, rgba(109, 40, 217, 0.15), rgba(109, 40, 217, 0.05))',
				'glassmorphic-secondary': 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.03))',
				'cta-gradient': 'linear-gradient(to right, #8B5CF6, #EC4899)',
			},
			backdropFilter: {
				'sm': 'blur(8px)',
				'md': 'blur(12px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
