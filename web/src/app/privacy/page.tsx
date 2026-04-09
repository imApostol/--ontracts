export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-sm text-white/45">Черновик документа</div>
        <h1 className="mt-3 text-4xl font-semibold">Политика конфиденциальности</h1>
        <div className="mt-8 space-y-6 text-white/80">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Какие данные собираются</h2>
            <p className="mt-2 leading-7">
              Учетные данные, контактная информация, загружаемые документы, история операций,
              сведения о согласиях и технические данные доступа к сервису.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">2. Зачем они нужны</h2>
            <p className="mt-2 leading-7">
              Для предоставления доступа к сервису, анализа документов, формирования результатов,
              связи с пользователем, защиты от злоупотреблений и исполнения требований закона.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">3. Как подтверждаются согласия</h2>
            <p className="mt-2 leading-7">
              Сервис фиксирует дату, время, источник, версию документа и факт согласия пользователя
              на обработку данных и принятие условий сервиса.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">4. Связь</h2>
            <p className="mt-2 leading-7">
              По вопросам данных и использования сервиса пользователь может обращаться на
              info@apostol-doc.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
