(function(e){function t(t){for(var i,s,r=t[0],c=t[1],l=t[2],b=0,g=[];b<r.length;b++)s=r[b],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&g.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(g.length)g.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=i,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"074b":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-03-07 at 7.44.01 PM.3786ebb6.png"},1944:function(e,t,o){var i={"./Rocket.png":"773a","./Screenshot 2021-02-24 at 7.56.13 AM.png":"734f","./Screenshot 2021-02-24 at 8.02.47 AM.png":"7d6b","./Screenshot 2021-02-24 at 8.08.41 AM.png":"fa97","./Screenshot 2021-02-24 at 8.11.06 AM.png":"8502","./Screenshot 2021-02-24 at 8.20.04 AM.png":"1984","./Screenshot 2021-02-24 at 9.13.39 AM.png":"bdec","./Screenshot 2021-02-28 at 5.37.28 AM.png":"d227","./Screenshot 2021-02-28 at 6.58.29 PM.png":"b641","./Screenshot 2021-03-07 at 7.44.01 PM.png":"074b","./Screenshot 2021-04-19 at 8.13.28 PM.png":"8a55","./Screenshot 2021-04-19 at 8.29.19 PM.png":"ad70"};function n(e){var t=a(e);return o(t)}function a(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id="1944"},1984:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.20.04 AM.ab4559ab.png"},"37bc":function(e,t,o){e.exports=o.p+"img/BookElonMusk.a6289be9.jpg"},"3c2c":function(e,t,o){e.exports=o.p+"img/MeJoke.3dcee4dd.jpg"},"4c51":function(e,t,o){"use strict";o("7d0c")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("7a23"),n={id:"website"};function a(e,t,o,a,s,r){var c=Object(i["j"])("Typing"),l=Object(i["j"])("Heading"),d=Object(i["j"])("BuilderBrightsSection"),b=Object(i["j"])("AboutMeSection"),g=Object(i["j"])("BooksSection"),h=Object(i["j"])("BuildsSection"),u=Object(i["j"])("BlogsSection"),m=Object(i["j"])("Footer");return Object(i["h"])(),Object(i["c"])("body",n,[Object(i["g"])(c),Object(i["g"])(l),Object(i["g"])("main",null,[Object(i["g"])(d),Object(i["g"])(b),Object(i["g"])(g),Object(i["g"])(h),Object(i["g"])(u)]),Object(i["g"])(m)])}var s={class:"heading"},r={class:"heading__text-box"},c={class:"heading-primary"};function l(e,t,o,n,a,l){return Object(i["h"])(),Object(i["c"])("header",s,[Object(i["g"])("div",r,[Object(i["g"])("h1",c,[Object(i["g"])("span",{class:[l.titleClass,"heading-primary--main primaryname"]},Object(i["k"])(a.webTitle),3),Object(i["g"])("span",{class:[l.titleClass,"heading-primary--sub subname"]},Object(i["k"])(a.webSubtitle),3),Object(i["g"])("a",{href:"javascript:void(0)",class:[l.titleClass,"btn btn--white btn--animate"],onClick:t[1]||(t[1]=function(){return l.changeWebTitle&&l.changeWebTitle.apply(l,arguments)})},Object(i["k"])(a.webTitleButtonText),3)])])])}var d={name:"Heading",data:function(){return{webTitle:"Anri Lombard",webSubtitle:"where building happens",webTitleButtonText:"want to know me?",headingAnimationTime:6e3,transition:!1}},computed:{titleClass:function(){return{nameAnimation:this.transition}}},methods:{changeWebTitle:function(){var e=this;this.transition=!0,setTimeout((function(){e.webTitle="A Fellow builder",e.webSubtitle="Here to inpire another",e.webTitleButtonText="Scroll down so i can..."}),this.headingAnimationTime/2)}}};d.render=l;var b=d,g={class:"section-weekly-builer-brights"},h={class:"u-center-text u-margin-bottom-large"},u=Object(i["g"])("h1",{class:"heading-weekly-builder-brights mb-5"}," Monthly Builder Brights ",-1),m=Object(i["g"])("div",{class:"u-dotted-line"},null,-1),p={class:"mt-5 mb-5 heading-weekly-builder-brights--quote"},f=Object(i["g"])("div",{class:"u-dotted-line"},null,-1),y=Object(i["g"])("div",{class:"u-link"},[Object(i["g"])("a",{class:"anchor",href:"https://docs.google.com/forms/d/e/1FAIpQLSfmBozkOLadqmFhWcxyHOaLo1-CE0h3jmIWvI8MnKYev24UPA/viewform"}," give suggestion for weekly builder brights ")],-1);function O(e,t,o,n,a,s){return Object(i["h"])(),Object(i["c"])("section",g,[Object(i["g"])("div",h,[u,m,Object(i["g"])("h2",p,Object(i["k"])(s.updateQuote()),1),f,y])])}var j={name:"BuilderBrightsSection",data:function(){return{thisYear:(new Date).getFullYear(),month:(new Date).getMonth(),dayOfMonth:(new Date).getDate()}},methods:{updateQuote:function(){return 9===this.month?"If I could do stats in code I won't be writing quotes":10===this.month?"The only stupid question is the one unasked":11===this.month?"Be nice to nerds. Chances are you'll end up working for one.":12===this.month?"Put your hand on a hot stove for a minute, and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That’s relativity.":1===this.month?"The only normal people are the ones that you don’t know very well.":2===this.month?"A smile is an inexpensive way to improve your looks.":3===this.month?"If you want to leave footprints in the sands of time, don’t drag your feet.":void 0}}};j.render=O;var w=j,v=o("ec02"),k=o.n(v),S=o("3c2c"),_=o.n(S),x={class:"section-about-me"},T=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline--white"},"About me"),Object(i["g"])("p",{style:{color:"white","font-weight":"600"},class:"u-center-text"}," (Probably a math guy) ")],-1),A=Object(i["g"])("div",{class:"row"},[Object(i["g"])("div",{class:"about-me"},[Object(i["g"])("figure",{class:"about-me__shape about-me__shape--1"},[Object(i["g"])("img",{src:k.a,alt:"A picture of me",class:"about-me__img"}),Object(i["g"])("figcaption",{class:"about-me__caption"},"Me in the morning")]),Object(i["g"])("div",{class:"about-me__text"},[Object(i["g"])("h3",{class:"heading-tertiary u-margin-bottom-small teen-range--title1 about-me__heading"}," Hey builder, "),Object(i["g"])("p",{style:{"font-size":"1.9rem",color:"#423F3E","font-family":"serif"}},[Object(i["f"])(" Anri here, I write research, solve math and statistic problems, and kick ass alongside Hermione (Ron wrote that). "),Object(i["g"])("br"),Object(i["f"])(),Object(i["g"])("br"),Object(i["f"])(" My interests are solving problems in global warming, virtual education, and space colonisation; after my advanced wand-waiving degree. "),Object(i["g"])("br"),Object(i["f"])(),Object(i["g"])("br"),Object(i["f"])(" I'm synonomous with books and studying (sorry girls, not rugby), and intrigued by all 4 people I met this year; we'll connect easily if you know who Dobby is. ")])])]),Object(i["g"])("div",{class:"about-me"},[Object(i["g"])("figure",{class:"about-me__shape about-me__shape--2"},[Object(i["g"])("img",{src:_.a,alt:"A picture of me",class:"about-me__img"}),Object(i["g"])("figcaption",{class:"about-me__caption"},"Me in the night")]),Object(i["g"])("div",{class:"about-me__text"},[Object(i["g"])("p",{style:{"font-size":"1.9rem",color:"#423F3E","font-family":"serif"}},[Object(i["f"])(" I'm inspired by the perseverant and curios that change the world; I'm obnoxious to anyone who watches television, and have a problem with Netflix bingers, unless it is Harry Potter. "),Object(i["g"])("br"),Object(i["f"])(),Object(i["g"])("br"),Object(i["f"])(" I'm addicted to smiles, hugs and handshakes, and give them out mostly to mathematicians, statiticians, novelists, engineers, and all wizards (Ok, most wizards). "),Object(i["g"])("br"),Object(i["f"])(),Object(i["g"])("br"),Object(i["f"])(" You could follow me on "),Object(i["g"])("a",{href:"#bottom"},"Twitter"),Object(i["f"])(", where I'll post my research and wizardry projects. ")])])])],-1);function M(e,t,o,n,a,s){return Object(i["h"])(),Object(i["c"])("section",x,[T,A])}var B={name:"AboutMeSection"};B.render=M;var I=B,P={class:"section-interests"},F=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-secondary mb-5"}," My Books, Builds, and Blogs for The Curious "),Object(i["g"])("h3",null,"Updated 19 September 2021")],-1);function D(e,t,o,n,a,s){var r=Object(i["j"])("Books");return Object(i["h"])(),Object(i["c"])("section",P,[F,Object(i["g"])(r)])}var R={key:0,class:"section-books"},H=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline"},"Books")],-1),W={class:"u-slider u-center-text"},C=Object(i["g"])("p",{href:"#",class:"boring-range-title u-slider--title"},"Boring",-1),E={class:"row"},L=Object(i["e"])('<div class="col-1-of-2"><h3 class="heading-tertiary u-margin-bottom-small section-books--first-heading"> What I am reading now </h3><p class="paragraph section-books--first-paragraph"> - <strong>Digital Minimalism</strong><em>by Cal Newport</em></p><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> My top 3 recommondations </h3><p class="paragraph section-books--second-paragraph"> 1. <strong>Gifted Hands</strong> <em>by dr. Ben Carson</em> (and <strong>Educated</strong> <em>by Tara Westover</em>): to see how reading can help you cheat life from the bottom to the top.<br><br> 2. <strong>Why We Sleep</strong> <em>by Mathew Walker</em>: to see that we all have a superpower already. <br><br> 3. <strong>Watership Down</strong> <em>by Richard Adams</em>: to show you how fellowship is better than a lone adventure.<br><br></p><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> My Top 5 Of The Year </h3><div class="row"><div class="col-1-of-2"><h4>2019</h4><p class="section-books--2019"><strong>Elon Musk</strong> <em>by Ashlee Vance</em><br><strong>Gifted Hands</strong> <em>by dr. Ben Carson</em><br><strong>Why We Sleep</strong> <em>by Mathew Walker</em><br><strong>Factfullness</strong> <em>by Hans Rosling</em><br><strong>Make It Stick</strong> <em>by many scientists :)</em><br></p></div><div class="col-1-of-2"><h4>2020</h4><p class="section-books--2020"><strong>Sapiens</strong> <em>by Yuval Harari</em><br><strong>The Ride Of A Lifetime</strong> <em>by Bob Iger</em><br><strong>Educated</strong> <em>by Tara Westover</em><br><strong>Shoe Dog</strong> <em>by Phil Knight</em><br><strong>Atomic Habits</strong> <em>by James Clear</em><br></p></div></div></div>',1),Y={class:"col-1-of-2"},G=Object(i["g"])("div",null,[Object(i["g"])("h2",{class:"u-center-text"},"My Favourites Of All Time"),Object(i["g"])("h3",{class:"u-margin-bottom-small u-center-text"})],-1),V={class:"composition"},J={key:1,class:"section-books"},z=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline"},[Object(i["g"])("i",{class:"icon-basic-book"}),Object(i["f"])("Books")])],-1),N={class:"u-slider u-center-text"},U=Object(i["g"])("p",{href:"#",class:"boring-range-title u-slider--title"},"Fun",-1),K={class:"row"},q=Object(i["e"])('<div class="col-1-of-2"><h3 class="heading-tertiary u-margin-bottom-small section-books--first-heading"><em>All</em> these books blew my mind! </h3><p class="paragraph section-books--first-paragraph"> You have <strong>not lived yet</strong> until you read all <strong>7</strong> Harry Potter books, all <strong>3</strong> Lord Of The Rings books and, of course, <strong>THE HOBBIT</strong>!<br><br>No homework or chore is important enough to <strong>hold you from your life mission</strong> of revering every word in these books. Put it all on hold and, with my advice, <strong>get to it</strong>. </p><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> I recommend them all!&quot; </h3><h3 class="heading-tertiary u-margin-bottom-small section-books--second-heading"> My Top 5 Of The Year </h3><div class="row"><div class="col-1-of-2"><h4>2019</h4><p class="section-books--2019"><strong>The Places You&#39;ll Go</strong> <em>by dr. Seuss</em><br><strong>The Rosie Project</strong><em>by Graeme Simsion</em><br><strong>The Martian</strong><em>by Andy Weir</em><br><strong>The Hobbit</strong> <em>by JRR Tolkien</em><br><strong>Fahrenheit 451</strong><em>by Ray Bradbury</em></p></div><div class="col-1-of-2"><h4>2020</h4><p class="section-books--2020"><strong>All Harry Potter Books</strong><em>by JK Rowling</em><br><strong>All Lord Of The Rings Books</strong><em>by JRR Tolkien</em><br><strong>Watership Down</strong><em>by Richard Adams</em><br><strong>The Great Gatsby</strong><em>by F. Scott Fitzgerald</em><br><strong>Ender&#39;s Game</strong><em>by Orson Scott Card</em></p></div></div></div>',1),Q={class:"col-1-of-2"},X=Object(i["g"])("div",null,[Object(i["g"])("h2",{class:"u-center-text"},"My Favourites Of All Time"),Object(i["g"])("h3",{class:"u-margin-bottom-small u-center-text"})],-1),Z={class:"composition"};function $(e,t,n,a,s,r){return Object(i["h"])(),Object(i["c"])("div",null,[1==s.sliderValue?(Object(i["h"])(),Object(i["c"])("section",R,[H,Object(i["g"])("div",W,[C,Object(i["m"])(Object(i["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.sliderValue=e}),type:"range",min:"1",max:"2",class:"u-slider--actual u-slider--actual__boring"},null,512),[[i["l"],s.sliderValue]])]),Object(i["g"])("div",E,[L,Object(i["g"])("div",Y,[G,Object(i["g"])("div",V,[Object(i["g"])("img",{src:o("37bc"),alt:"Photo 1",class:"composition__photo composition__photo--p1"},null,8,["src"]),Object(i["g"])("img",{src:o("7e7b"),alt:"Photo 2",class:"composition__photo composition__photo--p2"},null,8,["src"]),Object(i["g"])("img",{src:o("f7a9"),alt:"Photo 3",class:"composition__photo composition__photo--p3"},null,8,["src"])])])])])):2==s.sliderValue?(Object(i["h"])(),Object(i["c"])("section",J,[z,Object(i["g"])("div",N,[U,Object(i["m"])(Object(i["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.sliderValue=e}),type:"range",min:"1",max:"2",class:"u-slider--actual u-slider--actual__boring"},null,512),[[i["l"],s.sliderValue]])]),Object(i["g"])("div",K,[q,Object(i["g"])("div",Q,[X,Object(i["g"])("div",Z,[Object(i["g"])("img",{src:o("fd82"),alt:"Photo 1",class:"composition__photo composition__photo--p1"},null,8,["src"]),Object(i["g"])("img",{src:o("bd60"),alt:"Photo 2",class:"composition__photo composition__photo--p2"},null,8,["src"]),Object(i["g"])("img",{src:o("e35e"),alt:"Photo 3",class:"composition__photo composition__photo--p3"},null,8,["src"])])])])])):Object(i["d"])("",!0)])}var ee={name:"Books",data:function(){return{sliderValue:1,sliderTitle:"Boring"}}};ee.render=$;var te=ee,oe={name:"BooksSection",components:{Books:te}};oe.render=D;var ie=oe,ne=(o("fb6a"),o("9911"),o("a4d3"),o("e01a"),{class:"section-builds"}),ae=Object(i["g"])("div",{class:"u-center-text u-margin-bottom-large"},[Object(i["g"])("h2",{class:"heading-underline--white"},"My Builds"),Object(i["g"])("p",{style:{color:"white","font-weight":"600"},class:"u-center-text"}," Yes, you can click on them all... ")],-1),se={class:"row"},re={class:"row"},ce={class:"heading-primary"},le={key:0},de={key:0,style:{"margin-top":"10rem"},class:"row"};function be(e,t,o,n,a,s){var r=Object(i["j"])("build");return Object(i["h"])(),Object(i["c"])("section",ne,[ae,Object(i["g"])("div",se,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(a.buildList.slice(0,a.arrayEndForFirstRow),(function(e){return Object(i["h"])(),Object(i["c"])("div",{key:e["title"],class:"col-2-of-4"},[Object(i["g"])(r,{image:e["image"],link:e["link"],title:e["title"],date:e["date"],description:e["description"]},null,8,["image","link","title","date","description"])])})),128))]),Object(i["g"])("div",re,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(a.buildList.slice(a.arrayEndForFirstRow,a.arrayEndForFirstRow+4),(function(e){return Object(i["h"])(),Object(i["c"])("div",{key:e["title"],class:"col-1-of-4"},[Object(i["g"])(r,{image:e["image"],link:e["link"],title:e["title"],date:e["date"],description:e["description"]},null,8,["image","link","title","date","description"])])})),128))]),Object(i["g"])("h1",ce,[Object(i["g"])("a",{onClick:t[1]||(t[1]=function(){return s.toggleSeeOldies&&s.toggleSeeOldies.apply(s,arguments)}),id:"oldie",href:"javascript:void(0)",class:"btn btn--white"},[(0==a.seeOldies?a.oldieToggle="See":a.oldieToggle="Hide")?(Object(i["h"])(),Object(i["c"])("span",le,Object(i["k"])(a.oldieToggle),1)):Object(i["d"])("",!0),Object(i["f"])(" builds before "+Object(i["k"])(a.oldieDate),1)])]),a.seeOldies?(Object(i["h"])(),Object(i["c"])("div",de,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(a.buildList.slice(a.arrayEndForFirstRow+4,a.arrayEndForFirstRow+8),(function(e){return Object(i["h"])(),Object(i["c"])("div",{key:e["title"],class:"col-1-of-4"},[Object(i["g"])(r,{image:e["image"],link:e["link"],title:e["title"],date:e["date"],description:e["description"]},null,8,["image","link","title","date","description"])])})),128))])):Object(i["d"])("",!0)])}var ge={class:"build-box"},he={class:"tertiary-heading"},ue={class:"build-box--date"},me={class:"build-box--info paragraph"};function pe(e,t,n,a,s,r){return Object(i["h"])(),Object(i["c"])("div",ge,[Object(i["g"])("img",{class:"build-box--image u-margin-bottom-small",src:o("1944")("./".concat(n.image)),alt:"portfolio image"},null,8,["src"]),Object(i["g"])("a",{href:n.link,class:"build-box--title"},[Object(i["g"])("h2",he,Object(i["k"])(n.title),1)],8,["href"]),Object(i["g"])("h3",ue,Object(i["k"])(n.date),1),Object(i["g"])("p",me,Object(i["k"])(n.description),1)])}var fe={name:"Build",data:function(){return{}},props:["width","image","link","title","date","description"]};fe.render=pe;var ye=fe,Oe={name:"BuildsSection",data:function(){return{seeOldies:!1,arrayEndForFirstRow:2,oldieToggle:"",oldieDate:"January 2021",buildList:[{image:"Screenshot 2021-04-19 at 8.29.19 PM.png",link:"https://tickerhack.netlify.app",title:"Ticker",date:"April 2021",description:"Make waking up more fun with this ever evolving task motivator (Made with vue, firebase, and a whole lot of ideas)\nDISCLAIMER: Only works on chrome and Mozilla firefox for now, with Safari your experience will be incomplete."},{image:"Screenshot 2021-03-07 at 7.44.01 PM.png",link:"https://anri-lombard.github.io/SortTheRivalry/",title:"Sort The Rivalry",date:"March 2021",description:"Pick your rival and end the tension once and for all (my first vue.js app)"},{image:"Screenshot 2021-02-28 at 5.37.28 AM.png",link:"https://github.com/Anri-Lombard",title:"Anri Lombard Official Website",date:"February - March 2021",description:"Where builders could draw inspiration, my mom can check up on me, and collaborations can start by going to my github repo (Now revamped entirely in vue)"},{image:"Screenshot 2021-02-24 at 8.11.06 AM.png",link:"https://anri-lombard.github.io/MyFirstSite/",title:"First personal site",date:"January 2021",description:"My first attempt to sell myself... figuratively speaking (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Rocket.png",link:"https://anri-lombard.itch.io/boost",title:"Boost",date:"January 2021",description:"Try your rocket through six solid stages without much light and cool particle effects (Created with c# and the unity engine)"},{image:"Screenshot 2021-02-24 at 9.13.39 AM.png",link:"https://anri-lombard.itch.io/hulk-smash",title:"Hulk Smash",date:"January 2021",description:"Bring nostalgia with the classic blockbreaking game, with an added twist: hulk from baby to... well... HULK (made with C# and the unity engine)"},{image:"Screenshot 2021-02-24 at 8.02.47 AM.png",link:"https://anri-lombard.github.io/Ottergram/",title:"OtterGram",date:"December 2020",description:"Oh yes, otters indeed! All fun to test my CSS zooming skills (This idea comes from Youtube and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Screenshot 2021-02-24 at 8.20.04 AM.png",link:"https://anri-lombard.itch.io/DrumKit/",title:"Drum Kit",date:"December 2020",description:"No need for a drum set, I got you coverred with this drum mock-up (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Screenshot 2021-02-24 at 7.56.13 AM.png",link:"https://anri-lombard.itch.io/TinDog/#carouselExampleControls",title:"Tindog",date:"December 2020",description:"Finding a friend for man's best friend (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"},{image:"Screenshot 2021-02-24 at 8.08.41 AM.png",link:"https://anri-lombard.itch.io/SimonGame",title:"Simon Game",date:"December 2020",description:"Test your mind and try to keep up with the pattern as long as you can (This idea comes from Angela Yu and is created with a follow-along tutorial and my own twist. Made with web technologies)"}]}},methods:{toggleSeeOldies:function(){this.seeOldies=!this.seeOldies}},components:{Build:ye}};Oe.render=be;var je=Oe,we={id:"bottom",class:"footer u-center-text"},ve={class:"row"},ke=Object(i["e"])('<div class="col-1-of-2"><div class="footer__navigation"><ul class="footer__list"><li class="footer__item"><a href="https://www.linkedin.com/in/anri-lombard-ab37ab201/" class="footer__link">Linkedin</a></li><li class="footer__item"><a href="https://github.com/Anri-Lombard" class="footer__link">Github</a></li><li class="footer__item"><a href="mailto:anri.m.lombard@gmail.com" class="footer__link">Email</a></li><li class="footer__item"><a href="https://twitter.com/anri_m_lombard" class="footer__link">Twitter</a></li><li class="footer__item"><a href="https://anri-lombard.itch.io/" class="footer__link">Games</a></li></ul></div></div>',1),Se={class:"col-1-of-2"},_e={class:"footer__navigation"},xe=Object(i["g"])("ul",{class:"footer__list"},[Object(i["g"])("li",{class:"footer__item"},[Object(i["g"])("a",{href:"https://www.buymeacoffee.com/anrilombard.com",class:"footer__link"},"your donation could help build the next project")])],-1);function Te(e,t,o,n,a,s){return Object(i["h"])(),Object(i["c"])("footer",we,[Object(i["g"])("div",ve,[ke,Object(i["g"])("div",Se,[Object(i["g"])("div",_e,[xe,Object(i["g"])("p",null,"Anri Lombard © "+Object(i["k"])(a.thisYear),1)])])])])}var Ae={name:"Footer",data:function(){return{thisYear:(new Date).getFullYear()}}};Ae.render=Te;var Me=Ae,Be=(o("5b3d"),o("7db1"),{class:"typing-container"}),Ie={class:"typed-text"};function Pe(e,t,o,n,a,s){return Object(i["h"])(),Object(i["c"])("div",Be,[Object(i["g"])("h1",null,[Object(i["g"])("span",Ie,Object(i["k"])(a.typeValue),1),Object(i["g"])("span",{class:["cursor",{typing:a.typeStatus}]}," ",2)])])}var Fe=o("5118"),De={name:"Typing",data:function(){return{typeValue:"",typeStatus:!1,typeArray:["The only way to type this fast is with css","How many tickles does it take to make an octupus laugh? Ten-tickles","What's the best thing about Switzerland? Don't know, but their flag is a big plus","All mathematicians are afraid of negative numbers. They'll stop at nothing to avoid them","Why do we tell actors to “break a leg?” Because every play has a cast.","Did you hear about the claustrophobic astronaut? He just needed a little space.","Guess you figured I like jokes by now","I also like vaccines","And people","Goodness I miss people!"],typingSpeed:30,erasingSpeed:30,newTextDelay:4e3,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,Object(Fe["setTimeout"])(this.typeText,this.typingSpeed)):(this.typeStatus=!1,Object(Fe["setTimeout"])(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,Object(Fe["setTimeout"])(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),Object(Fe["setTimeout"])(this.typeText,this.typingSpeed+1e3))}},created:function(){Object(Fe["setTimeout"])(this.typeText,this.newTextDelay+200)}};De.render=Pe;var Re=De,He={name:"App",components:{Heading:b,BuilderBrightsSection:w,AboutMeSection:I,BooksSection:ie,BuildsSection:je,Footer:Me,Typing:Re}};o("4c51");He.render=a;var We=He;Object(i["b"])(We).mount("#app")},"734f":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 7.56.13 AM.2e2400d8.png"},"773a":function(e,t,o){e.exports=o.p+"img/Rocket.59e372a3.png"},"7d0c":function(e,t,o){},"7d6b":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.02.47 AM.6b8a2a0d.png"},"7e7b":function(e,t,o){e.exports=o.p+"img/BookWatershipDown.1ae63cad.jpeg"},8502:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.11.06 AM.1a650a00.png"},"8a55":function(e,t,o){e.exports=o.p+"img/Screenshot 2021-04-19 at 8.13.28 PM.a1f977cc.png"},ad70:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-04-19 at 8.29.19 PM.b7fb8744.png"},b641:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-28 at 6.58.29 PM.4728a70b.png"},bd60:function(e,t,o){e.exports=o.p+"img/BookHarryPotterPS.47e4c618.jpg"},bdec:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 9.13.39 AM.0f014e9f.png"},d227:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-28 at 5.37.28 AM.b485782f.png"},e35e:function(e,t,o){e.exports=o.p+"img/BookLOTR.ae81d1ce.jpg"},ec02:function(e,t,o){e.exports=o.p+"img/me3.c885e911.jpeg"},f7a9:function(e,t,o){e.exports=o.p+"img/BookFacfullness.fa7174c3.jpg"},fa97:function(e,t,o){e.exports=o.p+"img/Screenshot 2021-02-24 at 8.08.41 AM.fc5f285d.png"},fd82:function(e,t,o){e.exports=o.p+"img/BookTH.4c3c466b.jpg"}});
//# sourceMappingURL=app.74aef89d.js.map