export const projectsData = [
    {
        id: 1,
        name: 'HexaChat - Real-Time Messaging & Calling App',
        description: "Independently designed and built a full-stack WhatsApp-style messaging platform using the MERN stack, from user registration and storage to real-time chat and calling. Features one-to-one and group chats with group management, online status, typing indicators, read receipts, replies, reactions, forwarding, starring, editing and deletion of messages, voice notes, and image/document sharing. Implemented peer-to-peer audio and video calling with WebRTC and Socket.IO signaling, extended to group calls. Fixed intermittent call-connection failures by configuring a STUN/TURN server so calls connect reliably across restrictive networks. Designed a chat-request system: a user must send a request before starting a new chat, and messaging is enabled only if the recipient accepts, otherwise the sender is blocked. Added status updates, call history, blocking, and profile customization with image cropping. Secured accounts with JWT authentication, hashed passwords, and email OTP verification. Deployed live and fully responsive on desktop and mobile.",
        tools: [
            'React.js',
            'Vite',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose',
            'Socket.IO',
            'WebRTC',
            'STUN/TURN',
            'JWT',
            'Nodemailer',
            'Multer',
            'Axios'
        ],
        role: 'Full Stack Developer',
        code: 'https://github.com/Rao-Zain/WhatsappClone',
        demo: 'https://hexachat.hexalogicx.com/',
    },
    {
        id: 2,
        name: 'ShopNest - Next.js E-Commerce Store',
        description: "Developed the frontend of a modern e-commerce store using Next.js, TypeScript, and Tailwind CSS, integrated with a Laravel REST API provided for LeadDevise. Built the storefront experience including category navigation, flash sales, product listings, product detail pages with related products, shopping cart, checkout, order success and order history pages, and user account and profile pages. Implemented dynamic, API-driven product data fetching and reusable, responsive components for a consistent experience across desktop and mobile. Added an image-based product search that runs in the browser using TensorFlow.js (MobileNet). Used Next.js features to optimize page rendering and application structure. The backend API was provided by the LeadDevise team; my work covered the frontend and API integration.",
        tools: [
            'Next.js',
            'React.js',
            'TypeScript',
            'Tailwind CSS',
            'Laravel REST API',
            'TensorFlow.js',
            'Swiper',
            'React Hot Toast'
        ],
        role: 'Frontend Developer',
        code: 'https://github.com/Rao-Zain/complete-Ecommerce',
        demo: 'https://stores.hexalogicx.com/',
    },
    {
        id: 3,
        name: 'E-Commerce Application - React.js',
        description: "Developed a dynamic e-commerce frontend using React.js for LeadDevise, focused on interactive shopping experiences and reusable UI components. Built reusable components for product listings, product details, and a working shopping cart, with dynamic product rendering through REST API integration. Implemented client-side state management for cart operations and application data using Redux. Created responsive layouts that provide a consistent experience across desktop and mobile devices.",
        tools: [
            'React.js',
            'JavaScript',
            'Redux',
            'REST API',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Bootstrap'
        ],
        role: 'Frontend Developer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'FaceTrack AI - Automated Attendance System',
        description: "Built an automated student attendance system that combines face recognition with a QR-code fallback. A PHP web application communicates with a Python Flask microservice (OpenCV and face_recognition) through a REST API. Supports bulk student enrollment using a CSV import and a ZIP archive of photos. Includes a Bootstrap 5 admin dashboard with role-specific views, automated daily absent reports, and an Email/WhatsApp notification pipeline. Deployed end to end across Hugging Face Spaces, Render, and Railway.",
        tools: [
            'PHP',
            'Python',
            'Flask',
            'OpenCV',
            'face_recognition',
            'MySQL',
            'Bootstrap 5',
            'REST API'
        ],
        role: 'Full Stack Developer',
        code: 'https://github.com/Rao-Zain/Face_Attendance',
        demo: 'https://face-attendance-iota-seven.vercel.app',
    },
    {
        id: 5,
        name: 'Student Management System',
        description: "Developed a multi-role academic management platform in PHP and MySQL with a modular structure. Implemented role-based access control for admin, teacher, and student accounts. Built and tested complete CRUD operations for student and teacher records, profile management, an exam module, and attendance tracking. Created a responsive Bootstrap 5 interface with JavaScript-driven dynamic elements and AJAX data interactions.",
        tools: [
            'PHP',
            'MySQL',
            'Bootstrap 5',
            'JavaScript',
            'AJAX',
            'Composer'
        ],
        role: 'Full Stack Developer',
        code: 'https://github.com/Rao-Zain/Student_management_system',
        demo: 'https://student-management-system-alpha-weld.vercel.app',
    },
    {
        id: 6,
        name: 'Gesture Hologram - Hand Gesture Recognition',
        description: "Built a real-time hand gesture recognition system using computer vision. Implemented hand landmark detection with MediaPipe and OpenCV for gesture classification and letter recognition. Designed a modular architecture (gestures, letter recognizer, smoothing, UI renderer) with a dedicated jitter-smoothing algorithm for stable output. Extended the system with an OCR module for text recognition alongside gesture input.",
        tools: [
            'Python',
            'MediaPipe',
            'OpenCV',
            'OCR'
        ],
        role: 'Developer',
        code: 'https://github.com/Rao-Zain/Gesture_Hologram-',
        demo: '',
    }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },