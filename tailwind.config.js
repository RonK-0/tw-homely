/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // 'md': '768px',
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
        img_overlay: "url('../dist/img/property_details/house-demo.png')",
      },
      colors:{
        dark: "#0D0D0D",
        dark_2: "#1B1C1E",
        light: "#FAFAFA",
        light_2: "#D6D8DB",
        d_gray: "#2C2D2F",
        l_gray: "#F0F2F4",
        gray: "#797D86",
        primary: "#A57A5A",
        homeFeaturedProperties_Nav: '#c9cbcc',
        homeFeaturedProperties_Nav_outline: 'rgba(44, 45, 47, 0.2)',
      },
      gridTemplateColumns: {
        // 'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
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
        'bannerSlider_card_heading' : 'clamp(19px, 1.2vw, 32px)',
        'bannerSlider_card_details' : 'clamp(13px, 0.83vw, 20px)',
        'heading_h2' : 'clamp(36px, 2.5vw, 64px)',

        'property_entry_price' : 'clamp(16px, 1vw, 24px)',

        'blog_category_label' : 'clamp(15px,1vw,22px)',
        'blog_entry_title' : 'clamp(18px, 1.22vw, 32px)',
        'blog_entry_date' : 'clamp(12px, 1.5vw, 16px)',
        'blog_entry_fa' : 'clamp(20px,1.25vw,30px)',

        'prop_banner_h1': 'clamp(44px, 3.5vw, 100px)',
        'prop_title': 'clamp(24px, 4vw, 40px)',
        'play_btn': 'clamp(24px, 1.88vw, 42px)',

        'button' : 'clamp(16px, 1vw, 24px)',
      },
      listStyleType: {
      //   none: 'none',
      //   circle: 'circle',
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
        'navDown': 'navDown 0.25s linear',
        'page_Swapperoo': 'navDown 0.5s ease',
        'onCheck': 'onCheck 0.2s ease',
        'unCheck': 'unCheck 0.2s ease',
      },
      keyframes: {
        // 'bannerSlide': {
        //   '0%' : {'background-position': '25% 0%'},
        //   '100%' : {'background-position': '40% 80%'}
        // },
        
        // 'navDown': {
        //   '0%' : {'opacity' : '0%'},
        //   '100%' : {'opacity' : '100%'}
        // },
        // 'onCheck': {
        //   '0%' : {'scale': '0'},
        //   '100%' : {'scale': '1'}
        // },
        // 'unCheck': {
        //   '0%' : {'scale': '1'},
        //   '50%' : {'scale': '0'},
        //   '100%' : {'scale': '1'},
        // },
      },
      boxShadow:{
        'top_button_shadow'     : '4px 4px 10px rgba(0, 0, 0, 0.2)',
        'property_page_button_shadow' : '42px 42px 24px rgba(0, 0, 0, 0.01),24px 24px 20px rgba(0, 0, 0, 0.03), 11px 11px 15px rgba(0, 0, 0, 0.04), 3px 3px 8px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);',
        'property_page_button_shadow_dark' : '42px 42px 24px rgba(255, 255, 255, 0.01),24px 24px 20px rgba(255, 255, 255, 0.03), 11px 11px 15px rgba(255, 255, 255, 0.04), 3px 3px 8px rgba(255, 255, 255, 0.05), 0px 0px 0px rgba(255, 255, 255, 0.05);',
      },
      padding:{
        'container_p' : 'calc(1.5rem * 0.5)',
        'bannerSlider_card_p' : 'clamp(16px, 2vw, 64px) 0',
        'propertySolution_p' : 'clamp(40px, 3.3vw, 90px) clamp(24px, 1.66vw, 48px)',
        'property_entry_price' : 'clamp(6px, 0.5vw, 10px)',
        'blog_card_text_content' : 'clamp(20px, 1.25vw, 32px) clamp(14px, 0.83vw, 24px)',
        'testimonial_text' : '0 clamp(18px, 1.66vw, 40px)',
        'clientSlider_p' : 'clamp(64px, 5.208vw, 200px)',
        'button': 'clamp(8px,0.67vw,16px) clamp(16px,1.25vw,32px)',
        'text_inputs': 'clamp(10px, 0.83vw, 22px) clamp(14px, 1.1vw, 30px)',
        'py100' : 'clamp(64px, 5.208vw, 200px)',
      },
      margin:{
        'heading_margin_bottom' : 'clamp(32px, 2.5vw, 64px)',
      },
      width:{
        'bannerSlider_card_bg' : 'calc(100% + calc(1.5 * calc(1.5rem * 0.5)))',
        'tel_icon' : 'clamp(24px, 10vw, 38px)',
        'play_button' : 'clamp(48px, 3.333vw, 84px)',
      },
      height:{
        'insidePageBanner' : 'clamp(350px, 26.042vw, 600px)',
        'tel_icon' : 'clamp(24px, 10vw, 38px)',
        'play_button' : 'clamp(48px, 3.333vw, 84px)',
      },
      maxWidth:{
        'bannerSlider_card_bg' : 'calc(85% + calc(1.5rem * 0.5))',
      },
    },
  },
  plugins: [],
}
