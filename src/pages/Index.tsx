import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone as PhoneIcon, Mail, MessageCircle, Download, Handshake, LogIn, Menu, X,
  ShieldCheck, Zap, Headphones, BadgeCheck, Sparkles,
  Wifi, Cable, Smartphone, RefreshCw, KeyRound, ArrowRightLeft,
  CreditCard, ShoppingBag, Rocket, Package, MoreHorizontal,
  ChevronDown, Facebook, Instagram, Linkedin, Youtube, Bell,
  Home as HomeIcon, ListOrdered, Plus, Store, Layers,
  TrendingUp, Users, Wallet, CheckCircle2, Clock, XCircle,
  Send, ArrowLeft, Building2, Star,
} from "lucide-react";
import logo from "@/assets/logo.png";
import merchant from "@/assets/merchant.png";
import sim1 from "@/assets/sim1.png";
import sim2 from "@/assets/sim2.png";
import sim3 from "@/assets/sim3.png";
import "./Index.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/* ---------------- Brand bits ---------------- */
const Logo = ({ size = 40 }: { size?: number }) => (
  <a href="#home" className="flex items-center gap-3 group">
    <img src={logo} alt="SIM Services" width={size} height={size}
      className="rounded-2xl shadow-soft" />
    <div className="leading-tight">
      <div className="font-display font-extrabold text-lg text-gradient">SIM Services</div>
      <div className="text-[11px] text-muted-foreground -mt-0.5">منصة الاتصالات الرقمية</div>
    </div>
  </a>
);

const BrandBtn = ({ children, variant = "solid", className = "", as: As = "a", ...p }: any) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300";
  const styles = {
    solid: "bg-gradient-brand text-white shadow-card hover:shadow-glow hover:-translate-y-0.5",
    ghost: "bg-white text-foreground border border-border hover:border-brand-pink/40 hover:text-brand-magenta",
    soft: "bg-white/80 backdrop-blur text-brand-magenta border border-brand-pink/20 hover:bg-white",
  }[variant as "solid" | "ghost" | "soft"];
  return <As className={`${base} ${styles} ${className}`} {...p}>{children}</As>;
};

/* ---------------- Header ---------------- */
const navItems = [
  { id: "home", label: "الرئيسية" },
  { id: "about", label: "عن التطبيق" },
  { id: "services", label: "الخدمات" },
  { id: "how", label: "كيف يعمل" },
  { id: "partners", label: "الشركاء" },
  { id: "faq", label: "الأسئلة الشائعة" },
  { id: "contact", label: "اتصل بنا" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div className="container mx-auto">
        <div className="glass-card flex items-center justify-between px-4 md:px-6 py-3">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-magenta rounded-full hover:bg-brand-pink/5 transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <BrandBtn variant="ghost" href="#partners"><Handshake size={16} />كن شريكًا</BrandBtn>
            <BrandBtn href="#download"><Download size={16} />تحميل التطبيق</BrandBtn>
          </div>
          <button className="lg:hidden p-2 rounded-full hover:bg-muted" onClick={() => setOpen(!open)} aria-label="القائمة">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden glass-card mt-2 p-4 flex flex-col gap-1">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl hover:bg-brand-pink/5 text-sm font-medium">{n.label}</a>
            ))}
            <div className="flex gap-2 pt-2">
              <BrandBtn variant="ghost" className="flex-1" href="#partners">كن شريكًا</BrandBtn>
              <BrandBtn className="flex-1" href="#download">تحميل التطبيق</BrandBtn>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

/* ---------------- Phone mockup ---------------- */
const Phone = ({ children, className = "" }: any) => (
  <div className={`relative mx-auto w-[300px] h-[610px] rounded-[3rem] bg-[#0b0b0f] p-[10px] shadow-glow ${className}`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0b0b0f] rounded-b-3xl z-20" />
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-end pe-2">
      <div className="w-2 h-2 rounded-full bg-[#1f1f24]" />
    </div>
    <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-gradient-brand-soft">
      {children}
    </div>
  </div>
);

const StatusBar = () => (
  <div className="flex justify-between items-center px-6 pt-3 text-[11px] font-bold text-foreground/70">
    <span>9:41</span>
    <div className="flex items-center gap-1">
      <span>●●●</span><span>📶</span><span>🔋</span>
    </div>
  </div>
);

const HeroPhone = () => (
  <Phone>
    <StatusBar />
    <div dir="rtl" className="px-5 pt-4 pb-2 text-foreground h-full overflow-hidden">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">مرحبًا،</div>
          <div className="font-bold text-base">أحمد 👋</div>
        </div>
        <div className="relative w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-white">
          <Bell size={16} />
          <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-brand-pink text-[9px] font-bold text-white flex items-center justify-center border border-white">3</span>
        </div>
      </div>

      {/* Wallet */}
      <div className="mt-4 rounded-3xl p-4 bg-gradient-brand text-white shadow-card">
        <div className="text-[11px] opacity-90">رصيد المحفظة</div>
        <div className="text-2xl font-extrabold mt-1">12,450.00 <span className="text-sm font-bold opacity-80">د.م</span></div>
        <div className="mt-3 flex items-center justify-between">
          <button className="bg-white/95 text-brand-magenta text-xs font-bold rounded-full px-3 py-1.5 flex items-center gap-1">
            <RefreshCw size={12} />إعادة تعبئة
          </button>
          <Wallet size={28} className="opacity-80" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { v: "24", l: "طلبات اليوم", c: "text-brand-orange" },
          { v: "98%", l: "نسبة النجاح", c: "text-success" },
          { v: "5", l: "قيد المعالجة", c: "text-brand-magenta" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-2 text-center shadow-soft">
            <div className={`text-base font-extrabold ${s.c}`}>{s.v}</div>
            <div className="text-[9px] text-muted-foreground mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-bold">آخر الطلبات</div>
          <div className="text-[10px] text-brand-magenta">عرض الكل</div>
        </div>
        <div className="space-y-1.5">
          {[
            { t: "تفعيل شريحة SIM", s: "مقبول", color: "bg-success/10 text-success", Icon: CheckCircle2 },
            { t: "نقل رقم", s: "قيد المعالجة", color: "bg-warning/15 text-warning", Icon: Clock },
            { t: "استرجاع رمز PUK", s: "مرفوض", color: "bg-destructive/10 text-destructive", Icon: XCircle },
          ].map((o, i) => (
            <div key={i} className="bg-white rounded-2xl p-2.5 flex items-center justify-between shadow-soft">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-brand-soft flex items-center justify-center">
                  <Smartphone size={14} className="text-brand-magenta" />
                </div>
                <div>
                  <div className="text-[11px] font-bold">{o.t}</div>
                  <div className="text-[9px] text-muted-foreground">قبل 5 دقائق</div>
                </div>
              </div>
              <span className={`text-[9px] font-bold rounded-full px-2 py-0.5 ${o.color} flex items-center gap-1`}>
                <o.Icon size={10} />{o.s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-3 inset-x-3 bg-white rounded-3xl shadow-card flex items-center justify-around py-2 px-1">
        {[
          { Icon: HomeIcon, l: "الرئيسية", active: true },
          { Icon: ListOrdered, l: "الطلبات" },
          { Icon: Plus, l: "إضافة", center: true },
          { Icon: Store, l: "المتجر" },
          { Icon: Layers, l: "المزيد" },
        ].map((n, i) => n.center ? (
          <div key={i} className="-mt-7 w-12 h-12 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-glow">
            <n.Icon size={20} />
          </div>
        ) : (
          <div key={i} className={`flex flex-col items-center gap-0.5 ${n.active ? "text-brand-magenta" : "text-muted-foreground"}`}>
            <n.Icon size={16} />
            <span className="text-[8px] font-bold">{n.l}</span>
          </div>
        ))}
      </div>
    </div>
  </Phone>
);

/* ---------------- Floating cards ---------------- */
const FloatCard = ({ className = "", children }: any) => (
  <div className={`glass-card p-4 ${className}`}>{children}</div>
);

/* ---------------- Hero ---------------- */
const Hero = () => (
  <section id="home" className="pt-32 md:pt-36 pb-16 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Phone visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 relative"
        >
          {/* Phone visual lives here on lg */}
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
            <div className="relative flex justify-center">
              {/* <HeroPhone /> */}
              <img src={sim1} alt="SIM Services App" className="w-[280px] md:w-[320px] h-auto relative z-10 drop-shadow-2xl object-contain" />
            </div>

            {/* Floating cards */}
            <FloatCard className="absolute -top-2 md:-top-4 -right-2 w-44 md:w-48 scale-90 md:scale-100 origin-top-right z-30 animate-float">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-muted-foreground">طلبات اليوم</div>
                  <div className="text-2xl font-extrabold text-gradient">24</div>
                  <div className="text-[10px] text-success font-bold">+18% طلب جديد</div>
                </div>
                <div className="flex items-end gap-1 h-10">
                  {[35, 60, 45, 80, 55, 95, 70].map((h, i) => (
                    <div key={i} className="w-1.5 rounded-full bg-gradient-brand" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </FloatCard>

            <FloatCard className="hidden md:block absolute top-1/3 -left-6 w-52 z-20 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-brand-soft flex items-center justify-center">
                  <Clock className="text-brand-orange" size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground">متوسط وقت المعالجة</div>
                  <div className="font-extrabold">18 دقيقة</div>
                  <div className="text-[10px] text-muted-foreground">هذا اليوم</div>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="absolute bottom-6 md:bottom-20 -left-2 md:left-auto md:-right-6 w-44 md:w-48 scale-90 md:scale-100 origin-bottom-left md:origin-center z-30 animate-float">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="url(#g1)" strokeWidth="3"
                      strokeDasharray="92 100" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="hsl(22 100% 58%)" />
                        <stop offset="100%" stopColor="hsl(320 85% 52%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold">98%</div>
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground">نسبة النجاح</div>
                  <div className="font-extrabold text-sm">من الطلبات</div>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="hidden md:flex absolute -bottom-2 -left-2 w-56 z-20 animate-float-slow items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-success/15 text-success flex items-center justify-center">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <div className="text-[11px] font-bold">إشعار فوري</div>
                <div className="text-[10px] text-muted-foreground">تمت معالجة الطلب بنجاح</div>
                <div className="text-[10px] text-brand-magenta font-bold">منذ دقيقتين</div>
              </div>
            </FloatCard>
          </div>
        </motion.div>

        <div className="order-1 text-right">
          <motion.span
            initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}
            className="inline-flex pill bg-white border border-brand-pink/20 text-brand-magenta"
          >
            <Sparkles size={14} /> منصة الاتصالات الرقمية في المغرب
          </motion.span>
          <motion.h1
            initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15]"
          >
            <span className="text-gradient">SIM Services</span><br />
            منصة الاتصالات<br />
            الرقمية في المغرب
          </motion.h1>
          <motion.p
            initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg font-bold text-foreground/80"
          >
            حل متكامل للتجار والمهنيين لإدارة خدمات الاتصالات والطلبات بسرعة واحترافية.
          </motion.p>
          <motion.p
            initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-muted-foreground leading-relaxed"
          >
            يساعد تطبيق SIM Services التجار والمهنيين على تنفيذ وإدارة خدمات الاتصالات، استقبال طلبات الزبائن، وتتبع حالتها عبر منصة واحدة موثوقة وسهلة الاستخدام.
          </motion.p>
          <motion.div
            initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 flex flex-wrap gap-3 justify-start"
          >
            <BrandBtn href="#download"><Download size={18} />تحميل التطبيق</BrandBtn>
            <BrandBtn variant="ghost" href="#partners"><Handshake size={18} />الانضمام كشريك</BrandBtn>
          </motion.div>
          <motion.div
            initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {[
              { Icon: ShieldCheck, l: "منصة آمنة" },
              { Icon: Zap, l: "معالجة سريعة" },
              { Icon: Headphones, l: "دعم فني" },
              { Icon: BadgeCheck, l: "العربية • الفرنسية • الإنجليزية" },
            ].map((c, i) => (
              <span key={i} className="pill bg-white border border-border text-foreground/80 shadow-soft">
                <c.Icon size={14} className="text-brand-magenta" />{c.l}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Section heading ---------------- */
const SectionHead = ({ kicker, title, desc }: any) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp}
    transition={{ duration: 0.6 }}
    className="text-center max-w-2xl mx-auto mb-12"
  >
    {kicker && <span className="pill bg-white border border-brand-pink/20 text-brand-magenta">{kicker}</span>}
    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold"><span className="text-gradient">{title}</span></h2>
    {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
  </motion.div>
);

/* ---------------- About ---------------- */
const OrdersPhone = () => (
  <Phone className="!w-[230px] !h-[470px]">
    <StatusBar />
    <div dir="rtl" className="p-4 h-full">
      <div className="font-bold mb-3 text-sm">الطلبات</div>
      <div className="flex gap-1.5 mb-3">
        {["الكل", "مقبول", "قيد", "مرفوض"].map((t, i) => (
          <span key={i} className={`text-[9px] px-2 py-1 rounded-full font-bold ${i === 0 ? "bg-gradient-brand text-white" : "bg-white text-muted-foreground"}`}>{t}</span>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { t: "تفعيل SIM", s: "مقبول", c: "text-success bg-success/10" },
          { t: "نقل رقم", s: "قيد", c: "text-warning bg-warning/15" },
          { t: "PUK", s: "مرفوض", c: "text-destructive bg-destructive/10" },
          { t: "تعبئة", s: "مقبول", c: "text-success bg-success/10" },
          { t: "ألياف", s: "قيد", c: "text-warning bg-warning/15" },
          { t: "ADSL", s: "مقبول", c: "text-success bg-success/10" },
        ].map((o, i) => (
          <div key={i} className="bg-white rounded-xl p-2 flex items-center justify-between shadow-soft">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-brand-soft flex items-center justify-center">
                <Smartphone size={12} className="text-brand-magenta" />
              </div>
              <div className="text-[10px] font-bold">{o.t}</div>
            </div>
            <span className={`text-[9px] font-bold rounded-full px-2 py-0.5 ${o.c}`}>{o.s}</span>
          </div>
        ))}
      </div>
    </div>
  </Phone>
);

const DetailsPhone = () => (
  <Phone className="!w-[230px] !h-[470px]">
    <StatusBar />
    <div dir="rtl" className="p-4 h-full">
      <div className="flex items-center justify-between mb-3">
        <ArrowLeft size={14} />
        <div className="font-bold text-sm">تفاصيل الطلب</div>
        <MoreHorizontal size={14} />
      </div>
      <div className="bg-gradient-brand text-white rounded-2xl p-3 mb-3">
        <div className="text-[10px] opacity-90">رقم الطلب #ORD-1024</div>
        <div className="font-bold text-sm mt-1">تفعيل شريحة SIM</div>
        <div className="text-[10px] opacity-90 mt-1">الزبون: محمد العلوي</div>
      </div>
      <div className="text-[10px] font-bold mb-2">حالة الطلب</div>
      <div className="relative ps-4">
        {[
          { t: "إدخال الطلب", d: "10:24", done: true },
          { t: "إرسال الطلب", d: "10:25", done: true },
          { t: "المعالجة", d: "جارٍ", done: true, active: true },
          { t: "اكتمل", d: "—", done: false },
        ].map((s, i) => (
          <div key={i} className="relative pb-3">
            <div className={`absolute right-[-14px] top-1 w-3 h-3 rounded-full ${s.done ? "bg-gradient-brand" : "bg-muted"} ${s.active ? "ring-4 ring-brand-pink/20" : ""}`} />
            {i < 3 && <div className="absolute right-[-9px] top-4 bottom-0 w-0.5 bg-border" />}
            <div className="text-[11px] font-bold">{s.t}</div>
            <div className="text-[9px] text-muted-foreground">{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  </Phone>
);

const ReportsPhone = () => (
  <Phone className="!w-[230px] !h-[470px]">
    <StatusBar />
    <div dir="rtl" className="p-4 h-full">
      <div className="font-bold text-sm mb-3">التقارير</div>
      <div className="bg-white rounded-2xl p-3 shadow-soft mb-3 flex items-center gap-3">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="url(#g2)" strokeWidth="4"
              strokeDasharray="80 100" strokeLinecap="round" />
            <defs>
              <linearGradient id="g2"><stop offset="0%" stopColor="hsl(22 100% 58%)" /><stop offset="100%" stopColor="hsl(320 85% 52%)" /></linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold">80%</div>
        </div>
        <div>
          <div className="text-[10px] text-muted-foreground">نسبة النجاح</div>
          <div className="font-extrabold text-sm text-gradient">ممتاز</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 shadow-soft">
        <div className="text-[10px] font-bold mb-2">الطلبات أسبوعيًا</div>
        <div className="flex items-end gap-1.5 h-20">
          {[40, 65, 50, 80, 70, 95, 60].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-brand" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-muted-foreground mt-1">
          {["س", "أ", "ث", "ر", "خ", "ج", "س"].map(d => <span key={d}>{d}</span>)}
        </div>
      </div>
    </div>
  </Phone>
);

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHead
        kicker={<><Sparkles size={14} /> عن التطبيق</>}
        title="ما هو تطبيق SIM Services؟"
        desc="SIM Services هو تطبيق ذكي يسهّل على التجار والحرفيين إدارة الطلبات المرتبطة بخدمات الاتصالات في المغرب. يتيح إدخال الطلبات، تتبع حالتها، والتعامل مع مختلف الخدمات من مكان واحد وبكل سهولة."
      />
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {[
          { 
            // c: <OrdersPhone />, 
            c: <img src={sim1} alt="الطلبات" className="w-[230px] h-auto mx-auto object-contain drop-shadow-2xl" />,
            t: "الطلبات", 
            d: "اعرض جميع طلباتك بحالاتها." 
          },
          { 
            // c: <DetailsPhone />, 
            c: <img src={sim2} alt="تفاصيل الطلب" className="w-[230px] h-auto mx-auto object-contain drop-shadow-2xl" />,
            t: "تفاصيل الطلب", 
            d: "تتبع كل خطوة لحظة بلحظة." 
          },
          { 
            // c: <ReportsPhone />, 
            c: <img src={sim3} alt="التقارير" className="w-[230px] h-auto mx-auto object-contain drop-shadow-2xl" />,
            t: "التقارير", 
            d: "إحصائيات واضحة لأدائك." 
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className={`${i === 1 ? "scale-110" : "scale-95"} transition-transform`}>
              {s.c}
            </div>
            <div className="mt-6 font-extrabold text-lg text-gradient">{s.t}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);



/* ---------------- Services ---------------- */
const services = [
  { Icon: Wifi, l: "باقات جميع الشبكات" },
  { Icon: Smartphone, l: "تفعيل شرائح SIM" },
  { Icon: BadgeCheck, l: "تسجيل الأرقام" },
  { Icon: KeyRound, l: "استرجاع رمز PUK" },
  { Icon: ArrowRightLeft, l: "نقل الأرقام بين الشركات" },
  { Icon: Cable, l: "خدمات الألياف البصرية" },
  { Icon: Wifi, l: "خدمات ADSL" },
  { Icon: CreditCard, l: "التعبئة" },
  { Icon: Rocket, l: "الطلبات السريعة" },
  { Icon: ShoppingBag, l: "المتجر الإلكتروني" },
  { Icon: Package, l: "خدمات أخرى" },
];

const Services = () => (
  <section id="services" className="py-20 bg-gradient-brand-soft/40">
    <div className="container mx-auto px-4">
      <SectionHead
        kicker={<><Sparkles size={14} /> خدماتنا</>}
        title="الخدمات التي يوفرها التطبيق"
        desc="مجموعة كاملة من خدمات الاتصالات يديرها التاجر من شاشة واحدة."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
            className="soft-card p-6 text-center hover:-translate-y-1 hover:shadow-card transition-all duration-300 group"
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-brand-soft flex items-center justify-center mb-4 group-hover:bg-gradient-brand group-hover:text-white transition-all">
              <s.Icon className="text-brand-magenta group-hover:text-white" size={26} strokeWidth={1.8} />
            </div>
            <div className="font-bold text-sm">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- How it works ---------------- */
const steps = [
  { n: "1", t: "إدخال الطلب", d: "يقوم التاجر بإدخال معلومات الزبون ونوع الخدمة المطلوبة عبر التطبيق.", Icon: Plus },
  { n: "2", t: "إرسال الطلب", d: "يتم إرسال الطلب تلقائيًا إلى منصة SIM Services لمراجعته ومعالجته.", Icon: Send },
  { n: "3", t: "المعالجة", d: "تتم معالجة الطلب مع شركات الاتصالات والشركاء المعنيين دون الحاجة لتواصل مباشر مع الزبون النهائي.", Icon: RefreshCw },
  { n: "4", t: "إشعار بالنتيجة", d: "يتوصل التاجر بإشعار فوري يوضح حالة الطلب: مقبول أو مرفوض مع سبب الرفض.", Icon: Bell },
];

const HowItWorks = () => (
  <section id="how" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHead
        kicker={<><Sparkles size={14} /> آلية العمل</>}
        title="كيف يعمل التطبيق؟"
        desc="أربع خطوات بسيطة من إدخال الطلب حتى استلام النتيجة."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="glass-card p-6 h-full text-center hover:-translate-y-1 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-card mb-4">
                <s.Icon size={26} />
              </div>
              <div className="text-5xl font-display font-black text-gradient leading-none mb-2">{s.n}</div>
              <div className="font-extrabold text-lg mb-2">{s.t}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{s.d}</div>
            </div>
            {i < 3 && (
              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-3 z-10">
                <div className="w-8 h-8 rounded-full bg-white shadow-card flex items-center justify-center">
                  <ArrowLeft size={14} className="text-brand-magenta" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Partners banner ---------------- */
const Partners = () => (
  <section id="partners" className="py-20">
    <div className="container mx-auto px-4">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-brand shadow-glow">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
        <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm mx-auto max-w-md">
              <img src={merchant} alt="تاجر شريك" width={1024} height={1280}
                loading="lazy"
                className="w-full h-full object-cover" />
            </div>
            {/* Overlay cards */}
            <FloatCard className="absolute top-6 -right-2 w-44 animate-float-slow !bg-white/95">
              <div className="text-[10px] text-muted-foreground">المبيعات</div>
              <div className="text-xl font-extrabold text-gradient">+42%</div>
              <div className="flex items-end gap-1 h-8 mt-1">
                {[30, 50, 40, 70, 60, 90].map((h, i) => (
                  <div key={i} className="w-1.5 rounded-full bg-gradient-brand" style={{ height: `${h}%` }} />
                ))}
              </div>
            </FloatCard>
            <FloatCard className="absolute bottom-6 -left-2 w-48 animate-float !bg-white/95 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-brand text-white flex items-center justify-center">
                <TrendingUp size={18} />
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground">عمولات هذا الشهر</div>
                <div className="font-extrabold">8,420 د.م</div>
              </div>
            </FloatCard>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-white text-right">
            <span className="pill bg-white/20 backdrop-blur border border-white/30 text-white">
              <Handshake size={14} /> برنامج الشركاء
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              كن شريكًا مع <span className="block">SIM Services</span>
            </h2>
            <p className="mt-4 text-white/90 leading-relaxed">
              طوّر نشاطك التجاري واستقبل طلبات الزبائن مباشرة عبر التطبيق مع أدوات تساعدك على المتابعة والنمو.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { Icon: Package, l: "طلبات جاهزة" },
                { Icon: Users, l: "زبائن جدد" },
                { Icon: Layers, l: "لوحة إدارة الطلبات" },
                { Icon: Wallet, l: "عمولات مجزية" },
                { Icon: TrendingUp, l: "نمو النشاط" },
              ].map((b, i) => (
                <div key={i} className="rounded-2xl bg-white/15 backdrop-blur border border-white/25 p-3 flex items-center gap-2">
                  <b.Icon size={18} />
                  <span className="text-xs font-bold">{b.l}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-magenta font-bold px-5 py-3 text-sm hover:scale-105 transition">
                <Download size={16} />تحميل التطبيق
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white font-bold px-5 py-3 text-sm hover:bg-white/25 transition">
                <Handshake size={16} />سجّل كشريك
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white font-bold px-5 py-3 text-sm hover:bg-white/10 transition">
                <LogIn size={16} />تسجيل الدخول
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Trust ---------------- */
const trust = [
  { Icon: Building2, t: "بدعم من Daoudi Groupe Technologies", d: "خبرة تقنية موثوقة تدعم نجاحك.", featured: true },
  { Icon: ShieldCheck, t: "منصة آمنة", d: "حماية متقدمة لبياناتك ومعاملاتك." },
  { Icon: Zap, t: "معالجة سريعة", d: "تقنية متطورة لضمان سرعة تنفيذ الطلبات." },
  { Icon: Headphones, t: "دعم العملاء", d: "فريق دعم متاح لمساعدتك في كل الأوقات." },
  { Icon: BadgeCheck, t: "خدمات موثوقة", d: "شركاء معتمدون لضمان أفضل جودة للخدمة." },
];

const Trust = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <SectionHead
        kicker={<><Star size={14} /> لماذا نحن</>}
        title="لماذا SIM Services؟"
        desc="أسباب تجعلنا الخيار الموثوق لآلاف التجار والمهنيين."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trust.map((c, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${c.featured ? "lg:col-span-1 bg-gradient-brand text-white" : "soft-card"} rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300 ${c.featured ? "shadow-glow" : "hover:shadow-card"}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${c.featured ? "bg-white/20 backdrop-blur" : "bg-gradient-brand-soft"}`}>
              <c.Icon size={26} className={c.featured ? "text-white" : "text-brand-magenta"} strokeWidth={1.8} />
            </div>
            <div className={`font-extrabold text-lg mb-2 ${c.featured ? "text-white" : ""}`}>{c.t}</div>
            <div className={`text-sm leading-relaxed ${c.featured ? "text-white/90" : "text-muted-foreground"}`}>{c.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "ما هي الخدمات التي يقدمها التطبيق؟", a: "يقدم التطبيق مجموعة كاملة من خدمات الاتصالات تشمل تفعيل شرائح SIM، تسجيل الأرقام، استرجاع رمز PUK، نقل الأرقام، خدمات الألياف البصرية وADSL، التعبئة، والمتجر الإلكتروني." },
  { q: "من يمكنه استخدام SIM Services؟", a: "التطبيق موجّه أساسًا للتجار والمهنيين الذين يقدمون خدمات الاتصالات لزبائنهم، مع توفر لوحة مخصصة للشركاء." },
  { q: "كيف يتم تتبع حالة الطلب؟", a: "يمكنك متابعة الطلب لحظة بلحظة عبر صفحة التفاصيل، وستصلك إشعارات فورية عند كل تغيير في الحالة." },
  { q: "كم تستغرق معالجة الطلبات؟", a: "متوسط وقت معالجة الطلبات هو 18 دقيقة، وقد تكون أسرع حسب نوع الخدمة وشركة الاتصالات." },
  { q: "هل التطبيق آمن؟", a: "نعم، نعتمد بروتوكولات تشفير متقدمة وأنظمة حماية لضمان أمان بياناتك ومعاملاتك." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 bg-gradient-brand-soft/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHead
          kicker={<><Sparkles size={14} /> دعم</>}
          title="الأسئلة الشائعة"
          desc="إجابات سريعة عن أكثر الأسئلة شيوعًا."
        />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="soft-card overflow-hidden"
            >
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-right">
                <span className="font-bold text-base">{f.q}</span>
                <span className={`w-9 h-9 rounded-full bg-gradient-brand text-white flex items-center justify-center transition-transform ${open === i ? "rotate-180" : ""}`}>
                  <ChevronDown size={18} />
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">{f.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Contact ---------------- */
const Contact = () => (
  <section id="contact" className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-brand-soft/30 -z-10" />
    
    <div className="container mx-auto px-4">
      <SectionHead
        kicker={<><MessageCircle size={14} /> تواصل</>}
        title="تواصل معنا"
        desc="نحن هنا للإجابة على أسئلتك. اختر الطريقة الأنسب لك للحصول على دعم فوري."
      />
      
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
        {[
          { Icon: Mail, t: "البريد الإلكتروني", v: "contact@simservices.ma", href: "mailto:contact@simservices.ma", color: "text-brand-magenta" },
          { Icon: PhoneIcon, t: "رقم الهاتف", v: "+212 700 123 456", href: "tel:+212700123456", color: "text-brand-orange" },
        ].map((c, i) => (
          <motion.a 
            key={i} href={c.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="soft-card p-8 flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-2 hover:shadow-card transition-all duration-300 group"
          >
            <div className={`w-16 h-16 rounded-3xl bg-gradient-brand-soft flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform ${c.color}`}>
              <c.Icon size={26} strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[13px] text-muted-foreground font-medium mb-1">{c.t}</div>
              <div className="font-bold text-lg">{c.v}</div>
            </div>
          </motion.a>
        ))}

        <motion.a 
          href="https://wa.me/212700123456" target="_blank" rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-8 bg-gradient-brand text-white shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group"
        >
          <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform relative z-10">
            <MessageCircle size={28} strokeWidth={1.8} />
          </div>
          <div className="relative z-10">
            <div className="text-[13px] opacity-90 font-medium mb-1">دعم فوري</div>
            <div className="font-extrabold text-lg">تواصل عبر واتساب</div>
          </div>
        </motion.a>
      </div>
    </div>
  </section>
);

/* ---------------- Footer ---------------- */
const Footer = () => (
  <footer id="download" className="mt-10">
    <div className="container mx-auto px-4">
      <div className="rounded-t-[2.5rem] bg-gradient-footer text-white p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_-10%,white,transparent_40%)]" />
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="SIM Services" width={48} height={48} loading="lazy" className="rounded-2xl bg-white p-1" />
              <div>
                <div className="font-display font-extrabold text-xl">SIM Services</div>
                <div className="text-xs opacity-90">منصة الاتصالات الرقمية</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              منصة متكاملة لإدارة خدمات الاتصالات في المغرب للتجار والمهنيين.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Ic, i) => (
                <a key={i} href="#" aria-label="social"
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center hover:bg-white hover:text-brand-magenta transition">
                  <Ic size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-extrabold mb-4">روابط سريعة</div>
            <ul className="space-y-2 text-sm opacity-90">
              {navItems.slice(0, 5).map(n => (
                <li key={n.id}><a href={`#${n.id}`} className="hover:opacity-100 hover:underline">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-extrabold mb-4">الدعم والقانون</div>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#faq" className="hover:underline">الأسئلة الشائعة</a></li>
              <li><a href="#contact" className="hover:underline">اتصل بنا</a></li>
              <li><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:underline">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <div className="font-extrabold mb-4">حمّل التطبيق</div>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur border border-white/25 px-4 py-3 hover:bg-white hover:text-brand-magenta transition">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M17.05 12.04c-.03-2.96 2.42-4.39 2.53-4.45-1.38-2.01-3.52-2.29-4.28-2.32-1.82-.18-3.55 1.07-4.47 1.07-.94 0-2.36-1.05-3.88-1.02-1.99.03-3.84 1.16-4.87 2.94-2.08 3.61-.53 8.94 1.5 11.86 1 1.43 2.18 3.03 3.73 2.97 1.5-.06 2.07-.97 3.88-.97 1.81 0 2.32.97 3.9.94 1.61-.03 2.63-1.45 3.61-2.89 1.14-1.66 1.61-3.27 1.63-3.36-.04-.02-3.13-1.2-3.18-4.77zM14.5 3.83c.82-1 1.38-2.39 1.23-3.78-1.19.05-2.63.79-3.48 1.78-.76.88-1.43 2.29-1.25 3.65 1.33.1 2.68-.67 3.5-1.65z" /></svg>
                <div className="text-right">
                  <div className="text-[10px] opacity-80">حمّل من</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur border border-white/25 px-4 py-3 hover:bg-white hover:text-brand-magenta transition">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M3.6 1.7c-.4.4-.6.9-.6 1.5v17.6c0 .6.2 1.1.6 1.5l9.4-9.4-9.4-9.2zm10.6 10.4l2.9 2.9-12 6.9c-.2.1-.4.1-.6.1l9.7-9.9zm5.8-3.3c.7.4 1 1 1 1.7s-.3 1.3-1 1.7l-3 1.7-3.2-3.2 3.2-3.2 3 1.3zM14.2 11.9L4.5 2c.2 0 .4 0 .6.1l12 6.9-2.9 2.9z" /></svg>
                <div className="text-right">
                  <div className="text-[10px] opacity-80">حمّل من</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 pt-6 border-t border-white/20 text-center text-sm opacity-90">
          © SIM Services – Daoudi Groupe Technologies
        </div>
      </div>
    </div>
  </footer>
);

/* ---------- LOGO MARQUEE ---------- */
const LogoMarquee = () => {
  const items = [
    { name: "Maroc Telecom", color: "text-red-600" },
    { name: "orange", color: "text-orange-500" },
    { name: "inwi", color: "text-fuchsia-600" },
    { name: "ADSL · Fiber", color: "text-foreground" },
    { name: "PIN / PUK", color: "text-foreground" },
    { name: "Port-out", color: "text-foreground" },
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/60 bg-card/40 py-6 backdrop-blur">
      <div className="mx-auto max-w-6xl overflow-hidden">
        <div className="flex w-max animate-marquee-rtl gap-12 whitespace-nowrap px-6">
          {row.map((it, i) => (
            <span
              key={i}
              className={`font-display text-2xl font-bold tracking-tight opacity-70 ${it.color}`}
            >
              {it.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Advanced How It Works ---------------- */
const StepCard = ({ className, num, title, desc, children }: any) => {
  return (
    <article
      className={`adv-step-card ${className}`}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
      }}
    >
      <div className="adv-number">{num}</div>
      <div className="adv-icon-ring">{children}</div>
      <h3 className="text-[25px] font-black mb-4 mt-0 text-foreground">{title}</h3>
      <p className="text-[#716b7a] text-[17px] leading-relaxed font-medium m-0">{desc}</p>
    </article>
  );
};

const AdvancedHowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        <style dangerouslySetInnerHTML={{
          __html: `
            .adv-how-section {
              position:relative;width:100%;min-height:790px;overflow:hidden;isolation:isolate;
              padding:64px 72px 54px;border:1px solid rgba(52,25,70,.10);border-radius:48px;
              background:radial-gradient(circle at 0% 35%,rgba(255,106,0,.10) 0 18%,transparent 36%),
                         radial-gradient(circle at 95% 100%,rgba(243,19,120,.18) 0 16%,transparent 33%),
                         linear-gradient(180deg,#fff 0%,#fffaf7 100%);
              box-shadow:0 30px 90px rgba(25,12,35,.08);
            }
            .adv-how-section:before {
              content:"";position:absolute;right:-160px;bottom:-210px;width:470px;height:470px;
              border-radius:48% 52% 0 0;background:linear-gradient(135deg,#ff6a00,#f31378,#5b1b8f);
              opacity:.9;transform:rotate(-18deg);z-index:-1;
            }
            .adv-dots { position:absolute;width:130px;height:92px;background-image:radial-gradient(rgba(255,106,0,.25) 2px,transparent 2px);background-size:18px 18px;opacity:.9;pointer-events:none; }
            .adv-dots.left { left:44px;top:250px; }
            .adv-dots.right { right:72px;top:174px; }
            .adv-top-chip {
              width:max-content;margin:0 auto 18px;padding:14px 28px;border-radius:999px;
              background:rgba(255,255,255,.78);border:1px solid rgba(45,21,57,.08);
              box-shadow:0 12px 30px rgba(19,11,30,.06);display:flex;align-items:center;gap:12px;
              direction:ltr;font-weight:800;letter-spacing:6px;font-size:14px;
            }
            .adv-mark {
              width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#ff6a00,#f31378,#5b1b8f);
              transform:skew(-14deg) rotate(-12deg);box-shadow:0 10px 20px rgba(243,19,120,.25);position:relative;
            }
            .adv-mark:after { content:"";position:absolute;inset:8px 6px;border-radius:7px;background:#fff;opacity:.82; }
            .adv-floating { position:absolute;background:rgba(255,255,255,.82);backdrop-filter:blur(18px);border:1px solid rgba(255,147,155,.24);border-radius:24px;box-shadow:0 16px 42px rgba(241,77,91,.12);z-index:4; }
            .adv-metric-top { left:88px;top:104px;width:205px;padding:20px 22px 16px;transform:rotate(-5deg); }
            .adv-metric-top .row { display:flex;gap:14px;align-items:center; }
            .adv-chart-icon { width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#ff6a00,#f31378);box-shadow:0 14px 26px rgba(243,19,120,.25); }
            .adv-mini-bars { display:flex;gap:4px;align-items:flex-end;height:26px; }
            .adv-mini-bars span { width:5px;border-radius:999px;background:#fff; }
            .adv-mini-bars span:nth-child(1) { height:9px; }
            .adv-mini-bars span:nth-child(2) { height:16px; }
            .adv-mini-bars span:nth-child(3) { height:24px; }
            .adv-mini-bars span:nth-child(4) { height:13px; }
            .adv-status-pill { top:112px;right:84px;min-width:270px;padding:17px 21px;display:flex;align-items:center;gap:14px; }
            .adv-status-icon { width:55px;height:55px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#ffd7e8,#f31378);color:#fff;box-shadow:0 12px 25px rgba(243,19,120,.22); }
            .adv-green-dot { margin-inline-start:auto;width:12px;height:12px;border-radius:50%;background:#17c964;box-shadow:0 0 0 5px rgba(23,201,100,.12); }
            .adv-phone-wrap { position:absolute;left:6px;bottom:28px;width:245px;height:470px;transform:rotate(-10deg);z-index:5;filter:drop-shadow(0 22px 26px rgba(12,8,20,.22)); }
            .adv-phone { width:100%;height:100%;border:12px solid #16171b;border-radius:42px;background:#fff;overflow:hidden;position:relative; }
            .adv-phone:before { content:"";position:absolute;top:10px;left:50%;transform:translateX(-50%);width:72px;height:22px;border-radius:999px;background:#050509;z-index:5; }
            .adv-phone-screen { padding:24px 18px 18px;height:100%;font-size:12px; }
            .adv-mini-logo { font-weight:900;font-size:10px;letter-spacing:1px;direction:ltr;text-align:left;margin-bottom:22px;color:#16091f; }
            .adv-mini-logo span { display:inline-block;width:14px;height:14px;margin-right:6px;border-radius:4px;background:linear-gradient(135deg,#ff6a00,#f31378);vertical-align:middle; }
            .adv-phone-cta { background:linear-gradient(135deg,#f31378,#ff6a00);color:#fff;border-radius:15px;padding:16px 14px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 12px 28px rgba(243,19,120,.24); }
            .adv-plus { width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#f31378;font-size:22px;font-weight:800; }
            .adv-phone-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:18px;color:#16091f; }
            .adv-phone-stats div { background:#fbfafc;border:1px solid #eee;border-radius:12px;padding:10px 5px;text-align:center; }
            .adv-order-row { display:flex;justify-content:space-between;align-items:center;background:#fff;border:1px solid #eee;border-radius:14px;padding:12px 10px;color:#16091f; }
            .adv-steps-wrap { position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:44px;margin:0 0px 58px 0px;direction:rtl;z-index:2; }
            .adv-step-card { position:relative;min-height:325px;padding:72px 34px 32px;background:rgba(255,255,255,.72);border:1px solid rgba(246,116,158,.28);border-radius:28px;box-shadow:0 16px 50px rgba(127,52,104,.08);text-align:center;transition:.28s ease; }
            .adv-step-card:hover { transform:translateY(-8px);box-shadow:0 28px 70px rgba(127,52,104,.12); }
            .adv-step-card.orange { border-color:rgba(255,106,0,.28); }
            .adv-number { position:absolute;top:-26px;left:50%;transform:translateX(-50%);width:58px;height:58px;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:26px;font-weight:900;background:linear-gradient(135deg,#ff6a00,#f31378);box-shadow:0 0 0 10px rgba(255,255,255,.9),0 16px 32px rgba(243,19,120,.25); }
            .adv-step-card.orange .adv-number { background:linear-gradient(135deg,#ff8a1f,#ff6a00); }
            .adv-icon-ring { width:106px;height:106px;margin:0 auto 26px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(246,116,158,.35);background:linear-gradient(180deg,rgba(255,255,255,.88),rgba(255,245,250,.9)); }
            .adv-icon-ring svg { width:58px;height:58px;stroke:url(#gradIcon);stroke-width:1.9; }
            .adv-step-card.orange .adv-icon-ring svg { stroke:url(#gradOrange); }
            .adv-step-card:after { content:"";position:absolute;bottom:25px;left:50%;transform:translateX(-50%);width:90px;height:1px;background:linear-gradient(90deg,transparent,#e7dce5,transparent); }
            .adv-step-card:before { content:"";position:absolute;bottom:18px;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:#f31378;box-shadow:0 0 0 6px rgba(243,19,120,.08); }
            .adv-step-card.orange:before { background:#ff6a00; }
            .adv-connector { position:absolute;top:152px;width:88px;height:3px;background:linear-gradient(90deg,#f31378,#ff6a00);z-index:6; }
            .adv-connector:before { content:"";position:absolute;left:-2px;top:50%;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:12px solid #ff6a00; }
            .adv-connector:after { content:"";position:absolute;right:0;top:50%;transform:translateY(-50%);width:8px;height:8px;border-radius:50%;background:#f31378; }
            .adv-c1 { right:calc(25% - 23px); }
            .adv-c2 { right:calc(50% - 23px); }
            .adv-c3 { right:calc(75% - 23px); }
            .adv-trust-strip { margin:0 auto;width:min(720px,60%);min-height:76px;border-radius:999px;background:rgba(255,255,255,.84);border:1px solid rgba(55,22,72,.08);box-shadow:0 16px 42px rgba(30,13,52,.07);display:grid;grid-template-columns:repeat(3,1fr);align-items:center;padding:12px 20px;z-index:3;position:relative;direction:rtl; }
            .adv-trust-item { display:flex;align-items:center;justify-content:center;gap:12px;padding:0 16px;border-left:1px solid #eee1e8; }
            .adv-trust-item:first-child { border-left:0; }
            .adv-success-card { right:86px;bottom:58px;width:235px;padding:18px 20px 14px;transform:rotate(-4deg); }
            .adv-success-head { display:flex;align-items:center;gap:13px; }
            .adv-check { width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#ff6a00,#f31378);display:grid;place-items:center;color:#fff;box-shadow:0 12px 28px rgba(243,19,120,.24); }
            @media(max-width:1100px) {
              .adv-how-section { padding:44px 22px 40px;min-height:auto; }
              .adv-floating, .adv-phone-wrap, .adv-connector { display:none; }
              .adv-steps-wrap { margin:0;grid-template-columns:1fr;gap:26px; }
              .adv-step-card { min-height:auto;padding:64px 24px 48px; }
              .adv-trust-strip { width:100%;border-radius:28px;grid-template-columns:1fr;gap:14px;margin-top:26px; }
              .adv-trust-item { border-left:0;border-bottom:1px solid #eee1e8;padding:12px; }
              .adv-trust-item:last-child { border-bottom:0; }
            }
          `}} />

        <div className="adv-how-section" aria-labelledby="adv-how-title">
          <svg width="0" height="0" style={{ position: 'absolute' }}><defs><linearGradient id="gradIcon" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f31378" /><stop offset="100%" stopColor="#7d1d9b" /></linearGradient><linearGradient id="gradOrange" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ff8a1f" /><stop offset="100%" stopColor="#f31378" /></linearGradient></defs></svg>
          <span className="adv-dots left"></span><span className="adv-dots right"></span>

          <div className="adv-floating adv-metric-top">
            <div className="row">
              <div className="adv-chart-icon"><div className="adv-mini-bars"><span></span><span></span><span></span><span></span></div></div>
              <div><small className="text-[#8a8291] font-semibold">طلبات اليوم</small><strong className="block text-2xl mt-1 text-[#16091f]">1,248</strong><div className="text-[#f31378] text-[13px] font-extrabold mt-1">↗ 18%</div></div>
            </div>
            <svg className="h-[30px] mt-2 w-full" viewBox="0 0 160 36" fill="none"><path d="M4 28 C35 10, 50 34, 76 18 S110 4, 156 16" stroke="url(#gradOrange)" strokeWidth="4" strokeLinecap="round" /><circle cx="156" cy="16" r="5" fill="#ff6a00" /></svg>
          </div>

          <div className="adv-floating adv-status-pill">
            <div className="adv-status-icon"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></div>
            <div><b className="text-lg text-[#16091f]">النظام يعمل بكفاءة</b><p className="mt-1 text-[#8b8491] font-medium text-sm m-0">جميع الأنظمة نشطة</p></div>
            <span className="adv-green-dot"></span>
          </div>

          <div className="adv-top-chip text-[#16091f]">SIM SERVICES <span className="adv-mark"></span></div>
          <h2 id="adv-how-title" className="text-center text-[clamp(32px,5vw,64px)] md:text-[clamp(46px,6.2vw,82px)] font-black tracking-tighter text-[#14071f] m-0">كيف يعمل التطبيق</h2>
          <p className="mx-auto mt-5 mb-16 max-w-[700px] text-center text-[#6f6a7c] text-lg md:text-[23px] leading-relaxed font-medium">رحلة مبسطة وسريعة لمعالجة الطلبات من التاجر إلى النتيجة النهائية</p>



          <div className="adv-steps-wrap">
            <span className="adv-connector adv-c1"></span><span className="adv-connector adv-c2"></span><span className="adv-connector adv-c3"></span>

            <StepCard className="orange" num="1" title="إدخال الطلب" desc="يقوم التاجر بإدخال معلومات الزبون ونوع الخدمة المطلوبة عبر التطبيق.">
              <svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h5" /><path d="M8 17h3" /><circle cx="17" cy="17" r="3" /><path d="M17 15.9v2.2M15.9 17h2.2" /></svg>
            </StepCard>

            <StepCard className="" num="2" title="إرسال الطلب" desc="يتم إرسال الطلب تلقائيًا إلى منصة SIM Services لمراجعته ومعالجته.">
              <svg viewBox="0 0 24 24" fill="none"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
            </StepCard>

            <StepCard className="" num="3" title="المعالجة" desc="تتم معالجة الطلب مع شركات الاتصالات والشركاء المعنيين بدقة واحترافية.">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.45 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .45-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 16 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.25.34.6.6 1 .6H21a2 2 0 1 1 0 4h-.09c-.4 0-.75.26-1 .6Z" /></svg>
            </StepCard>

            <StepCard className="orange" num="4" title="إشعار بالنتيجة" desc="يتوصل التاجر بإشعار فوري يوضح حالة الطلب: مقبول أو مرفوض مع سبب الرفض.">
              <svg viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /><circle cx="17" cy="17" r="4" /><path d="m15.5 17 1 1 2-2" /></svg>
            </StepCard>
          </div>

          <div className="adv-trust-strip">
            <div className="adv-trust-item"><svg className="w-8 h-8 stroke-[#f31378]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg><div><b className="block text-[17px] font-bold text-[#16091f]">آمن وموثوق</b><small className="block text-[#8c8594] font-medium mt-1 text-[11px]">حماية بياناتك أولوية لنا</small></div></div>
            <div className="adv-trust-item"><svg className="w-8 h-8 stroke-[#f31378]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M13 2 3 14h8l-1 8 10-12h-8Z" /></svg><div><b className="block text-[17px] font-bold text-[#16091f]">سريع وفعال</b><small className="block text-[#8c8594] font-medium mt-1 text-[11px]">معالجة ذكية وفورية</small></div></div>
            <div className="adv-trust-item"><svg className="w-8 h-8 stroke-[#f31378]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg><div><b className="block text-[17px] font-bold text-[#16091f]">شركاء معتمدون</b><small className="block text-[#8c8594] font-medium mt-1 text-[11px]">شبكة موثوقة من الشركات</small></div></div>
          </div>

          <div className="adv-floating adv-success-card">
            <div className="adv-success-head">
              <div className="adv-check"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg></div>
              <div><small className="text-[#8f8794] font-semibold text-[11px]">معدل نجاح الطلبات</small><strong className="block text-[33px] leading-tight text-[#16091f]">97.6%</strong><div className="text-[#16a35b] text-[12px] font-extrabold">+12% عن الشهر الماضي</div></div>
            </div>
            <svg className="h-[38px] mt-2 w-full" viewBox="0 0 170 38" fill="none"><path d="M4 28 C28 10, 52 32, 76 18 C104 2, 122 30, 166 10" stroke="url(#gradIcon)" strokeWidth="4" strokeLinecap="round" /><circle cx="166" cy="10" r="5" fill="#f31378" /></svg>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- Advanced Partners ---------------- */
const AdvancedPartners = () => {
  return (
    <section className="py-20 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 flex justify-center">
        <style dangerouslySetInnerHTML={{
          __html: `
          .adv-partner-section {
            width:min(1180px,100%);
            position:relative;
            overflow:hidden;
            border-radius:22px;
            background:
              radial-gradient(circle at 12% 20%, rgba(255,255,255,.13) 0 1px, transparent 1px),
              linear-gradient(104deg, #ff6a00 0%, #ef3e56 34%, #d01779 62%, #611066 100%);
            background-size:16px 16px, auto;
            box-shadow:0 26px 70px rgba(112, 11, 71, 0.22);
            color:#fff;
            isolation:isolate;
          }
          .adv-partner-section::before {
            content:""; position:absolute; left:-140px; top:-80px; width:340px; height:340px;
            border-radius:50%; background:radial-gradient(circle, rgba(255,255,255,.16), transparent 68%);
            z-index:-1;
          }
          .adv-partner-section::after {
            content:""; position:absolute; right:-110px; bottom:-170px; width:400px; height:400px;
            border-radius:50%; border:1px solid rgba(255,255,255,.12);
            box-shadow: 0 0 0 30px rgba(255,255,255,.03), 0 0 0 62px rgba(255,255,255,.025), 0 0 0 95px rgba(255,255,255,.02);
            z-index:-1;
          }
          .adv-partner-grid {
            display:grid; grid-template-columns: 58% 42%; align-items:center; min-height:330px;
          }
          .adv-content-side { padding:42px 54px 38px 28px; position:relative; z-index:2; }
          .adv-content-side h2 { margin:0 0 10px; font-size:42px; line-height:1.15; font-weight:900; letter-spacing:-.4px; color:#fff; }
          .adv-content-side p { margin:0; max-width:620px; font-size:20px; line-height:1.7; font-weight:600; color:rgba(255,255,255,.93); }
          .adv-benefits { margin-top:26px; display:grid; grid-template-columns: repeat(5, minmax(88px,1fr)); gap:12px; max-width:690px; }
          .adv-benefit {
            min-height:82px; border-radius:14px; padding:13px 8px 12px;
            background:linear-gradient(180deg, rgba(255,255,255,.17), rgba(255,255,255,.08));
            border:1px solid rgba(255,255,255,.23); backdrop-filter:blur(14px);
            box-shadow: inset 0 1px 0 rgba(255,255,255,.14);
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            text-align:center; gap:8px; transition:.22s ease;
          }
          .adv-benefit:hover { transform:translateY(-4px); background:linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,.11)); }
          .adv-benefit svg { width:25px; height:25px; stroke:#fff; stroke-width:1.9; fill:none; opacity:.96; }
          .adv-benefit span { font-size:14px; font-weight:800; color:#fff; line-height:1.25; }
          .adv-actions { margin-top:24px; display:flex; gap:12px; flex-wrap:wrap; direction:ltr; }
          .adv-btn {
            height:48px; min-width:148px; border-radius:10px; padding:0 22px;
            display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
            font-size:16px; font-weight:900; transition:.22s ease; border:1px solid rgba(255,255,255,.36);
            color:#fff; backdrop-filter:blur(10px); background:rgba(255,255,255,.08);
          }
          .adv-btn:hover { transform:translateY(-3px); }
          .adv-btn.primary { background:#fff; color:#c0147d; border-color:#fff; box-shadow:0 14px 28px rgba(54, 5, 39, 0.16); }
          .adv-btn.accent { background:linear-gradient(135deg, #ff8a1f, #ef4a43 48%, #eb1d7a 100%); border:none; color:#fff; box-shadow:0 14px 30px rgba(96, 8, 64, 0.20); }
          .adv-visual-side { position:relative; min-height:330px; padding:0 0 0 18px; display:flex; align-items:flex-end; justify-content:center; }
          .adv-merchant-wrap { position:absolute; left:112px; bottom:0; width:250px; display:flex; justify-content:center; filter:drop-shadow(0 16px 28px rgba(65, 9, 47, 0.22)); }
          .adv-merchant-wrap img { width:300px; height:auto; display:block; user-select:none; -webkit-user-drag:none; border-radius: 12px; }
          .adv-metric-card {
            position:absolute; left:44px; width:148px; min-height:84px; border-radius:14px;
            background:rgba(255,255,255,.94); box-shadow:0 16px 34px rgba(87, 18, 60, 0.18);
            border:1px solid rgba(255,255,255,.52); padding:12px 14px 10px; color:#2e1834; text-align:right; z-index:3;
          }
          .adv-metric-card.top { top:56px; }
          .adv-metric-card.bottom { top:158px; }
          .adv-metric-header { display:flex; justify-content:space-between; align-items:center; gap:6px; color:#7c6a78; font-size:12px; font-weight:700; }
          .adv-metric-value { margin-top:4px; display:block; font-size:24px; line-height:1; font-weight:900; color:#241226; direction:ltr; text-align:left; }
          .adv-metric-growth { color:#24b26b; font-size:10px; font-weight:900; direction:ltr; }
          .adv-line-chart { width:100%; height:34px; margin-top:6px; display:block; }
          .adv-bars { display:flex; gap:5px; align-items:flex-end; justify-content:flex-end; height:34px; margin-top:6px; }
          .adv-bars span { width:8px; border-radius:10px 10px 3px 3px; background:linear-gradient(180deg, #ff8a1f, #ef2b72); }
          .adv-bars span:nth-child(1) { height:18px; }
          .adv-bars span:nth-child(2) { height:30px; }
          .adv-bars span:nth-child(3) { height:22px; }
          .adv-bars span:nth-child(4) { height:34px; }
          .adv-bars span:nth-child(5) { height:14px; }
          .adv-sparkles { position:absolute; right:90px; top:50px; width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,.5); box-shadow: 36px 18px 0 rgba(255,255,255,.24), 72px -6px 0 rgba(255,255,255,.18), 118px 26px 0 rgba(255,255,255,.18); opacity:.85; }
          .adv-dot-grid { position:absolute; right:22px; bottom:38px; width:170px; height:120px; background-image:radial-gradient(rgba(255,255,255,.15) 1.5px, transparent 1.5px); background-size:16px 16px; opacity:.85; pointer-events:none; }
          @media (max-width: 920px) {
            .adv-partner-grid { grid-template-columns:1fr; }
            .adv-content-side { order:1; padding:34px 24px 18px; text-align:center; }
            .adv-content-side h2 { font-size:32px; }
            .adv-content-side p { font-size:17px; margin-inline:auto; }
            .adv-benefits { grid-template-columns:repeat(2,1fr); max-width:none; }
            .adv-actions { justify-content:center; direction:rtl; }
            .adv-visual-side { order:2; min-height:280px; }
            .adv-merchant-wrap { position:relative; left:auto; bottom:auto; width:220px; margin:0 auto; }
            .adv-merchant-wrap img { width:260px; }
            .adv-metric-card.top { left:18px; top:24px; }
            .adv-metric-card.bottom { left:auto; right:18px; top:120px; }
          }
          @media (max-width: 560px) {
            .adv-benefits { grid-template-columns:1fr; }
            .adv-btn { width:100%; }
            .adv-metric-card { width:132px; }
            .adv-content-side h2 { font-size:28px; }
          }
        `}} />

        <div className="adv-partner-section v1" aria-labelledby="partner-title">
          <span className="adv-sparkles"></span>
          <span className="adv-dot-grid"></span>

          <div className="adv-partner-grid">
            <div className="adv-content-side">
              <h2 id="partner-title">كن شريكًا مع SIM Services</h2>
              <p>طوّر نشاطك التجاري، احصل على طلبات جديدة، وتابع أعمالك بسهولة عبر لوحة تحكم احترافية.</p>

              <div className="adv-benefits" aria-label="مزايا الشراكة">
                <div className="adv-benefit">
                  <svg viewBox="0 0 24 24"><path d="M4 19V5h16v14H4Z" /><path d="M8 15l3-3 2 2 4-5" /><path d="M8 19v2M16 19v2" /></svg>
                  <span>نمو<br />النشاط</span>
                </div>
                <div className="adv-benefit">
                  <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M16 11h6" /></svg>
                  <span>زبائن<br />جدد</span>
                </div>
                <div className="adv-benefit">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /><path d="M8 9h8M8 13h5" /></svg>
                  <span>لوحة لإدارة<br />الطلبات</span>
                </div>
                <div className="adv-benefit">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 7v10M9 10.5c0-1.3 1.4-2 3-2s3 .7 3 2-1.4 2-3 2-3 .7-3 2 1.4 2 3 2 3-.7 3-2" /></svg>
                  <span>عمولات<br />مجزية</span>
                </div>
                <div className="adv-benefit">
                  <svg viewBox="0 0 24 24"><path d="M6 2h12v20H6z" /><path d="M9 6h6M9 10h6M9 14h4" /><circle cx="17" cy="17" r="3" /></svg>
                  <span>طلبات<br />جاهزة</span>
                </div>
              </div>

              <div className="adv-actions">
                <a href="#login" className="adv-btn">تسجيل الدخول</a>
                <a href="#register" className="adv-btn accent">سجّل كشريك</a>
                <a href="#download" className="adv-btn primary">تحميل التطبيق</a>
              </div>
            </div>

            <div className="adv-visual-side">
              <div className="adv-metric-card top animate-float-slow">
                <div className="adv-metric-header">
                  <span>طلبات هذا الشهر</span>
                  <span className="adv-metric-growth">+28%</span>
                </div>
                <strong className="adv-metric-value">427</strong>
                <svg className="adv-line-chart" viewBox="0 0 150 40" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="metricLineGrad" x1="0" y1="0" x2="150" y2="0">
                      <stop stopColor="#ff8a1f" />
                      <stop offset="1" stopColor="#ef2b72" />
                    </linearGradient>
                  </defs>
                  <path d="M4 30 C21 18, 35 33, 50 21 C66 7, 78 24, 93 13 C112 0, 128 17, 145 9" stroke="url(#metricLineGrad)" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="adv-metric-card bottom animate-float">
                <div className="adv-metric-header">
                  <span>معدل النجاح</span>
                  <span>هذا الشهر</span>
                </div>
                <strong className="adv-metric-value">98%</strong>
                <div className="adv-bars" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>

              <div className="adv-merchant-wrap">
                <img src={merchant} alt="تاجر يستخدم تطبيق SIM Services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Advanced Partners 2 ---------------- */
const AdvancedPartners2 = () => {
  return (
    <section className="py-20 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="adv-partner-section v2" aria-labelledby="partner-title-2">
          <span className="adv-sparkles"></span>
          <span className="adv-dot-grid"></span>

          <div className="adv-partner-grid">
            <div className="adv-content-side">
              <h2 id="partner-title-2">كن شريكًا مع SIM Services</h2>
              <p>طوّر نشاطك التجاري، احصل على طلبات جديدة، وتابع أعمالك بسهولة عبر لوحة تحكم احترافية.</p>

              <div className="adv-benefits" aria-label="مزايا الشراكة">
                <div className="adv-benefit">
                  <TrendingUp />
                  <span>نمو<br />النشاط</span>
                </div>
                <div className="adv-benefit">
                  <Users />
                  <span>زبائن<br />جدد</span>
                </div>
                <div className="adv-benefit">
                  <Layers />
                  <span>لوحة لإدارة<br />الطلبات</span>
                </div>
                <div className="adv-benefit">
                  <Wallet />
                  <span>عمولات<br />مجزية</span>
                </div>
                <div className="adv-benefit">
                  <Package />
                  <span>طلبات<br />جاهزة</span>
                </div>
              </div>

              <div className="adv-actions">
                <a href="#login" className="adv-btn">تسجيل الدخول</a>
                <a href="#register" className="adv-btn accent">سجّل كشريك</a>
                <a href="#download" className="adv-btn primary">تحميل التطبيق</a>
              </div>
            </div>

            <div className="adv-visual-side">
              <div className="adv-metric-card top animate-float-slow">
                <div className="adv-metric-header">
                  <span>طلبات هذا الشهر</span>
                  <span className="adv-metric-growth">+28%</span>
                </div>
                <strong className="adv-metric-value">427</strong>
                <svg className="adv-line-chart" viewBox="0 0 150 40" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="metricLineGrad" x1="0" y1="0" x2="150" y2="0">
                      <stop stopColor="#ff8a1f" />
                      <stop offset="1" stopColor="#ef2b72" />
                    </linearGradient>
                  </defs>
                  <path d="M4 30 C21 18, 35 33, 50 21 C66 7, 78 24, 93 13 C112 0, 128 17, 145 9" stroke="url(#metricLineGrad)" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="adv-metric-card bottom animate-float">
                <div className="adv-metric-header">
                  <span>معدل النجاح</span>
                  <span>هذا الشهر</span>
                </div>
                <strong className="adv-metric-value">98%</strong>
                <div className="adv-bars" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>

              <div className="adv-merchant-wrap">
                <img src={merchant} alt="تاجر يستخدم تطبيق SIM Services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Advanced Partners 3 ---------------- */
const AdvancedPartners3 = () => {
  return (
    <section id="partners" className="py-20 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 flex justify-center">
        <style dangerouslySetInnerHTML={{
          __html: `
          .adv-partner-section {
            width:min(1180px,100%);
            position:relative;
            overflow:hidden;
            border-radius:22px;
            background:
              radial-gradient(circle at 12% 20%, rgba(255,255,255,.13) 0 1px, transparent 1px),
              linear-gradient(104deg, #ff6a00 0%, #ef3e56 34%, #d01779 62%, #611066 100%);
            background-size:16px 16px, auto;
            box-shadow:0 26px 70px rgba(112, 11, 71, 0.22);
            color:#fff;
            isolation:isolate;
          }
          .adv-partner-section::before {
            content:""; position:absolute; left:-140px; top:-80px; width:340px; height:340px;
            border-radius:50%; background:radial-gradient(circle, rgba(255,255,255,.16), transparent 68%);
            z-index:-1;
          }
          .adv-partner-section::after {
            content:""; position:absolute; right:-110px; bottom:-170px; width:400px; height:400px;
            border-radius:50%; border:1px solid rgba(255,255,255,.12);
            box-shadow: 0 0 0 30px rgba(255,255,255,.03), 0 0 0 62px rgba(255,255,255,.025), 0 0 0 95px rgba(255,255,255,.02);
            z-index:-1;
          }
          .adv-partner-grid {
            display:grid; grid-template-columns: 58% 42%; align-items:center; min-height:330px;
          }
          .adv-content-side { padding:42px 54px 38px 28px; position:relative; z-index:2; }
          .adv-content-side h2 { margin:0 0 10px; font-size:42px; line-height:1.15; font-weight:900; letter-spacing:-.4px; color:#fff; }
          .adv-content-side p { margin:0; max-width:620px; font-size:20px; line-height:1.7; font-weight:600; color:rgba(255,255,255,.93); }
          .adv-benefits { margin-top:26px; display:grid; grid-template-columns: repeat(5, minmax(88px,1fr)); gap:12px; max-width:690px; }
          .adv-benefit {
            min-height:82px; border-radius:14px; padding:13px 8px 12px;
            background:linear-gradient(180deg, rgba(255,255,255,.17), rgba(255,255,255,.08));
            border:1px solid rgba(255,255,255,.23); backdrop-filter:blur(14px);
            box-shadow: inset 0 1px 0 rgba(255,255,255,.14);
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            text-align:center; gap:8px; transition:.22s ease;
          }
          .adv-benefit:hover { transform:translateY(-4px); background:linear-gradient(180deg, rgba(255,255,255,.22), rgba(255,255,255,.11)); }
          .adv-benefit svg { width:25px; height:25px; stroke:#fff; stroke-width:1.9; fill:none; opacity:.96; }
          .adv-benefit span { font-size:14px; font-weight:800; color:#fff; line-height:1.25; }
          .adv-actions { margin-top:24px; display:flex; gap:12px; flex-wrap:wrap; direction:ltr; }
          .adv-btn {
            height:48px; min-width:148px; border-radius:10px; padding:0 22px;
            display:inline-flex; align-items:center; justify-content:center; text-decoration:none;
            font-size:16px; font-weight:900; transition:.22s ease; border:1px solid rgba(255,255,255,.36);
            color:#fff; backdrop-filter:blur(10px); background:rgba(255,255,255,.08);
          }
          .adv-btn:hover { transform:translateY(-3px); }
          .adv-btn.primary { background:#fff; color:#c0147d; border-color:#fff; box-shadow:0 14px 28px rgba(54, 5, 39, 0.16); }
          .adv-btn.accent { background:linear-gradient(135deg, #ff8a1f, #ef4a43 48%, #eb1d7a 100%); border:none; color:#fff; box-shadow:0 14px 30px rgba(96, 8, 64, 0.20); }
          .adv-visual-side { position:relative; min-height:330px; padding:0 0 0 18px; display:flex; align-items:flex-end; justify-content:center; }
          .adv-merchant-wrap { position:absolute; left:112px; bottom:0; width:250px; display:flex; justify-content:center; filter:drop-shadow(0 16px 28px rgba(65, 9, 47, 0.22)); }
          .adv-merchant-wrap img { width:300px; height:auto; display:block; user-select:none; -webkit-user-drag:none; border-radius: 12px; }
          .adv-metric-card {
            position:absolute; left:44px; width:148px; min-height:84px; border-radius:14px;
            background:rgba(255,255,255,.94); box-shadow:0 16px 34px rgba(87, 18, 60, 0.18);
            border:1px solid rgba(255,255,255,.52); padding:12px 14px 10px; color:#2e1834; text-align:right; z-index:3;
          }
          .adv-metric-card.top { top:56px; }
          .adv-metric-card.bottom { top:158px; }
          .adv-metric-header { display:flex; justify-content:space-between; align-items:center; gap:6px; color:#7c6a78; font-size:12px; font-weight:700; }
          .adv-metric-value { margin-top:4px; display:block; font-size:24px; line-height:1; font-weight:900; color:#241226; direction:ltr; text-align:left; }
          .adv-metric-growth { color:#24b26b; font-size:10px; font-weight:900; direction:ltr; }
          .adv-line-chart { width:100%; height:34px; margin-top:6px; display:block; }
          .adv-bars { display:flex; gap:5px; align-items:flex-end; justify-content:flex-end; height:34px; margin-top:6px; }
          .adv-bars span { width:8px; border-radius:10px 10px 3px 3px; background:linear-gradient(180deg, #ff8a1f, #ef2b72); }
          .adv-bars span:nth-child(1) { height:18px; }
          .adv-bars span:nth-child(2) { height:30px; }
          .adv-bars span:nth-child(3) { height:22px; }
          .adv-bars span:nth-child(4) { height:34px; }
          .adv-bars span:nth-child(5) { height:14px; }
          .adv-sparkles { position:absolute; right:90px; top:50px; width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,.5); box-shadow: 36px 18px 0 rgba(255,255,255,.24), 72px -6px 0 rgba(255,255,255,.18), 118px 26px 0 rgba(255,255,255,.18); opacity:.85; }
          .adv-dot-grid { position:absolute; right:22px; bottom:38px; width:170px; height:120px; background-image:radial-gradient(rgba(255,255,255,.15) 1.5px, transparent 1.5px); background-size:16px 16px; opacity:.85; pointer-events:none; }
          @media (max-width: 920px) {
            .adv-partner-grid { grid-template-columns:1fr; }
            .adv-content-side { order:1; padding:34px 24px 18px; text-align:center; }
            .adv-content-side h2 { font-size:32px; }
            .adv-content-side p { font-size:17px; margin-inline:auto; }
            .adv-benefits { grid-template-columns:repeat(2,1fr); max-width:none; }
            .adv-actions { justify-content:center; direction:rtl; }
            .adv-visual-side { order:2; min-height:280px; }
            .adv-merchant-wrap { position:relative; left:auto; bottom:auto; width:220px; margin:0 auto; }
            .adv-merchant-wrap img { width:260px; }
            .adv-metric-card.top { left:18px; top:24px; }
            .adv-metric-card.bottom { left:auto; right:18px; top:120px; }
          }
          @media (max-width: 560px) {
            .adv-benefits { grid-template-columns:1fr; }
            .adv-btn { width:100%; }
            .adv-metric-card { width:132px; }
            .adv-content-side h2 { font-size:28px; }
          }
        `}} />

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp} transition={{ duration: 0.6 }}
          className="adv-partner-section" aria-labelledby="partner-title-3"
        >
          <span className="adv-sparkles"></span>
          <span className="adv-dot-grid"></span>

          <div className="adv-partner-grid">
            <div className="adv-content-side">
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pill bg-white/20 backdrop-blur border border-white/30 text-white mb-4 inline-flex">
                <Handshake size={14} /> برنامج الشركاء
              </motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} id="partner-title-3">كن شريكًا مع SIM Services</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>طوّر نشاطك التجاري، احصل على طلبات جديدة، وتابع أعمالك بسهولة عبر لوحة تحكم احترافية.</motion.p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { Icon: Package, l: "طلبات جاهزة" },
                  { Icon: Users, l: "زبائن جدد" },
                  { Icon: Layers, l: "لوحة إدارة الطلبات" },
                  { Icon: Wallet, l: "عمولات مجزية" },
                  { Icon: TrendingUp, l: "نمو النشاط" },
                ].map((b, i) => (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + (i * 0.1) }} key={i} className="rounded-2xl bg-white/15 backdrop-blur border border-white/25 p-3 flex items-center gap-2 text-white">
                    <b.Icon size={18} />
                    <span className="text-xs font-bold">{b.l}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 }} className="adv-actions">
                <a href="#login" className="adv-btn">تسجيل الدخول</a>
                <a href="#register" className="adv-btn accent">سجّل كشريك</a>
                <a href="#download" className="adv-btn primary">تحميل التطبيق</a>
              </motion.div>
            </div>

            <div className="adv-visual-side">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="adv-metric-card top animate-float-slow">
                <div className="adv-metric-header">
                  <span>طلبات هذا الشهر</span>
                  <span className="adv-metric-growth">+28%</span>
                </div>
                <strong className="adv-metric-value">427</strong>
                <svg className="adv-line-chart" viewBox="0 0 150 40" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="metricLineGrad" x1="0" y1="0" x2="150" y2="0">
                      <stop stopColor="#ff8a1f" />
                      <stop offset="1" stopColor="#ef2b72" />
                    </linearGradient>
                  </defs>
                  <path d="M4 30 C21 18, 35 33, 50 21 C66 7, 78 24, 93 13 C112 0, 128 17, 145 9" stroke="url(#metricLineGrad)" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="adv-metric-card bottom animate-float">
                <div className="adv-metric-header">
                  <span>معدل النجاح</span>
                  <span>هذا الشهر</span>
                </div>
                <strong className="adv-metric-value">98%</strong>
                <div className="adv-bars" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="adv-merchant-wrap">
                <img src={merchant} alt="تاجر يستخدم تطبيق SIM Services" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- Page ---------------- */
const Index = () => (
  <main>
    <Header />
    <Hero />
    <LogoMarquee />
    <About />
    <Services />
    <HowItWorks />
    {/* <AdvancedHowItWorks /> */}
    {/* <Partners /> */}
    {/* <AdvancedPartners /> */}
    {/* <AdvancedPartners2 /> */}
    <AdvancedPartners3 />
    <Trust />
    <FAQ />
    <Contact />
    <Footer />
  </main>
);

export default Index;
