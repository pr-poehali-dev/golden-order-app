import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О программе', href: '#about' },
  { label: 'Скачать', href: '#download' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Документация', href: '#docs' },
];

const features = [
  {
    icon: 'Sparkles',
    title: 'Глубокая очистка',
    text: 'Удаляет мусор, кэш и временные файлы, освобождая гигабайты места одним кликом.',
  },
  {
    icon: 'Zap',
    title: 'Ускорение системы',
    text: 'Оптимизирует автозагрузку и процессы — ваш ПК работает быстро и плавно.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита и приватность',
    text: 'Стирает историю и следы активности, оберегая вашу конфиденциальность.',
  },
  {
    icon: 'Gauge',
    title: 'Умный мониторинг',
    text: 'Следит за состоянием диска и памяти в реальном времени, предупреждая о проблемах.',
  },
];

const stats = [
  { value: '120K+', label: 'Довольных пользователей' },
  { value: '4.9★', label: 'Средняя оценка' },
  { value: '18 ГБ', label: 'Средне освобождается' },
];

const faqItems = [
  {
    q: 'Бесплатна ли программа?',
    a: 'Базовая версия «Богатый курьер Pro» доступна бесплатно. Расширенные функции открываются в Pro-версии.',
  },
  {
    q: 'С какими системами совместима программа?',
    a: 'Программа поддерживает Windows 10 и 11. Версии для других систем находятся в разработке.',
  },
  {
    q: 'Безопасно ли удалять найденные файлы?',
    a: 'Да. Программа удаляет только мусорные и временные файлы, не затрагивая ваши документы и личные данные.',
  },
  {
    q: 'Как часто обновляется программа?',
    a: 'Мы выпускаем обновления ежемесячно, добавляя новые функции и улучшая производительность.',
  },
];

const docs = [
  { icon: 'BookOpen', title: 'Руководство пользователя', text: 'Пошаговая инструкция по установке и настройке.' },
  { icon: 'Settings2', title: 'Настройки очистки', text: 'Как тонко настроить правила и расписание.' },
  { icon: 'LifeBuoy', title: 'Поддержка', text: 'Ответы на частые вопросы и контакты команды.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <nav className="container flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full gold-border gold-glow flex items-center justify-center bg-secondary">
              <Icon name="Crown" className="text-gold" size={22} />
            </div>
            <div className="leading-tight">
              <p className="font-display text-xl font-semibold gold-text">Богатый курьер</p>
              <p className="text-[11px] tracking-[0.3em] text-gold/70 uppercase">Pro</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#download" className="hidden md:block">
            <Button className="bg-gold hover:bg-gold-light text-primary-foreground font-medium rounded-full px-6">
              Скачать
            </Button>
          </a>

          <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden glass border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold/80 gold-border rounded-full px-4 py-1.5 mb-8">
            <Icon name="Star" size={14} className="text-gold" />
            Премиум-забота о вашем ПК
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-semibold leading-[1.05] mb-7">
            На вашем ПК — <br />
            <span className="gold-text animate-shimmer">идеальный порядок</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            «Богатый курьер Pro» — элегантная программа для очистки, ускорения и защиты
            вашего компьютера. Роскошь простоты в каждом клике.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#download">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold rounded-full px-8 h-14 text-base gold-glow"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать бесплатно
              </Button>
            </a>
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-gold/40 text-gold hover:bg-gold/10 hover:text-gold-deep"
              >
                Узнать больше
              </Button>
            </a>
          </div>

          <div className="flex gap-10 md:gap-16 mt-14 justify-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl font-semibold gold-text">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / FEATURES */}
      <section id="about" className="py-24 border-t border-gold/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">О программе</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-5">
              Всё для <span className="gold-text">чистоты и скорости</span>
            </h2>
            <p className="text-muted-foreground">
              Четыре мощных инструмента в одном элегантном интерфейсе. Никаких сложностей —
              только результат, достойный вашего ПК.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass rounded-2xl p-7 hover:border-gold/40 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 gold-border flex items-center justify-center mb-5">
                  <Icon name={f.icon} className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24 border-t border-gold/10">
        <div className="container">
          <div className="glass gold-glow rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 gold-border flex items-center justify-center mb-7">
                <Icon name="Download" className="text-gold" size={36} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
                Скачайте <span className="gold-text">Богатый курьер Pro</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-9">
                Установите программу за минуту и наведите идеальный порядок на своём
                компьютере. Бесплатно для Windows 10 и 11.
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold rounded-full px-10 h-16 text-lg gold-glow"
              >
                <Icon name="MonitorDown" size={22} className="mr-2" />
                Скачать для Windows
              </Button>
              <p className="text-xs text-muted-foreground mt-5">
                Версия 1.0 · 24 МБ · Совместимо с Windows 10 / 11
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-gold/10">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Частые <span className="gold-text">вопросы</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-gold/15"
              >
                <AccordionTrigger className="text-left font-display text-xl hover:text-gold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* DOCS */}
      <section id="docs" className="py-24 border-t border-gold/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">Документация</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-5">
              Всё, что нужно <span className="gold-text">знать</span>
            </h2>
            <p className="text-muted-foreground">
              Подробные материалы помогут разобраться в каждой функции программы.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {docs.map((d) => (
              <a
                key={d.title}
                href="#docs"
                className="glass rounded-2xl p-8 hover:border-gold/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 gold-border flex items-center justify-center mb-5">
                  <Icon name={d.icon} className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2 flex items-center gap-2">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{d.text}</p>
                <span className="text-gold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Открыть <Icon name="ArrowRight" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/10 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gold-border flex items-center justify-center bg-secondary">
              <Icon name="Crown" className="text-gold" size={18} />
            </div>
            <p className="font-display text-lg gold-text">Богатый курьер Pro</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Богатый курьер Pro. Все права защищены.
          </p>
          <div className="flex gap-4">
            {['Youtube', 'Send', 'MessageCircle'].map((ic) => (
              <a
                key={ic}
                href="#"
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-gold/70 hover:text-gold hover:bg-gold/10 transition-all"
              >
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;