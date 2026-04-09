const scenarios = [
  {
    title: "Проверить договор",
    text: "Загрузить файл, выбрать роль и получить риски, замечания и правки.",
  },
  {
    title: "Создать документ",
    text: "Описать задачу, пройти сценарий вопросов и собрать рабочий документ.",
  },
  {
    title: "Ответить на претензию",
    text: "Загрузить входящий документ, дать краткий контекст и получить основу ответа.",
  },
];

export default function AppPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm text-white/45">Каркас кабинета</div>
            <h1 className="mt-3 text-4xl font-semibold">Рабочая панель пользователя</h1>
            <p className="mt-3 max-w-2xl text-white/70">
              Это следующий слой после лендинга: точка входа в продукт, где пользователь выбирает
              сценарий и двигается в проверку договора или создание документа.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white/70">
            Этап: каркас без подключённой бизнес-логики
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <div key={scenario.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h2 className="text-xl font-semibold">{scenario.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{scenario.text}</p>
              <button className="mt-5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
                Скоро будет доступно
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
