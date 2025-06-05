import { Skill, Category } from '../types/skills';

export const categories: Category[] = [
  {
    id: 'style-presence',
    name: 'Style & Presence',
    description: 'Develop your personal aesthetic and make a lasting impression.'
  },
  {
    id: 'movement-energy',
    name: 'Movement & Energy',
    description: 'Improve posture, movement patterns, and overall physical energy.'
  },
  {
    id: 'aesthetic-expression',
    name: 'Aesthetic & Expression',
    description: 'Express yourself through creative outlets and visual aesthetics.'
  },
  {
    id: 'productivity-boosters',
    name: 'Productivity Boosters',
    description: 'Enhance your focus, organization, and time management skills.'
  },
  {
    id: 'charm-hustle',
    name: 'Charm & Hustle',
    description: 'Master social dynamics and build genuine connections.'
  },
  {
    id: 'weekly-skill-rule',
    name: 'Weekly Skill Rule',
    description: 'Focus on one new skill every two weeks for consistent growth.'
  }
];

export const skills: Skill[] = [
  {
    id: 'power-posing',
    name: 'Power Posing',
    emoji: '🧍',
    tagline: 'Stand like you own the room',
    category: 'movement-energy',
    description: 'Power posing involves adopting expansive, confident postures to influence how others perceive you and boost your own confidence. Research suggests that power posing can increase testosterone and reduce cortisol levels, helping you feel more confident and less stressed.',
    sevenDayPlan: [
      'Day 1: Learn 3 basic power poses (Wonder Woman, Victory, and CEO) and practice each for 2 minutes.',
      'Day 2: Practice power poses before any virtual meetings or calls.',
      'Day 3: Add shoulder rolls and spine alignment throughout the day.',
      'Day 4: Practice power poses in front of a mirror, focusing on facial expressions.',
      'Day 5: Use power poses before any challenging conversations or situations.',
      'Day 6: Practice subtle power poses in public settings.',
      'Day 7: Reflect on changes in your confidence and presence over the week.'
    ],
    videoUrl: 'https://www.youtube.com/embed/R-1pUwji_dQ',
    resources: [
      {
        name: 'Amy Cuddy TED Talk',
        url: 'https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are'
      },
      {
        name: 'Power Poses Guide',
        url: 'https://www.scienceofpeople.com/power-poses/'
      }
    ]
  },
  {
    id: 'signature-scent',
    name: 'Signature Scent',
    emoji: '💐',
    tagline: 'Be memorably fragrant',
    category: 'style-presence',
    description: 'Developing a signature scent is about finding fragrances that resonate with your personality and style. A personal scent can make you more memorable and creates a powerful impression that lasts. Learn about fragrance families, notes, and how to properly apply perfume or cologne.',
    sevenDayPlan: [
      'Day 1: Research fragrance families (floral, woody, oriental, fresh) to understand your preferences.',
      'Day 2: Visit a store to sample 3-5 fragrances within your preferred family.',
      'Day 3: Learn about top, middle, and base notes in fragrances.',
      'Day 4: Test your chosen sample throughout a full day to see how it evolves.',
      'Day 5: Learn proper application techniques for longevity.',
      'Day 6: Consider seasonal variations of your signature scent.',
      'Day 7: Create a fragrance routine and strategy for different occasions.'
    ],
    videoUrl: 'https://www.youtube.com/embed/W4aNBh9ADpU',
    resources: [
      {
        name: 'Fragrantica - Perfume Encyclopedia',
        url: 'https://www.fragrantica.com/'
      },
      {
        name: 'How to Choose a Signature Scent',
        url: 'https://www.byrdie.com/how-to-find-your-signature-scent'
      }
    ]
  },
  {
    id: 'photo-composition',
    name: 'Photo Composition',
    emoji: '📸',
    tagline: 'Frame your life beautifully',
    category: 'aesthetic-expression',
    description: 'Understanding basic photography composition helps you capture better photos for social media, document memories more effectively, and develop your visual aesthetic. Learn principles like the rule of thirds, leading lines, and framing to transform ordinary photos into compelling visual stories.',
    sevenDayPlan: [
      'Day 1: Learn the rule of thirds and take 10 photos applying this principle.',
      'Day 2: Practice finding and using leading lines in your environment.',
      'Day 3: Experiment with different angles (high, low, eye-level) for the same subject.',
      'Day 4: Focus on framing techniques using natural elements.',
      'Day 5: Play with symmetry and patterns in your compositions.',
      'Day 6: Practice portrait composition with friends or family.',
      'Day 7: Review your week\'s photos and identify your favorite techniques.'
    ],
    videoUrl: 'https://www.youtube.com/embed/VArISvUuyr0',
    resources: [
      {
        name: 'Digital Photography School',
        url: 'https://digital-photography-school.com/composition/'
      },
      {
        name: 'Smartphone Photography Tips',
        url: 'https://www.nationalgeographic.com/photography/article/smartphone-photography-tips'
      }
    ]
  },
  {
    id: 'active-listening',
    name: 'Active Listening',
    emoji: '👂',
    tagline: 'Become genuinely interested',
    category: 'charm-hustle',
    description: 'Active listening is a powerful skill that builds deeper connections, shows respect, and helps you understand others better. This skill involves giving your full attention, asking thoughtful questions, and responding meaningfully to what others share.',
    sevenDayPlan: [
      'Day 1: Practice maintaining eye contact during conversations without getting distracted.',
      'Day 2: Focus on asking at least one follow-up question in every conversation.',
      'Day 3: Notice and eliminate distractions (like checking your phone) during conversations.',
      'Day 4: Practice paraphrasing what others say to confirm understanding.',
      'Day 5: Work on your non-verbal cues (nodding, facial expressions) that show engagement.',
      'Day 6: Have a deeper conversation where you ask "why" questions to understand someone better.',
      'Day 7: Reflect on how active listening has changed your interactions and relationships.'
    ],
    videoUrl: 'https://www.youtube.com/embed/D6-MIeRr1e8',
    resources: [
      {
        name: 'Active Listening Techniques',
        url: 'https://www.mindtools.com/CommSkll/ActiveListening.htm'
      },
      {
        name: 'How to Be a Better Listener',
        url: 'https://www.verywellmind.com/how-to-be-a-better-listener-3144878'
      }
    ]
  },
  {
    id: 'time-blocking',
    name: 'Time Blocking',
    emoji: '⏰',
    tagline: 'Master your calendar',
    category: 'productivity-boosters',
    description: 'Time blocking is a productivity technique where you schedule specific blocks of time for different tasks or activities. This method helps reduce distractions, increases focus, and ensures you make progress on important projects rather than just reacting to demands.',
    sevenDayPlan: [
      'Day 1: Learn the principles of time blocking and set up a digital or paper calendar system.',
      'Day 2: Identify your high-energy periods during the day for important tasks.',
      'Day 3: Create your first fully time-blocked day and follow it as closely as possible.',
      'Day 4: Add buffer time between blocks to account for transitions and overruns.',
      'Day 5: Experiment with different block lengths (25 min, 50 min, 90 min) to find what works best.',
      'Day 6: Include blocks for breaks, reflection, and planning in your schedule.',
      'Day 7: Review your week and adjust your time blocking strategy for next week.'
    ],
    videoUrl: 'https://www.youtube.com/embed/fbAYK4KQrso',
    resources: [
      {
        name: 'Cal Newport\'s Time Blocking Guide',
        url: 'https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/'
      },
      {
        name: 'Time Blocking Apps Comparison',
        url: 'https://todoist.com/productivity-methods/time-blocking'
      }
    ]
  },
  {
    id: 'daily-journaling',
    name: 'Daily Journaling',
    emoji: '✏️',
    tagline: 'Record your growth journey',
    category: 'weekly-skill-rule',
    description: 'Daily journaling is a powerful habit that improves self-awareness, reduces stress, and helps track your personal growth journey. Even just 5-10 minutes of journaling each day can bring clarity to your thoughts and help you process emotions more effectively.',
    sevenDayPlan: [
      'Day 1: Set up your journal (digital or physical) and write for 5 minutes about your glow-up goals.',
      'Day 2: Try a gratitude entry - list 3 things you\'re grateful for and why.',
      'Day 3: Journal about your progress on a current skill you\'re developing.',
      'Day 4: Use prompts to explore your identity and values (e.g., "What makes me feel most alive?")',
      'Day 5: Practice reflection journaling about a recent challenge and what you learned.',
      'Day 6: Write a future self entry, imagining your life after mastering several skills.',
      'Day 7: Review your entries and identify patterns, insights, and areas for growth.'
    ],
    videoUrl: 'https://www.youtube.com/embed/qfZJOlPCEwg',
    resources: [
      {
        name: 'Journaling Prompts Database',
        url: 'https://psychcentral.com/blog/ready-set-journal-64-journaling-prompts-for-self-discovery'
      },
      {
        name: 'Scientific Benefits of Journaling',
        url: 'https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1'
      }
    ]
  },
  {
    id: 'confident-walking',
    name: 'Confident Walking',
    emoji: '🚶',
    tagline: 'Walk with purpose and presence',
    category: 'movement-energy',
    description: 'How you walk signals your confidence, energy, and presence to others. Confident walking involves proper posture, purposeful movement, and being fully present. This skill can instantly boost how others perceive you and how you feel about yourself.',
    sevenDayPlan: [
      'Day 1: Analyze your current walking style (record yourself or ask for feedback).',
      'Day 2: Practice proper posture: shoulders back, head up, core engaged for 10-minute walks.',
      'Day 3: Focus on your pace - practice walking at a confident, deliberate speed.',
      'Day 4: Add arm movement awareness - natural, relaxed swing that complements your stride.',
      'Day 5: Practice walking with purpose - having a clear destination and intention.',
      'Day 6: Work on being present while walking (no phone) and making occasional eye contact.',
      'Day 7: Integrate all elements and practice in different environments (busy street, workplace).'
    ],
    videoUrl: 'https://www.youtube.com/embed/HPV1bwZmVKA',
    resources: [
      {
        name: 'The Science of Walking Styles',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0272494413000571'
      },
      {
        name: 'Body Language and Confidence',
        url: 'https://www.verywellmind.com/understand-body-language-and-facial-expressions-4147228'
      }
    ]
  },
  {
    id: 'personal-color-analysis',
    name: 'Personal Color Analysis',
    emoji: '🎨',
    tagline: 'Discover your most flattering colors',
    category: 'style-presence',
    description: 'Personal color analysis helps you identify which colors complement your natural coloring (skin tone, hair, and eyes) best. Understanding your color season can transform your wardrobe, makeup choices, and overall aesthetic while boosting your confidence.',
    sevenDayPlan: [
      'Day 1: Learn about the four color seasons (Winter, Spring, Summer, Fall) and their characteristics.',
      'Day 2: Determine your skin undertone (warm, cool, neutral) using simple tests.',
      'Day 3: Analyze how different colors look against your face in natural light.',
      'Day 4: Create a digital or physical color palette of your best colors.',
      'Day 5: Audit your wardrobe and identify pieces that match or clash with your colors.',
      'Day 6: Experiment with makeup or accessories in your flattering colors.',
      'Day 7: Plan future purchases based on your personal color palette.'
    ],
    videoUrl: 'https://www.youtube.com/embed/2xvmtMG1E8U',
    resources: [
      {
        name: 'Color Analysis Basics Guide',
        url: 'https://theconceptwardrobe.com/colour-analysis-comprehensive-guides/which-colour-season-are-you'
      },
      {
        name: 'Digital Color Palette Creator',
        url: 'https://coolors.co/'
      }
    ]
  },
  {
    id: 'effective-room-scanning',
    name: 'Effective Room Scanning',
    emoji: '👁️',
    tagline: 'Master the art of observation',
    category: 'charm-hustle',
    description: 'Room scanning is the skill of quickly and discreetly assessing your environment when entering a space. This ability helps you identify key people, spot opportunities for connection, and adapt your approach based on the social dynamics present.',
    sevenDayPlan: [
      'Day 1: Practice the 3-second scan technique when entering rooms.',
      'Day 2: Focus on identifying the energy centers of rooms (where is attention flowing?).',
      'Day 3: Practice noticing details about 3 strangers without staring (clothing, demeanor, activity).',
      'Day 4: Work on your peripheral vision awareness in public spaces.',
      'Day 5: Practice identifying potential conversation partners in social settings.',
      'Day 6: Learn to spot social dynamics and group formations in gatherings.',
      'Day 7: Integrate scanning naturally into your entrance routine without appearing calculating.'
    ],
    videoUrl: 'https://www.youtube.com/embed/ihhL0X00X-A',
    resources: [
      {
        name: 'The Art of Observation',
        url: 'https://fs.blog/the-art-of-observation/'
      },
      {
        name: 'Improving Situational Awareness',
        url: 'https://www.artofmanliness.com/articles/how-to-develop-the-situational-awareness-of-jason-bourne/'
      }
    ]
  },
  {
    id: 'pomodoro-technique',
    name: 'Pomodoro Technique',
    emoji: '🍅',
    tagline: 'Work in focused sprints',
    category: 'productivity-boosters',
    description: 'The Pomodoro Technique is a time management method that uses timed intervals (traditionally 25 minutes) of focused work followed by short breaks. This approach helps maintain high concentration, reduces burnout, and makes large tasks more manageable.',
    sevenDayPlan: [
      'Day 1: Learn the basic Pomodoro method and set up a timer system.',
      'Day 2: Complete 4 Pomodoro sessions on your work or studies, with 5-minute breaks between.',
      'Day 3: Practice properly logging and tracking your Pomodoros throughout the day.',
      'Day 4: Experiment with different Pomodoro lengths (20, 25, or 30 minutes) to find your ideal time.',
      'Day 5: Work on eliminating distractions during your Pomodoro sessions.',
      'Day 6: Plan your day in Pomodoros, estimating how many you\'ll need for each task.',
      'Day 7: Reflect on your productivity improvements and refine your Pomodoro system.'
    ],
    videoUrl: 'https://www.youtube.com/embed/VFW3Ld7JO0w',
    resources: [
      {
        name: 'Pomodoro Timer Apps',
        url: 'https://pomofocus.io/'
      },
      {
        name: 'Advanced Pomodoro Strategies',
        url: 'https://francescocirillo.com/pages/pomodoro-technique'
      }
    ]
  },
  {
    id: 'attractive-posing',
    name: 'Attractive Posing for Photos',
    emoji: '📱',
    tagline: 'Look amazing in every shot',
    category: 'aesthetic-expression',
    description: 'Master the art of posing to look your best in photos, whether for social media or special occasions. Learn angles, expressions, and body positioning that enhance your natural features and create stunning, Instagram-worthy shots.',
    sevenDayPlan: [
      'Day 1: Learn your best angles through mirror practice and test shots.',
      'Day 2: Master basic poses for different photo types (portrait, full-body, casual).',
      'Day 3: Practice facial expressions and learn to create a natural smile.',
      'Day 4: Experiment with different lighting conditions and their effects.',
      'Day 5: Learn group photo positioning and couple poses.',
      'Day 6: Practice candid-style poses that look natural yet flattering.',
      'Day 7: Create a personal pose guide with your best angles and positions.'
    ],
    videoUrl: 'https://www.youtube.com/embed/ff7nltdBCHs',
    resources: [
      {
        name: 'Portrait Posing Guide',
        url: 'https://www.digitalcameraworld.com/tutorials/posing-guide'
      },
      {
        name: 'Selfie Tips and Tricks',
        url: 'https://www.cosmopolitan.com/style-beauty/beauty/advice/a5363/how-to-look-good-in-pictures/'
      }
    ]
  },
  {
    id: 'haircut-styles',
    name: 'Haircut Styles Guide',
    emoji: '💇',
    tagline: 'Find your perfect cut',
    category: 'style-presence',
    description: 'Learn how to choose and maintain haircuts that complement your face shape, skin tone, and personal style. Understanding these principles helps you communicate better with hairstylists and maintain your ideal look at home.',
    sevenDayPlan: [
      'Day 1: Determine your face shape and analyze current hairstyle.',
      'Day 2: Research haircuts that complement your face shape.',
      'Day 3: Learn about hair texture and how it affects styling options.',
      'Day 4: Study color theory for hair and skin tone matching.',
      'Day 5: Practice basic styling techniques for your hair type.',
      'Day 6: Create a hair care routine based on your hair type.',
      'Day 7: Plan your next haircut with newfound knowledge.'
    ],
    videoUrl: 'https://www.youtube.com/embed/Wf7xX0kZ0A8',
    resources: [
      {
        name: 'Face Shape Guide',
        url: 'https://www.birchbox.com/guide/article/how-to-determine-face-shape-men-women'
      },
      {
        name: 'Hair Type Encyclopedia',
        url: 'https://www.naturallycurly.com/hair-types'
      }
    ]
  },
  {
    id: 'dancing-style',
    name: 'Dancing Style in Public',
    emoji: '💃',
    tagline: 'Move with confidence',
    category: 'movement-energy',
    description: 'Develop a natural, confident dancing style for social situations. Learn basic moves that work in any setting, from clubs to weddings, and build the confidence to express yourself through movement.',
    sevenDayPlan: [
      'Day 1: Learn basic rhythm and body isolation exercises.',
      'Day 2: Master 3 simple moves that work with any music.',
      'Day 3: Practice transitioning between moves smoothly.',
      'Day 4: Learn to read and move to different music tempos.',
      'Day 5: Build a repertoire of signature moves.',
      'Day 6: Practice dancing in front of mirrors and with friends.',
      'Day 7: Create a playlist and practice in different settings.'
    ],
    videoUrl: 'https://www.youtube.com/embed/ujREEgxEP7g',
    resources: [
      {
        name: 'Basic Dance Moves Guide',
        url: 'https://www.steezy.co/posts/basic-dance-moves'
      },
      {
        name: 'Dance Confidence Tips',
        url: 'https://www.wikihow.com/Dance-at-a-Party-or-Club'
      }
    ]
  },
  {
    id: 'effective-communication',
    name: 'Effective Communication in Public',
    emoji: '🗣️',
    tagline: 'Speak with impact',
    category: 'charm-hustle',
    description: 'Master the art of clear, confident communication in public settings. Learn to articulate your thoughts effectively, engage your audience, and handle impromptu speaking situations with grace.',
    sevenDayPlan: [
      'Day 1: Practice vocal exercises and breath control.',
      'Day 2: Learn and eliminate filler words from speech.',
      'Day 3: Master the pause for emphasis technique.',
      'Day 4: Practice storytelling structures for engagement.',
      'Day 5: Work on body language while speaking.',
      'Day 6: Handle Q&A and impromptu speaking situations.',
      'Day 7: Record and analyze your speaking style.'
    ],
    videoUrl: 'https://www.youtube.com/embed/8S0FDjFBj8o',
    resources: [
      {
        name: 'Public Speaking Tips',
        url: 'https://www.toastmasters.org/resources/public-speaking-tips'
      },
      {
        name: 'Voice Training Exercises',
        url: 'https://www.masterclass.com/articles/voice-training-exercises'
      }
    ]
  }
];