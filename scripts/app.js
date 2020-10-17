Vue.component('hidden-email', {
  template: `
    <a href="mailto:lauren.a.wilkinson@outlook.com">Email</a>
  `
})
Vue.component('interactive', {
  template: `
    <span class="interactive"><slot></slot></span>
  `
})

let app = new Vue({
  el: '#app',
  data: {
    showUiDesign: false,
    showDevelopment: false,
    technologies: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'SCSS', icon: 'fab fa-sass' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'NodeJS', icon: 'fab fa-node-js' },
      { name: 'VueJS', icon: 'fab fa-vuejs' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Wordpress', icon: 'fab fa-wordpress'},
      { name: 'Adobe Photoshop, Adobe XD', icon: 'fab fa-adobe' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'Git, Github', icon: 'fab fa-git-alt' }
    ],
    cards: [],
    navLinks: [
      {
        name: 'about',
        url: '#about'
      },
      {
        name: 'projects',
        url: '#projects'
      },
      {
        name: 'contact',
        url: '#contact'
      }
    ],
    contactLinks: [
      {
        name: 'Dribbble',
        url: 'https://dribbble.com/lawilkinson',
        icon: 'fab fa-dribbble'
      },
      {
        name: 'Github',
        url: 'https://github.com/laurenawilkinson',
        icon: 'fab fa-github'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/lauren-wilkinson/',
        icon: 'fab fa-linkedin'
      }
    ]
  },
  computed: {
    projects () {
      const filter = (this.showUiDesign && this.showDevelopment) || (!this.showUiDesign && !this.showDevelopment) ? null : this.showUiDesign ? 'UI Design' : 'Development';
      return filter === null ? this.cards : this.cards.filter(x => x.type === filter);
    }
  },
  methods: {
    activateType (type) {
      if (type === 'UI Design') {
        this.showUiDesign = true;
        this.showDevelopment = false;
      }
      if (type === 'Development') {
        this.showDevelopment = true;
        this.showUiDesign = false;
      }
    },
    deactivateType (type) {
      if (type === 'UI Design') {
        this.showUiDesign = false;
      }
      if (type === 'Development') {
        this.showDevelopment = false;
      }
    },
    async getCards () {
      try {
        const res = await fetch ('../assets/projects.json')
        const data = await res.json();
        return data;
      } catch (err) {
        console.error(err)
        return [];
      }
    },
    getMainCardLink (card) {
      let link = null;
      if (card.type === 'Development')
        link = card.links.find(l => l.name === 'Demo');
        
      return link 
        ? link.url 
        : card.links.length > 0 
          ? card.links[0].url 
          : '#';
    }
  },
  async mounted () {
    this.cards = await this.getCards();
  }
})
