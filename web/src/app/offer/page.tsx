export default function OfferPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-14 text-white md:px-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-sm text-white/45">Черновик документа</div>
        <h1 className="mt-3 text-4xl font-semibold">Лицензионная оферта</h1>
        <div className="mt-8 space-y-6 text-white/80">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Предмет</h2>
            <p className="mt-2 leading-7">
              Сервис Apostol Doc предоставляет пользователю простую неисключительную лицензию на
              использование сайта и связанных функций для проверки договоров, правок и создания
              документов.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">2. Формат предоставления</h2>
            <p className="mt-2 leading-7">
              Сервис предоставляется по модели доступа к программному продукту через сайт и другие
              цифровые интерфейсы. Функциональность может дополняться, ограничиваться и изменяться.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">3. Принцип использования</h2>
            <p className="mt-2 leading-7">
              Пользователь обязан вводить достоверные данные, иметь право на загрузку документов и
              самостоятельно проверять пригодность результата для своей конкретной ситуации перед
              практическим применением.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">4. Ограничение ответственности</h2>
            <p className="mt-2 leading-7">
              Продукт предоставляется по модели «как есть» в рамках текущей функциональности.
              Сервис не освобождает пользователя от необходимости собственной оценки результата и
              дополнительной проверки в сложных или нестандартных случаях.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
