import React, { useState, useEffect } from 'react';
import { Zap, Headphones, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import './TestimonialsCarousel.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const cardsData = [
  { text: "التطبيق سهل علينا بزاف معالجة الطلبات، كلشي تيدار من بلاصة وحدة وبسرعة كبيرة. خلا الزبائن راضين وخدمتي ولا أحسن.", badgeIcon: <path d="M13 2 3 14h7l-1 8 10-12h-7z" />, badge: "استجابة سريعة", name: "ياسين أمغار", role: "تاجر هواتف", type: "soft" },
  { text: "SIM Services وفر علينا الوقت والجهد اليومي، كل طلب كنقدر نتبعه خطوة بخطوة والواضح قدام عيني. منصة احترافية فعلاً.", badgeIcon: <path d="m12 2.8 2.8 5.68 6.27.91-4.54 4.42 1.07 6.24L12 17.06 6.4 20.05l1.07-6.24L2.93 9.39l6.27-.91L12 2.8z" />, badge: "تجربة مميزة", name: "سفيان العلوي", role: "نقطة بيع", type: "primary" },
  { text: "الدعم سريع وكيجاوبو في الوقت المناسب، المنصة ساعدتنا نكونو أكثر فعالية ونخدمو البزاف ديال الزبائن بكل سهولة.", badgeIcon: <><path d="M21 15a4 4 0 0 1-4 4h-2l-4 2v-2H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /><path d="M12 8a4 4 0 0 1 4 4" /></>, badge: "دعم متواصل", name: "رضا بلمير", role: "متجر خدمات", type: "soft" },
  { text: "من بعد ما بدأنا نخدمو بالتطبيق، ولّينا نعرفو حالة كل طلب بسرعة، وهذا ساعدنا ننظمو الخدمة بشكل أفضل.", badgeIcon: <><path d="M4 12h16" /><path d="M12 4v16" /></>, badge: "تنظيم أفضل", name: "أيوب الكتاني", role: "محل اتصالات", type: "soft" },
  { text: "أكثر حاجة عجباتني هي وضوح الطلبات، ما بقيناش نضيعو الوقت فالمتابعة اليدوية، وكلشي ولى مجموع فمكان واحد.", badgeIcon: <><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></>, badge: "سهولة أكبر", name: "حمزة بناني", role: "نقطة بيع", type: "soft" },
  { text: "الخدمة ولات أسرع، والزبون كيرجع لينا حيت كيلقى الرد والمتابعة فوقت قصير. التطبيق زاد الثقة بيننا وبين العملاء.", badgeIcon: <path d="M12 2 4 5v6c0 5 3.5 8.74 8 10 4.5-1.26 8-5 8-10V5z" />, badge: "ثقة أعلى", name: "كريم الإدريسي", role: "تاجر خدمات", type: "soft" }
];

export const TestimonialsCarousel = () => {
  const [active, setActive] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const total = cardsData.length;

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActive(a => mod(a + 1, total));
    }, 3600);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setActive(a => mod(a + 1, total));
  const handlePrev = () => setActive(a => mod(a - 1, total));
  const goTo = (i: number) => setActive(i);

  const getCardClass = (i: number) => {
    const diff = mod(i - active, total);
    let cls = "t-card";
    if (diff === 0) cls += " is-active";
    else if (diff === total - 1) cls += " is-prev";
    else if (diff === 1) cls += " is-next";
    else if (diff === total - 2) cls += " is-far-prev";
    else if (diff === 2) cls += " is-far-next";
    return cls;
  };

  return (
    <div className="py-20 w-full flex justify-center bg-[#fff8f5]" dir="rtl">
      <section 
        className="sim-testimonials" 
        aria-labelledby="testimonials-title"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="dots left"></span>
        <span className="dots right"></span>
        <span className="float-glow g1"></span>
        <span className="float-glow g2"></span>
        <span className="float-glow g3"></span>

        <motion.div 
          className="chip"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} transition={{ duration: 0.5 }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
          آراء التجار
        </motion.div>

        <motion.header 
          className="section-head"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 id="testimonials-title">ماذا يقول التجار عن <span className="brand">SIM Services</span>؟</h2>
          <p className="sub">تجارب حقيقية من تجار ومهنيين في المغرب يثقون في السرعة، السهولة والدعم المستمر.</p>
        </motion.header>

        <div className="float-row">
          <div className="mini-box mini-left">
            <div className="mini-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-6.5-3.7-8.7-8.3C1.5 8.9 3.2 5 7 5c2.1 0 3.6 1.1 5 2.8C13.4 6.1 14.9 5 17 5c3.8 0 5.5 3.9 3.7 7.7C18.5 17.3 12 21 12 21z" />
                <path d="m9.5 12.5 1.7 1.7 3.5-4" />
              </svg>
            </div>
            <div><strong>موثوق من</strong><small>آلاف التجار</small></div>
          </div>

          <div className="mini-box mini-right">
            <div className="mini-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 20V10" />
                <path d="M10 20V4" />
                <path d="M16 20v-7" />
                <path d="M20 8 16 4l-4 4" />
              </svg>
            </div>
            <div>
              <div className="value">+10K</div><small>تاجر نشيط</small>
            </div>
          </div>
        </div>

        <motion.div 
          className="carousel-shell"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="nav-btn nav-next" type="button" aria-label="التالي" onClick={handleNext}>
            <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <button className="nav-btn nav-prev" type="button" aria-label="السابق" onClick={handlePrev}>
            <svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <div className="testimonial-stage">
            {cardsData.map((c, i) => (
              <article key={i} className={getCardClass(i)}>
                <div className="card-head">
                  <div className="stars">★★★★★</div>
                  <div className="quote">“</div>
                </div>
                
                <div className="content">{c.text}</div>
                <div className="divider"></div>
                <div className="footer">
                  <div className="badge soft"><svg viewBox="0 0 24 24">{c.badgeIcon}</svg>{c.badge}</div>
                  <div className="person">
                    <div><strong>{c.name}</strong><small>{c.role}</small></div>
                    <div className="avatar-initials">
                      {c.name.split(' ').map(n => n[0]).join(' ')}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="dots-nav">
            {cardsData.map((_, i) => (
              <button key={i} className={`dot-btn ${i === active ? 'active' : ''}`} type="button" aria-label={`عرض الرأي ${i + 1}`} onClick={() => goTo(i)}></button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="benefits"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="benefit">
            <div className="bicon"><Zap size={32} /></div>
            <div><strong>سرعة الإنجاز</strong><small>معالجة الطلبات في دقائق</small></div>
          </div>
          <div className="benefit">
            <div className="bicon"><Headphones size={32} /></div>
            <div><strong>دعم متواصل</strong><small>فريق دعم جاهز لخدمتكم</small></div>
          </div>
          <div className="benefit">
            <div className="bicon"><Smartphone size={32} /></div>
            <div><strong>سهولة الاستخدام</strong><small>واجهة بسيطة وتجربة سلسة</small></div>
          </div>
        </motion.div>

        <motion.div 
          className="cta-wrap"
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a className="cta" href="#">انضم إلى التجار الآن <svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg></a>
        </motion.div>
      </section>
    </div>
  );
};