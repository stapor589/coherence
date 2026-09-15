// Baza wiedzy. type: ksiazka | artykul | narzedzie | szkolenie | norma | wideo
// Książki nie mają plików — możesz dołączyć własny egzemplarz (PDF/EPUB) w aplikacji.

export const RESOURCE_TYPES = {
  ksiazka: 'Książka',
  artykul: 'Artykuł',
  narzedzie: 'Narzędzie',
  szkolenie: 'Szkolenie',
  norma: 'Norma / wytyczne',
  wideo: 'Wideo',
  plik: 'Mój plik',
};

export const RESOURCES = [
  // Książki
  { id: 'b-mccarthy', type: 'ksiazka', title: 'Sound Systems: Design and Optimization', author: 'Bob McCarthy', tags: ['ch1', 'ch3', 'ch4', 'ch5', 'ch6'], note: 'Podstawowa lektura system engineera: sumowanie, projekt, pomiar i optymalizacja.' },
  { id: 'b-davis', type: 'ksiazka', title: 'Sound System Engineering', author: 'Don Davis, Eugene Patronis, Pat Brown', tags: ['ch1', 'ch2', 'ch3', 'ch4'], note: 'Klasyka inżynierii systemów — matematyka i fizyka projektowania.' },
  { id: 'b-ballou', type: 'ksiazka', title: 'Handbook for Sound Engineers', author: 'Glen Ballou (red.)', tags: ['ch2', 'ch7', 'ch8', 'ch9'], note: 'Encyklopedia — do sięgania po konkretne rozdziały.' },
  { id: 'b-everest', type: 'ksiazka', title: 'Master Handbook of Acoustics', author: 'F. Alton Everest, Ken C. Pohlmann', tags: ['ch1', 'ch5', 'ch9'], note: 'Przystępna akustyka: fale, pomieszczenia, pomiary.' },
  { id: 'b-toole', type: 'ksiazka', title: 'Sound Reproduction', author: 'Floyd E. Toole', tags: ['ch1', 'ch6'], note: 'Psychoakustyka i percepcja głośników w pomieszczeniach.' },
  { id: 'b-self', type: 'ksiazka', title: 'Small Signal Audio Design', author: 'Douglas Self', tags: ['ch2', 'ch8'], note: 'Interfejsy, poziomy, szum, zbalansowanie — od strony elektroniki.' },
  { id: 'b-yamaha', type: 'ksiazka', title: 'Sound Reinforcement Handbook', author: 'Gary Davis, Ralph Jones', tags: ['ch1', 'ch2'], note: 'Klasyczne kompendium nagłośnienia (Yamaha).' },
  { id: 'b-long', type: 'ksiazka', title: 'Architectural Acoustics', author: 'Marshall Long', tags: ['ch9'], note: 'Akustyka architektoniczna — pogłębienie tematów sal.' },
  { id: 'b-beranek', type: 'ksiazka', title: 'Acoustics: Sound Fields, Transducers and Vibration', author: 'Leo Beranek, Tim Mellow', tags: ['ch1', 'ch3'], note: 'Poziom akademicki: pola akustyczne i przetworniki.' },

  // Artykuły i serwisy edukacyjne
  { id: 'a-mvv', type: 'artykul', title: 'Merlijn van Veen — artykuły i kalkulatory', url: 'https://www.merlijnvanveen.nl/en/', tags: ['ch1', 'ch3', 'ch6', 'ch9'], note: 'Suby, sumowanie, wyrównanie, interaktywne kalkulatory.' },
  { id: 'a-sdl', type: 'artykul', title: 'Sound Design Live — Nathan Lively', url: 'https://www.sounddesignlive.com/', tags: ['ch3', 'ch6', 'ch10'], note: 'Praktyczne artykuły i podcasty o strojeniu i wyrównaniu subów.' },
  { id: 'a-linkwitz', type: 'artykul', title: 'Linkwitz Lab', url: 'https://www.linkwitzlab.com/', tags: ['ch2'], note: 'Zwrotnice i filtry od autora filtru Linkwitz-Riley.' },
  { id: 'l-aes', type: 'artykul', title: 'AES E-Library (m.in. prace o line array i WST)', url: 'https://www.aes.org/e-lib/', tags: ['ch3', 'ch11'], note: 'Szukaj: Heil & Urban „Sound Fields Radiated by Multiple Sound Source Arrays”.' },

  // Wikipedia — szybkie odświeżenie teorii
  { id: 'w-speed', type: 'artykul', title: 'Speed of sound', url: 'https://en.wikipedia.org/wiki/Speed_of_sound', tags: ['ch1'] },
  { id: 'w-wavelength', type: 'artykul', title: 'Wavelength', url: 'https://en.wikipedia.org/wiki/Wavelength', tags: ['ch1'] },
  { id: 'w-decibel', type: 'artykul', title: 'Decibel', url: 'https://en.wikipedia.org/wiki/Decibel', tags: ['ch1'] },
  { id: 'w-aweight', type: 'artykul', title: 'A-weighting (i inne wagi)', url: 'https://en.wikipedia.org/wiki/A-weighting', tags: ['ch1', 'ch8'] },
  { id: 'w-comb', type: 'artykul', title: 'Comb filter', url: 'https://en.wikipedia.org/wiki/Comb_filter', tags: ['ch1'] },
  { id: 'w-equal', type: 'artykul', title: 'Equal-loudness contour', url: 'https://en.wikipedia.org/wiki/Equal-loudness_contour', tags: ['ch1'] },
  { id: 'w-precedence', type: 'artykul', title: 'Precedence effect', url: 'https://en.wikipedia.org/wiki/Precedence_effect', tags: ['ch1', 'ch6'] },
  { id: 'w-localization', type: 'artykul', title: 'Sound localization', url: 'https://en.wikipedia.org/wiki/Sound_localization', tags: ['ch1'] },
  { id: 'w-balanced', type: 'artykul', title: 'Balanced audio', url: 'https://en.wikipedia.org/wiki/Balanced_audio', tags: ['ch2', 'ch8'] },
  { id: 'w-gain', type: 'artykul', title: 'Gain stage', url: 'https://en.wikipedia.org/wiki/Gain_stage', tags: ['ch2'] },
  { id: 'w-loudspeaker', type: 'artykul', title: 'Loudspeaker', url: 'https://en.wikipedia.org/wiki/Loudspeaker', tags: ['ch2'] },
  { id: 'w-damping', type: 'artykul', title: 'Damping factor', url: 'https://en.wikipedia.org/wiki/Damping_factor', tags: ['ch2'] },
  { id: 'w-lr', type: 'artykul', title: 'Linkwitz–Riley filter', url: 'https://en.wikipedia.org/wiki/Linkwitz%E2%80%93Riley_filter', tags: ['ch2'] },
  { id: 'w-crossover', type: 'artykul', title: 'Audio crossover', url: 'https://en.wikipedia.org/wiki/Audio_crossover', tags: ['ch2'] },
  { id: 'w-fir', type: 'artykul', title: 'Finite impulse response', url: 'https://en.wikipedia.org/wiki/Finite_impulse_response', tags: ['ch2'] },
  { id: 'w-directivity', type: 'artykul', title: 'Directivity', url: 'https://en.wikipedia.org/wiki/Directivity', tags: ['ch3'] },
  { id: 'w-inverse', type: 'artykul', title: 'Inverse-square law', url: 'https://en.wikipedia.org/wiki/Inverse-square_law', tags: ['ch3'] },
  { id: 'w-linearray', type: 'artykul', title: 'Line array', url: 'https://en.wikipedia.org/wiki/Line_array', tags: ['ch3'] },
  { id: 'w-sti', type: 'artykul', title: 'Speech transmission index', url: 'https://en.wikipedia.org/wiki/Speech_transmission_index', tags: ['ch4', 'ch5'] },
  { id: 'w-wll', type: 'artykul', title: 'Working load limit', url: 'https://en.wikipedia.org/wiki/Working_load_limit', tags: ['ch4'] },
  { id: 'w-fft', type: 'artykul', title: 'Fast Fourier transform', url: 'https://en.wikipedia.org/wiki/Fast_Fourier_transform', tags: ['ch5'] },
  { id: 'w-pink', type: 'artykul', title: 'Pink noise', url: 'https://en.wikipedia.org/wiki/Pink_noise', tags: ['ch5'] },
  { id: 'w-coherence', type: 'artykul', title: 'Coherence (signal processing)', url: 'https://en.wikipedia.org/wiki/Coherence_(signal_processing)', tags: ['ch5'] },
  { id: 'w-ir', type: 'artykul', title: 'Impulse response', url: 'https://en.wikipedia.org/wiki/Impulse_response', tags: ['ch5'] },
  { id: 'w-reverb', type: 'artykul', title: 'Reverberation', url: 'https://en.wikipedia.org/wiki/Reverberation', tags: ['ch5', 'ch9'] },
  { id: 'w-critical', type: 'artykul', title: 'Critical distance', url: 'https://en.wikipedia.org/wiki/Critical_distance', tags: ['ch9'] },
  { id: 'w-dante', type: 'artykul', title: 'Dante (networking)', url: 'https://en.wikipedia.org/wiki/Dante_(networking)', tags: ['ch7'] },
  { id: 'w-aes67', type: 'artykul', title: 'AES67', url: 'https://en.wikipedia.org/wiki/AES67', tags: ['ch7'] },
  { id: 'w-avb', type: 'artykul', title: 'Audio Video Bridging', url: 'https://en.wikipedia.org/wiki/Audio_Video_Bridging', tags: ['ch7'] },
  { id: 'w-ptp', type: 'artykul', title: 'Precision Time Protocol', url: 'https://en.wikipedia.org/wiki/Precision_Time_Protocol', tags: ['ch7'] },
  { id: 'w-aes3', type: 'artykul', title: 'AES3', url: 'https://en.wikipedia.org/wiki/AES3', tags: ['ch7'] },
  { id: 'w-wordclock', type: 'artykul', title: 'Word clock', url: 'https://en.wikipedia.org/wiki/Word_clock', tags: ['ch7'] },
  { id: 'w-3phase', type: 'artykul', title: 'Three-phase electric power', url: 'https://en.wikipedia.org/wiki/Three-phase_electric_power', tags: ['ch8'] },
  { id: 'w-rcd', type: 'artykul', title: 'Residual-current device', url: 'https://en.wikipedia.org/wiki/Residual-current_device', tags: ['ch8'] },
  { id: 'w-groundloop', type: 'artykul', title: 'Ground loop (electricity)', url: 'https://en.wikipedia.org/wiki/Ground_loop_(electricity)', tags: ['ch8'] },
  { id: 'w-wfs', type: 'artykul', title: 'Wave field synthesis', url: 'https://en.wikipedia.org/wiki/Wave_field_synthesis', tags: ['ch11'] },
  { id: 'w-osc', type: 'artykul', title: 'Open Sound Control', url: 'https://en.wikipedia.org/wiki/Open_Sound_Control', tags: ['ch11'] },

  // Narzędzia
  { id: 't-smaart', type: 'narzedzie', title: 'Smaart (Rational Acoustics)', url: 'https://www.rationalacoustics.com/', tags: ['ch5', 'ch6'], note: 'Standard branżowy analizy dwukanałowej.' },
  { id: 't-osm', type: 'narzedzie', title: 'Open Sound Meter', url: 'https://opensoundmeter.com/', tags: ['ch5', 'ch6'], note: 'Darmowy analizator funkcji przejścia (open source).' },
  { id: 't-rew', type: 'narzedzie', title: 'REW — Room EQ Wizard', url: 'https://www.roomeqwizard.com/', tags: ['ch5', 'ch9'], note: 'Darmowy: IR, RT60, sweep, akustyka pomieszczeń.' },
  { id: 't-systune', type: 'narzedzie', title: 'SysTune (AFMG)', url: 'https://www.afmg.eu/en', tags: ['ch5'] },
  { id: 't-easefocus', type: 'narzedzie', title: 'EASE Focus (AFMG)', url: 'https://www.afmg.eu/en/ease-focus', tags: ['ch3', 'ch4'], note: 'Darmowa predykcja 2D dla wielu producentów.' },
  { id: 't-soundvision', type: 'narzedzie', title: 'Soundvision (L-Acoustics)', url: 'https://www.l-acoustics.com/', tags: ['ch3', 'ch4'] },
  { id: 't-arraycalc', type: 'narzedzie', title: 'ArrayCalc (d&b audiotechnik)', url: 'https://www.dbaudio.com/', tags: ['ch3', 'ch4', 'ch11'] },
  { id: 't-mapp', type: 'narzedzie', title: 'MAPP 3D (Meyer Sound)', url: 'https://meyersound.com/', tags: ['ch3', 'ch4'] },
  { id: 't-mla', type: 'narzedzie', title: 'Martin Audio — MLA i Display', url: 'https://martin-audio.com/', tags: ['ch11'] },
  { id: 't-lisa', type: 'narzedzie', title: 'L-ISA (L-Acoustics)', url: 'https://www.l-acoustics.com/', tags: ['ch11'] },
  { id: 't-soundscape', type: 'narzedzie', title: 'd&b Soundscape', url: 'https://www.dbaudio.com/global/en/soundscape/', tags: ['ch11'] },
  { id: 't-sengpiel', type: 'narzedzie', title: 'sengpielaudio — kalkulatory audio', url: 'https://sengpielaudio.com/', tags: ['ch1', 'ch2'] },
  { id: 't-10eazy', type: 'narzedzie', title: '10EaZy — monitoring SPL', url: 'https://www.10eazy.com/', tags: ['ch8'] },

  // Szkolenia i certyfikaty
  { id: 'c-dante', type: 'szkolenie', title: 'Dante Certification Program (Audinate)', url: 'https://www.getdante.com/', tags: ['ch7'], note: 'Poziomy 1–3, online.' },
  { id: 'c-milan', type: 'szkolenie', title: 'Avnu Alliance — Milan', url: 'https://avnu.org/', tags: ['ch7'] },
  { id: 'c-rational', type: 'szkolenie', title: 'Rational Acoustics — szkolenia Smaart', url: 'https://www.rationalacoustics.com/', tags: ['ch5', 'ch6', 'ch10'] },
  { id: 'c-prosound', type: 'szkolenie', title: 'ProSoundTraining (Pat & Brenda Brown)', url: 'https://www.prosoundtraining.com/', tags: ['ch1', 'ch4', 'ch5'] },

  // Normy i wytyczne
  { id: 'n-who', type: 'norma', title: 'WHO — Global standard for safe listening venues and events', url: 'https://www.who.int/publications/i/item/9789240043114', tags: ['ch8'] },
  { id: 'n-ciop', type: 'norma', title: 'CIOP-PIB — hałas i ochrona słuchu w pracy', url: 'https://www.ciop.pl/', tags: ['ch8'] },
  { id: 'n-iso9613', type: 'norma', title: 'ISO 9613 — tłumienie dźwięku podczas propagacji w plenerze', url: 'https://www.iso.org/', tags: ['ch9'] },
];
