import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'bg-none',
  				foreground: 'bg-none'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			unbounded: [
  				'var(--font-unbounded)'
  			],
  			poppins: [
  				'var(--font-poppins)'
  			]
  		},
  		screens: {
  			'max-1900': {
  				max: '1900px'
  			},
  			'max-1800': {
  				max: '1800px'
  			},
  			'max-1700': {
  				max: '1700px'
  			},
  			'max-1600': {
  				max: '1600px'
  			},
  			'max-1500': {
  				max: '1500px'
  			},
  			'max-1400': {
  				max: '1400px'
  			},
  			'max-1300': {
  				max: '1300px'
  			},
  			'max-1200': {
  				max: '1200px'
  			},
  			'max-1100': {
  				max: '1100px'
  			},
  			'max-1000': {
  				max: '1000px'
  			},
  			'max-900': {
  				max: '900px'
  			},
  			'max-800': {
  				max: '800px'
  			},
  			'max-700': {
  				max: '700px'
  			},
  			'max-600': {
  				max: '600px'
  			},
  			'max-500': {
  				max: '500px'
  			},
  			'max-400': {
  				max: '400px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
