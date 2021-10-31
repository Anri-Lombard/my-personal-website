<template>
    <div class="typing-container">
      <h1>
        <span class="typed-text">{{typeValue}}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </h1>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name: "Typing",
    data() {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: 
            [
                'The only way to type this fast is with css', 
                'How many tickles does it take to make an octopus laugh? Ten-tickles',
                'What\'s the best thing about Switzerland? Don\'t know, but their flag is a big plus',
                "All mathematicians are afraid of negative numbers. They'll stop at nothing to avoid them",
                "Why do we tell actors to “break a leg?” Because every play has a cast.",
                "Did you hear about the claustrophobic astronaut? He just needed a little space.",
                "Guess you figured I like jokes by now",
                "I also like vaccines",
                "And people",
                "Goodness I miss people!",
            ],
        typingSpeed: 30,
        erasingSpeed: 30,
        newTextDelay: 4000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>