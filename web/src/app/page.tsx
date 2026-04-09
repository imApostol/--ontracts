const features = [
  {
    title: "Проверка договора",
    text: "Загружаете документ, выбираете свою роль и получаете список рисков, перекосов и спорных мест.",
  },
  {
    title: "Правки по пунктам",
    text: "Сервис не просто ругает договор, а показывает, что именно менять и как переписать опасные формулировки.",
  },
  {
    title: "Создание документа",
    text: "Пишите задачу своими словами, проходите короткий сценарий вопросов и получаете рабочий документ.",
  },
];

const audiences = ["Предприниматели", "Юристы", "Команды", "ИП и ООО"];

const steps = [
  "Загрузите договор или опишите задачу своими словами.",
  "Сервис определит сценарий и задаст только нужные вопросы.",
  "Вы получите результат в понятном формате: риски, правки или готовый документ.",
];

const links = [
  { href: "/offer", label: "Лицензионная оферта" },
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/app", label: "Каркас кабинета" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
            Apostol Doc · этап публичного запуска
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Проверка договоров, правки и создание документов без лишней переписки и хаоса.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
            Сервис для предпринимателей и юристов, которым нужно быстро понять риски,
            получить правки и собрать рабочий документ по российскому праву.
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

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20"
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr_.8fr]">
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
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <div className="text-sm text-white/45">Что уже открыто</div>
            <div className="mt-3 text-3xl font-semibold">Публичный контур</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Домен, HTTPS, базовый сайт, бот-вход и каркас кабинета уже собраны. Дальше
              докручивается продуктовый слой.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {links.map((link) => (
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
      </section>
    </main>
  );
}
