export const detailedRoadmaps = {
  "web-developer": {
    title: "Web Developer",
    description: "Master full-stack web development with multiple technology stacks",
    icon: "code",
    color: "blue",
    duration: "6-12 months",
    paths: [
      {
        id: "python-developer",
        title: "Python Developer",
        description: "Build scalable web applications with Python frameworks",
        duration: "4-6 months",
        difficulty: "Beginner to Intermediate",
        stack: {
          frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap/Tailwind"],
          backend: ["Python", "Django/Flask", "FastAPI"],
          database: ["PostgreSQL", "SQLite", "Redis"],
          tools: ["Git", "Docker", "Postman", "VS Code"]
        },
        roadmap: [
          {
            phase: "Foundation (Month 1)",
            topics: [
              "Python fundamentals and OOP",
              "HTML5 semantic elements",
              "CSS3 and responsive design",
              "JavaScript basics and DOM manipulation"
            ]
          },
          {
            phase: "Backend Development (Month 2-3)",
            topics: [
              "Django framework basics",
              "Models, Views, Templates (MVT)",
              "Django REST Framework",
              "Database design and ORM"
            ]
          },
          {
            phase: "Advanced Topics (Month 4)",
            topics: [
              "Authentication and authorization",
              "API development and testing",
              "Deployment with Docker",
              "Performance optimization"
            ]
          }
        ],
        projects: [
          "Personal portfolio website",
          "Blog application with admin panel",
          "REST API for e-commerce",
          "Real-time chat application"
        ],
        resources: {
          documentation: [
            { name: "Python Official Docs", url: "https://docs.python.org/3/" },
            { name: "Django Documentation", url: "https://docs.djangoproject.com/" },
            { name: "Flask Documentation", url: "https://flask.palletsprojects.com/" }
          ],
          courses: [
            "Python for Everybody (Coursera)",
            "Django for Beginners",
            "FastAPI Tutorial"
          ],
          books: [
            "Python Crash Course",
            "Django for Professionals",
            "Two Scoops of Django"
          ]
        }
      },
      {
        id: "java-developer",
        title: "Java Developer",
        description: "Enterprise-grade web applications with Java ecosystem",
        duration: "5-7 months",
        difficulty: "Intermediate",
        stack: {
          frontend: ["HTML5", "CSS3", "JavaScript", "Thymeleaf", "React"],
          backend: ["Java", "Spring Boot", "Spring Security", "Hibernate"],
          database: ["MySQL", "PostgreSQL", "H2", "MongoDB"],
          tools: ["Maven", "Gradle", "IntelliJ IDEA", "Postman", "Docker"]
        },
        roadmap: [
          {
            phase: "Java Fundamentals (Month 1-2)",
            topics: [
              "Core Java and OOP concepts",
              "Collections Framework",
              "Exception handling",
              "Multithreading basics"
            ]
          },
          {
            phase: "Spring Framework (Month 3-4)",
            topics: [
              "Spring Boot fundamentals",
              "Dependency Injection",
              "Spring MVC architecture",
              "RESTful web services"
            ]
          },
          {
            phase: "Database & Security (Month 5)",
            topics: [
              "JPA and Hibernate",
              "Spring Data JPA",
              "Spring Security",
              "JWT authentication"
            ]
          },
          {
            phase: "Advanced & Deployment (Month 6-7)",
            topics: [
              "Microservices architecture",
              "Spring Cloud basics",
              "Testing with JUnit",
              "Docker containerization"
            ]
          }
        ],
        projects: [
          "Library management system",
          "E-commerce REST API",
          "Banking application with security",
          "Microservices-based project"
        ],
        resources: {
          documentation: [
            { name: "Oracle Java Docs", url: "https://docs.oracle.com/en/java/" },
            { name: "Spring Boot Reference", url: "https://docs.spring.io/spring-boot/docs/current/reference/html/" },
            { name: "Hibernate Documentation", url: "https://hibernate.org/orm/documentation/" }
          ],
          courses: [
            "Java Programming Masterclass",
            "Spring Boot Complete Guide",
            "Microservices with Spring Cloud"
          ],
          books: [
            "Effective Java",
            "Spring in Action",
            "Java: The Complete Reference"
          ]
        }
      },
      {
        id: "mern-developer",
        title: "MERN Stack Developer",
        description: "Modern full-stack development with MongoDB, Express, React, Node.js",
        duration: "4-6 months",
        difficulty: "Intermediate",
        stack: {
          frontend: ["React", "Redux/Context API", "HTML5", "CSS3", "Tailwind CSS"],
          backend: ["Node.js", "Express.js", "JWT", "Bcrypt"],
          database: ["MongoDB", "Mongoose ODM"],
          tools: ["npm/yarn", "Webpack", "Babel", "VS Code", "Postman"]
        },
        roadmap: [
          {
            phase: "Frontend Mastery (Month 1-2)",
            topics: [
              "React fundamentals and hooks",
              "Component lifecycle",
              "State management with Redux",
              "React Router for navigation"
            ]
          },
          {
            phase: "Backend Development (Month 2-3)",
            topics: [
              "Node.js and npm ecosystem",
              "Express.js server setup",
              "RESTful API design",
              "Middleware and error handling"
            ]
          },
          {
            phase: "Database Integration (Month 3-4)",
            topics: [
              "MongoDB database design",
              "Mongoose ODM",
              "CRUD operations",
              "Data validation and relationships"
            ]
          },
          {
            phase: "Full-Stack Integration (Month 4-6)",
            topics: [
              "Authentication with JWT",
              "File upload handling",
              "Real-time features with Socket.io",
              "Deployment and hosting"
            ]
          }
        ],
        projects: [
          "Todo application with authentication",
          "Social media dashboard",
          "E-commerce platform",
          "Real-time messaging app"
        ],
        resources: {
          documentation: [
            { name: "React Documentation", url: "https://react.dev/" },
            { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
            { name: "MongoDB Manual", url: "https://docs.mongodb.com/" }
          ],
          courses: [
            "The Complete React Course",
            "Node.js Developer Course",
            "MERN Stack Front to Back"
          ],
          books: [
            "Learning React",
            "Node.js Design Patterns",
            "MongoDB: The Definitive Guide"
          ]
        }
      }
    ]
  },
  "android-developer": {
    title: "Android Developer",
    description: "Build native Android applications with modern development practices",
    icon: "smartphone",
    color: "green",
    duration: "6-10 months",
    paths: [
      {
        id: "native-android",
        title: "Native Android (Kotlin)",
        description: "Modern Android development with Kotlin and Jetpack Compose",
        duration: "6-8 months",
        difficulty: "Intermediate",
        stack: {
          language: ["Kotlin", "Java"],
          ui: ["Jetpack Compose", "XML Layouts", "Material Design"],
          architecture: ["MVVM", "Clean Architecture", "Repository Pattern"],
          database: ["Room", "SQLite", "Firebase Firestore"],
          tools: ["Android Studio", "Gradle", "ADB", "Git"]
        },
        roadmap: [
          {
            phase: "Kotlin & Android Basics (Month 1-2)",
            topics: [
              "Kotlin language fundamentals",
              "Android app components",
              "Activities and Fragments",
              "Layouts and Views"
            ]
          },
          {
            phase: "UI Development (Month 2-3)",
            topics: [
              "Jetpack Compose basics",
              "Material Design principles",
              "Navigation Component",
              "RecyclerView and adapters"
            ]
          },
          {
            phase: "Data & Architecture (Month 3-5)",
            topics: [
              "Room database integration",
              "MVVM architecture pattern",
              "LiveData and ViewModel",
              "Repository pattern implementation"
            ]
          },
          {
            phase: "Advanced Features (Month 5-8)",
            topics: [
              "Networking with Retrofit",
              "Dependency injection with Hilt",
              "Background processing",
              "Testing and debugging"
            ]
          }
        ],
        projects: [
          "Calculator app with custom UI",
          "Weather app with API integration",
          "Note-taking app with local database",
          "Social media app with authentication"
        ],
        resources: {
          documentation: [
            { name: "Android Developer Docs", url: "https://developer.android.com/" },
            { name: "Kotlin Documentation", url: "https://kotlinlang.org/docs/" },
            { name: "Jetpack Compose", url: "https://developer.android.com/jetpack/compose" }
          ],
          courses: [
            "Android Kotlin Developer Nanodegree",
            "Complete Android Development Course",
            "Jetpack Compose Bootcamp"
          ],
          books: [
            "Kotlin Programming: The Big Nerd Ranch Guide",
            "Android Programming: The Big Nerd Ranch Guide",
            "Effective Kotlin"
          ]
        }
      },
      {
        id: "flutter-developer",
        title: "Flutter Developer",
        description: "Cross-platform mobile development with Flutter and Dart",
        duration: "4-6 months",
        difficulty: "Beginner to Intermediate",
        stack: {
          language: ["Dart"],
          framework: ["Flutter", "Material Design", "Cupertino"],
          state: ["Provider", "Bloc", "Riverpod"],
          database: ["SQLite", "Hive", "Firebase"],
          tools: ["Flutter SDK", "VS Code", "Android Studio", "Xcode"]
        },
        roadmap: [
          {
            phase: "Dart & Flutter Basics (Month 1)",
            topics: [
              "Dart language fundamentals",
              "Flutter widget system",
              "Stateful vs Stateless widgets",
              "Basic app structure"
            ]
          },
          {
            phase: "UI Development (Month 2)",
            topics: [
              "Layout widgets and positioning",
              "Navigation and routing",
              "Forms and user input",
              "Animations and transitions"
            ]
          },
          {
            phase: "State Management (Month 3-4)",
            topics: [
              "Provider pattern",
              "Bloc architecture",
              "State persistence",
              "API integration with HTTP"
            ]
          },
          {
            phase: "Advanced Features (Month 4-6)",
            topics: [
              "Local database with SQLite",
              "Firebase integration",
              "Platform-specific code",
              "App deployment"
            ]
          }
        ],
        projects: [
          "Expense tracker app",
          "Recipe finder with API",
          "Chat application",
          "E-commerce mobile app"
        ],
        resources: {
          documentation: [
            { name: "Flutter Documentation", url: "https://docs.flutter.dev/" },
            { name: "Dart Language Tour", url: "https://dart.dev/guides/language/language-tour" },
            { name: "Firebase for Flutter", url: "https://firebase.flutter.dev/" }
          ],
          courses: [
            "Flutter & Dart Complete Guide",
            "Flutter Bootcamp",
            "Advanced Flutter Development"
          ],
          books: [
            "Flutter in Action",
            "Beginning Flutter",
            "Flutter Complete Reference"
          ]
        }
      },
      {
        id: "react-native",
        title: "React Native Developer",
        description: "Cross-platform development using React Native and JavaScript",
        duration: "4-6 months",
        difficulty: "Intermediate",
        stack: {
          language: ["JavaScript", "TypeScript"],
          framework: ["React Native", "Expo"],
          navigation: ["React Navigation"],
          state: ["Redux", "Context API", "Zustand"],
          tools: ["Metro", "Flipper", "React Native CLI", "Xcode", "Android Studio"]
        },
        roadmap: [
          {
            phase: "React & React Native Basics (Month 1)",
            topics: [
              "React fundamentals review",
              "React Native components",
              "Navigation setup",
              "Platform-specific code"
            ]
          },
          {
            phase: "Mobile UI Development (Month 2)",
            topics: [
              "Flexbox layouts",
              "TouchableOpacity and gestures",
              "FlatList and ScrollView",
              "Custom components"
            ]
          },
          {
            phase: "Data & State Management (Month 3-4)",
            topics: [
              "AsyncStorage for persistence",
              "API calls with fetch/axios",
              "Redux for state management",
              "Context API patterns"
            ]
          },
          {
            phase: "Native Features (Month 4-6)",
            topics: [
              "Camera and image picker",
              "Push notifications",
              "Native modules integration",
              "App store deployment"
            ]
          }
        ],
        projects: [
          "Task management app",
          "Photo sharing application",
          "Food delivery app UI",
          "Fitness tracking app"
        ],
        resources: {
          documentation: [
            { name: "React Native Docs", url: "https://reactnative.dev/" },
            { name: "Expo Documentation", url: "https://docs.expo.dev/" },
            { name: "React Navigation", url: "https://reactnavigation.org/" }
          ],
          courses: [
            "React Native Complete Guide",
            "Expo & React Native Course",
            "Advanced React Native"
          ],
          books: [
            "Learning React Native",
            "React Native in Action",
            "Fullstack React Native"
          ]
        }
      }
    ]
  },
  "aiml-engineer": {
    title: "AI/ML Engineer",
    description: "Master artificial intelligence and machine learning technologies",
    icon: "psychology",
    color: "purple",
    duration: "8-12 months",
    paths: [
      {
        id: "machine-learning",
        title: "Machine Learning Engineer",
        description: "Build and deploy machine learning models for real-world applications",
        duration: "6-8 months",
        difficulty: "Intermediate to Advanced",
        stack: {
          language: ["Python", "R"],
          libraries: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
          frameworks: ["TensorFlow", "PyTorch", "Keras"],
          tools: ["Jupyter", "Git", "Docker", "MLflow", "Weights & Biases"],
          cloud: ["AWS SageMaker", "Google Cloud AI", "Azure ML"]
        },
        roadmap: [
          {
            phase: "Mathematics & Python (Month 1-2)",
            topics: [
              "Linear algebra and statistics",
              "Python for data science",
              "NumPy and Pandas mastery",
              "Data visualization with Matplotlib"
            ]
          },
          {
            phase: "Core ML Algorithms (Month 2-4)",
            topics: [
              "Supervised learning algorithms",
              "Unsupervised learning techniques",
              "Model evaluation and validation",
              "Feature engineering and selection"
            ]
          },
          {
            phase: "Deep Learning (Month 4-6)",
            topics: [
              "Neural networks fundamentals",
              "TensorFlow and Keras",
              "Convolutional Neural Networks",
              "Recurrent Neural Networks"
            ]
          },
          {
            phase: "MLOps & Deployment (Month 6-8)",
            topics: [
              "Model deployment strategies",
              "MLOps best practices",
              "Monitoring and maintenance",
              "Cloud platform integration"
            ]
          }
        ],
        projects: [
          "House price prediction model",
          "Image classification system",
          "Sentiment analysis application",
          "Recommendation system"
        ],
        resources: {
          documentation: [
            { name: "Scikit-learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html" },
            { name: "TensorFlow Documentation", url: "https://www.tensorflow.org/guide" },
            { name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }
          ],
          courses: [
            "Machine Learning by Andrew Ng",
            "Deep Learning Specialization",
            "MLOps for Production"
          ],
          books: [
            "Hands-On Machine Learning",
            "Pattern Recognition and Machine Learning",
            "The Elements of Statistical Learning"
          ]
        }
      },
      {
        id: "data-scientist",
        title: "Data Scientist",
        description: "Extract insights from data using statistical analysis and ML",
        duration: "6-10 months",
        difficulty: "Intermediate to Advanced",
        stack: {
          language: ["Python", "R", "SQL"],
          analysis: ["Pandas", "NumPy", "SciPy", "Statsmodels"],
          visualization: ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
          ml: ["Scikit-learn", "XGBoost", "LightGBM"],
          tools: ["Jupyter", "Git", "Docker", "Apache Spark"]
        },
        roadmap: [
          {
            phase: "Statistics & Programming (Month 1-2)",
            topics: [
              "Descriptive and inferential statistics",
              "Probability distributions",
              "Hypothesis testing",
              "Python/R programming"
            ]
          },
          {
            phase: "Data Analysis (Month 2-4)",
            topics: [
              "Data cleaning and preprocessing",
              "Exploratory data analysis",
              "Statistical modeling",
              "A/B testing methodology"
            ]
          },
          {
            phase: "Machine Learning (Month 4-6)",
            topics: [
              "Predictive modeling",
              "Time series analysis",
              "Clustering and segmentation",
              "Model interpretation"
            ]
          },
          {
            phase: "Advanced Analytics (Month 6-10)",
            topics: [
              "Big data processing with Spark",
              "Advanced visualization techniques",
              "Business intelligence tools",
              "Communication and storytelling"
            ]
          }
        ],
        projects: [
          "Customer churn analysis",
          "Sales forecasting dashboard",
          "Market basket analysis",
          "Social media sentiment tracking"
        ],
        resources: {
          documentation: [
            { name: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
            { name: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
            { name: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html" }
          ],
          courses: [
            "Data Science Specialization",
            "Applied Data Science with Python",
            "Statistics for Data Science"
          ],
          books: [
            "Python for Data Analysis",
            "The Art of Statistics",
            "Storytelling with Data"
          ]
        }
      },
      {
        id: "deep-learning",
        title: "Deep Learning Engineer",
        description: "Specialize in neural networks and advanced AI applications",
        duration: "8-12 months",
        difficulty: "Advanced",
        stack: {
          language: ["Python", "C++"],
          frameworks: ["TensorFlow", "PyTorch", "JAX", "Hugging Face"],
          specialized: ["OpenCV", "NLTK", "spaCy", "Transformers"],
          hardware: ["CUDA", "TPU", "GPU optimization"],
          tools: ["Docker", "Kubernetes", "MLflow", "Weights & Biases"]
        },
        roadmap: [
          {
            phase: "Deep Learning Foundations (Month 1-3)",
            topics: [
              "Neural network mathematics",
              "Backpropagation algorithm",
              "Optimization techniques",
              "Regularization methods"
            ]
          },
          {
            phase: "Computer Vision (Month 3-5)",
            topics: [
              "Convolutional Neural Networks",
              "Object detection algorithms",
              "Image segmentation",
              "Generative Adversarial Networks"
            ]
          },
          {
            phase: "Natural Language Processing (Month 5-8)",
            topics: [
              "Recurrent Neural Networks",
              "Transformer architecture",
              "BERT and GPT models",
              "Language model fine-tuning"
            ]
          },
          {
            phase: "Advanced Applications (Month 8-12)",
            topics: [
              "Reinforcement learning",
              "Multi-modal AI systems",
              "Model optimization and quantization",
              "Production deployment at scale"
            ]
          }
        ],
        projects: [
          "Image classification with CNNs",
          "Chatbot with transformer models",
          "Object detection system",
          "Generative AI application"
        ],
        resources: {
          documentation: [
            { name: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html" },
            { name: "Hugging Face Docs", url: "https://huggingface.co/docs" },
            { name: "OpenCV Documentation", url: "https://docs.opencv.org/" }
          ],
          courses: [
            "Deep Learning Specialization",
            "CS231n: Computer Vision",
            "CS224n: Natural Language Processing"
          ],
          books: [
            "Deep Learning by Ian Goodfellow",
            "Hands-On Machine Learning",
            "Natural Language Processing with Python"
          ]
        }
      }
    ]
  },
  "embedded-developer": {
    title: "Embedded Developer",
    description: "Develop software for embedded systems and IoT devices",
    icon: "memory",
    color: "amber",
    duration: "8-12 months",
    paths: [
      {
        id: "firmware-developer",
        title: "Firmware Developer",
        description: "Low-level programming for microcontrollers and embedded systems",
        duration: "8-10 months",
        difficulty: "Advanced",
        stack: {
          language: ["C", "C++", "Assembly"],
          platforms: ["Arduino", "ESP32", "STM32", "Raspberry Pi"],
          protocols: ["I2C", "SPI", "UART", "CAN", "Ethernet"],
          tools: ["Keil", "IAR", "GCC", "OpenOCD", "Logic Analyzer"],
          rtos: ["FreeRTOS", "Zephyr", "ThreadX"]
        },
        roadmap: [
          {
            phase: "C Programming & Electronics (Month 1-2)",
            topics: [
              "Advanced C programming",
              "Pointers and memory management",
              "Digital electronics basics",
              "Microcontroller architecture"
            ]
          },
          {
            phase: "Embedded Programming (Month 2-4)",
            topics: [
              "GPIO and peripheral control",
              "Interrupt handling",
              "Timer and PWM programming",
              "ADC and DAC interfacing"
            ]
          },
          {
            phase: "Communication Protocols (Month 4-6)",
            topics: [
              "Serial communication (UART)",
              "I2C and SPI protocols",
              "CAN bus implementation",
              "Wireless communication basics"
            ]
          },
          {
            phase: "RTOS & Advanced Topics (Month 6-10)",
            topics: [
              "Real-time operating systems",
              "Task scheduling and synchronization",
              "Memory optimization techniques",
              "Debugging and testing strategies"
            ]
          }
        ],
        projects: [
          "LED matrix display controller",
          "Temperature monitoring system",
          "Motor control with feedback",
          "IoT sensor network"
        ],
        resources: {
          documentation: [
            { name: "ARM Developer Documentation", url: "https://developer.arm.com/documentation" },
            { name: "FreeRTOS Documentation", url: "https://www.freertos.org/Documentation/RTOS_book.html" },
            { name: "ESP32 Documentation", url: "https://docs.espressif.com/projects/esp-idf/" }
          ],
          courses: [
            "Embedded Systems Programming",
            "Real-Time Operating Systems",
            "ARM Cortex-M Programming"
          ],
          books: [
            "Programming Embedded Systems in C and C++",
            "Making Embedded Systems",
            "Real-Time Systems Design and Analysis"
          ]
        }
      },
      {
        id: "iot-developer",
        title: "IoT Developer",
        description: "Internet of Things applications and connected device development",
        duration: "6-8 months",
        difficulty: "Intermediate to Advanced",
        stack: {
          language: ["C++", "Python", "JavaScript"],
          platforms: ["ESP32", "Raspberry Pi", "Arduino", "BeagleBone"],
          protocols: ["WiFi", "Bluetooth", "LoRaWAN", "Zigbee", "MQTT"],
          cloud: ["AWS IoT", "Google Cloud IoT", "Azure IoT", "ThingSpeak"],
          tools: ["PlatformIO", "Node-RED", "Grafana", "InfluxDB"]
        },
        roadmap: [
          {
            phase: "IoT Fundamentals (Month 1-2)",
            topics: [
              "IoT architecture and protocols",
              "Sensor interfacing",
              "WiFi and Bluetooth programming",
              "Data collection and processing"
            ]
          },
          {
            phase: "Communication & Networking (Month 2-4)",
            topics: [
              "MQTT protocol implementation",
              "HTTP/HTTPS communication",
              "WebSocket connections",
              "Network security basics"
            ]
          },
          {
            phase: "Cloud Integration (Month 4-6)",
            topics: [
              "Cloud platform integration",
              "Data visualization dashboards",
              "Remote device management",
              "OTA (Over-The-Air) updates"
            ]
          },
          {
            phase: "Advanced IoT (Month 6-8)",
            topics: [
              "Edge computing concepts",
              "Machine learning on edge devices",
              "Industrial IoT applications",
              "Security and encryption"
            ]
          }
        ],
        projects: [
          "Smart home automation system",
          "Environmental monitoring station",
          "Asset tracking solution",
          "Industrial sensor network"
        ],
        resources: {
          documentation: [
            { name: "AWS IoT Documentation", url: "https://docs.aws.amazon.com/iot/" },
            { name: "MQTT Specification", url: "https://mqtt.org/mqtt-specification/" },
            { name: "ESP-IDF Programming Guide", url: "https://docs.espressif.com/projects/esp-idf/" }
          ],
          courses: [
            "IoT Specialization",
            "Embedded Systems and IoT",
            "Industrial IoT Development"
          ],
          books: [
            "Internet of Things with ESP32",
            "Building the Internet of Things",
            "IoT Fundamentals: Networking Technologies"
          ]
        }
      },
      {
        id: "automotive-embedded",
        title: "Automotive Embedded Developer",
        description: "Embedded systems for automotive and transportation applications",
        duration: "10-12 months",
        difficulty: "Advanced",
        stack: {
          language: ["C", "C++", "MATLAB/Simulink"],
          standards: ["AUTOSAR", "ISO 26262", "CAN", "LIN", "FlexRay"],
          tools: ["Vector CANoe", "ETAS INCA", "dSPACE", "PikeOS"],
          platforms: ["Infineon AURIX", "NXP S32K", "Renesas RH850"],
          protocols: ["CAN-FD", "Ethernet AVB", "SOME/IP"]
        },
        roadmap: [
          {
            phase: "Automotive Basics (Month 1-3)",
            topics: [
              "Automotive electronics overview",
              "ECU (Electronic Control Unit) basics",
              "CAN bus communication",
              "Automotive software lifecycle"
            ]
          },
          {
            phase: "AUTOSAR & Standards (Month 3-6)",
            topics: [
              "AUTOSAR architecture",
              "Basic Software (BSW) modules",
              "Runtime Environment (RTE)",
              "ISO 26262 functional safety"
            ]
          },
          {
            phase: "Advanced Protocols (Month 6-9)",
            topics: [
              "LIN and FlexRay networks",
              "Automotive Ethernet",
              "Diagnostic protocols (UDS)",
              "Bootloader development"
            ]
          },
          {
            phase: "System Integration (Month 9-12)",
            topics: [
              "Multi-core programming",
              "ADAS system development",
              "Cybersecurity in automotive",
              "Testing and validation"
            ]
          }
        ],
        projects: [
          "CAN bus data logger",
          "Engine control module simulation",
          "ADAS sensor fusion system",
          "Vehicle diagnostic tool"
        ],
        resources: {
          documentation: [
            { name: "AUTOSAR Documentation", url: "https://www.autosar.org/standards/" },
            { name: "Vector Knowledge Base", url: "https://kb.vector.com/" },
            { name: "ISO 26262 Standard", url: "https://www.iso.org/standard/68383.html" }
          ],
          courses: [
            "Automotive Embedded Systems",
            "AUTOSAR Development",
            "Functional Safety in Automotive"
          ],
          books: [
            "Introduction to Automotive Electronics",
            "AUTOSAR Compendium",
            "Automotive Software Engineering"
          ]
        }
      }
    ]
  }
};