(function(e){function t(t){for(var i,n,r=t[0],c=t[1],l=t[2],g=0,h=[];g<r.length;g++)n=r[g],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],i=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var i={},a={app:0},s=[];function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"074b":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-03-07 at 7.44.01 PM.3786ebb6.png"},1944:function(e,t,o){var i={"./Rocket.png":"773a","./Screenshot 2021-02-24 at 7.56.13 AM.png":"734f","./Screenshot 2021-02-24 at 8.02.47 AM.png":"7d6b","./Screenshot 2021-02-24 at 8.08.41 AM.png":"fa97","./Screenshot 2021-02-24 at 8.11.06 AM.png":"8502","./Screenshot 2021-02-24 at 8.20.04 AM.png":"1984","./Screenshot 2021-02-24 at 9.13.39 AM.png":"bdec","./Screenshot 2021-02-28 at 5.37.28 AM.png":"d227","./Screenshot 2021-02-28 at 6.58.29 PM.png":"b641","./Screenshot 2021-03-07 at 7.44.01 PM.png":"074b","./Screenshot 2021-04-19 at 8.13.28 PM.png":"8a55","./Screenshot 2021-04-19 at 8.29.19 PM.png":"ad70"};function a(e){var t=s(e);return o(t)}function s(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="1944"},1984:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.20.04 AM.ab4559ab.png"},"1c7d":function(e,t,o){},"37bc":function(e,t,o){e.exports=o.p+"img/BookElonMusk.a6289be9.jpg"},"3c2c":function(e,t,o){e.exports=o.p+"img/MeJoke.3dcee4dd.jpg"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("7a23"),a={id:"website"};function s(e,t,o,s,n,r){var c=Object(i["j"])("Typing"),l=Object(i["j"])("Heading"),d=Object(i["j"])("BuilderBrightsSection"),g=Object(i["j"])("AboutMeSection"),h=Object(i["j"])("BooksSection"),b=Object(i["j"])("BuildsSection"),u=Object(i["j"])("BlogsSection"),p=Object(i["j"])("Footer");return Object(i["h"])(),Object(i["c"])("body",a,[Object(i["g"])(c),Object(i["g"])(l),Object(i["g"])("main",null,[Object(i["g"])(d),Object(i["g"])(g),Object(i["g"])(h),Object(i["g"])(b),Object(i["g"])(u)]),Object(i["g"])(p)])}var n={class:"heading"},r={class:"heading__text-box"},c={class:"heading-primary"};function l(e,t,o,a,s,l){return Object(i["h"])(),Object(i["c"])("header",n,[Object(i["g"])("div",r,[Object(i["g"])("h1",c,[Object(i["g"])("span",{class:[l.titleClass,"heading-primary--main primaryname"]},Object(i["k"])(s.webTitle),3),Object(i["g"])("span",{class:[l.titleClass,"heading-primary--sub subname"]},Object(i["k"])(s.webSubtitle),3),Object(i["g"])("a",{href:"javascript:void(0)",class:[l.titleClass,"btn btn--white btn--animate"],onClick:t[1]||(t[1]=function(){return l.changeWebTitle&&l.changeWebTitle.apply(l,arguments)})},Object(i["k"])(s.webTitleButtonText),3)])])])}var d={name:"Heading",data:function(){return{webTitle:"Anri Lombard",webSubtitle:"where building happens",webTitleButtonText:"want to know me?",headingAnimationTime:6e3,transition:!1}},computed:{titleClass:function(){return{nameAnimation:this.transition}}},methods:{changeWebTitle:function(){var e=this;this.transition=!0,setTimeout((function(){e.webTitle="A Fellow builder",e.webSubtitle="Here to inpire another",e.webTitleButtonText="Scroll down so i can..."}),this.headingAnimationTime/2)}}};d.render=l;var g=d,h={class:"section-weekly-builer-brights"},b={class:"u-center-text u-margin-bottom-large"},u=Object(i["g"])("h1",{class:"heading-weekly-builder-brights mb-5"}," Monthly Builder Brights ",-1),p=Object(i["g"])("div",{class:"u-dotted-line"},null,-1),m={class:"mt-5 mb-5 heading-weekly-builder-brights--quote"},f=Object(i["g"])("div",{class:"u-dotted-line"},null,-1),y=Object(i["g"])("div",{class:"u-link"},[Object(i["g"])("a",{class:"anchor",href:"https://docs.google.com/forms/d/e/1FAIpQLSfmBozkOLadqmFhWcxyHOaLo1-CE0h3jmIWvI8MnKYev24UPA/viewform"}," give suggestion for weekly builder brights ")],-1);function O(e,t,o,a,s,n){return Object(i["h"])(),Object(i["c"])("section",h,[Object(i["g"])("div",b,[u,p,Object(i["g"])("h2",m,Object(i["k"])(n.updateQuote()),1),f,y])])}var j={name:"BuilderBrightsSection",data:function(){return{thisYear:(new Date).getFullYear(),month:(new Date).getMonth(),dayOfMonth:(new Date).getDate()}},methods:{updateQuote:function(){return 3===this.month?"The only stupid question is the one unasked":5===this.month?"Be nice to nerds. Chances are you'll end up working for one.":4===this.month?"Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That’s relativity.":6===this.month?"The only normal people are the ones that you don’t know very well.":7===this.month?"A smile is an inexpensive way to improve your looks.":8===this.month?"If you want to leave footprints in the sands of time, don’t drag your feet.":void 0}}};j.render=O;var v=j,w=o("ec02"),k=o.n(w),_=o("3c2c"),S=o.n(_),x={class:"section-about-me"},T=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline--white"},"About me"),Object(i["g"])("p",{style:{color:"white","font-weight":"600"},class:"u-center-text"}," (Proud Physicist Programming with Principles) ")],-1),A=Object(i["g"])("div",{class:"row"},[Object(i["g"])("div",{class:"about-me"},[Object(i["g"])("figure",{class:"about-me__shape about-me__shape--1"},[Object(i["g"])("img",{src:k.a,alt:"A picture of me",class:"about-me__img"}),Object(i["g"])("figcaption",{class:"about-me__caption"},"Me in the morning")]),Object(i["g"])("div",{class:"about-me__text"},[Object(i["g"])("h3",{class:"heading-tertiary u-margin-bottom-small teen-range--title1 about-me__heading"}," Hey builder, "),Object(i["g"])("p",{style:{"font-size":"1.9rem",color:"#423F3E","font-family":"serif"}},[Object(i["f"])(" I'm Anri. "),Object(i["g"])("br"),Object(i["f"])(" Born and raised in Namibia, but now studying in South Africa. My childhood was not filled with technology and programming, it was filled with people. Caring, smart, hard-working people."),Object(i["g"])("br"),Object(i["g"])("br"),Object(i["f"])(" Growing up to see them use their lives to do whatever gets them through the week left a scar deep in my heart. ")])])]),Object(i["g"])("div",{class:"about-me"},[Object(i["g"])("figure",{class:"about-me__shape about-me__shape--2"},[Object(i["g"])("img",{src:S.a,alt:"A picture of me",class:"about-me__img"}),Object(i["g"])("figcaption",{class:"about-me__caption"},"Me in the night")]),Object(i["g"])("div",{class:"about-me__text"},[Object(i["g"])("p",{style:{"font-size":"1.9rem",color:"#423F3E","font-family":"serif"}},[Object(i["f"])(' They stopped dead learning the language of the future since their chances of excelling are slim. "There are Americans in Harvard doing those things." '),Object(i["g"])("br"),Object(i["g"])("br"),Object(i["f"])(" Yes, there are. This year almost led me to that same excuse. I am without parents, without teachers, and all I have is this computer. By most likely failing physics after working harder than any student I know, one thing keeps popping back up."),Object(i["g"])("br"),Object(i["g"])("br"),Object(i["f"])(" All I have is this computer."),Object(i["g"])("br"),Object(i["g"])("br"),Object(i["f"])(" A Harvard student is a student. I am a student. The only goal before I die is to make sure each of those people see the rewards they deserve, stave off the false belief, and see technology not as punishing but a means to expression, transformation, and power to any who dares to love it. ")])])])],-1);function M(e,t,o,a,s,n){return Object(i["h"])(),Object(i["c"])("section",x,[T,A])}var B={name:"AboutMeSection"};B.render=M;var I=B,P={class:"section-interests"},F=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-secondary mb-5"}," My Books, Builds, and Blogs for The Curious "),Object(i["g"])("h3",null,"Updated 7 July 2021")],-1);function D(e,t,o,a,s,n){var r=Object(i["j"])("Books");return Object(i["h"])(),Object(i["c"])("section",P,[F,Object(i["g"])(r)])}var H={key:0,class:"section-books"},R=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline"},"Books")],-1),W={class:"u-slider u-center-text"},C=Object(i["g"])("p",{href:"#",class:"boring-range-title u-slider--title"},"Boring",-1),E={class:"row"},L=Object(i["e"])('<div class="col-1-of-2"><h3 class="heading-tertiary u-margin-bottom-small section-books--first-heading"> What I am reading now </h3><p class="paragraph section-books--first-paragraph"> - <strong>Can&#39;t Hurt Me</strong><em>by David Goggins</em></p><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> My top 3 recommondations </h3><p class="paragraph section-books--second-paragraph"> 1. <strong>Gifted Hands</strong> <em>by dr. Ben Carson</em> (and <strong>Educated</strong> <em>by Tara Westover</em>): to see how reading can help you cheat life from the bottom to the top.<br><br> 2. <strong>Why We Sleep</strong> <em>by Mathew Walker</em>: to see that we all have a superpower already. <br><br> 3. <strong>Watership Down</strong> <em>by Richard Adams</em>: to show you how fellowship is better than a lone adventure.<br><br></p><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> My Top 5 Of The Year </h3><div class="row"><div class="col-1-of-2"><h4>2019</h4><p class="section-books--2019"><strong>Elon Musk</strong> <em>by Ashlee Vance</em><br><strong>Gifted Hands</strong> <em>by dr. Ben Carson</em><br><strong>Why We Sleep</strong> <em>by Mathew Walker</em><br><strong>Factfullness</strong> <em>by Hans Rosling</em><br><strong>Make It Stick</strong> <em>by many scientists :)</em><br></p></div><div class="col-1-of-2"><h4>2020</h4><p class="section-books--2020"><strong>Sapiens</strong> <em>by Yuval Harari</em><br><strong>The Ride Of A Lifetime</strong> <em>by Bob Iger</em><br><strong>Educated</strong> <em>by Tara Westover</em><br><strong>Shoe Dog</strong> <em>by Phil Knight</em><br><strong>Atomic Habits</strong> <em>by James Clear</em><br></p></div></div></div>',1),Y={class:"col-1-of-2"},V=Object(i["g"])("div",null,[Object(i["g"])("h2",{class:"u-center-text"},"My Favourites Of All Time"),Object(i["g"])("h3",{class:"u-margin-bottom-small u-center-text"})],-1),G={class:"composition"},J={key:1,class:"section-books"},U=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline"},[Object(i["g"])("i",{class:"icon-basic-book"}),Object(i["f"])("Books")])],-1),z={class:"u-slider u-center-text"},N=Object(i["g"])("p",{href:"#",class:"boring-range-title u-slider--title"},"Fun",-1),K={class:"row"},q=Object(i["e"])('<div class="col-1-of-2"><h3 class="heading-tertiary u-margin-bottom-small section-books--first-heading"><em>All</em> these books blew my mind! </h3><p class="paragraph section-books--first-paragraph"> You have <strong>not lived yet</strong> until you read all <strong>7</strong> Harry Potter books, all <strong>3</strong> Lord Of The Rings books and, of course, <strong>THE HOBBIT</strong>!<br><br>No homework or chore is important enough to <strong>hold you from your life mission</strong> of revering every word in these books. Put it all on hold and, with my advice, <strong>get to it</strong>. </p><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> I recommend them all!&quot; </h3><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> My Top 5 Of The Year </h3><div class="row"><div class="col-1-of-2"><h4>2019</h4><p class="section-books--2019"><strong>The Places You&#39;ll Go</strong> <em>by dr. Seuss</em><br><strong>The Rosie Project</strong><em>by Graeme Simsion</em><br><strong>The Martian</strong><em>by Andy Weir</em><br><strong>The Hobbit</strong> <em>by JRR Tolkien</em><br><strong>Fahrenheit 451</strong><em>by Ray Bradbury</em></p></div><div class="col-1-of-2"><h4>2020</h4><p class="section-books--2020"><strong>All Harry Potter Books</strong><em>by JK Rowling</em><br><strong>All Lord Of The Rings Books</strong><em>by JRR Tolkien</em><br><strong>Watership Down</strong><em>by Richard Adams</em><br><strong>The Great Gatsby</strong><em>by F. Scott Fitzgerald</em><br><strong>Ender&#39;s Game</strong><em>by Orson Scott Card</em></p></div></div></div>',1),Q={class:"col-1-of-2"},X=Object(i["g"])("div",null,[Object(i["g"])("h2",{class:"u-center-text"},"My Favourites Of All Time"),Object(i["g"])("h3",{class:"u-margin-bottom-small u-center-text"})],-1),Z={class:"composition"};function $(e,t,a,s,n,r){return Object(i["h"])(),Object(i["c"])("div",null,[1==n.sliderValue?(Object(i["h"])(),Object(i["c"])("section",H,[R,Object(i["g"])("div",W,[C,Object(i["m"])(Object(i["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.sliderValue=e}),type:"range",min:"1",max:"2",class:"u-slider--actual u-slider--actual__boring"},null,512),[[i["l"],n.sliderValue]])]),Object(i["g"])("div",E,[L,Object(i["g"])("div",Y,[V,Object(i["g"])("div",G,[Object(i["g"])("img",{src:o("37bc"),alt:"Photo 1",class:"composition__photo composition__photo--p1"},null,8,["src"]),Object(i["g"])("img",{src:o("7e7b"),alt:"Photo 2",class:"composition__photo composition__photo--p2"},null,8,["src"]),Object(i["g"])("img",{src:o("f7a9"),alt:"Photo 3",class:"composition__photo composition__photo--p3"},null,8,["src"])])])])])):2==n.sliderValue?(Object(i["h"])(),Object(i["c"])("section",J,[U,Object(i["g"])("div",z,[N,Object(i["m"])(Object(i["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.sliderValue=e}),type:"range",min:"1",max:"2",class:"u-slider--actual u-slider--actual__boring"},null,512),[[i["l"],n.sliderValue]])]),Object(i["g"])("div",K,[q,Object(i["g"])("div",Q,[X,Object(i["g"])("div",Z,[Object(i["g"])("img",{src:o("fd82"),alt:"Photo 1",class:"composition__photo composition__photo--p1"},null,8,["src"]),Object(i["g"])("img",{src:o("bd60"),alt:"Photo 2",class:"composition__photo composition__photo--p2"},null,8,["src"]),Object(i["g"])("img",{src:o("e35e"),alt:"Photo 3",class:"composition__photo composition__photo--p3"},null,8,["src"])])])])])):Object(i["d"])("",!0)])}var ee={name:"Books",data:function(){return{sliderValue:1,sliderTitle:"Boring"}}};ee.render=$;var te=ee,oe={name:"BooksSection",components:{Books:te}};oe.render=D;var ie=oe,ae=(o("fb6a"),o("9911"),o("a4d3"),o("e01a"),{class:"section-builds"}),se=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline--white"},"My Builds"),Object(i["g"])("p",{style:{color:"white","font-weight":"600"},class:"u-center-text"}," Yes, you can click on them all... ")],-1),ne={class:"row"},re={class:"row"},ce={class:"heading-primary"},le={key:0},de={key:0,style:{"margin-top":"10rem"},class:"row"};function ge(e,t,o,a,s,n){var r=Object(i["j"])("build");return Object(i["h"])(),Object(i["c"])("section",ae,[se,Object(i["g"])("div",ne,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(s.buildList.slice(0,s.arrayEndForFirstRow),(function(e){return Object(i["h"])(),Object(i["c"])("div",{key:e["title"],class:"col-2-of-4"},[Object(i["g"])(r,{image:e["image"],link:e["link"],title:e["title"],date:e["date"],description:e["description"]},null,8,["image","link","title","date","description"])])})),128))]),Object(i["g"])("div",re,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(s.buildList.slice(s.arrayEndForFirstRow,s.arrayEndForFirstRow+4),(function(e){return Object(i["h"])(),Object(i["c"])("div",{key:e["title"],class:"col-1-of-4"},[Object(i["g"])(r,{image:e["image"],link:e["link"],title:e["title"],date:e["date"],description:e["description"]},null,8,["image","link","title","date","description"])])})),128))]),Object(i["g"])("h1",ce,[Object(i["g"])("a",{onClick:t[1]||(t[1]=function(){return n.toggleSeeOldies&&n.toggleSeeOldies.apply(n,arguments)}),id:"oldie",href:"javascript:void(0)",class:"btn btn--white"},[(0==s.seeOldies?s.oldieToggle="See":s.oldieToggle="Hide")?(Object(i["h"])(),Object(i["c"])("span",le,Object(i["k"])(s.oldieToggle),1)):Object(i["d"])("",!0),Object(i["f"])(" builds before "+Object(i["k"])(s.oldieDate),1)])]),s.seeOldies?(Object(i["h"])(),Object(i["c"])("div",de,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(s.buildList.slice(s.arrayEndForFirstRow+4,s.arrayEndForFirstRow+8),(function(e){return Object(i["h"])(),Object(i["c"])("div",{key:e["title"],class:"col-1-of-4"},[Object(i["g"])(r,{image:e["image"],link:e["link"],title:e["title"],date:e["date"],description:e["description"]},null,8,["image","link","title","date","description"])])})),128))])):Object(i["d"])("",!0)])}var he={class:"build-box"},be={class:"tertiary-heading"},ue={class:"build-box--date"},pe={class:"build-box--info paragraph"};function me(e,t,a,s,n,r){return Object(i["h"])(),Object(i["c"])("div",he,[Object(i["g"])("img",{class:"build-box--image u-margin-bottom-small",src:o("1944")("./".concat(a.image)),alt:"portfolio image"},null,8,["src"]),Object(i["g"])("a",{href:a.link,class:"build-box--title"},[Object(i["g"])("h2",be,Object(i["k"])(a.title),1)],8,["href"]),Object(i["g"])("h3",ue,Object(i["k"])(a.date),1),Object(i["g"])("p",pe,Object(i["k"])(a.description),1)])}var fe={name:"Build",data:function(){return{}},props:["width","image","link","title","date","description"]};fe.render=me;var ye=fe,Oe={name:"BuildsSection",data:function(){return{seeOldies:!1,arrayEndForFirstRow:2,oldieToggle:"",oldieDate:"January 2021",buildList:[{image:"Screenshot 2021-04-19 at 8.29.19 PM.png",link:"https://tickerhack.netlify.app",title:"Ticker",date:"April 2021",description:"Make waking up more fun with this ever evolving task motivator (Made with vue, firebase, and a whole lot of ideas)\nDISCLAIMER: Only works on chrome and Mozilla firefox for now, with Safari your experience will be incomplete."},{image:"Screenshot 2021-03-07 at 7.44.01 PM.png",link:"https://anri-lombard.github.io/SortTheRivalry/",title:"Sort The Rivalry",date:"March 2021",description:"Pick your rival and end the tension once and for all (my first vue.js app)"},{image:"Screenshot 2021-02-28 at 5.37.28 AM.png",link:"https://github.com/Anri-Lombard",title:"Anri Lombard Official Website",date:"February - March 2021",description:"Where builders could draw inspiration, my mom can check up on me, and collaborations can start by going to my github repo (Now revamped entirely in vue)"},{image:"Screenshot 2021-02-24 at 8.11.06 AM.png",link:"https://anri-lombard.github.io/MyFirstSite/",title:"First personal site",date:"January 2021",description:"My first attempt to sell myself... figuratively speaking (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Rocket.png",link:"https://anri-lombard.itch.io/boost",title:"Boost",date:"January 2021",description:"Try your rocket through six solid stages without much light and cool particle effects (Created with c# and the unity engine)"},{image:"Screenshot 2021-02-24 at 9.13.39 AM.png",link:"https://anri-lombard.itch.io/hulk-smash",title:"Hulk Smash",date:"January 2021",description:"Bring nostalgia with the classic blockbreaking game, with an added twist: hulk from baby to... well... HULK (made with C# and the unity engine)"},{image:"Screenshot 2021-02-24 at 8.02.47 AM.png",link:"https://anri-lombard.github.io/Ottergram/",title:"OtterGram",date:"December 2020",description:"Oh yes, otters indeed! All fun to test my CSS zooming skills (This idea comes from Youtube and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Screenshot 2021-02-24 at 8.20.04 AM.png",link:"https://anri-lombard.itch.io/DrumKit/",title:"Drum Kit",date:"December 2020",description:"No need for a drum set, I got you coverred with this drum mock-up (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Screenshot 2021-02-24 at 7.56.13 AM.png",link:"https://anri-lombard.itch.io/TinDog/#carouselExampleControls",title:"Tindog",date:"December 2020",description:"Finding a friend for man's best friend (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Screenshot 2021-02-24 at 8.08.41 AM.png",link:"https://anri-lombard.itch.io/SimonGame",title:"Simon Game",date:"December 2020",description:"Test your mind and try to keep up with the pattern as long as you can (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"}]}},methods:{toggleSeeOldies:function(){this.seeOldies=!this.seeOldies}},components:{Build:ye}};Oe.render=ge;var je=Oe,ve={class:"section-blogs"},we=Object(i["e"])('<div class="u-center-text u-margin-bottom-large"><h2 class="heading-underline">Bite-size Research Blogs</h2><p>(SO YOU DON&#39;T HAVE TO)</p></div><div class="row"><div class="col-1-of-3">.</div><div class="col-1-of-3"><div class="blog-post"><div class="blog-post__side blog-post__side--front"><div class="blog-post__picture blog-post__picture--1"> </div><h4 class="blog-post__heading"><span class="blog-post__heading-span blog-post__heading-span--1">space vehicles</span></h4><div class="blog-post__details"><h2 class="tertiary-heading blog-post__details--title"> Why I find it exciting </h2><ul><li class="list-button" id="list1-item1"> One vehicle needs to do it all </li><li class="list-button" id="list1-item2"> We might not even drive anymore by then </li><li class="list-button" id="list1-item3"> There will be a &quot;private jet&quot; of spaceships </li></ul></div></div><div class="blog-post__side blog-post__side--back blog-post__side--back--1"><div class="blog-post__backside-details"><h2 class="tertiary-heading blog-post__backside-details--title"> Technologies </h2><p class="blog-post__backside-details--paragraph"> These are our top 5 focusses: <a class="blog-post__backside-details--paragraph" href="https://www.nasa.gov/feature/top-five-technologies-needed-for-a-spacecraft-to-survive-deep-space">(1)living in them, (2)propulsion breakthroughs, (3)fighting heat, (4)radiation protection, and (5) comms and navs.</a></p><h2 class="tertiary-heading blog-post__backside-details--title"> Making progress </h2><p class="blog-post__backside-details--paragraph"> SpaceX cargo vehicles: <a href="https://www.spacex.com/vehicles/dragon/" class="blog-post__backside-details--paragraph">Dragon Capsule</a> and <a href="" class="blog-post__backside-details--paragraph">Falcon 9</a><br> Virgin galactic luxury passenger vehicle: <a href="https://www.virgingalactic.com/learn/" class="blog-post__backside-details--paragraph">WhiteKnightTwo and SpaceShipTwo</a><br> SpaceX&#39;s Starship: <a href="https://www.spacex.com/vehicles/starship/" class="blog-post__backside-details--paragraph"> (It seems to blow up for now though)</a><br></p></div></div></div></div><div class="col-1-of-3">.</div></div><div class="u-link"><a class="anchor" href="https://docs.google.com/forms/d/e/1FAIpQLSdIPNByR1HaZrMINqlIOeUbgsw8a8VIzmj_bVc_AUbK5nsT3Q/viewform"> share your book, build, and blog suggestions </a></div>',3);function ke(e,t,o,a,s,n){return Object(i["h"])(),Object(i["c"])("section",ve,[we])}var _e={name:"BlogsSection"};_e.render=ke;var Se=_e,xe={class:"footer u-center-text"},Te={class:"row"},Ae=Object(i["e"])('<div class="col-1-of-2"><div class="footer__navigation"><ul class="footer__list"><li class="footer__item"><a href="https://www.linkedin.com/in/anri-lombard-ab37ab201/" class="footer__link">Linkedin</a></li><li class="footer__item"><a href="https://github.com/Anri-Lombard" class="footer__link">Github</a></li><li class="footer__item"><a href="mailto:anri.m.lombard@gmail.com" class="footer__link">Email</a></li><li class="footer__item"><a href="https://twitter.com/anri_m_lombard" class="footer__link">Twitter</a></li><li class="footer__item"><a href="https://anri-lombard.itch.io/" class="footer__link">Games</a></li></ul></div></div>',1),Me={class:"col-1-of-2"},Be={class:"footer__navigation"},Ie=Object(i["g"])("ul",{class:"footer__list"},[Object(i["g"])("li",{class:"footer__item"},[Object(i["g"])("a",{href:"https://www.buymeacoffee.com/anrilombard.com",class:"footer__link"},"your donation could help build the next project")])],-1);function Pe(e,t,o,a,s,n){return Object(i["h"])(),Object(i["c"])("footer",xe,[Object(i["g"])("div",Te,[Ae,Object(i["g"])("div",Me,[Object(i["g"])("div",Be,[Ie,Object(i["g"])("p",null,"Anri Lombard © "+Object(i["k"])(s.thisYear),1)])])])])}var Fe={name:"Footer",data:function(){return{thisYear:(new Date).getFullYear()}}};Fe.render=Pe;var De=Fe,He=(o("5b3d"),o("7db1"),{class:"typing-container"}),Re={class:"typed-text"};function We(e,t,o,a,s,n){return Object(i["h"])(),Object(i["c"])("div",He,[Object(i["g"])("h1",null,[Object(i["g"])("span",Re,Object(i["k"])(s.typeValue),1),Object(i["g"])("span",{class:["cursor",{typing:s.typeStatus}]}," ",2)])])}var Ce=o("5118"),Ee={name:"Typing",data:function(){return{typeValue:"",typeStatus:!1,typeArray:["The only way to type this fast is with css","How many tickles does it take to make an octupus laugh? Ten-tickles","What's the best thing about Switzerland? Don't know, but their flag is a big plus","All mathematicians are afraid of negative numbers. They'll stop at nothing to avoid them","Why do we tell actors to “break a leg?” Because every play has a cast.","Did you hear about the claustrophobic astronaut? He just needed a little space.","Guess you figured I like jokes by now","I also like vaccines","And people","Goodness I miss people!"],typingSpeed:30,erasingSpeed:30,newTextDelay:4e3,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,Object(Ce["setTimeout"])(this.typeText,this.typingSpeed)):(this.typeStatus=!1,Object(Ce["setTimeout"])(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,Object(Ce["setTimeout"])(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),Object(Ce["setTimeout"])(this.typeText,this.typingSpeed+1e3))}},created:function(){Object(Ce["setTimeout"])(this.typeText,this.newTextDelay+200)}};Ee.render=We;var Le=Ee,Ye={name:"App",components:{Heading:g,BuilderBrightsSection:v,AboutMeSection:I,BooksSection:ie,BuildsSection:je,BlogsSection:Se,Footer:De,Typing:Le}};o("c047");Ye.render=s;var Ve=Ye;Object(i["b"])(Ve).mount("#app")},"734f":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 7.56.13 AM.2e2400d8.png"},"773a":function(e,t,o){e.exports=o.p+"img/Rocket.59e372a3.png"},"7d6b":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.02.47 AM.6b8a2a0d.png"},"7e7b":function(e,t,o){e.exports=o.p+"img/BookWatershipDown.1ae63cad.jpeg"},8502:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.11.06 AM.1a650a00.png"},"8a55":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-04-19 at 8.13.28 PM.a1f977cc.png"},ad70:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-04-19 at 8.29.19 PM.b7fb8744.png"},b641:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-28 at 6.58.29 PM.4728a70b.png"},bd60:function(e,t,o){e.exports=o.p+"img/BookHarryPotterPS.47e4c618.jpg"},bdec:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 9.13.39 AM.0f014e9f.png"},c047:function(e,t,o){"use strict";o("1c7d")},d227:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-28 at 5.37.28 AM.b485782f.png"},e35e:function(e,t,o){e.exports=o.p+"img/BookLOTR.ae81d1ce.jpg"},ec02:function(e,t,o){e.exports=o.p+"img/me3.c885e911.jpeg"},f7a9:function(e,t,o){e.exports=o.p+"img/BookFacfullness.fa7174c3.jpg"},fa97:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.08.41 AM.fc5f285d.png"},fd82:function(e,t,o){e.exports=o.p+"img/BookTH.4c3c466b.jpg"}});
//# sourceMappingURL=app.497ac270.js.map