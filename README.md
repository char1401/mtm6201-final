# mtm6201-final
My final for the second semester of my program (interactive media design)


Q - "Tell us about your process, challenges you faced during development and how you overcame those changes."
A - I started by analyzing the wireframes and breaking the website into clear sections such as the hero, features, programs, and contact areas. From there, I structured the project into four separate pages (Home, About, Programs, Contact) to match real-world website architecture. I used the Bootstrap framework to quickly establish a responsive grid system and consistent layout, then layered custom styling using CSS variables to match the brand’s color palette. I focused on building reusable components like cards, buttons, and navigation to keep the design consistent across pages. Once the layout was complete, I enhanced the site with micro-interactions and animations, and optimized performance using techniques like lazy loading and responsive images.

Exemples of challenges and how I solved them (these were a real pain):
    1. Maintaining consistency across multiple pages.
    Since the site was split into four pages, keeping navigation, styling, and layout consistent became challenging. I solved this by creating shared files (styles.css and main.js) and reusing the same structure across all pages.

    2. Achieving a responsive, pixel-accurate design.
    Matching the layout across mobile, tablet, and desktop required careful spacing and scaling. I used Bootstrap’s grid system along with responsive CSS techniques like clamp() and media queries to ensure consistency across screen sizes.

    3. Improving performance and load speed.
    Initially, the site used placeholder images and inline assets, which is not optimal. I optimized performance by: Moving CSS and JavaScript into external files, implementing lazy loading for images, and using responsive images (srcset and sizes) to serve appropriate image sizes

    4. Adding smooth interactivity without heavy libraries.
    I wanted animations without slowing the site down. I used CSS transitions and a lightweight IntersectionObserver script to create scroll-based animations efficiently.


Q - "What have you learned by creating this project?"
A - This project helped me strengthen both my technical skills and development workflow. I gained a deeper understanding of how to design for multiple screen sizes using Bootstrap and flexible CSS techniques. I learned how to improve load times and user experience through lazy loading, responsive images, and better file organization. Separating HTML, CSS, and JavaScript into reusable files made the project easier to manage and scale—something essential in real-world development. I became more aware of accessibility practices like semantic HTML, alt text, and keyboard navigation, which are critical for inclusive design. Implementing micro-interactions and animations taught me how small details can significantly enhance the overall feel of a website. Overall, this project helped me move from simply “building a webpage” to thinking like a front-end developer, focusing on performance, scalability, and user experience.


List of any assets or resources I used that was not my own, including any frameworks, libraries, plugins, fonts, or images:
    - Google Fonts: Inter font family, loaded from https://fonts.google.com/
    - Google Maps embed: map iframe used on the Contact page, loaded from https://maps.google.com/
    - Schema.org: structured data vocabulary used for the business/contact information, from https://schema.org/
    - Shutterstock stock images: football and athlete images used throughout the site, including the home hero image, about hero image, programs hero image, contact hero image, football field image, coach images, and athlete testimonial images.
    - Blue star illustration: decorative star graphic used in the About page values section.
    - Gentle Giant Training logo image: logo file used in the site header.
    - Responsive image versions: smaller JPG/PNG versions were created from the original image files for srcset and picture element use.
    - No CSS framework or JavaScript plugin is currently used; the site uses custom HTML, CSS, and JavaScript.
