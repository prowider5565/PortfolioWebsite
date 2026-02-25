export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  companyWebsite: string;
  description: string;
  keySkills: string[]; 
  startDate: string;
  endDate: string;
  employmentType: string;
  gallery: string[];
  projects: Project[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: 'techgigs-2025',
    title: 'Backend Developer in Python',
    company: 'Techgigs Solutions',
    companyLogo: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9npxtwmibcw0.jpg',
    companyWebsite: 'https://tech-gigs.vercel.app/uz',
    description: 'Developing scalable backend solutions and contributing to freelance projects on behalf of Techgigs Agency on Upwork. Working with modern Python frameworks and cloud infrastructure.',
    keySkills: ['Python', 'Django REST', 'FastAPI', 'Stripe Integration', 'Cloud Deployment', 'Hostinger'],
    startDate: '2025-04',
    endDate: '2026-02',
    employmentType: 'Part-time',
    gallery: [],
    projects: [
      {
        id: 'mymdcard',
        title: 'MyMDCard',
        description: 'Medical information gathering platform dedicated to medical centers to store and manage patients\' private information. Aligns with HIPAA regulations and includes optional online shopping feature. Integrated with Stripe for online payment, deployed on Hostinger Cloud.',
        technologies: ['Django', 'PostgreSQL', 'Stripe API', 'HIPAA Compliance', 'Hostinger'],
        link: 'https://mymdcard.com',
      },
      {
        id: 'pos-system',
        title: 'POS System (Points-of-Sales)',
        description: 'An efficient, dynamic software solution for merchants in shopping centres to manage their monthly, annually sales, transactions, debts, etc.',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
        link: 'https://pos-front-v2.vercel.app',
      },
      {
        id: 'goavto',
        title: 'GoAvto',
        description: 'An emerging automotive marketplace and car dealership platform for Uzbekistan that provides comprehensive vehicle information and dealer connections, currently seeking investment partnerships to fully realize its potential as the country\'s premier automotive information hub.',
        technologies: ['Django REST', 'PostgreSQL', 'Redis', 'AWS S3'],
      },
    ],
  },
  {
    id: 'datasite-2025',
    title: 'Backend Developer & Instructor',
    company: 'Datasite Academy',
    companyLogo: '/images/DatasiteLogo.png',
    companyWebsite: 'https://datasite.uz',
    description: 'Teaching students about the core fundamentals of programming and backend development skills while developing medical information systems and educational platforms.',
    keySkills: ['Python', 'Django', 'Teaching', 'Mentorship', 'Backend Architecture', 'PostgreSQL'],
    startDate: '2025-03',
    endDate: '2026-02',
    employmentType: 'Full-time',
    gallery: [
      '/images/DatasiteGallery.png',
      'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nq2bnqxqkw0.jpg',
    ],
    projects: [
      {
        id: 'merrymed',
        title: 'MerryMed',
        description: 'Medical information sharing website - Developed for sharing information about what medical products are available, and how many are there in stock.',
        technologies: ['Django', 'PostgreSQL', 'REST API', 'Inventory Management'],
      },
    ],
  },
  {
    id: 'realsoft-2024',
    title: 'Junior Backend Developer',
    company: 'Realsoft LLC',
    companyLogo: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9npi23ibeqdc.png',
    companyWebsite: 'https://realsoft.uz',
    description: 'Developed logistics and queue management systems for various industries including banking, medical clinics, and local service businesses.',
    keySkills: ['Python', 'Django REST', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets'],
    startDate: '2024-04',
    endDate: '2024-10',
    employmentType: 'Full-time',
    gallery: [
      'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9npn0zn70ruo.jpg',
    ],
    projects: [
      {
        id: 'carting-logistics',
        title: 'Carting Logistics Service',
        description: 'A digital logistics solution that transforms traditional delivery operations through coordinated workflow management.',
        technologies: ['Django REST', 'PostgreSQL', 'Redis', 'Celery'],
        link: 'https://carting.uz',
      },
      {
        id: 'navbatda',
        title: 'Navbatda - Queue Automation Service',
        description: 'A digital queue management system that helps banking institutions, medical clinics, and local service businesses optimize customer flow and reduce operational overhead.',
        technologies: ['FastAPI', 'PostgreSQL', 'WebSockets', 'Redis'],
      },
    ],
  },
  {
    id: 'fazo-2023',
    title: 'Junior Python Backend Developer & Assistant AI Developer',
    company: 'Fazo Software Solutions TM',
    companyLogo: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9npi3ev23vgg.jpg',
    companyWebsite: 'https://www.linkedin.com/company/fazo-software-service',
    description: 'Built secure surveillance systems and comprehensive digital examination platforms with automated grading capabilities.',
    keySkills: ['Python', 'Django', 'Face Recognition', 'AI/ML', 'PostgreSQL', 'Security Systems'],
    startDate: '2023-06',
    endDate: '2024-02',
    employmentType: 'Full-time',
    gallery: [
      'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9npn8075goap.jpg',
    ],
    projects: [
      {
        id: 'oson-test',
        title: 'Oson Test',
        description: 'A comprehensive digital examination platform that enables educators to create, distribute, and manage online tests across web, mobile, and Telegram interfaces while providing automated grading and certificate generation.',
        technologies: ['Django', 'PostgreSQL', 'Telegram Bot API', 'React', 'Certificate Generation'],
        link: 'https://oson-test.uz',
      },
      {
        id: 'face-id-surveillance',
        title: 'Face ID Surveillance System',
        description: 'Built a secure Face ID-based surveillance and attendance management system for Namangan region military facilities, automatically tracking personnel entry/exit with comprehensive daily, monthly, and annual reporting capabilities - deployed on local infrastructure for maximum security.',
        technologies: ['Python', 'OpenCV', 'Face Recognition', 'Django', 'PostgreSQL', 'Local Deployment'],
      },
      {
        id: 'suzani-ecommerce',
        title: 'Suzani',
        description: 'An ecommerce service for local customers in Namangan to improve their online sales experience. Integrated to Payze payment gateway.',
        technologies: ['Django', 'PostgreSQL', 'Payze API', 'E-commerce'],
      },
    ],
  },
  {
    id: 'it-school-2022',
    title: 'Assistant Python Programming Instructor',
    company: 'IT School Namangan',
    companyLogo: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-9nlltn39i22o/conv-9nlm5x2djta8/20260216/file-9nq4uwd68gld.jpg',
    companyWebsite: 'https://it-park.uz',
    description: 'Helped IT instructors to teach programming skills in Python programming language due to its easy syntax, taught how to build minimal web backend services using Flask and Django REST.',
    keySkills: ['Python', 'Teaching', 'Flask', 'Django', 'Mentorship', 'Web Development'],
    startDate: '2022-09',
    endDate: '2023-06',
    employmentType: 'Internship',
    gallery: [],
    projects: [],
  },
];
