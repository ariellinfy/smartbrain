# Next Smart Brain - Face Detection App (Full-Stack)

![App Cover](./public/smartbrain_cover.png)

This is a face detection web application built with Next.js, NextAuth.js, and PostgreSQL. It allows users to log in using third-party providers (Google, GitHub, etc.), submit image URLs, and detect faces in the images with bounding box results and confidence scores.

## Features
- User Authentication: Sign in using Google, GitHub, or classical email & password via Auth.js.
- Face Detection: Input an image URL, and the app detects faces with bounding boxes and confidence scores.
- User Stats: Track and display the number of images processed by each user.
- Responsive Design: The app adapts to various screen sizes for an optimal user experience.
- Database Integration: User data and sessions are stored using PostgreSQL via Neon.
- Real-Time Interaction: Users can see face detection results in real-time with an interactive form and image display.

## Usage
1. Sign in via Google, GitHub or credentials.
2. Submit an image URL to detect faces using the API4AI Face Detection API.
3. View the image with detected faces highlighted by bounding boxes and confidence scores.
3. Track your stats (number of images processed).

## Resource
- [Next.js](https://nextjs.org/docs) - Framework for server-rendered React applications.
- [Auth.js](https://authjs.dev/) - Authentication library for managing user sessions.
- [Vercel](https://vercel.com/home) - Hosting platform for deployment.
- [API4AI Face Detection API](https://api4.ai/docs/face-analysis) - Used for detecting faces in images and returning face analysis data.
- [Google Cloud OAuth](https://developers.google.com/identity/protocols/oauth2)  - For authenticating users with Google.
- [GitHub OAuth](https://authjs.dev/guides/configuring-github)  - For authenticating users with GitHub.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework used for quickly styling and creating responsive designs.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.