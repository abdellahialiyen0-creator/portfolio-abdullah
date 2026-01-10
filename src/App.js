import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ExternalLink, Code2, Smartphone, Database, Palette, ChevronDown, MessageSquare, Facebook, Monitor, Zap, Layout, Lightbulb, Cpu, Rocket, CheckCircle2, ChevronUp, Copy, Check } from 'lucide-react';

const SKILLS_DATA = [
  { name: 'React & TypeScript', icon: Code2, description: 'بناء تطبيقات ويب تفاعلية وحديثة', color: 'from-cyan-500 to-blue-500' },
  { name: 'Flutter', icon: Smartphone, description: 'تطوير تطبيقات موبايل متعددة المنصات', color: 'from-blue-500 to-purple-500' },
  { name: 'Python', icon: Database, description: 'برمجة خلفية وذكاء اصطناعي', color: 'from-yellow-500 to-green-500' },
  { name: 'Tailwind CSS', icon: Palette, description: 'تصميم واجهات مستخدم عصرية', color: 'from-pink-500 to-rose-500' }
];

const TECHNOLOGIES_DATA = [
  'JavaScript', 'HTML & CSS', 'C++', 'C#', 'Git & GitHub',
  'Vercel', 'Convex', 'Clerk Auth', 'Vite', 'npm', 'REST APIs'
];


const FAQ_DATA = [
  {
    question: 'كم يستغرق بناء الموقع؟',
    answer: 'بفضل استخدامي لأحدث تقنيات الذكاء الاصطناعي في البرمجة، أستطيع تسليم المواقع التعريفية في وقت قياسي يتراوح بين 3 إلى 7 أيام، مع ضمان أعلى جودة للكود.'
  },
  {
    question: 'هل تقدم دعماً فنياً بعد التسليم؟',
    answer: 'بكل تأكيد، أقدم دعماً مجانياً لمدة شهر بعد التسليم لضمان استقرار العمل، مع إمكانية التعاقد للصيانة المستمرة.'
  },
  {
    question: 'هل يمكنني التعديل على الموقع لاحقاً؟',
    answer: 'نعم، أقوم ببناء المواقع باستخدام كود نظيف وهيكلية تسمح بالإضافات والتعديلات المستقبلية بكل سهولة.'
  }
];

const SERVICES_DATA = [
  {
    title: 'تطوير المواقع',
    desc: 'بناء مواقع سريعة ومتجاوبة باستخدام React و Tailwind CSS، مع التركيز على تجربة المستخدم.',
    icon: Monitor,
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'تطبيقات الموبايل',
    desc: 'تطوير تطبيقات متكاملة لنظامي Android و iOS باستخدام Flutter بجودة عالية وأداء ممتاز.',
    icon: Smartphone,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    title: 'تصميم الواجهات',
    desc: 'تحويل التصاميم الإبداعية إلى كود نظيف وقابل للتطوير مع إضافة لمسات جمالية فريدة.',
    icon: Layout,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400'
  },
  {
    title: 'تحسين الأداء',
    desc: 'تحليل وتسريع المواقع الحالية وضمان توافقها مع محركات البحث SEO بشكل مثالي.',
    icon: Zap,
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400'
  }
];

const PROCESS_DATA = [
  {
    step: '01',
    title: 'التخطيط والتحليل',
    desc: 'نبدأ بمناقشة فكرتك بدقة، وفهم أهدافك والجمهور المستهدف لوضع خارطة طريق واضحة.',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: '02',
    title: 'التصميم والتطوير',
    desc: 'تحويل الأفكار إلى تصاميم ملموسة ثم كتابة كود نظيف وقابل للتطوير باستخدام أحدث التقنيات.',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: '03',
    title: 'الاختبار والجودة',
    desc: 'التأكد من أن كل وظيفة في الموقع أو التطبيق تعمل بدقة وسرعة على جميع الأجهزة والمتصفحات.',
    icon: CheckCircle2,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    step: '04',
    title: 'الإطلاق والدعم',
    desc: 'تسليم المشروع النهائي مع تقديم دعم تقني مستمر لضمان استقرار ونجاح عملك الرقمي.',
    icon: Rocket,
    color: 'from-amber-500 to-orange-500'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ['مطور Full Stack', 'تطوير تطبيقات Flutter', 'حلول الذكاء الاصطناعي'];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTitle = titles[typewriterIndex];
      if (!isDeleting) {
        setTypewriterText(currentTitle.substring(0, typewriterText.length + 1));
        if (typewriterText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypewriterText(currentTitle.substring(0, typewriterText.length - 1));
        if (typewriterText === '') {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, typewriterIndex]);

  const copyEmail = () => {
    const email = "AbdellahiAliyen0@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 3D Tilt calculation for profile
  const tiltX = (mousePosition.y - window.innerHeight / 2) / 25;
  const tiltY = -(mousePosition.x - window.innerWidth / 2) / 25;

  useEffect(() => {
    // Fake loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 800);
      }
      setLoadingProgress(Math.floor(progress));
    }, 200);

    // Intersection Observer for scroll reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[1000] bg-[#020204] flex flex-col items-center justify-center space-y-8 px-6">
          <div className="relative">
            <Code2 className="w-20 h-20 text-cyan-400 animate-pulse" />
            <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl animate-pulse rounded-full"></div>
          </div>
          <div className="w-full max-w-[280px] space-y-4">
            <div className="flex justify-between text-xs font-bold tracking-widest text-cyan-400/60 uppercase">
              <span>System Loading</span>
              <span>{loadingProgress}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.5em] animate-pulse">Initializing Environment</div>
        </div>
      )}

      <div className={`min-h-screen bg-[#020204] text-white selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden font-arabic relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`} dir="rtl">
        {/* Interactive Spotlight Glow */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.05), transparent 80%)`
          }}
        ></div>

        {/* Scroll Progress Bar */}
        <div
          className="fixed top-0 right-0 h-1 bg-gradient-to-l from-cyan-500 via-purple-500 to-pink-500 z-[60] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[#020204]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.08),transparent_50%)]"></div>

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              transform: `translateY(${scrollY * 0.5}px)`
            }}></div>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-[#020204]/80 backdrop-blur-2xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-[#020204]/50 border border-white/10 p-1 rounded-xl backdrop-blur-md transform group-hover:scale-105 transition-all duration-500 overflow-hidden">
                    <img src="/logo_aa.png" alt="AA Logo" className="w-10 h-10 object-contain" />
                  </div>
                </div>
                <span className="mr-3 text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">عبدالله عالين</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-1">
                {[
                  { id: 'home', label: 'الرئيسية' },
                  { id: 'about', label: 'نبذة' },
                  { id: 'services', label: 'خدماتي' },
                  { id: 'skills', label: 'المهارات' },
                  { id: 'projects', label: 'المشاريع' },
                  { id: 'contact', label: 'تواصل' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-5 py-2 rounded-lg transition-all duration-300 font-medium ${activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-cyan-500/5 rounded-lg border border-cyan-500/10"></div>
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-[#020204]/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="px-4 py-6 space-y-3">
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'about', label: 'نبذة' },
                { id: 'services', label: 'خدماتي' },
                { id: 'skills', label: 'المهارات' },
                { id: 'projects', label: 'المشاريع' },
                { id: 'contact', label: 'تواصل' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-right px-4 py-3 rounded-lg transition-all ${activeSection === item.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            {/* Hero Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Side */}
              <div className="space-y-8 text-right lg:text-right">
                <div className="space-y-4">
                  <div className="inline-block animate-slideDown">
                    <span className="text-cyan-400 text-lg font-medium tracking-wider px-4 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10">مرحباً، أنا</span>
                  </div>
                  <h1 className="text-2xl md:text-5xl font-bold animate-slideDown py-6 leading-tight" style={{ animationDelay: '0.1s' }}>
                    <span className="inline-block bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                      عبدالله عالين
                    </span>
                  </h1>
                  <div className="flex flex-col items-start space-y-4 animate-slideDown" style={{ animationDelay: '0.2s' }}>
                    <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-tight h-10">
                      {typewriterText}
                      <span className="inline-block w-1 h-8 bg-cyan-400 mr-2 animate-pulse align-middle"></span>
                    </p>
                    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                      <span className="text-xl">🇲🇷</span>
                      <span className="text-sm text-gray-300 font-medium">من موريتانيا</span>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-400 max-w-xl leading-relaxed animate-slideUp font-light" style={{ animationDelay: '0.3s' }}>
                  أقوم بتحويل الأفكار المعقدة إلى تجارب رقمية بسيطة وجميلة باستخدام أحدث تقنيات الويب والموبايل.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-start gap-6 animate-slideUp pt-4" style={{ animationDelay: '0.4s' }}>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/20 w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                    <span className="relative flex items-center justify-center gap-2 text-white font-bold">
                      <span>استكشف المشاريع</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                    </span>
                  </button>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group px-8 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:scale-105 backdrop-blur-md w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center gap-2 font-bold">
                      <span>تواصل معي</span>
                      <MessageSquare className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative order-first lg:order-last flex justify-center lg:justify-end animate-fadeIn pb-12 lg:pb-0" style={{ animationDelay: '0.5s' }}>
                <div className="relative group">
                  {/* Decorative Background Element */}
                  <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>

                  {/* Animated Rings */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-[3rem] opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>

                  {/* Main Image Container */}
                  <div
                    className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-[2.8rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050508] transition-transform duration-200 ease-out"
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
                    }}
                  >
                    <img
                      src="/profile.jpg"
                      alt="عبدالله عالين"
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Premium Glass Overlays */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#020204] via-[#020204]/40 to-transparent"></div>
                    <div className="absolute inset-0 border-[8px] border-white/5 rounded-[2.8rem] pointer-events-none"></div>
                  </div>

                  {/* Floating Badge - Available for work */}
                  <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white/5 backdrop-blur-2xl border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl animate-bounce delay-700 z-20">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                        <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
                      </div>
                      <span className="text-xs md:text-sm font-bold text-white tracking-tight">متاح للمشاريع</span>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-2xl border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-black text-cyan-400 font-outfit leading-none">2+</div>
                      <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-tighter">Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32 overflow-hidden reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase px-4 py-2 bg-cyan-500/5 rounded-lg border border-cyan-500/10">
                    نبذة عني
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  أصنع حلولاً <span className="text-cyan-400 italic">ذكية</span><br /> لتحديات اليوم
                </h2>
                <div className="space-y-4 text-xl text-gray-400 font-light leading-relaxed">
                  <p>
                    أنا مطور من موريتانيا، شغوف ببناء تطبيقات تجمع بين الأداء العالي والتصميم العصري.
                  </p>
                  <p>
                    خبرتي تمتد من واجهات المستخدم المتقدمة بـ React إلى تطبيقات الموبايل بـ Flutter، مع تركيز قوي على تجربة المستخدم (UX).
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
                    <div className="text-3xl font-bold text-cyan-400 font-outfit">2+</div>
                    <div className="text-sm text-gray-500">سنوات من الخبرة</div>
                  </div>
                  <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
                    <div className="text-3xl font-bold text-purple-400 font-outfit">10+</div>
                    <div className="text-sm text-gray-500">مشاريع مكتملة</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50"></div>
                <div className="relative bg-[#020204] border border-white/10 p-10 rounded-[2rem] backdrop-blur-2xl">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Palette className="text-cyan-400" />
                    <span>الخبرات الرئيسية</span>
                  </h3>
                  <div className="space-y-6">
                    {SKILLS_DATA.map((skill, i) => (
                      <div key={i} className="group cursor-default">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500 group-hover:text-cyan-400 transition-colors">متقدم</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transform transition-transform duration-1000 origin-right`}
                            style={{ width: '90%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-32 overflow-hidden bg-white/[0.01] reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 space-y-4">
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">بماذا يمكنني مساعدتك؟</span>
              <h2 className="text-4xl md:text-5xl font-bold">خدماتي البرمجية</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">أقدم حلولاً تقنية متكاملة مصممة خصيصاً لتلبية احتياجاتك ونمو مشروعك</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES_DATA.map((service, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`}></div>
                  <div className="relative space-y-6">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <section id="process" className="relative py-32 overflow-hidden reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 space-y-4">
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm font-outfit">How I Work</span>
              <h2 className="text-4xl md:text-5xl font-bold">رحلة تحويل فكرتك إلى واقع</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">خطوات واضحة ومدروسة لضمان جودة مخرجات مشروعك الرقمي</p>
            </div>

            <div className="relative">
              {/* Connection Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {PROCESS_DATA.map((item, i) => (
                  <div key={i} className="group flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      {/* Circle Background */}
                      <div className={`w-24 h-24 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/20`}>
                        <item.icon className="w-10 h-10 text-gray-400 group-hover:text-cyan-400 transition-colors duration-500" />
                      </div>
                      {/* Step Number Badge */}
                      <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-sm font-bold shadow-lg z-20`}>
                        {item.step}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Marquee Section */}
        <section id="skills" className="relative py-24 bg-white/[0.01] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">بيئة العمل والتقنيات</h2>
            <p className="text-gray-500">أدوات أستخدمها لبناء مشاريع قوية وسريعة</p>
          </div>

          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
              {[...TECHNOLOGIES_DATA, ...TECHNOLOGIES_DATA].map((tech, i) => (
                <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-gray-300 font-medium text-lg">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="space-y-4 text-right">
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">أعمالي</span>
                <h2 className="text-5xl font-bold">مشاريع مختارة</h2>
              </div>
              <p className="text-gray-500 max-w-sm text-right">نظرة على بعض المشاريع التي قمت بتطويرها مؤخراً</p>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#020204] border border-white/10 rounded-[2.5rem] overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-16 space-y-8 flex flex-col justify-center">
                    <div className="flex gap-2">
                      {['React', 'TypeScript', 'Convex'].map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-4xl font-bold">TornicMobile</h3>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                      لعبة ورق موريتانية متكاملة للعب الجماعي عبر الإنترنت، تعيد إحياء التراث بطابع عصري.
                    </p>
                    <a href="https://tornic-mobile.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-cyan-400 font-bold group/link">
                      <span>زيارة الموقع</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:translate-x-[-4px] transition-transform" />
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-16 flex items-center justify-center">
                    <div className="relative w-full aspect-video bg-[#020204] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group/img">
                      {/* Scanner Effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-20 opacity-0 group-hover/img:opacity-100 group-hover/img:animate-scan shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
                      <div className="absolute inset-x-0 top-0 h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="mt-10 flex flex-col items-center gap-4 px-8">
                        <div className="h-2 w-24 bg-white/10 rounded-full animate-pulse"></div>
                        <div className="grid grid-cols-2 w-full gap-4">
                          <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
                          <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section id="faq" className="relative py-32">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold">الأسئلة الشائعة</h2>
              <p className="text-gray-500">إجابات سريعة على تساؤلاتك المتكررة</p>
            </div>
            <div className="space-y-4">
              {FAQ_DATA.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:border-white/20 transition-all">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.question}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="relative z-10 space-y-12">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                هل تبحث عن <br />
                <span className="text-cyan-400 italic">شريك تقني؟</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                أنا متاح دائماً للمشاريع الجديدة والمبتكرة. دعنا نتحدث حول كيفية تحقيق رؤيتك.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://wa.me/22237783203" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-colors">
                  <span>واتساب</span>
                  <Phone className="w-5 h-5" />
                </a>
                <button
                  onClick={copyEmail}
                  className="relative flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all group overflow-hidden"
                >
                  <span className={`flex items-center gap-3 transition-all duration-300 ${copied ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                    <span>بريد إلكتروني</span>
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center gap-3 text-cyan-400 transition-all duration-300 ${copied ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <span>تم النسخ!</span>
                    <Check className="w-5 h-5" />
                  </span>
                </button>
                <a href="https://www.facebook.com/abdellahi.aliyon/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 px-10 py-5 bg-blue-600/10 border border-blue-600/20 rounded-full font-bold hover:bg-blue-600/20 transition-colors group">
                  <span>فيسبوك</span>
                  <Facebook className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/22237783203"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-8 left-8 z-[100] p-4 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce duration-[3000ms]"
        >
          <Phone className="w-6 h-6 fill-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#020204] animate-pulse"></div>
        </a>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 z-[100] p-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full shadow-2xl hover:bg-white/10 transition-all ${scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          <ChevronUp className="w-6 h-6" />
        </button>

        <footer className="relative py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 group">
              <div className="p-1 px-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/50 transition-colors bg-[#050508]">
                <img src="/logo_aa.png" alt="AA Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">عبدالله عالين</span>
            </div>
            <div className="text-gray-500 text-sm">
              صُنع بكل شغف في موريتانيا 🇲🇷
            </div>
          </div>
        </footer>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

        body {
          font-family: 'IBM Plex Sans Arabic', sans-serif;
          background-color: #020204;
          scroll-behavior: smooth;
        }

        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        .animate-scan {
          animation: scan 2s linear infinite;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }
        .animate-slideDown { animation: slideDown 1s ease-out forwards; }
        .animate-slideUp { animation: slideUp 1s ease-out forwards; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020204; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
      </div >
    </>
  );
}

export default App;