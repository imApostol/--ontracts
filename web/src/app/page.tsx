const features = [
  {
    title: "Проверка договора",
    text: "Покажем критичные риски, слабые места и что именно нужно исправить перед подписанием.",
  },
  {
    title: "Правки и новая редакция",
    text: "Не просто замечания, а конкретные формулировки, которые можно брать в работу.",
  },
  {
    title: "Создание документов",
    text: "Сервис задаёт вопросы по ситуации и собирает рабочий документ без лишней рутины.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/70">
            apostol-doc.com · скоро запуск
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Проверка договоров, правки и создание документов — быстро и по делу.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Сервис для предпринимателей, юристов и команд, которым нужно быстро понять риски,
            исправить опасные пункты и собрать рабочий документ без бесконечной переписки.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://t.me/ai_legal_business_bot"
              className="rounded-full bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Открыть Telegram-бота
            </a>
            <a
              href="mailto:info@apostol-doc.com"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:bg-white/8"
            >
              Получить ранний доступ
            </a>
          </div>
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

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
          <div>
            <div className="text-sm text-white/50">Стартовая логика</div>
            <div className="mt-2 text-2xl font-semibold">Проверка договора</div>
          </div>
          <div>
            <div className="text-sm text-white/50">Главная ценность</div>
            <div className="mt-2 text-2xl font-semibold">Показываем, где риск</div>
          </div>
          <div>
            <div className="text-sm text-white/50">Формат</div>
            <div className="mt-2 text-2xl font-semibold">Сайт + Telegram-бот</div>
          </div>
        </div>
      </section>
    </main>
  );
}
