# Portfolio Website Requirements Document

## 1. Application Overview

### 1.1 Application Name
Personal Portfolio Website

### 1.2 Application Description
A professional portfolio website for a software engineer specialized in Python Backend, DevOps, and IoT Engineering, showcasing expertise in Django REST, FastAPI, Flask, PostgreSQL, and related technologies. The website supports multilingual content in Uzbek, English, and Russian, with Uzbek as the default language.

## 2. Core Features

### 2.1 Homepage (Landing Page)
- Fashionable, tech-style landing page design
- Background animation: Flying stars with random positions, random sizes, and random directions moving across the page in the background layer
- Automatic slideshow of user photos positioned on the right side of the page
  - Images: img1.jpg, photo_2026-02-16_01-02-06.jpg, photo_71_2024-07-08_13-58-23.jpg
  - Auto-slide interval: 2 seconds
  - Navigation controls: Next and Previous buttons
  - Click interaction: Clicking on any image displays it in detail view
- Navigation bar at the top with the following items:
  - Contact
  - Projects
  - Companies & Teams
  - About Me
- Key fields section displaying initial skills with expandable functionality:
  - Initial display: Python Backend, DevOps, IoT Engineering, Mentorship, Nest.js, Microservices
  - Plus button at the end to load more skills in bulk:
    - Python, Node.js
    - PostgreSQL, MySQL, MongoDB, Database ORMs
    - Django REST, FastAPI, Flask, Nest.js
    - Redis, Websockets, caching, RabbitMQ
    - OAuth 2.0, SSL, NGINX
    - Docker, Kubernetes (basic)
    - Ubuntu, System Administration
    - Cloud Computing, AWS (ES2, S3, R53)
    - Microservices architecture
- Professional tagline section displaying:
  - Uzbek: 3+ yil ish tajribaga ega yosh, mehnatkash, chiqishimli, moslashuvchan Backend dasturchisi, Student va o'qituvchi
  - English: Young, hardworking, ambitious, adaptable Backend developer with 3+ years of experience, Student and Instructor
  - Russian: Молодой, трудолюбивый, амбициозный, адаптивный Backend разработчик с опытом работы 3+ года, Студент и Преподаватель
- Companies and Teams preview section displayed after key fields area with scrollable animation
- Animated vertical timeline line that progresses as user scrolls through companies and teams
- Content appears with minimal decorative animations during scroll

### 2.2 Navigation Structure
- Fixed navigation bar visible across the website
- Navigation items include: Contact, Projects, Companies & Teams, About Me
- Contact item redirects to dedicated contact page

### 2.3 Language Support
- Supported languages: Uzbek, English, Russian
- Default language: Uzbek
- Language switcher component for users to toggle between languages

### 2.4 Contact Page
- Accessible via navbar Contact item
- Displays contact information in a visually appealing layout
- Includes one illustrative image representing contacting
- Contact details to display:
  - Phone: +998500042280
  - Telegram: mateo2280
  - Instagram: prowider5565
  - Email: prowider.dev@gmail.com
  - LinkedIn: linkedin.com/in/mateo-versace
  - GitHub: github.com/prowider5565

### 2.5 Companies & Teams Section

#### 2.5.1 Homepage Display
- Displayed after key fields area
- Scrollable animation with vertical timeline line
- Animated content reveal as user scrolls
- Minimal and decorative presentation style

#### 2.5.2 Dedicated Page Display
- Accessible via navbar Companies & Teams item
- Same content as homepage but with different design and appearance
- Alternative layout optimized for detailed viewing
- Comprehensive translation support in Uzbek, English, and Russian

#### 2.5.3 Workplace Units

**Unit 1: Techgigs Solutions**
- Title:
  - English: Backend Developer in Python
  - Uzbek: Python Backend dasturchisi
  - Russian: Backend разработчик на Python
- Employment Period: Apr 2025 - Present
- Employment Type:
  - English: Part-time
  - Uzbek: Yarim kunlik
  - Russian: Неполный рабочий день
- Company Official Website: https://tech-gigs.vercel.app/uz
- Description:
  - English: Contributing to freelance projects on behalf of Techgigs Agency on Upwork
  - Uzbek: Upwork platformasida Techgigs agentligi nomidan frilanser loyihalarda ishtirok etish
  - Russian: Участие в фриланс-проектах от имени агентства Techgigs на платформе Upwork
- Key Skills: Python, Django REST, FastAPI, Flask, PostgreSQL, API Development
- Projects:
  - MyMDCard:
    - English: Medical information gathering platform dedicated to medical centers to store and manage patients' private information. Aligns with HIPAA regulations and includes optional online shopping feature. Integrated with Stripe for online payment, deployed on Hostinger Cloud.
    - Uzbek: Tibbiy markazlar uchun bemorlarning shaxsiy ma'lumotlarini saqlash va boshqarish uchun mo'ljallangan tibbiy ma'lumotlarni yig'ish platformasi. HIPAA qoidalariga mos keladi va ixtiyoriy onlayn xarid qilish funksiyasini o'z ichiga oladi. Onlayn to'lov uchun Stripe bilan integratsiyalangan, Hostinger Cloud'da joylashtirilgan.
    - Russian: Платформа сбора медицинской информации для медицинских центров для хранения и управления личной информацией пациентов. Соответствует требованиям HIPAA и включает дополнительную функцию онлайн-покупок. Интегрирована с Stripe для онлайн-платежей, развернута на Hostinger Cloud.
    - Website: https://mymdcard.com
  - POS system (Points-of-Sales):
    - English: An efficient, dynamic software solution for merchants in shopping centres to manage their monthly, annually sales, transactions, debts, etc.
    - Uzbek: Savdo markazlaridagi savdogarlar uchun oylik, yillik sotuvlarni, tranzaksiyalarni, qarzlarni va boshqalarni boshqarish uchun samarali, dinamik dasturiy ta'minot yechimi.
    - Russian: Эффективное, динамичное программное решение для торговцев в торговых центрах для управления ежемесячными, годовыми продажами, транзакциями, долгами и т.д.
    - Website: https://pos-front-v2.vercel.app
  - GoAvto (Car information sharing website):
    - English: An emerging automotive marketplace and car dealership platform for Uzbekistan that provides comprehensive vehicle information and dealer connections, currently seeking investment partnerships to fully realize its potential as the country's premier automotive information hub
    - Uzbek: O'zbekiston uchun avtomobil bozori va avtomobil dilerlik platformasi bo'lib, to'liq avtomobil ma'lumotlari va diler aloqalarini taqdim etadi, hozirda mamlakatning asosiy avtomobil ma'lumot markazi sifatida o'z salohiyatini to'liq amalga oshirish uchun investitsiya hamkorliklarini izlamoqda
    - Russian: Развивающаяся автомобильная площадка и платформа автодилеров для Узбекистана, предоставляющая полную информацию о транспортных средствах и связи с дилерами, в настоящее время ищет инвестиционные партнерства для полной реализации своего потенциала в качестве ведущего автомобильного информационного центра страны
- Gallery Images: TechgigsLogo.jpg, Techgigs Solutions_1.png, Techgigs Solutions_2.png, Techgigs Solutions_3.png, Techgigs Solutions_4.png
  - Carousel interaction: Users can manually slide images by holding click and dragging left or right
  - Click interaction: Clicking on any image displays it in detail view

**Unit 2: Datasite Academy**
- Title:
  - English: Backend developer & Instructor
  - Uzbek: Backend dasturchi va O'qituvchi
  - Russian: Backend разработчик и Преподаватель
- Employment Period: Mar 2025 - Present
- Employment Type:
  - English: Full-time
  - Uzbek: To'liq kunlik
  - Russian: Полный рабочий день
- Company Official Website: https://datasite.uz
- Description:
  - English: Teaching students about the core fundamentals of programming and backend development skills
  - Uzbek: Talabalarga dasturlash va backend ishlab chiqish ko'nikmalarining asosiy tamoyillarini o'rgatish
  - Russian: Обучение студентов основам программирования и навыкам backend разработки
- Key Skills: Python, Django REST, FastAPI, Teaching, Mentorship
- Projects:
  - MerryMed (Medical information sharing website):
    - English: Developed for sharing information about what medical products are available, and how many are there in stock
    - Uzbek: Qanday tibbiy mahsulotlar mavjudligi va omborda qancha borligi haqida ma'lumot almashish uchun ishlab chiqilgan
    - Russian: Разработан для обмена информацией о том, какие медицинские продукты доступны и сколько их на складе
- Gallery Images: Datasite (1) (1) (1) (1).png, Datasite Academy_1.png, Datasite Academy_2.png, Datasite Academy_3.png, Datasite Academy_4.png, Datasite Academy_5.png
  - Carousel interaction: Users can manually slide images by holding click and dragging left or right
  - Click interaction: Clicking on any image displays it in detail view

**Unit 3: Fazo Software Solutions TM**
- Title:
  - English: Junior Python backend developer & Assistant AI developer
  - Uzbek: Kichik Python backend dasturchisi va AI dasturchi yordamchisi
  - Russian: Младший Python backend разработчик и Помощник AI разработчика
- Employment Period: Jun 2023 - Feb 2024
- Employment Type:
  - English: Full-time
  - Uzbek: To'liq kunlik
  - Russian: Полный рабочий день
- Company LinkedIn: https://www.linkedin.com/company/fazo-software-service
- Description:
  - English: Developed comprehensive digital solutions including examination platforms and surveillance systems
  - Uzbek: Imtihon platformalari va kuzatuv tizimlari kabi keng qamrovli raqamli yechimlarni ishlab chiqish
  - Russian: Разработка комплексных цифровых решений, включая экзаменационные платформы и системы наблюдения
- Key Skills: Python, Django REST, FastAPI, PostgreSQL, Face Recognition, AI Development
- Projects:
  - Oson Test:
    - English: A comprehensive digital examination platform that enables educators to create, distribute, and manage online tests across web, mobile, and Telegram interfaces while providing automated grading and certificate generation.
    - Uzbek: O'qituvchilarga veb, mobil va Telegram interfeyslari orqali onlayn testlarni yaratish, tarqatish va boshqarish imkonini beruvchi, avtomatlashtirilgan baholash va sertifikat yaratishni ta'minlaydigan keng qamrovli raqamli imtihon platformasi.
    - Russian: Комплексная цифровая экзаменационная платформа, которая позволяет преподавателям создавать, распространять и управлять онлайн-тестами через веб, мобильные и Telegram интерфейсы, обеспечивая автоматическую оценку и генерацию сертификатов.
    - Website: https://oson-test.uz
  - Face ID-based surveillance and attendance management system:
    - English: Built a secure Face ID-based surveillance and attendance management system for Namangan region military facilities, automatically tracking personnel entry/exit with comprehensive daily, monthly, and annual reporting capabilities - deployed on local infrastructure for maximum security
    - Uzbek: Namangan viloyati harbiy ob'ektlari uchun xavfsiz Face ID asosidagi kuzatuv va davomat boshqaruv tizimini yaratdim, xodimlarning kirish/chiqishini avtomatik kuzatib borish va kunlik, oylik va yillik hisobotlarni taqdim etish imkoniyatiga ega - maksimal xavfsizlik uchun mahalliy infratuzilmada joylashtirilgan
    - Russian: Создал безопасную систему наблюдения и управления посещаемостью на основе Face ID для военных объектов Наманганской области, автоматически отслеживающую вход/выход персонала с комплексными возможностями ежедневной, ежемесячной и годовой отчетности - развернута на локальной инфраструктуре для максимальной безопасности
  - Suzani:
    - English: An ecommerce service for local customers in Namangan to improve their online sales experience. Integrated to Payze payment gateway
    - Uzbek: Namangandagi mahalliy mijozlar uchun onlayn savdo tajribasini yaxshilash uchun elektron tijorat xizmati. Payze to'lov shlyuzi bilan integratsiyalangan
    - Russian: Сервис электронной коммерции для местных клиентов в Намангане для улучшения их опыта онлайн-продаж. Интегрирован с платежным шлюзом Payze
- Gallery Images: Fazo Software Solutions TM_1.png, Fazo Software Solutions TM_2.png, Fazo Software Solutions TM_3.png, Fazo Software Solutions TM_4.png, Fazo Software Solutions TM_5.png
  - Carousel interaction: Users can manually slide images by holding click and dragging left or right
  - Click interaction: Clicking on any image displays it in detail view

**Unit 4: IT School Namangan**
- Title:
  - English: Assistant Python Programming instructor
  - Uzbek: Python dasturlash o'qituvchisi yordamchisi
  - Russian: Помощник преподавателя программирования на Python
- Employment Period: Sep 2022 - Jun 2023
- Employment Type:
  - English: Internship
  - Uzbek: Amaliyot
  - Russian: Стажировка
- Company Official Website: https://it-park.uz
- Description:
  - English: Helped IT instructors to teach programming skills in Python programming language due to its easy syntax, taught how to build minimal web backend services using Flask and Django REST
  - Uzbek: IT o'qituvchilariga Python dasturlash tilida dasturlash ko'nikmalarini o'rgatishda yordam berdim, chunki uning sintaksisi oson, Flask va Django REST yordamida minimal veb backend xizmatlarini qanday yaratishni o'rgatdim
  - Russian: Помогал IT-преподавателям обучать навыкам программирования на языке программирования Python благодаря его простому синтаксису, обучал созданию минимальных веб-бэкенд сервисов с использованием Flask и Django REST
- Key Skills: Python, Flask, Django REST, Teaching, Mentorship
- Gallery Images: ITSchoollogo.jpg, IT School Namangan_1.png, IT School Namangan_2.png, IT School Namangan_3.png, IT School Namangan_4.png
  - Carousel interaction: Users can manually slide images by holding click and dragging left or right
  - Click interaction: Clicking on any image displays it in detail view

**Unit 5: Realsoft LLC**
- Title:
  - English: Junior Backend developer
  - Uzbek: Kichik Backend dasturchi
  - Russian: Младший Backend разработчик
- Employment Period: Apr 2024 - Oct 2024
- Employment Type:
  - English: Full-time
  - Uzbek: To'liq kunlik
  - Russian: Полный рабочий день
- Company Official Website: https://realsoft.uz
- Description:
  - English: Developed digital logistics and queue management solutions
  - Uzbek: Raqamli logistika va navbat boshqaruv yechimlarini ishlab chiqish
  - Russian: Разработка цифровых логистических решений и решений для управления очередями
- Key Skills: Python, Django REST, FastAPI, PostgreSQL, System Integration
- Projects:
  - Carting Logistics Service:
    - English: A digital logistics solution that transforms traditional delivery operations through coordinated workflow management.
    - Uzbek: An'anaviy yetkazib berish operatsiyalarini muvofiqlashtiririlgan ish oqimini boshqarish orqali o'zgartiruvchi raqamli logistika yechimi.
    - Russian: Цифровое логистическое решение, которое трансформирует традиционные операции доставки через координированное управление рабочим процессом.
    - Website: https://carting.uz
  - Navbatda Queue automation service:
    - English: A digital queue management system that helps banking institutions, medical clinics, and local service businesses optimize customer flow and reduce operational overhead
    - Uzbek: Bank muassasalari, tibbiy klinikalar va mahalliy xizmat ko'rsatuvchi korxonalarga mijozlar oqimini optimallashtirish va operatsion xarajatlarni kamaytirish uchun yordam beradigan raqamli navbat boshqaruv tizimi
    - Russian: Цифровая система управления очередями, которая помогает банковским учреждениям, медицинским клиникам и местным сервисным предприятиям оптимизировать поток клиентов и снизить операционные расходы
- Gallery Images: Realsoft LLC_1.png, Realsoft LLC_2.png, Realsoft LLC_3.png, Realsoft LLC_4.png, Realsoft LLC_5.png
  - Carousel interaction: Users can manually slide images by holding click and dragging left or right
  - Click interaction: Clicking on any image displays it in detail view

### 2.6 About Me Section
- Accessible via navbar About Me item
- Displays comprehensive personal and professional information
- Content includes:
  - Full Name: [Mock Data: Mateo Versace]
  - Personal Photo: Use img1.jpg as profile photo
  - Age: [Mock Data: 24 years old]
  - Birth Place: [Mock Data: Namangan, Uzbekistan]
  - Interests: [Mock Data: Backend Development, AI/ML, Cloud Computing, Teaching, Open Source Contribution, IoT Projects]
  - Currently Learning: [Mock Data: Advanced Kubernetes, Microservices Architecture, System Design, Cloud Native Technologies]
  - Education Section:
    - [Mock Data: Bachelor's Degree in Computer Science]
    - [Mock Data: Namangan State University, 2020-2024]
    - [Mock Data: Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development]
  - Certifications Section:
    - [Mock Data: AWS Certified Solutions Architect - Associate]
    - [Mock Data: Docker Certified Associate]
    - [Mock Data: Python Professional Certificate]
    - [Mock Data: Django REST Framework Specialist]

## 3. Image Assets

### 3.1 Homepage Photo Slideshow
- Image names: img1.jpg, photo_2026-02-16_01-02-06.jpg, photo_71_2024-07-08_13-58-23.jpg
- Usage: Automatic slideshow on the right side of the landing page
- Auto-slide interval: 2 seconds
- Controls: Next and Previous buttons
- Interaction: Click to view in detail
- Purpose: Personal photos of the portfolio owner

### 3.2 Contact Page Illustration
- Image name: image.png
- Usage: Illustrative image on contact page representing contacting

### 3.3 About Me Profile Photo
- Image name: img1.jpg
- Usage: Profile photo in About Me section

### 3.4 Company Gallery Images
- Techgigs Solutions: TechgigsLogo.jpg, Techgigs Solutions_1.png, Techgigs Solutions_2.png, Techgigs Solutions_3.png, Techgigs Solutions_4.png
- Datasite Academy: Datasite (1) (1) (1) (1).png, Datasite Academy_1.png, Datasite Academy_2.png, Datasite Academy_3.png, Datasite Academy_4.png, Datasite Academy_5.png
- Fazo Software Solutions TM: Fazo Software Solutions TM_1.png, Fazo Software Solutions TM_2.png, Fazo Software Solutions TM_3.png, Fazo Software Solutions TM_4.png, Fazo Software Solutions TM_5.png
- IT School Namangan: ITSchoollogo.jpg, IT School Namangan_1.png, IT School Namangan_2.png, IT School Namangan_3.png, IT School Namangan_4.png
- Realsoft LLC: Realsoft LLC_1.png, Realsoft LLC_2.png, Realsoft LLC_3.png, Realsoft LLC_4.png, Realsoft LLC_5.png
- Usage: Display in workplace unit galleries with carousel functionality
- Interaction: Manual slide by dragging, click to view in detail