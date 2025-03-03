const savedcourses = [
    {
      name: 'React',
      category:"Web Development",
      ccid:1,
      image: process.env.api + 'club/rnative.png',
      topics: [
        {
          topic: 'Introduction to React',
          subtopics: ['JSX Basics', 'Component Structure', 'Props and State'],
        },
        {
          topic: 'React Components',
          subtopics: [
            'Class Components',
            'Functional Components',
            'Component Lifecycle',
          ],
        },
        {
          topic: 'Hooks',
          subtopics: ['useState', 'useEffect', 'Custom Hooks'],
        },
        {
          topic: 'React Router',
          subtopics: ['Routing Basics', 'Dynamic Routing', 'Route Parameters'],
        },
        {
          topic: 'State Management',
          subtopics: ['Context API', 'Redux', 'MobX'],
        },
      ],
      desc: 'React is a popular JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
    },
    {
      name: 'Node.js',
      ccid:1,
      image: process.env.api + 'club/node.png',
      topics: [
        {
          topic: 'Introduction to Node.js',
          subtopics: [
            'What is Node.js?',
            'Node.js Architecture',
            'Event-Driven Programming',
          ],
        },
        {
          topic: 'Node.js Modules',
          subtopics: ['Core Modules', 'Creating Modules', 'Using NPM'],
        },
        {
          topic: 'Express.js',
          subtopics: ['Setting up Express', 'Routing', 'Middleware'],
        },
        {
          topic: 'Database Integration',
          subtopics: ['MongoDB with Mongoose', 'PostgreSQL', 'MySQL'],
        },
        {
          topic: 'Error Handling',
          subtopics: ['Error Middleware', 'Custom Errors', 'Debugging'],
        },
      ],
      desc: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It is designed to build scalable network applications, offering high performance and support for asynchronous programming.",
    },
    {
      name: 'Cybersecurity',
      image: process.env.api + 'club/cybb.jpeg',
      ccid:1,
  
      topics: [
        {
          topic: 'Introduction to Cybersecurity',
          subtopics: [
            'Understanding Threats',
            'Cybersecurity Fundamentals',
            'Types of Attacks',
          ],
        },
        {
          topic: 'Network Security',
          subtopics: ['Firewalls', 'VPNs', 'Intrusion Detection Systems'],
        },
        {
          topic: 'Cryptography',
          subtopics: [
            'Encryption Techniques',
            'Digital Signatures',
            'Public Key Infrastructure',
          ],
        },
        {
          topic: 'Security Best Practices',
          subtopics: [
            'Secure Coding Practices',
            'Access Control',
            'Incident Response',
          ],
        },
        {
          topic: 'Ethical Hacking',
          subtopics: [
            'Penetration Testing',
            'Vulnerability Assessment',
            'Ethical Hacking Tools',
          ],
        },
      ],
      desc: 'Cybersecurity involves protecting systems, networks, and programs from digital attacks. It is essential to safeguard and maintain sensitive information in a connected world.',
    },
    {
      name: 'PHP',
      ccid:1,
  
      image: process.env.api + 'club/phpresized.jpg',
      topics: [
        {
          topic: 'Introduction to PHP',
          subtopics: [
            'PHP Syntax',
            'Variables and Data Types',
            'Control Structures',
          ],
        },
        {
          topic: 'Working with Databases',
          subtopics: ['MySQL and PHP', 'CRUD Operations', 'PDO vs MySQLi'],
        },
        {
          topic: 'PHP Functions and OOP',
          subtopics: [
            'Defining Functions',
            'Classes and Objects',
            'Inheritance and Interfaces',
          ],
        },
        {
          topic: 'File Handling',
          subtopics: ['Reading Files', 'Writing Files', 'File Uploads'],
        },
        {
          topic: 'Sessions and Cookies',
          subtopics: ['Session Management', 'Cookies Basics', 'Secure Sessions'],
        },
      ],
      desc: 'PHP is a popular server-side scripting language designed for web development. It can also be used as a general-purpose language and is known for its ease of use and integration with various databases.',
    },
    {
      name: 'Python',
      ccid:1,
      image: process.env.api + 'club/python.jpg',
      topics: [
        {
          topic: 'Introduction to Python',
          subtopics: ['Python Basics', 'Data Types', 'Control Flow'],
        },
        {
          topic: 'Python Functions',
          subtopics: ['Defining Functions', 'Lambda Functions', 'Error Handling'],
        },
        {
          topic: 'Object-Oriented Programming',
          subtopics: ['Classes and Objects', 'Inheritance', 'Polymorphism'],
        },
        {
          topic: 'Data Handling',
          subtopics: ['File I/O', 'Data Serialization', 'Regular Expressions'],
        },
        {
          topic: 'Libraries and Frameworks',
          subtopics: ['NumPy', 'Pandas', 'Flask', 'Django'],
        },
      ],
      desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. It is widely used in web development, data science, automation, and machine learning.',
    },
    {
      name: 'Web Development (Front-end)',
      ccid:1,
  
      image: process.env.api + 'club/fend.jpeg',
      topics: [
        {
          topic: 'HTML and CSS',
          subtopics: ['HTML Structure', 'CSS Basics', 'Responsive Design'],
        },
        {
          topic: 'JavaScript Basics',
          subtopics: [
            'DOM Manipulation',
            'Events and Functions',
            'AJAX and APIs',
          ],
        },
        {
          topic: 'Front-End Frameworks',
          subtopics: ['Bootstrap', 'React', 'Vue.js'],
        },
        {
          topic: 'Advanced CSS',
          subtopics: ['Flexbox', 'CSS Grid', 'Animations'],
        },
        {
          topic: 'Performance Optimization',
          subtopics: ['Minification', 'Lazy Loading', 'Image Optimization'],
        },
      ],
      desc: 'Front-end development involves building the visual elements of a website or application that users interact with. This includes using HTML, CSS, and JavaScript to create responsive and dynamic user interfaces.',
    },
    {
      name: 'Project Management',
      ccid:2,
  
      image: process.env.api + 'club/projectmanagement.jpeg',
      topics: [
        {
          topic: 'Introduction to Project Management',
          subtopics: [
            'Project Lifecycle',
            'Project Planning',
            'Project Scheduling',
          ],
        },
        {
          topic: 'Agile Methodology',
          subtopics: ['Scrum Framework', 'Sprint Planning', 'Kanban Board'],
        },
        {
          topic: 'Risk Management',
          subtopics: [
            'Identifying Risks',
            'Risk Mitigation Strategies',
            'Risk Analysis',
          ],
        },
        {
          topic: 'Project Documentation',
          subtopics: [
            'Project Charter',
            'Requirements Documentation',
            'Status Reports',
          ],
        },
        {
          topic: 'Stakeholder Management',
          subtopics: [
            'Communication Plans',
            'Engagement Strategies',
            'Conflict Resolution',
          ],
        },
      ],
      desc: 'Project management involves planning, executing, and overseeing projects to achieve specific goals within a set timeframe and budget. It ensures that projects are completed efficiently and effectively while meeting predefined objectives.',
    },
    {
      name: 'Digital Marketing',
      ccid:3,
  
      image: process.env.api + 'club/dm.jpg',
      topics: [
        {
          topic: 'Introduction to Digital Marketing',
          subtopics: ['SEO Basics', 'Content Marketing', 'Social Media Strategy'],
        },
        {
          topic: 'Search Engine Optimization (SEO)',
          subtopics: ['Keyword Research', 'On-Page SEO', 'Link Building'],
        },
        {
          topic: 'Social Media Advertising',
          subtopics: [
            'Facebook Ads',
            'Instagram Ads',
            'LinkedIn Ads',
            'Ad Targeting',
          ],
        },
        {
          topic: 'Email Marketing',
          subtopics: ['Building an Email List', 'Email Campaigns', 'Automation'],
        },
        {
          topic: 'Web Analytics',
          subtopics: [
            'Google Analytics',
            'Conversion Tracking',
            'Customer Insights',
            'Measuring ROI',
          ],
        },
      ],
      desc: 'Digital marketing leverages the internet and online platforms to promote products and services. It includes strategies like SEO, social media marketing, email campaigns, and web analytics to reach and engage customers.',
    },
    {
      name: 'Data Science',
      ccid:2,
  
      image: process.env.api + 'club/datana.jpeg',
      topics: [
        {
          topic: 'Introduction to Data Science',
          subtopics: [
            'Data Science Workflow',
            'Data Collection and Cleaning',
            'Data Visualization',
            'Exploratory Data Analysis',
          ],
        },
        {
          topic: 'Statistics for Data Science',
          subtopics: [
            'Descriptive Statistics',
            'Probability Theory',
            'Hypothesis Testing',
            'Regression Analysis',
          ],
        },
        {
          topic: 'Machine Learning',
          subtopics: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Classification and Regression',
            'Neural Networks',
          ],
        },
        {
          topic: 'Working with Big Data',
          subtopics: ['Hadoop', 'Spark', 'Data Lakes', 'Cloud Data Solutions'],
        },
        {
          topic: 'Data Science Tools',
          subtopics: [
            'Python for Data Science',
            'R Programming',
            'SQL',
            'Data Analysis with Pandas',
          ],
        },
      ],
      desc: 'Data science involves extracting insights from structured and unstructured data using scientific methods, processes, algorithms, and systems. It combines domain expertise, programming skills, and knowledge of statistics to uncover patterns and insights.',
    },
    {
      name: 'Django',
      ccid:1,
  
      image: process.env.api + 'club/django.jpg',
      topics: [
        {
          topic: 'Introduction to Django',
          subtopics: ['Django Overview', 'Setting up Django', 'MVC Pattern'],
        },
        {
          topic: 'Django Models',
          subtopics: [
            'Creating Models',
            'Database Migrations',
            'Model Relationships',
          ],
        },
        {
          topic: 'Django Views and Templates',
          subtopics: [
            'Creating Views',
            'Using Templates',
            'Template Inheritance',
          ],
        },
        {
          topic: 'Django Forms',
          subtopics: [
            'Creating Forms',
            'Form Validation',
            'Handling Form Submissions',
          ],
        },
        {
          topic: 'Django Admin Interface',
          subtopics: ['Customizing Admin', 'Admin Models', 'Admin Permissions'],
        },
      ],
      desc: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It follows the 'batteries-included' philosophy and comes with a variety of built-in features for web development.",
    },
    {
      ccid:1,
      name: 'Ruby on Rails',
      image: process.env.api + 'club/ror.jpeg',
      topics: [
        {
          topic: 'Introduction to Rails',
          subtopics: [
            'Rails Architecture',
            'Getting Started with Rails',
            'MVC Pattern',
          ],
        },
        {
          topic: 'Rails Models',
          subtopics: ['Creating Models', 'Active Record', 'Associations'],
        },
        {
          topic: 'Rails Controllers and Views',
          subtopics: [
            'Creating Controllers',
            'Views and Layouts',
            'RESTful Routes',
          ],
        },
        {
          topic: 'Rails Forms and Validations',
          subtopics: ['Creating Forms', 'Validations', 'Handling Form Data'],
        },
        {
          topic: 'Rails Authentication',
          subtopics: ['Devise Gem', 'User Authentication', 'Authorization'],
        },
      ],
      desc: 'Ruby on Rails is a web application framework written in Ruby. It emphasizes convention over configuration and follows the MVC pattern to create dynamic web applications with ease.',
    },
    {
      ccid:1,
      name: 'GraphQL',
      image: process.env.api + 'club/graphql.jpeg',
      topics: [
        {
          topic: 'Introduction to GraphQL',
          subtopics: [
            'GraphQL Basics',
            'Schema Definition',
            'Queries and Mutations',
          ],
        },
        {
          topic: 'GraphQL Queries',
          subtopics: ['Writing Queries', 'Query Parameters', 'Fragments'],
        },
        {
          topic: 'GraphQL Mutations',
          subtopics: [
            'Creating Mutations',
            'Handling Input Types',
            'Response Types',
          ],
        },
        {
          topic: 'GraphQL Subscriptions',
          subtopics: [
            'Real-Time Updates',
            'Setting Up Subscriptions',
            'Handling Subscription Data',
          ],
        },
        {
          topic: 'Integrating with React',
          subtopics: ['Apollo Client', 'Relay', 'Query Hooks'],
        },
      ],
      desc: 'GraphQL is a query language for APIs and a server-side runtime for executing queries by specifying the structure of the response. It allows clients to request only the data they need and nothing more.',
    },
    {
      ccid:1,
      name: 'Java',
      image: process.env.api + 'club/java.jpg',
      topics: [
        {
          topic: 'Introduction to Java',
          subtopics: ['Java Basics', 'Data Types and Variables', 'Control Flow'],
        },
        {
          topic: 'Object-Oriented Programming',
          subtopics: ['Classes and Objects', 'Inheritance', 'Polymorphism'],
        },
        {
          topic: 'Java Collections Framework',
          subtopics: ['Lists and Sets', 'Maps', 'Iterators'],
        },
        {
          topic: 'Java Concurrency',
          subtopics: [
            'Threads and Executors',
            'Synchronization',
            'Concurrency Utilities',
          ],
        },
        {
          topic: 'Java I/O',
          subtopics: ['File Handling', 'Streams', 'Serialization'],
        },
      ],
      desc: 'Java is a high-level, class-based programming language that is designed to have as few implementation dependencies as possible. It is widely used for building cross-platform applications, from mobile apps to enterprise systems.',
    },
    
    {
      name: 'Flutter',ccid:1,
      image: process.env.api + 'club/flutter-3.png',
      topics: [
        {
          topic: 'Introduction to Flutter',
          subtopics: [
            'Flutter Basics',
            'Widgets and Layouts',
            'State Management',
          ],
        },
        {
          topic: 'Flutter Widgets',
          subtopics: ['Built-in Widgets', 'Custom Widgets', 'Widget Lifecycle'],
        },
        {
          topic: 'Dart Programming Language',
          subtopics: [
            'Dart Basics',
            'Asynchronous Programming',
            'Error Handling',
          ],
        },
        {
          topic: 'Flutter Navigation',
          subtopics: [
            'Routing and Navigation',
            'Passing Data',
            'Navigation Drawer',
          ],
        },
        {
          topic: 'Flutter and Firebase',
          subtopics: ['Firebase Integration', 'Authentication', 'Firestore'],
        },
      ],
      desc: 'Flutter is an open-source UI software development toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
    },
    {
      name: 'Docker',ccid:1,
      image: process.env.api + 'club/docker.jpg',
      topics: [
        {
          topic: 'Introduction to Docker',
          subtopics: [
            'Docker Basics',
            'Containers vs Virtual Machines',
            'Docker Architecture',
          ],
        },
        {
          topic: 'Docker Installation',
          subtopics: ['Installing Docker', 'Docker CLI Basics', 'Docker Compose'],
        },
        {
          topic: 'Docker Images',
          subtopics: ['Creating Images', 'Dockerfile', 'Image Management'],
        },
        {
          topic: 'Docker Containers',
          subtopics: [
            'Running Containers',
            'Container Management',
            'Data Volumes',
          ],
        },
        {
          topic: 'Docker Networking',
          subtopics: [
            'Network Types',
            'Connecting Containers',
            'Networking Basics',
          ],
        },
        {
          topic: 'Docker Compose',
          subtopics: [
            'Defining Services',
            'Multi-Container Applications',
            'Compose File Syntax',
          ],
        },
        {
          topic: 'Docker in Production',
          subtopics: [
            'Docker Swarm',
            'Scaling Containers',
            'Monitoring and Logging',
          ],
        },
        {
          topic: 'Advanced Docker',
          subtopics: [
            'Docker Security',
            'Optimizing Docker Images',
            'Custom Networks',
          ],
        },
      ],
      desc: 'Docker is a platform for developing, shipping, and running applications in containers. It allows developers to package applications with all dependencies into a standardized unit for software development, simplifying deployment and scaling.',
    },
  ];