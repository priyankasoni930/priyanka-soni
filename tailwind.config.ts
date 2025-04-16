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
				// Custom retro-watercolor palette
				retro: {
					purple: '#9b87f5',
					lavender: '#D6BCFA',
					pink: '#FFDEE2',
					peach: '#FDE1D3',
					blue: '#D3E4FD',
					green: '#F2FCE2',
					yellow: '#FEF7CD',
					orange: '#FEC6A1',
				}
			},
			fontFamily: {
				'pixel': ['"Press Start 2P"', 'cursive'],
				'handwritten': ['"Caveat"', 'cursive'],
				'mono': ['"VT323"', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'paint': {
					'0%': {
						backgroundPosition: '0% 0%'
					},
					'100%': {
						backgroundPosition: '100% 0%'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) translateX(7px) rotate(2deg)'
					},
					'50%': {
						transform: 'translateY(5px) translateX(-7px) rotate(-2deg)'
					},
					'75%': {
						transform: 'translateY(10px) translateX(7px) rotate(2deg)'
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: 1
					},
					'50%': {
						opacity: 0.7
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'paint': 'paint 2s ease-out',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'float-slow': 'float-slow 15s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite'
			},
			backgroundImage: {
				'watercolor-purple': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
				'watercolor-yellow': 'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
				'watercolor-green': 'linear-gradient(90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)',
				'watercolor-blue': 'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',
				'paper-texture': 'url("/paper-texture.png")',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
