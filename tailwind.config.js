/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
        'xs': '490px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      backgroundImage:{
        transparent_bg: "url('../dist/img/transparent.png')",
        home_banner_bg: "url('../dist/img/home/banner-bg.png')",
        footer_bg: "url('../dist/img/footer-bg.png')",
        prop_details_bg: "url('../dist/img/inner-banner-bg.png')",
        img_overlay: "url('../dist/img/home/house-2.png')",
      },
      colors:{
        dark: "#0D0D0D",
        dark_2: "#1B1C1E",
        light: "#FAFAFA",
        light_2: "#D6D8DB",
        d_gray: "#2C2D2F",
        gray: "#797D86",
        primary: "#A57A5A",
        l_blue: "#F0F2F4",
      },
      fontFamily: {
        'text-poppins': ["Poppins", "sans-serif"],
        'text-inter': ["Inter", "sans-serif"],
      },
      fontSize: {
        'text_xs' : 'clamp(11px, 3vw, 14px)',
        'text_sm' : 'clamp(13px, 2.5vw, 14px)',
        'text_md' : 'clamp(13.5px, 1.75vw, 16px)',
        'text_lg' : 'clamp(14px, 1.5vw, 18px)',

        'fs-33': 'clamp(28px, 1.66vw, 42px)',
        'fs-19_md' : 'clamp(16px, 1vw, 26px)',
        'fs-19_sm': 'clamp(16px, 1.563vw, 18px)',
        'fs-19': 'clamp(14px, 1.778vw, 16px)',
        'fs-16_xl': 'clamp(14px, 0.833vw, 22px)',
        'fs-16_lg': 'clamp(14px, 1.563vw, 18px)',
        'fs-16_md': 'clamp(13.5px, 1.778vw, 16px)',
        'fs-16': 'clamp(11px, 3.59vw, 14px)',

        'banner_h1' : 'clamp(64px, 5.156vw, 150px)',

        'prop_banner_h1': 'clamp(64px, 3.5vw, 100px)',
        'prop_title': 'clamp(24px, 4vw, 40px)',
        'play_btn': 'clamp(24px, 1.66vw, 42px)',

        'button' : 'clamp(16px, 1vw, 24px)'
      },
      listStyleType: {
      //   none: 'none',
      // circle: 'circle',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      },
      backgroundSize: {
        // '400%': '400% 400%'
      },
      animation: {
        // 'bannerSlide': 'bannerSlide 15s ease forwards',
      },
      keyframes: {
        // 'bannerSlide': {
        //   '0%' : {'background-position': '25% 0%'},
        //   '100%' : {'background-position': '40% 80%'}
        // },
      },
      boxShadow:{
        'top_button_shadow'     : '4px 4px 10px rgba(0, 0, 0, 0.2)',

      },
    },
  },
  plugins: [],
}
