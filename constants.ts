import { TranslationData } from "./types";

const en: TranslationData = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    gallery: "Gallery",
    contact: "Contact",
  },
  home: {
    welcome: "Hi \uD83D\uDC4B, I'm Gabriel Zhong",
    subtitle: "A full-stack developer driven by passion",
    quote:
      "In the beginning, there was darkness.\nUntil someone set themselves aflame.\nOnly then did the universe know light.",
  },
  about: {
    title: "About Me",
    basic: {
      title: "Basic Information",
      name: {
        title: "Name",
        content: "Gabriel Zhong",
      },
      hometown: {
        title: "Hometown",
        content: "Beijing, China",
      },
      previous_residence: {
        title: "Previous Residence",
        content: "Shinjuku City, Tokyo, Japan",
      },
      current_residence: {
        title: "Current Residence",
        content: "Daxing District, Beijing, China",
      },
      specialization: {
        title: "Specialization",
        content:
          "IT (Full-stack Developer, Information Security, High-Performance Computing)",
      },
      language: {
        title: "Language Proficiency",
        content: "Chinese (Mandarin, native), English, Japanese (N1)",
      },
      github: "https://github.com/Akiko97",
    },
    education: {
      title: "Education",
      items: [
        {
          degree: {
            title: "Degree",
            content: "PhD",
          },
          dates: "2025.09 - Present",
          university: {
            title: "University",
            content: "Beijing University of Technology",
          },
          faculty: {
            title: "Faculty",
            content: "College of Computer Science",
          },
          department: {
            title: "Department",
            content: "Dept. of Computer Science",
          },
          major: {
            title: "Major",
            content: "Computer Science",
          },
          laboratory: {
            title: "Research Lab",
            content: "Trusted Computing Beijing Key Laboratory",
          },
          focus: {
            title: "Research Focus",
            content: "Cyberspace Security",
          },
        },
        {
          degree: {
            title: "Degree",
            content: "Master of Engineering",
          },
          dates: "2021.09 - 2024.03",
          university: {
            title: "University",
            content: "Waseda University",
          },
          faculty: {
            title: "Faculty",
            content: "Graduate School of Fundamental Science and Engineering",
          },
          department: {
            title: "Department",
            content: "Dept. of Computer Science and Engineering",
          },
          major: {
            title: "Major",
            content: "Computer Science and Communications Engineering",
          },
          laboratory: {
            title: "Research Lab",
            content: "UEDA Laboratory",
          },
          focus: {
            title: "Research Focus",
            content: "High-Performance Computing, Parallel Computing",
          },
        },
        {
          degree: {
            title: "Degree",
            content: "Bachelor of Engineering",
          },
          dates: "2016.09 - 2020.07",
          university: {
            title: "University",
            content: "Beijing University of Technology",
          },
          faculty: {
            title: "Faculty",
            content: "College of Computer Science",
          },
          department: {
            title: "Department",
            content: "Dept. of Cybersecurity",
          },
          major: {
            title: "Major",
            content: "Information Security",
          },
          laboratory: {
            title: "Research Lab",
            content: "Trusted Computing Beijing Key Laboratory",
          },
          focus: {
            title: "Research Focus",
            content: "Linux Kernel Security, Trusted Computing",
          },
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          job_title: "Researcher (Intern)",
          company:
            "KXYK Trust Cloud Technology (Beijing) Co., Ltd. Chongming Research Institute",
          location: "Haidian District, Beijing, China",
          dates: "2024.04 - 2025.08",
          infos: [
            'Assisted the State Information Center of China in completing a research project for the National Development and Reform Commission on "Opportunities and Challenges of Artificial Intelligence Technology for China’s Cybersecurity in the 15th Five-Year Plan."',
            "Designed and developed the backend (including database, middleware, and backend) for the company's Trusted Computing Digital Twin Sandbox project, leading to enhanced system reliability and performance.",
            "Developed the backend for the company's Trusted Computing Security Visualization project, optimizing data flow and visualization efficiency, and implemented a universal protocol conversion tool from TCP to HTTP.",
            "Designed a domestic trusted adaptation solution for a company's load balancing equipment.",
            "Worked with technologies such as Axum to build high-performance backend services, Protobuf and gRPC to optimize data serialization and communication protocols, SurrealDB for efficient database management and high availability, and Bevy ECS to design a flexible, modular architecture for real-time data processing and system management.",
          ],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      items: [
        {
          title: "Programming Languages",
          items: [
            "Rust",
            "C/C++",
            "Python",
            "Java",
            "JavaScript/TypeScript",
            "Swift",
            "Go",
            "Lua",
            "OCaml",
          ],
        },
        {
          title: "Web Development",
          items: [
            "HTML5, CSS3, TailwindCSS",
            "Front-end frameworks: Vue.js, Svelte",
            "Toolchains: Node.js, Bun, Deno",
            "RESTful APIs, WebSocket protocols, gRPC(Protobuf)",
          ],
        },
        {
          title: "System Development",
          items: [
            "Kernel Development",
            "System Programming",
            "Driver Development",
            "Performance Optimization",
            "Embedded Programming",
          ],
        },
        {
          title: "Development Tools & Practices",
          items: [
            "Linux-based development environments",
            "macOS-based development environments",
            "Version Control: Git",
          ],
        },
        {
          title: "Infrastructure & Cloud Technologies",
          items: [
            "Databases: MySQL, MongoDB, PostgreSQL, SurrealDB",
            "Docker containerization",
            "Cloud Computing: AWS, Azure",
          ],
        },
        {
          title: "Other Skills",
          items: [
            "Reverse Engineering: IDA Pro, Ghidra",
            "Game Engines: Unity, Godot, Unreal Engine",
            "IDEs: VSCode, IntelliJ, Xcode",
            "DAW(NLAE): Adobe Audition, Logic Pro",
            "NLVE: Adobe Premiere Pro, Final Cut Pro",
            "Raster Graphics Editor: Adobe Photoshop",
            "3D: Blender",
          ],
        },
      ],
    },
    hobbies: {
      title: "Hobbies & Interests",
      content:
        "I am passionate about exploring the frontiers of technology, particularly in the fields of computer science, artificial intelligence, and reverse engineering. \nIn addition, I have a strong interest in game development and game technologies, often spending my spare time working on small game projects to explore new game mechanics and gameplay. \nMusic is also an important part of my life. I enjoy playing instruments, particularly the flute, guitar, and some traditional Chinese instruments. Music provides endless inspiration for my creativity and thinking. \nIn my free time, I also enjoy reading books, contributing to open-source projects, and traveling to explore different cultures, all of which provide new perspectives and inspiration for my work.",
    },
  },
  projects: {
    title: "Research & Projects",
    viewMore: "View More",
    research: {
      title: "Research Papers/Thesis",
      items: [
        {
          title:
            "Enhancing SIMD Assembly Language Development with Visualization Techniques",
          description:
            "This thesis introduces a dynamic method for visualizing SIMD assembly language instructions and presents the PixelAssemblySIMD tool, which uses a data flow-driven visualization approach to help programmers better understand the execution of SIMD instructions. The tool incorporates a CPU emulator written in Rust and supports cross-platform compatibility, including WebAssembly. The contributions of the thesis include the proposal of a universal visualization method, the development of the PixelAssemblySIMD tool, and user evaluations that demonstrate its effectiveness in teaching, debugging, and security analysis. Compared to other tools, PixelAssemblySIMD offers advantages in data accuracy and visualization intuitiveness.",
          language: "English",
          link: "https://waseda.repo.nii.ac.jp/records/2001309",
        },
        {
          title:
            "Design and Implementation of Transparent TCM Support Mechanism in Cloud Environment",
          description:
            "The thesis focuses on the design and implementation of a transparent trusted cryptographic module (TCM) support mechanism in cloud environments. This mechanism enables the integration of virtual trusted platform modules (vTCM) into cloud virtual machines without requiring changes to the cloud infrastructure. It monitors virtual machine startup commands, intercepts them to add trusted root support, and binds each virtual machine to a vTCM. The system allows up to 255 virtual machines to receive TCM support, offering functionalities like key creation, encryption/decryption, signing, and integrity reporting. It also ensures that the TCM setup is transparent to users and operates with minimal performance overhead. The proposed solution aims to enhance cloud security by ensuring the trustworthiness of virtual machines in a scalable and efficient manner.",
          language: "Chinese",
          link: "",
        },
      ],
    },
    personal: {
      title: "Personal Projects",
      items: [
        {
          title: "CheshireLane",
          description:
            "A Proof-of-Concept Private Server for an Anime Fleet Game",
          link: "https://github.com/Irminsul-dev/CheshireLane-Public",
        },
        {
          title: "brainfuck",
          description: "A simple brainfuck interpreter, with JIT support",
          link: "https://github.com/Akiko97/brainfuck",
        },
        {
          title: "BCut2SRT",
          description:
            "A command-line tool that converts BCut JSON files into SRT format",
          link: "https://github.com/Akiko97/bcut2srt",
        },
      ],
    },
  },
  gallery: {
    title: "Gallery",
    description: "Snapshots from my life and travels.",
    items: [
      {
        src: "/images/fuji.png",
        alt: "Mount Fuji",
        caption:
          "Mount Fuji, photographed from the Shonan Kaigan (Spring 2024, iPhone 15 Pro Max)",
      },
      {
        src: "/images/hachijo.png",
        alt: "Hachijō-jima",
        caption: "Hachijō-jima (Spring 2024, iPhone 15 Pro Max)",
      },
      {
        src: "/images/toya.png",
        alt: "Lake Tōya",
        caption: "Lake Tōya (Autumn 2023, iPhone 15 Pro Max)",
      },
      {
        src: "/images/temple-of-heaven.png",
        alt: "Temple of Heaven",
        caption: "Temple of Heaven (Autumn 2024, iPhone 15 Pro Max)",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    description:
      "Feel free to reach out to me through any of the following channels:",
    email: "collies-04.venues$at$icloud.com",
    telegram: "akiko97",
    discord: "akiko97(akiko97#6666)",
    discordLink: "https://discord.com/users/978263799779954708",
    github: "Akiko97",
    githubLink: "https://github.com/Akiko97",
    email_intro: "This email is powered by iCloud+",
  },
};

const ja: TranslationData = {
  nav: {
    home: "ホーム",
    about: "プロフィール",
    projects: "プロジェクト",
    gallery: "ギャラリー",
    contact: "連絡先",
  },
  home: {
    welcome: "こんにちは \uD83D\uDC4B、私は鍾　中です",
    subtitle: "情熱に駆られたフルスタック開発者",
    quote:
      "星海は暗く、孤独に果てはない。\nある者が己を灯したとき——\n宇宙に初めて光が差した。",
  },
  about: {
    title: "プロフィール",
    basic: {
      title: "基本情報",
      name: {
        title: "名前",
        content: "鍾中（ショウ・チュウ）",
      },
      hometown: {
        title: "出身地",
        content: "中国 北京市",
      },
      previous_residence: {
        title: "以前の住所",
        content: "日本 東京都 新宿区",
      },
      current_residence: {
        title: "現在の住所",
        content: "中国 北京市 大興区",
      },
      specialization: {
        title: "専門分野",
        content: "IT（フルスタック開発者、情報セキュリティ、高性能計算）",
      },
      language: {
        title: "言語能力",
        content: "中国語（母語）、英語、日本語（N1）",
      },
      github: "https://github.com/Akiko97",
    },
    education: {
      title: "学歴",
      items: [
        {
          degree: {
            title: "学位",
            content: "博士",
          },
          dates: "2025.09 - 現在",
          university: {
            title: "大学",
            content: "北京工業大学",
          },
          faculty: {
            title: "学部",
            content: "計算機科学部",
          },
          department: {
            title: "学科",
            content: "計算機科学科",
          },
          major: {
            title: "専攻",
            content: "計算機科学",
          },
          laboratory: {
            title: "研究室",
            content: "可信計算北京市重点実験室",
          },
          focus: {
            title: "研究分野",
            content: "サイバー空間セキュリティ",
          },
        },
        {
          degree: {
            title: "学位",
            content: "工学修士",
          },
          dates: "2021.09 - 2024.03",
          university: {
            title: "大学",
            content: "早稲田大学",
          },
          faculty: {
            title: "大学院",
            content: "基幹理工学研究科",
          },
          department: {
            title: "学科",
            content: "情報理工学科",
          },
          major: {
            title: "専攻",
            content: "情報理工・情報通信専攻",
          },
          laboratory: {
            title: "研究室",
            content: "上田研究室",
          },
          focus: {
            title: "研究分野",
            content: "高性能計算、並列計算",
          },
        },
        {
          degree: {
            title: "学位",
            content: "工学学士",
          },
          dates: "2016.09 - 2020.07",
          university: {
            title: "大学",
            content: "北京工業大学",
          },
          faculty: {
            title: "学部",
            content: "計算機科学部",
          },
          department: {
            title: "学科",
            content: "サイバーセキュリティ学科",
          },
          major: {
            title: "専攻",
            content: "情報セキュリティ",
          },
          laboratory: {
            title: "研究室",
            content: "可信計算北京市重点実験室",
          },
          focus: {
            title: "研究分野",
            content: "Linuxカーネルセキュリティ、可信計算",
          },
        },
      ],
    },
    experience: {
      title: "職歴",
      items: [
        {
          job_title: "研究員（インターン）",
          company: "KXYK Trust Cloud Technology (Beijing) Co., Ltd. 重明研究所",
          location: "中国北京市海淀区",
          dates: "2024.04 - 2025.08",
          infos: [
            "国家情報センターと共同で、中華人民共和国国家発展改革委員会の研究課題「人工知能技術が中国のサイバーセキュリティに与える機会と挑戦—第15次五か年計画における影響」に関する研究を完了しました。",
            "会社の信頼計算デジタルツインサンドボックスプロジェクトのバックエンド（データベース、ミドルウェア、バックエンドを含む）を設計・開発し、システムの信頼性とパフォーマンスを向上させました。",
            "会社の信頼計算セキュリティビジュアライゼーションプロジェクトのバックエンドを開発し、データフローとビジュアライゼーション効率を最適化し、TCPからHTTPへのプロトコル変換ツールを実装しました。",
            "ある会社のロードバランシング機器の国産化信頼適応ソリューションを設計しました。",
            "Axumを使用して高性能なバックエンドサービスを構築し、ProtobufとgRPCを用いてデータシリアル化と通信プロトコルの最適化を行い、SurrealDBを活用して効率的なデータベース管理と高可用性を実現し、Bevy ECSを利用してリアルタイムデータ処理とシステム管理のための柔軟でモジュール化されたアーキテクチャを設計しました。",
          ],
        },
      ],
    },
    skills: {
      title: "技術スキル",
      items: [
        {
          title: "プログラミング言語",
          items: [
            "Rust",
            "C/C++",
            "Python",
            "Java",
            "JavaScript/TypeScript",
            "Swift",
            "Go",
            "Lua",
            "OCaml",
          ],
        },
        {
          title: "Web 開発",
          items: [
            "HTML5, CSS3, TailwindCSS",
            "フロントエンドフレームワーク: Vue.js, Svelte",
            "ツールチェーン: Node.js, Bun, Deno",
            "RESTful APIs, WebSocket protocols, gRPC(Protobuf)",
          ],
        },
        {
          title: "システム開発",
          items: [
            "カーネル開発",
            "システムプログラミング",
            "ドライバ開発",
            "パフォーマンス最適化",
            "組み込みプログラミング",
          ],
        },
        {
          title: "開発ツールと実践",
          items: [
            "Linux ベースの開発環境",
            "macOS ベースの開発環境",
            "バージョン管理：Git",
          ],
        },
        {
          title: "インフラストラクチャーとクラウド技術",
          items: [
            "データベース: MySQL, MongoDB, PostgreSQL, SurrealDB",
            "Docker コンテナ化",
            "クラウドコンピューティング: AWS, Azure",
          ],
        },
        {
          title: "その他のスキル",
          items: [
            "リバースエンジニアリング: IDA Pro, Ghidra",
            "ゲームエンジン: Unity, Godot, Unreal Engine",
            "IDEs: VSCode, IntelliJ, Xcode",
            "デジタルオーディオワークステーション: Adobe Audition, Logic Pro",
            "動画編集: Adobe Premiere Pro, Final Cut Pro",
            "ラスタグラフィック編集: Adobe Photoshop",
            "3D 制作: Blender",
          ],
        },
      ],
    },
    hobbies: {
      title: "趣味",
      content:
        "私は技術の最前線を探求することに情熱を注いでおり、特にコンピュータサイエンス、人工知能、逆アセンブリ分野に興味を持っています。\nさらに、ゲーム開発やゲーム技術にも強い関心を持っており、余暇には新しいゲームメカニクスやゲームプレイを探求するために小さなゲームプロジェクトを開発することがよくあります。\n音楽は私の生活の中で重要な部分を占めており、楽器を演奏するのが好きです。特にフルート、ギター、そしていくつかの中国楽器を演奏しています。音楽は私の創造性と考え方に無限のインスピレーションを与えてくれます。\n余暇には読書、オープンソースプロジェクトへの参加、旅行や写真撮影も楽しんでおり、これらを通じて異なる文化から新しい視点とインスピレーションを得ています。",
    },
  },
  projects: {
    title: "研究とプロジェクト",
    viewMore: "詳細を見る",
    research: {
      title: "研究論文/学位論文",
      items: [
        {
          title: "可視化技術によるSIMDアセンブリ言語開発の強化",
          description:
            "この論文では、SIMDアセンブリ言語命令を可視化するための動的な方法を紹介し、SIMD命令の実行プロセスをプログラマーがより直感的に理解できるようにデータフロー駆動の可視化アプローチを使用するPixelAssemblySIMDツールを提案します。このツールは、Rustで書かれたCPUエミュレータを組み込み、WebAssemblyを含むクロスプラットフォーム互換性をサポートしています。論文の貢献には、汎用的な可視化方法の提案、PixelAssemblySIMDツールの開発、および教育、デバッグ、セキュリティ分析での有効性を示すユーザー評価が含まれています。他のツールと比較して、PixelAssemblySIMDはデータ精度と可視化の直感性において優れた利点を提供します。",
          language: "英語",
          link: "https://waseda.repo.nii.ac.jp/records/2001309",
        },
        {
          title: "クラウド環境における透明なTCM支援機構の設計と実装",
          description:
            "この論文は、クラウド環境における透明な信頼できる暗号モジュール（TCM）サポートメカニズムの設計と実装に焦点を当てています。このメカニズムは、クラウド仮想マシンに対して仮想信頼できるプラットフォームモジュール（vTCM）を統合できるようにし、クラウドインフラに変更を加えることなく実現します。仮想マシンの起動コマンドを監視し、信頼できるルートサポートを追加して、各仮想マシンをvTCMにバインドします。このシステムは最大255台の仮想マシンにTCMサポートを提供し、キー作成、暗号化/復号化、署名、整合性報告などの機能を提供します。また、TCMの設定はユーザーに透明であり、性能のオーバーヘッドは最小限に抑えられます。提案された解決策は、仮想マシンの信頼性を確保することによって、スケーラブルで効率的な方法でクラウドセキュリティを強化することを目的としています。",
          language: "中国語",
          link: "",
        },
      ],
    },
    personal: {
      title: "個人プロジェクト",
      items: [
        {
          title: "CheshireLane",
          description: "アニメ艦隊ゲームの概念実証プライベートサーバー",
          link: "https://github.com/Irminsul-dev/CheshireLane-Public",
        },
        {
          title: "brainfuck",
          description: "JITサポートを備えたシンプルなBrainfuckインタプリタ",
          link: "https://github.com/Akiko97/brainfuck",
        },
        {
          title: "BCut2SRT",
          description:
            "BCut JSONファイルをSRT形式に変換するコマンドラインツール",
          link: "https://github.com/Akiko97/bcut2srt",
        },
      ],
    },
  },
  gallery: {
    title: "ギャラリー",
    description: "私の人生と旅のスナップショット。",
    items: [
      {
        src: "/images/fuji.png",
        alt: "富士山",
        caption: "富士山、湘南海岸より撮影（2024年春、iPhone 15 Pro Max）",
      },
      {
        src: "/images/hachijo.png",
        alt: "八丈島",
        caption: "八丈島（2024年春、iPhone 15 Pro Max）",
      },
      {
        src: "/images/toya.png",
        alt: "洞爺湖",
        caption: "洞爺湖（2023年秋、iPhone 15 Pro Max）",
      },
      {
        src: "/images/temple-of-heaven.png",
        alt: "天壇",
        caption: "天壇（2024年秋、iPhone 15 Pro Max）",
      },
    ],
  },
  contact: {
    title: "連絡先",
    description: "以下のいずれかの方法でお気軽にご連絡ください：",
    email: "collies-04.venues$at$icloud.com",
    telegram: "akiko97",
    discord: "akiko97(akiko97#6666)",
    discordLink: "https://discord.com/users/978263799779954708",
    github: "Akiko97",
    githubLink: "https://github.com/Akiko97",
    email_intro: "このメールは iCloud+ によって提供されています",
  },
};

const zh: TranslationData = {
  nav: {
    home: "首页",
    about: "关于",
    projects: "项目",
    gallery: "画廊",
    contact: "联系",
  },
  home: {
    welcome: "嗨 \uD83D\uDC4B，我是钟中",
    subtitle: "一位兴趣使然的全栈开发者",
    quote: "星海幽暗，孤寂无垠。 \n直到有人点燃了自我。 \n宇宙才拥有最初的光。",
  },
  about: {
    title: "关于我",
    basic: {
      title: "基本信息",
      name: {
        title: "姓名",
        content: "钟中",
      },
      hometown: {
        title: "家乡",
        content: "中国 北京市",
      },
      previous_residence: {
        title: "曾住所",
        content: "日本 东京都 新宿区",
      },
      current_residence: {
        title: "现住所",
        content: "中国 北京市 大兴区",
      },
      specialization: {
        title: "专业领域",
        content: "IT（全栈开发者、信息安全、高性能计算）",
      },
      language: {
        title: "语言能力",
        content: "中文（普通话，母语），英语，日语（N1）",
      },
      github: "https://github.com/Akiko97",
    },
    education: {
      title: "教育经历",
      items: [
        {
          degree: {
            title: "学位",
            content: "工学博士",
          },
          dates: "2025.09 - 至今",
          university: {
            title: "学校",
            content: "北京工业大学",
          },
          faculty: {
            title: "学院",
            content: "计算机学院",
          },
          department: {
            title: "系",
            content: "计算机系",
          },
          major: {
            title: "专业",
            content: "计算机科学与技术",
          },
          laboratory: {
            title: "研究室",
            content: "可信计算北京市重点实验室",
          },
          focus: {
            title: "研究方向",
            content: "网络空间安全",
          },
        },
        {
          degree: {
            title: "学位",
            content: "工学硕士",
          },
          dates: "2021.09 - 2024.03",
          university: {
            title: "学校",
            content: "早稻田大学",
          },
          faculty: {
            title: "学院",
            content: "基干理工学研究科",
          },
          department: {
            title: "系",
            content: "信息理工系",
          },
          major: {
            title: "专业",
            content: "信息理工与信息通信",
          },
          laboratory: {
            title: "研究室",
            content: "上田研究室",
          },
          focus: {
            title: "研究方向",
            content: "高性能计算，并行计算",
          },
        },
        {
          degree: {
            title: "学位",
            content: "工学学士",
          },
          dates: "2016.09 - 2020.07",
          university: {
            title: "学校",
            content: "北京工业大学",
          },
          faculty: {
            title: "学院",
            content: "计算机学院",
          },
          department: {
            title: "系",
            content: "网络空间安全系",
          },
          major: {
            title: "专业",
            content: "信息安全",
          },
          laboratory: {
            title: "研究室",
            content: "可信计算北京市重点实验室",
          },
          focus: {
            title: "研究方向",
            content: "Linux内核安全，可信计算",
          },
        },
      ],
    },
    experience: {
      title: "工作经验",
      items: [
        {
          job_title: "研究员（实习）",
          company: "可信云科（北京）技术有限公司重明研究院",
          location: "中国北京市海淀区",
          dates: "2024.04 - 2025.08",
          infos: [
            "协助国家信息中心完成国家发展和改革委员会的研究课题：“人工智能技术对‘十五五’我国网络安全带来的机遇与挑战研究”。",
            "设计并开发了公司可信计算数字孪生沙盘项目的后端（包括数据库、中间件和后端），提升了系统的可靠性和性能。",
            "开发了公司可信计算安全可视化项目的后端，优化了数据流和可视化效率，并实现了一个从TCP到HTTP的通用协议转换工具。",
            "设计了某公司负载均衡设备的国产化可信适配方案。",
            "使用Axum构建高性能后端服务，利用Protobuf和gRPC优化数据序列化和通信协议，使用SurrealDB进行高效的数据库管理和高可用性，运用Bevy ECS设计了一个灵活的模块化架构，用于实时数据处理和系统管理。",
          ],
        },
      ],
    },
    skills: {
      title: "技术技能",
      items: [
        {
          title: "编程语言",
          items: [
            "Rust",
            "C/C++",
            "Python",
            "Java",
            "JavaScript/TypeScript",
            "Swift",
            "Go",
            "Lua",
            "OCaml",
          ],
        },
        {
          title: "Web 开发",
          items: [
            "HTML5, CSS3, TailwindCSS",
            "前端框架: Vue.js, Svelte",
            "工具链: Node.js, Bun, Deno",
            "RESTful APIs, WebSocket protocols, gRPC(Protobuf)",
          ],
        },
        {
          title: "系统开发",
          items: [
            "内核开发",
            "系统编程",
            "驱动程序开发",
            "性能优化",
            "嵌入式编程",
          ],
        },
        {
          title: "开发工具与实践",
          items: [
            "基于 Linux 的开发环境",
            "基于 macOS 的开发环境",
            "版本控制：Git",
          ],
        },
        {
          title: "基础设施与云技术",
          items: [
            "数据库: MySQL, MongoDB, PostgreSQL, SurrealDB",
            "Docker 容器化",
            "云计算: AWS, Azure",
          ],
        },
        {
          title: "其他技能",
          items: [
            "逆向工程: IDA Pro, Ghidra",
            "游戏引擎: Unity, Godot, Unreal Engine",
            "集成开发环境: VSCode, IntelliJ, Xcode",
            "数字音频工作站: Adobe Audition, Logic Pro",
            "视频编辑: Adobe Premiere Pro, Final Cut Pro",
            "图片编辑: Adobe Photoshop",
            "3D 制作: Blender",
          ],
        },
      ],
    },
    hobbies: {
      title: "兴趣爱好",
      content:
        "我热衷于探索科技前沿，尤其对计算机科学、人工智能以及逆向工程领域充满兴趣。\n除此之外，我对游戏开发和游戏技术有着浓厚的兴趣，常常在空余时间开发一些小型游戏项目，探索新的游戏机制和玩法。\n音乐也是我生活中的重要部分，我喜欢弹奏乐器，尤其是长笛、吉他以及一些中国乐器，音乐为我的创作和思维提供了源源不断的灵感。\n在业余时间，我还喜欢阅读书籍、参与开源项目，以及旅行探险、拍摄照片，这让我能够从不同的文化中汲取新的思维和灵感。",
    },
  },
  projects: {
    title: "研究与项目",
    viewMore: "查看更多",
    research: {
      title: "研究论文/学位论文",
      items: [
        {
          title: "通过可视化技术增强SIMD汇编语言开发",
          description:
            "这篇论文介绍了一种用于可视化SIMD汇编语言指令的动态方法，并提出了PixelAssemblySIMD工具，通过数据流驱动的可视化方式帮助程序员更直观地理解SIMD指令的执行过程。该工具结合了Rust编写的CPU仿真器，支持跨平台兼容性，包括WebAssembly。论文的贡献包括：提出了一种通用的可视化方法，开发了PixelAssemblySIMD工具，并通过用户评估证明了其在教学、调试和安全分析中的有效性，相比于其他工具，PixelAssemblySIMD在数据准确性和可视化直观性方面具有优势。",
          language: "英语",
          link: "https://waseda.repo.nii.ac.jp/records/2001309",
        },
        {
          title: "云环境透明可信密码模块⽀撑机制设计实现",
          description:
            "这篇论文集中于在云环境中设计和实现透明的可信密码模块（TCM）支撑机制。该机制使得虚拟可信平台模块（vTCM）能够集成到云虚拟机中，无需对云基础设施进行更改。它监控虚拟机启动命令，拦截并添加可信根支持，从而将每个虚拟机与vTCM绑定。该系统支持最多255台虚拟机接入TCM，提供密钥创建、加解密、签名和完整性报告等功能。它还确保TCM设置对用户透明，且性能开销最小。所提出的解决方案旨在通过确保虚拟机的可信性，在可扩展和高效的方式下增强云安全性。",
          language: "中文",
          link: "",
        },
      ],
    },
    personal: {
      title: "个人项目",
      items: [
        {
          title: "CheshireLane",
          description: "一款动漫舰队游戏的概念验证私服",
          link: "https://github.com/Irminsul-dev/CheshireLane-Public",
        },
        {
          title: "brainfuck",
          description: "一个简单的Brainfuck解释器，支持JIT",
          link: "https://github.com/Akiko97/brainfuck",
        },
        {
          title: "BCut2SRT",
          description: "一个将BCut JSON文件转换为SRT格式的命令行工具",
          link: "https://github.com/Akiko97/bcut2srt",
        },
      ],
    },
  },
  gallery: {
    title: "画廊",
    description: "生活与旅行的掠影。",
    items: [
      {
        src: "/images/fuji.png",
        alt: "富士山",
        caption: "富士山，拍摄于湘南海岸（2024春，iPhone 15 Pro Max）",
      },
      {
        src: "/images/hachijo.png",
        alt: "八丈岛",
        caption: "八丈岛（2024春，iPhone 15 Pro Max）",
      },
      {
        src: "/images/toya.png",
        alt: "洞爷湖",
        caption: "洞爷湖（2023秋，iPhone 15 Pro Max）",
      },
      {
        src: "/images/temple-of-heaven.png",
        alt: "天坛",
        caption: "天坛（2024秋，iPhone 15 Pro Max）",
      },
    ],
  },
  contact: {
    title: "联系我",
    description: "欢迎通过以下任何方式与我联系：",
    email: "collies-04.venues$at$icloud.com",
    telegram: "akiko97",
    discord: "akiko97(akiko97#6666)",
    discordLink: "https://discord.com/users/978263799779954708",
    github: "Akiko97",
    githubLink: "https://github.com/Akiko97",
    email_intro: "此邮箱由 iCloud+ 提供支持",
  },
};

export const translations = {
  en,
  ja,
  zh,
};
