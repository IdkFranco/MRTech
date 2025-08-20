const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 selection:bg-amber-300/60 selection:text-slate-900 transition-colors">
      {/* Navbar “glass” para probar backdrop-blur y sticky */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/40 dark:bg-slate-800/40 border-b border-white/20 dark:border-slate-700/30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500">
              Tailwind Self-Check
            </span>
          </h1>

          <button
            className="group relative inline-flex items-center gap-2 rounded-xl px-4 py-2
                       bg-slate-900 text-white dark:bg-white dark:text-slate-900
                       ring-2 ring-slate-900/10 dark:ring-white/10 ring-offset-2 ring-offset-white dark:ring-offset-slate-900
                       transition active:scale-95 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/0 to-emerald-500/0 group-hover:from-fuchsia-500/15 group-hover:to-emerald-500/15 transition" />
            <span className="relative font-semibold">Acción</span>
          </button>
        </div>
      </header>

      {/* Contenido */}
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        {/* Bloque 1: Hero + spinner + arbitrary values */}
        <section className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700">
                Primer commit
              </span>{" "}
              <span className="inline-block align-middle">🎉</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Este layout prueba <strong>gradients</strong>,{" "}
              <strong>blur</strong>, <strong>rings</strong>,{" "}
              <strong>animaciones</strong>,{" "}
              <strong>breakpoints responsivos</strong>, variantes{" "}
              <code>group</code>/<code>peer</code>, <strong>dark mode</strong> y{" "}
              <strong>arbitrary values</strong> (p. ej. <code>h-[120px]</code>).
            </p>

            {/* Input + peer (cambia estilos del label) */}
            <div className="flex items-center gap-3">
              <input id="check" type="checkbox" className="peer sr-only" />
              <label
                htmlFor="check"
                className="cursor-pointer select-none rounded-full px-4 py-2 border
                           border-slate-300 dark:border-slate-600
                           peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-600
                           transition"
              >
                Marca para probar <code>peer</code>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Spinner con ring + animate-spin */}
            <div className="relative h-[120px] w-[120px]">
              <div className="absolute inset-0 rounded-full border-4 border-slate-300/60 dark:border-slate-700/60" />
              <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-sky-500 animate-spin" />
              <div className="absolute inset-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur shadow-lg" />
            </div>
          </div>
        </section>

        {/* Bloque 2: Grid de tarjetas con group-hover y hover */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Card A", "Card B", "Card C"].map((title) => (
            <article
              key={title}
              className="group p-6 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur
                         border border-white/30 dark:border-slate-700/40
                         shadow-sm hover:shadow-xl transition relative overflow-hidden"
            >
              <div className="absolute -inset-x-10 -top-10 h-24 bg-gradient-to-r from-fuchsia-500/10 via-sky-400/10 to-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Pasa el mouse: el fondo agrega un brillo suave y el botón salta.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Estado: OK
                </span>
                <button
                  className="translate-y-0 group-hover:-translate-y-0.5 transition
                             rounded-lg px-3 py-1.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900
                             ring-1 ring-black/10 dark:ring-white/10"
                >
                  Probar
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Bloque 3: Caja centrada con flex + justify/ items + ring-offset */}
        <section className="flex items-center justify-center">
          <div
            className="w-full max-w-xl rounded-2xl p-6 bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/70 dark:to-slate-900/60 backdrop-blur
                          ring-1 ring-black/5 dark:ring-white/10 ring-offset-4 ring-offset-slate-100 dark:ring-offset-slate-900
                          flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="aspect-square w-16 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600" />
            <div className="flex-1">
              <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                Caja de verificación
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Si ves bordes suaves, desenfoque de fondo, degradados y la caja
                se adapta en móvil/escritorio, entonces Tailwind está compilando
                bien.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center rounded-lg px-4 py-2 bg-emerald-500 text-white font-medium hover:opacity-90 transition"
            >
              Confirmar
            </a>
          </div>
        </section>
      </main>

      {/* Footer para probar separación y contraste */}
      <footer className="mt-16 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        Hecho para testear Tailwind · Modo claro/oscuro · Responsive · Variants
        · Effects
      </footer>
    </div>
  );
};

export default HomePage;
