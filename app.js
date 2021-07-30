Vue.createApp({
    data() {
        return {
            //title
            webTitle: 'Anri Lombard',
            webSubtitle: 'where building happens',
            webTitleButtonText: 'want to know me?',
            headingAnimationTime: 6000,
            transition: false,
            
            //weekly builder Brights
            quote: '',
            thisYear: new Date().getFullYear(),
            month: new Date().getMonth(),
            dayOfMonth: new Date().getDate(),

            //books
            sliderValue: 1,
            sliderTitle: 'Boring',

            //builds
            seeOldies: false,
            oldieToggle: '',
            oldieDate: 'January 2021',
        }
    },
    computed: {
        titleClass() {
            return {nameAnimation: this.transition}
        },
        updateQuote() {
            if (this.dayOfMonth > 7 && this.dayOfMonth <= 14 && this.month === 2) {
                this.quote = "The only stupid question is the one unasked";
            } else if (this.dayOfMonth > 14 && this.dayOfMonth <= 21 && this.month === 2) {
                this.quote = "Be nice to nerds. Chances are you'll end up working for one.";
            } else if (this.dayOfMonth > 21 && this.dayOfMonth <= 28 && this.month === 2) {
                this.quote = "Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That’s relativity.";
            } else if (this.dayOfMonth > 0 && this.dayOfMonth <= 4  && this.month === 3) {
                this.quote = "The only normal people are the ones that you don’t know very well.";
            } else if (this.dayOfMonth > 4 && this.dayOfMonth <= 11 && this.month === 3) {
                this.quote = "A smile is an inexpensive way to improve your looks.";
            } else if (this.dayOfMonth > 11 && this.dayOfMonth <= 18 && this.month === 3) {
                this.quote = "If you want to leave footprints in the sands of time, don’t drag your feet.";
            }
            return this.quote;
        },
    },
    methods: {
        changeWebTitle() {
            this.transition = true;
            setTimeout(() => {
                this.webTitle = 'A Fellow builder';
                this.webSubtitle = 'Here to inpire another';
                this.webTitleButtonText = 'Scroll down so i can...';
            }, this.headingAnimationTime / 2);
        },
        toggleSeeOldies() {
            this.seeOldies = !this.seeOldies;
        }
    }
}).mount('#website');

// future quotes
// "Those who believe they can change the world are those who do"