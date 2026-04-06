export default function AquaSafeLandingPage() {
  const solutions = [
    {
      title: "Φίλτρα Κεντρικής Παροχής",
      text: "Φιλτράρουν ολόκληρο το σπίτι ή τον επαγγελματικό χώρο, αφαιρώντας άλατα, σκουριά και βελτιώνοντας την ποιότητα του νερού σε κάθε βρύση.",
    },
    {
      title: "Φίλτρα Κάτω Πάγκου",
      text: "Διακριτική εγκατάσταση κάτω από τον νεροχύτη για καθαρό πόσιμο νερό απευθείας από ξεχωριστή βρύση.",
    },
    {
      title: "Φίλτρα Άνω Πάγκου",
      text: "Γρήγορη και εύκολη τοποθέτηση χωρίς αλλαγές στο σύστημα, ιδανικά για ενοικιαζόμενους χώρους ή περιοχές με περιορισμένη πίεση νερού.",
    },
    {
      title: "Συστήματα Αντίστροφης Όσμωσης",
      text: "Πολυεπίπεδο σύστημα καθαρισμού υψηλής ακρίβειας που προσφέρει κορυφαίο φιλτράρισμα και εξαιρετική ποιότητα νερού.",
    },
    {
      title: "Αποσκληρυντές Νερού",
      text: "Μειώνουν τη σκληρότητα του νερού και προστατεύουν πλυντήρια, θερμοσίφωνες, βρύσες και σωληνώσεις.",
    },
  ];

  const reasons = [
    "Καθαρό και γευστικό νερό καθημερινά",
    "Προστασία της υγείας της οικογένειας",
    "Μείωση χρήσης εμφιαλωμένου νερού",
    "Προστασία συσκευών και υδραυλικών εγκαταστάσεων",
    "Προσαρμοσμένες λύσεις ανάλογα με τις ανάγκες του χώρου",
    "Άμεση εγκατάσταση, συντήρηση και τεχνική υποστήριξη",
  ];

  const roSteps = [
    "Προφίλτρο ιζημάτων για απομάκρυνση σκουριάς, χώματος και άμμου.",
    "Ενεργός άνθρακας για χλώριο, οργανικά κατάλοιπα και οσμές.",
    "Συμπαγής άνθρακας για βαρέα μέταλλα, φυτοφάρμακα και χημικά υπολείμματα.",
    "Μεμβράνη αντίστροφης όσμωσης για αφαίρεση έως και 99% των διαλυμένων στερεών, νιτρικών και μικροβίων.",
    "Τελικό φίλτρο post carbon για καθαρή, φυσική γεύση.",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-16 right-[-10%] h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute bottom-0 left-[-5%] h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 131C121 167 242 203 360 200C480 197 600 155 720 145C840 136 960 160 1080 176C1200 191 1320 198 1440 170V220H0V131Z"
              fill="rgba(14,165,233,0.10)"
            />
            <path
              d="M0 154C120 126 240 98 360 97C480 96 600 123 720 137C840 151 960 152 1080 142C1200 132 1320 111 1440 97V220H0V154Z"
              fill="rgba(6,182,212,0.12)"
            />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:px-12 lg:py-24">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm text-sky-700 shadow-sm backdrop-blur">
              Καθαρό Νερό. Υγεία. Ασφάλεια.
            </div>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Λύσεις φιλτραρίσματος νερού για σπίτι και επαγγελματικό χώρο.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Στην Aqua Safe Systems προσφέρουμε τεχνολογικά προηγμένες λύσεις για ασφαλές,
              ποιοτικό και καθαρό νερό, με έμφαση στην υγεία, την προστασία των συσκευών και
              την καθημερινή σας άνεση.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Κλείστε Δωρεάν Ανάλυση Νερού
              </a>
              <a
                href="#solutions"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5"
              >
                Δείτε τις λύσεις μας
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-100 to-cyan-50 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-center rounded-[1.5rem] bg-slate-50 p-6">
                <img
                  src="/logo-aquasafe.png"
                  alt="Aqua Safe Systems"
                  className="max-h-40 w-auto object-contain"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Γιατί Aqua Safe Systems</p>
                  <p className="mt-2 text-base font-medium text-slate-900">Πιστοποιημένος εξοπλισμός</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Υποστήριξη</p>
                  <p className="mt-2 text-base font-medium text-slate-900">Εγκατάσταση & συντήρηση</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Το Όραμά μας</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Το καθαρό νερό είναι δικαίωμα όλων.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Δημιουργούμε λύσεις που προσφέρουν πρόσβαση σε ασφαλές και ποιοτικό νερό, με σεβασμό
              στην υγεία, στην καθημερινότητά σας και στο περιβάλλον.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.slice(0, 4).map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-3 h-2 w-12 rounded-full bg-sky-400" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/80" id="solutions">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Οι Λύσεις μας</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Συστήματα προσαρμοσμένα στις πραγματικές ανάγκες του χώρου σας.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <div className="h-3 w-3 rounded-full bg-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Reverse Osmosis</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Το πιο προηγμένο φιλτράρισμα νερού.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Η αντίστροφη όσμωση είναι ένα πολυεπίπεδο σύστημα καθαρισμού υψηλής ακρίβειας,
              σχεδιασμένο να απομακρύνει ανεπιθύμητα στοιχεία από το νερό σας.
            </p>

            <div className="mt-8 space-y-4">
              {roSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">Με ή χωρίς ρεύμα</h3>
            <div className="mt-8 grid gap-6">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-sky-100">Χωρίς ρεύμα</p>
                <ul className="mt-3 space-y-2 text-white/90">
                  <li>Οικονομική λύση</li>
                  <li>Λειτουργία με φυσική πίεση άνω των 3 bar</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-sky-100">Με ρεύμα</p>
                <ul className="mt-3 space-y-2 text-white/90">
                  <li>Ιδανική λύση για χαμηλή πίεση</li>
                  <li>Μέγιστη απόδοση και παραγωγή καθαρού νερού</li>
                  <li>Επαγγελματική προστασία της μεμβράνης</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Γιατί να εγκαταστήσετε φίλτρο νερού;</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Περισσότερη ασφάλεια, καλύτερη γεύση, λιγότερες φθορές.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="leading-7 text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-50 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Επικοινωνία</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Κλείστε δωρεάν ανάλυση νερού.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Αναλαμβάνουμε την αξιολόγηση του νερού σας και σας προτείνουμε την ιδανική λύση
                  φιλτραρίσματος ή σύστημα αντίστροφης όσμωσης για τον χώρο σας.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-6">
                <div className="space-y-4 text-slate-700">
                  <div>
                    <p className="text-sm text-slate-500">Τηλέφωνα</p>
                    <p className="mt-1 font-medium">Αλέξανδρος Γούλας — 694 2874 497</p>
                    <p className="font-medium">Στράτος Χατζημιχαήλ — 694 4857 705</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:aquasaferodos@gmail.com" className="mt-1 block font-medium text-slate-900">
                      aquasaferodos@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Web</p>
                    <a href="https://www.aquasafesystems.gr" className="mt-1 block font-medium text-slate-900">
                      www.aquasafesystems.gr
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Περιοχή εξυπηρέτησης</p>
                    <p className="mt-1 font-medium text-slate-900">Ρόδος | Δωδεκάνησα</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}