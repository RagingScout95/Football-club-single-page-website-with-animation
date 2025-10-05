export const WEBSITE_CONTENT = {
  // Header & Navigation
  navigation: {
    logo: 'Blue Lock FC',
    menu: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Teams', href: '#teams' },
      { label: 'Academy', href: '#academy' },
      { label: 'Fixtures', href: '#fixtures' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Join Us', href: '#join' }
    ]
  },

  // Hero Section
  hero: {
    title: 'BLUE LOCK FOOTBALL CLUB',
    subtitle: 'Where Ego Meets Excellence',
    description: 'The ultimate training ground for Japan\'s next generation of football superstars. Only the strongest survive.',
    cta: 'Enter Blue Lock',
    quote: '"In football, there\'s only one winner. Everyone else is a loser."',
    quoteAuthor: '- Ego Jinpachi'
  },

  // About Section
  about: {
    title: 'About Blue Lock',
    subtitle: 'The Revolutionary Training Program',
    history: 'Blue Lock is Japan\'s most controversial and effective football training program, designed to create the world\'s best striker. Founded by the enigmatic Ego Jinpachi, this facility isolates 300 of Japan\'s most talented young forwards in a battle royale-style competition where only one can emerge as the ultimate striker.',
    mission: 'To break free from Japan\'s "nice guy" football culture and forge a generation of selfish, ego-driven strikers who can compete on the world stage. We believe that to become the best, you must first become the most selfish.',
    stats: [
      { number: '300', label: 'Elite Forwards' },
      { number: '1', label: 'Ultimate Striker' },
      { number: '100%', label: 'Ego-Driven' },
      { number: '∞', label: 'Potential' }
    ]
  },

  // Teams Section
  teams: {
    title: 'Blue Lock Players',
    subtitle: 'The Egoists',
    description: 'Meet the most talented and selfish forwards in Japan. Each player has been selected for their unique abilities and unshakeable ego.',
    players: [
      {
        name: 'Yoichi Isagi',
        position: 'Forward',
        number: 10,
        goals: 32,
        assists: 15,
        image: 'player1.png',
        quote: 'Dreams are not what you see in sleep, dreams are the things that don\'t let you sleep.',
        profile: {
          born: '10-01-1997',
          age: '27 YEARS',
          nationality: 'Japan',
          height: '178 cm',
          debut: '2017'
        }
      },
      {
        name: 'Meguru Bachira',
        position: 'Forward',
        number: 7,
        goals: 28,
        assists: 20,
        image: 'player2.jpg',
        quote: 'Imagination is the key to unlock the game’s possibilities.',
        profile: {
          born: '08-08-2007',
          age: '17 YEARS',
          nationality: 'Japan',
          height: '176 cm',
          debut: '2023'
        }
      },
      {
        name: 'Rensuke Kunigami',
        position: 'Forward',
        number: 9,
        goals: 25,
        assists: 10,
        image: 'player3.jpg',
        quote: 'Strong will powers the strongest strike.',
        profile: {
          born: '07-12-2006',
          age: '18 YEARS',
          nationality: 'Japan',
          height: '183 cm',
          debut: '2023'
        }
      },
      {
        name: 'Hyoma Chigiri',
        position: 'Forward',
        number: 11,
        goals: 22,
        assists: 14,
        image: 'player4.jpg',
        quote: 'Speed is my blade cutting through defenses.',
        profile: {
          born: '12-23-2007',
          age: '17 YEARS',
          nationality: 'Japan',
          height: '177 cm',
          debut: '2023'
        }
      },
      {
        name: 'Ikki Niko',
        position: 'Midfielder',
        number: 6,
        goals: 15,
        assists: 18,
        image: 'player5.jpg',
        quote: 'Defense is the foundation of any victory.',
        profile: {
          born: 'Unknown',
          age: 'Unknown',
          nationality: 'India',
          height: 'Unknown',
          debut: 'Unknown'
        }
      },
      {
        name: 'Oliver Aiku',
        position: 'Defender',
        number: 4,
        goals: 5,
        assists: 12,
        image: 'player6.jpg',
        quote: 'Total defense is total peace of mind.',
        profile: {
          born: 'Unknown',
          age: 'Unknown',
          nationality: 'India',
          height: 'Unknown',
          debut: 'Unknown'
        }
      }
    ]
  },

  // Academy Section
  academy: {
    title: 'Elite Academy',
    subtitle: 'Where Champions Are Born',
    description: 'Our world-class academy program is designed to nurture young talent and develop the football stars of tomorrow.',
    programs: [
      {
        name: 'Youth Development',
        ageGroup: '6-12 years',
        description: 'Building fundamental skills and love for the game',
        price: '$150/month',
        features: ['3 sessions per week', 'Qualified coaches', 'Match opportunities', 'Skill development']
      },
      {
        name: 'Teen Elite',
        ageGroup: '13-17 years',
        description: 'Advanced training for serious young players',
        price: '$250/month',
        features: ['5 sessions per week', 'Professional coaching', 'Competitive leagues', 'Strength & conditioning']
      },
      {
        name: 'Professional Pathway',
        ageGroup: '18+ years',
        description: 'Elite training for aspiring professionals',
        price: '$400/month',
        features: ['Daily training', 'Expert coaching staff', 'Professional matches', 'Career guidance']
      }
    ]
  },

  // Fixtures Section
  fixtures: {
    title: 'Match Center',
    subtitle: 'Latest Results & Upcoming Fixtures',
    recentMatches: [
      {
        homeTeam: 'FC Elite',
        awayTeam: 'City United',
        homeScore: 3,
        awayScore: 1,
        date: '2024-09-20',
        venue: 'Elite Stadium',
        status: 'completed'
      },
      {
        homeTeam: 'Metropolitan FC',
        awayTeam: 'FC Elite',
        homeScore: 1,
        awayScore: 4,
        date: '2024-09-15',
        venue: 'Metro Arena',
        status: 'completed'
      }
    ],
    upcomingMatches: [
      {
        homeTeam: 'FC Elite',
        awayTeam: 'Thunder FC',
        date: '2024-09-28',
        time: '19:00',
        venue: 'Elite Stadium',
        status: 'upcoming'
      },
      {
        homeTeam: 'Lions FC',
        awayTeam: 'FC Elite',
        date: '2024-10-05',
        time: '15:30',
        venue: 'Lions Den',
        status: 'upcoming'
      }
    ]
  },

  // Gallery Section
  gallery: {
    title: 'Moments of Glory',
    subtitle: 'Capturing Excellence',
    categories: ['Training', 'Matches', 'Celebrations', 'Behind Scenes'],
    videos: [
      {
        title: 'Championship Final Highlights',
        thumbnail: 'video1-thumb.jpg',
        duration: '3:45'
      },
      {
        title: 'Academy Training Session',
        thumbnail: 'video2-thumb.jpg',
        duration: '2:20'
      }
    ]
  },

  // Join Us Section
  join: {
    title: 'Join FC Elite',
    subtitle: 'Start Your Journey',
    description: 'Ready to take your football career to the next level? Join our elite family and train with the best.',
    trialInfo: {
      title: 'Free Trial Sessions',
      description: 'Experience our training methodology with a complimentary session',
      duration: '90 minutes',
      includes: ['Skills assessment', 'Training session', 'Coach feedback', 'Academy tour']
    },
    ronaldoQuote: '"I am not a perfectionist, but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve."'
  },

  // Sponsors Section
  sponsors: {
    title: 'Our Partners',
    subtitle: 'Supporting Excellence',
    description: 'Proud to be supported by industry leaders who share our commitment to excellence.',
    partners: [
      { name: 'SportsTech', category: 'Technology Partner' },
      { name: 'Elite Nutrition', category: 'Official Nutrition Partner' },
      { name: 'Championship Gear', category: 'Kit Supplier' },
      { name: 'Metro Bank', category: 'Financial Partner' }
    ]
  },

  // Contact Section
  contact: {
    title: 'Get In Touch',
    subtitle: 'Contact FC Elite',
    address: {
      street: '123 Elite Avenue',
      city: 'Manchester',
      country: 'United Kingdom',
      zipCode: 'M1 1AA'
    },
    phone: '+44 161 123 4567',
    email: 'info@fcelite.com',
    socialMedia: {
      instagram: '@fcelite_official',
      twitter: '@FcEliteOfficial',
      facebook: 'FC Elite Official',
      youtube: 'FC Elite TV'
    },
    facilities: {
      title: 'World-Class Facilities',
      description: 'From state-of-the-art training grounds to modern fitness centers, our facilities support every aspect of player development.',
      features: [
        'FIFA-standard pitches',
        'Indoor training facility',
        'Gym & fitness center',
        'Recovery & medical suite',
        'Player lounge',
        'Spectator stands'
      ]
    }
  },

  // Newsletter
  newsletter: {
    title: 'Stay Connected',
    subtitle: 'Get the latest news, match updates, and exclusive content delivered to your inbox.',
    placeholder: 'Enter your email address',
    cta: 'Subscribe Now',
    benefits: [
      'Match highlights and results',
      'Player interviews and stories',
      'Training tips from our coaches',
      'Exclusive behind-the-scenes content'
    ]
  }
};
