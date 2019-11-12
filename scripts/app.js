Vue.component('hidden-email', {
  template: `
    <span>&#108;&#097;&#117;&#114;&#101;&#110;&#097;&#101;&#114;&#111;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</span>
  `
})
Vue.component('interactive', {
  template: `
    <span class="interactive"><slot></slot></span>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    showUiDesign: false,
    showDevelopment: false,
    technologies: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'SCSS', icon: 'fab fa-sass' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'NodeJS', icon: 'fab fa-node-js' },
      { name: 'VueJS', icon: 'fab fa-vuejs' },
      { name: 'Adobe Photoshop, Adobe XD', icon: 'fab fa-adobe' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'Git, Github', icon: 'fab fa-git-alt' }
    ],
    cards: [
      {
        name: 'Unbound Interactive',
        type: 'Development',
        description: 'A website designed and built for the indie game development company, Unbound Interactive.',
        links: [
          { name: 'Code', url: 'https://github.com/laurenawilkinson/unboundinteractive' },
          { name: 'Demo', url: 'https://laurenawilkinson.github.io/unboundinteractive/' },
          { name: 'Gallery', images: [] }
        ],
        img: 'assets/images/projects/Transhaping.png'
      },
      {
        name: 'Cat Adoption',
        type: 'Development',
        description: 'A simple virtual pet game written in vanilla JavaScript, incorporating ES6 features.',
        links: [
          { name: 'Code', url: 'https://github.com/laurenawilkinson/cat-adoption' },
          { name: 'Demo', url: 'https://laurenawilkinson.github.io/cat-adoption' }
        ],
        img: 'assets/images/projects/CatAdoption.png'
      },
      {
        name: "Bonta's Bakery",
        type: 'Ui Design',
        description: 'An ecommerce website I designed for a fictional bakery.',
        links: [
          { name: 'Gallery', images: [] }
        ],
        img: 'assets/images/projects/Bontas.png'
      }
    ],
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
        name: 'Codepen',
        url: 'https://codepen.io/lawilkinson',
        icon: 'fab fa-codepen'
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
      const filter = (this.showUiDesign && this.showDevelopment) || (!this.showUiDesign && !this.showDevelopment) ? null : this.showUiDesign ? 'Ui Design' : 'Development';
      return filter === null ? this.cards : this.cards.filter(x => x.type === filter);
    }
  },
  methods: {
    activateType (type) {
      if (type === 'Ui Design') {
        this.showUiDesign = true;
        this.showDevelopment = false;
      }
      if (type === 'Development') {
        this.showDevelopment = true;
        this.showUiDesign = false;
      }
    },
    deactivateType (type) {
      if (type === 'Ui Design') {
        this.showUiDesign = false;
      }
      if (type === 'Development') {
        this.showDevelopment = false;
      }
    }
  }
})