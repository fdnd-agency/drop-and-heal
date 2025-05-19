import { redirect } from '@sveltejs/kit';

// Mapping van antwoord-nummers naar rouwtaken
const answerToRouwtaak = {
  'i-1': 'rouwtaak1',
  'i-2': 'rouwtaak2',
  'i-3': 'rouwtaak3',
  'i-4': 'rouwtaak4'
};

// Resultaatpagina's per rouwtaak
const content = {
  rouwtaak1: '/form-redirect/rouwtaak1',
  rouwtaak2: '/form-redirect/rouwtaak2',
  rouwtaak3: '/form-redirect/rouwtaak3',
  rouwtaak4: '/form-redirect/rouwtaak4'
};

export const actions = {
  submit: async ({ request }) => {
    const formData = await request.formData();

    // Alle antwoorden ophalen
    const answers = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('question')) {
        answers.push(value);
      }
    }

    // Tellen per rouwtaak
    const counts = {
      rouwtaak1: 0,
      rouwtaak2: 0,
      rouwtaak3: 0,
      rouwtaak4: 0
    };

    // Verwerken van antwoorden naar telling
    for (const answer of answers) {
      const match = answer.match(/i-(\d+)/); // haalt het nummer op uit 'f1-i-3'
      if (match) {
        const iNumber = `i-${match[1]}`;  // bijvoorbeeld 'i-3'
        const rouwtaak = answerToRouwtaak[iNumber];
        if (rouwtaak) {
          counts[rouwtaak]++;
        }
      }
    }

    // Hoogste score bepalen
    const dominantRouwtaak = Object.keys(counts).reduce((a, b) =>
      counts[a] >= counts[b] ? a : b
    );

    // Redirect naar juiste resultatenpagina
    throw redirect(303, content[dominantRouwtaak]);
  }
};




import surveyData from '$lib/data/survey.json';

export function load() {
  return {
    surveyData
  };
}
