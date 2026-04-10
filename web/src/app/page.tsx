const audiences = [
  "Предприниматели",
  "Юристы",
  "Коммерческие команды",
  "ИП и ООО",
];

const scenarios = [
  {
    title: "Проверить договор перед подписанием",
    text: "Загрузить файл, выбрать свою роль и быстро увидеть, где перекос, риск или опасная формулировка.",
  },
  {
    title: "Получить правки по пунктам",
    text: "Понять не только что плохо, но и как именно переписать спорные условия в рабочую сторону.",
  },
  {
    title: "Собрать документ под задачу",
    text: "Описать ситуацию простыми словами, пройти короткий сценарий вопросов и получить готовый черновик документа.",
  },
];

const advantages = [
  {
    title: "Быстрее, чем переписка в общем чате",
    text: "Не нужно придумывать промпты и вручную вытягивать из модели нормальную структуру результата.",
  },
  {
    title: "Понятный формат результата",
    text: "На выходе не простыня текста, а список рисков, приоритетов, правок и готовых формулировок.",
  },
  {
    title: "Подходит для повседневной рутины",
    text: "Сервис рассчитан на повторяющиеся рабочие задачи, за которые обычно жалко платить юристу каждый раз отдельно.",
  },
  {
    title: "Сделан под российскую практику",
    text: "Фокус на документах, сценариях и рисках, которые реально возникают у бизнеса и специалистов в РФ.",
  },
];

const steps = [
  "Загрузите договор или опишите задачу простыми словами.",
  "Сервис определит сценарий, задаст только нужные вопросы и соберёт входные данные.",
  "На выходе вы получите либо анализ с правками, либо готовый документ в рабочем формате.",
];

const resultItems = [
  "критичные риски и перекосы",
  "приоритеты по правкам",
  "новую редакцию спорных пунктов",
  "готовый черновик документа",
];

const pricing = [
  {
    title: "Проверка договора",
    value: "от 290 ₽",
    text: "Быстрый входной продукт: загрузка договора, роль пользователя и первый структурированный анализ.",
  },
  {
    title: "Проверка + правки",
    value: "от 590 ₽",
    text: "Более сильный сценарий: не только замечания, но и конкретные правки по пунктам.",
  },
  {
    title: "Создание документа",
    value: "от 390 ₽",
    text: "Сценарий для типовой юридической рутины, когда нужен рабочий документ без долгой переписки.",
  },
];

const faq = [
  {
    q: "Для кого этот сервис?",
    a: "Для предпринимателей, юристов, ИП, небольших команд и тех, кому нужно быстро проверять договоры и собирать рабочие документы.",
  },
  {
    q: "Что можно сделать уже сейчас?",
    a: "Открыть сайт, посмотреть сценарии, открыть каркас кабинета и подключиться через Telegram-бота.",
  },
  {
    q: "Чем это отличается от обычного чата?",
    a: "Здесь упор не на свободную болтовню, а на готовый сценарий: загрузка, роль, результат, правки и рабочие документы.",
  },
  {
    q: "Что будет дальше?",
    a: "Следующий слой — рабочий анализ договора, рабочее создание документа и полный юридический контур сервиса.",
  },
];

const legalLinks = [
  { href: "/offer", label: "Лицензионная оферта" },
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/app", label: "Каркас кабинета" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
              Apostol Doc · сервис проверки договоров и документов
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Проверяйте договоры, вносите правки и собирайте документы быстрее, чем в обычном чате.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              Apostol Doc — это рабочий сервис для предпринимателей и юристов, которым нужно
              быстро понять риски, получить правки и собрать документ без хаоса, лишней
              переписки и долгого ручного разбора.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://t.me/ai_legal_business_bot"
                className="rounded-full bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-slate-200"
              >
                Открыть Telegram-бота
              </a>
              <a
                href="/app"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/8"
              >
                Открыть каркас кабинета
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <div className="text-sm text-white/45">Что уже можно сделать</div>
            <div className="mt-3 text-3xl font-semibold">Открыть живой контур проекта</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Сайт уже работает по HTTPS. Доступны публичная страница, юридические черновики и
              каркас кабинета, на который дальше наслаивается рабочий продуктовый сценарий.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-white/10 px-4 py-3 transition hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {audiences.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
            >
              {item}
            </div>
          ))}
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20"
            >
              <h2 className="text-xl font-semibold">{scenario.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{scenario.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="text-2xl font-semibold">Как это работает</h2>
            <div className="mt-5 grid gap-3">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="text-sm text-white/40">Шаг {index + 1}</div>
                  <div className="mt-1 text-white/85">{step}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Что получает пользователь</h2>
            <div className="mt-5 grid gap-3">
              {resultItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Почему это быстрее и выгоднее, чем обычный чат</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Вместо ручной промпт-инженерии пользователь получает сразу рабочий сценарий: понятный
              вход, нужные вопросы и структурированный результат без длинной болтовни.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Стартовая тарифная логика</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              На старте сервис должен быть дешевле и понятнее, чем ручная возня в чате, но при этом
              давать готовый полезный результат.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pricing.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/45">{item.title}</div>
                <div className="mt-3 text-3xl font-semibold">{item.value}</div>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <div className="mt-5 grid gap-3">
              {faq.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="font-medium text-white">{item.q}</div>
                  <div className="mt-2 text-sm leading-7 text-white/70">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-sm text-white/45">Следующий шаг проекта</div>
            <div className="mt-3 text-3xl font-semibold">Рабочий анализ договора</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Следующий слой после лендинга и документов — реальный сценарий загрузки договора,
              выбора роли пользователя и выдачи результата анализа.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://t.me/ai_legal_business_bot"
                className="rounded-full bg-white px-5 py-3 text-center font-medium text-slate-950 transition hover:bg-slate-200"
              >
                Перейти в Telegram-бота
              </a>
              <a
                href="mailto:info@apostol-doc.com"
                className="rounded-full border border-white/20 px-5 py-3 text-center font-medium text-white transition hover:bg-white/8"
              >
                Запросить ранний доступ
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
