# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Custom cursor effect
- Interactive sections (About, Skills, Experience, Projects)
- Contact form with email functionality
- Video backgrounds
- Clean, maintainable code

## Setting Up the Contact Form

This portfolio uses EmailJS to send emails directly from the contact form without requiring a backend server. To set up the contact form with your email:

1. Create an account at [EmailJS](https://www.emailjs.com/) (they have a free tier)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `from_name` - The name of the person contacting you
   - `from_email` - The email of the person contacting you
   - `subject` - The subject of the message
   - `message` - The content of the message
4. Open `src/App.tsx` and locate the EmailJS configuration
5. Replace the placeholder values with your actual EmailJS credentials:
   ```jsx
   // Initialize EmailJS
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

   // In handleSubmit function:
   emailjs.sendForm(
     'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
     'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
     formRef.current,
     'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
   )
   ```

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`

## Customization

You can easily customize the following:

- Personal information and content in `App.tsx`
- Styling in `index.css`
- Video backgrounds by changing the URLs in the `videos` object in `App.tsx`
- Project details and images
- Color scheme (primary color is currently teal #0a9396)

## Dependencies

- React
- Vite
- HeroIcons
- EmailJS

## License

MIT
