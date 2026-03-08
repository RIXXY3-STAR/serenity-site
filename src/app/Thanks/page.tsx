export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-100 px-6">
      <div className="max-w-lg rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-stone-900">
          🎉 You're on the Serenity founding access list.
        </h1>

        <p className="mt-4 text-sm text-stone-600">
          Thank you for joining the Serenity Founding Access Programme.
          We&apos;ll keep you updated with early product access and development updates.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Back to Serenity
        </a>
      </div>
    </main>
  );
}