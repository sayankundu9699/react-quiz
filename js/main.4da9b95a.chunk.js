(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),s=(a(25),a(26),a(17)),i=a(5),l=a(6),u=a(8),m=a(7),d=a(34),E=a(29),v=a(32),h=a(33);function p(e){var t=e.questions,a=e.question,n=e.answers,o=e.currentQuestion,c=e.checked,s=e.correct,i=e.userAnswer,l=e.maxQuestionCount,u=e.checkAnswer,m=e.nextQuestion,p=e.disabled,f=e.restartQuiz;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{now:o,max:l,className:"mb-4 rounded-0"}),r.a.createElement(E.a,null,r.a.createElement("h5",{className:"mb-4"},a),r.a.createElement(v.a,null,n.map((function(e,a){var n="";return c&&(e===i&&s?n="correctAnswer":e!==i||s||(n="wrongAnswer"),e===t[o].correct_answer&&(n="correctAnswer")),r.a.createElement(v.a.Item,{key:a,action:!c,onClick:function(){return u(e)},className:n},e)}))),r.a.createElement(h.a,{variant:"outline-success",className:"mt-4",disabled:!!p,onClick:m},"Next"),r.a.createElement(h.a,{variant:"outline-primary",className:"mt-4 float-right",onClick:f},"Restart")))}function f(e){var t=e.score,a=e.maxQuestionCount,n=e.resetQuiz,o=e.restartQuiz;return r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("span",{className:"h5"},"Your Score : "),r.a.createElement("span",{className:"h5 font-weight-bold"},t,"/"),r.a.createElement("span",{className:"text-small"},a)),r.a.createElement(h.a,{variant:"outline-success m-2",onClick:n},"Reset"),r.a.createElement(h.a,{variant:"outline-primary m-2",onClick:o},"Restart"))}var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={number:5,category:"any",difficulty:"any"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.number,n=t.category,o=t.difficulty;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"form-group mt-4 mb-4"},r.a.createElement("label",null,"Difficulty"),r.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"50",value:a,onChange:function(t){return e.setState({number:t.target.value})}})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null,"Category"),r.a.createElement("select",{className:"form-control",value:n,onChange:function(t){return e.setState({category:t.target.value})}},r.a.createElement("option",{value:"any"},"Any Category"),r.a.createElement("option",{value:"9"},"General Knowledge"),r.a.createElement("option",{value:"10"},"Entertainment: Books"),r.a.createElement("option",{value:"11"},"Entertainment: Film"),r.a.createElement("option",{value:"12"},"Entertainment: Music"),r.a.createElement("option",{value:"13"},"Entertainment: Musicals - Theatres"),r.a.createElement("option",{value:"14"},"Entertainment: Television"),r.a.createElement("option",{value:"15"},"Entertainment: Video Games"),r.a.createElement("option",{value:"16"},"Entertainment: Board Games"),r.a.createElement("option",{value:"17"},"Science - Nature"),r.a.createElement("option",{value:"18"},"Science: Computers"),r.a.createElement("option",{value:"19"},"Science: Mathematics"),r.a.createElement("option",{value:"20"},"Mythology"),r.a.createElement("option",{value:"21"},"Sports"),r.a.createElement("option",{value:"22"},"Geography"),r.a.createElement("option",{value:"23"},"History"),r.a.createElement("option",{value:"24"},"Politics"),r.a.createElement("option",{value:"25"},"Art"),r.a.createElement("option",{value:"26"},"Celebrities"),r.a.createElement("option",{value:"27"},"Animals"),r.a.createElement("option",{value:"28"},"Vehicles"),r.a.createElement("option",{value:"29"},"Entertainment: Comics"),r.a.createElement("option",{value:"30"},"Science: Gadgets"),r.a.createElement("option",{value:"31"},"Entertainment: Japanese Anime - Manga"),r.a.createElement("option",{value:"32"},"Entertainment: Cartoon - Animations"))),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",null,"Difficulty"),r.a.createElement("select",{className:"form-control",value:o,onChange:function(t){return e.setState({difficulty:t.target.value})}},r.a.createElement("option",{value:"any"},"Any Difficulty"),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard"))),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement(h.a,{variant:"outline-success",onClick:function(){return e.props.loadQuestions(a,n,o)}},"Start Quiz")))}}]),a}(n.Component),Q=a(30),g=a(31);function b(){return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(E.a,{className:"h-100"},r.a.createElement(Q.a,{className:"h-100 align-items-center"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement(g.a,{animation:"border",variant:"primary",style:{width:"5rem",height:"5rem",borderWidth:"0.50rem"}})))))}a(27);var w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).loadQuestions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"any";n.setState({loading:!0,playQuiz:!0});var r="https://opentdb.com/api.php?amount=".concat(e,"&type=multiple");"any"!==t&&(r+="&category=".concat(t)),"any"!==a&&(r+="&difficulty=".concat(a)),fetch(r).then((function(e){return e.json()})).then((function(e){var t=e.results;n.setState({questions:t,maxQuestionCount:t.length,currentQuestion:0})}))},n.setQuestion=function(){var e=n.state.questions[n.state.currentQuestion],t=[].concat(Object(s.a)(e.incorrect_answers),[e.correct_answer]);t.sort((function(){return Math.random()-.5})),n.setState({question:e.question,answers:t,checked:!1,loading:!1,playQuiz:!0})},n.checkAnswer=function(e){n.state.disabled&&(e===n.state.questions[n.state.currentQuestion].correct_answer?n.setState({score:n.state.score+1,disabled:!1,checked:!0,userAnswer:e,correct:!0}):n.setState({disabled:!1,checked:!0,correct:!1,userAnswer:e}))},n.nextQuestion=function(){n.state.currentQuestion<n.state.questions.length-1?n.setState({currentQuestion:n.state.currentQuestion+1,disabled:!0,userAnswer:null,correct:null}):n.setState({disabled:!0,userAnswer:null,correct:null,quizEnd:!0})},n.resetQuiz=function(){n.setState({currentQuestion:0,score:0,disabled:!0,checked:!1,userAnswer:null,correct:null,quizEnd:!1})},n.restartQuiz=function(){n.setState({score:0,disabled:!0,checked:!1,userAnswer:null,correct:null,quizEnd:!1,loading:!0,playQuiz:!1})},n.state={currentQuestion:"",score:0,disabled:!0,checked:!1,userAnswer:null,correct:null,quizEnd:!1,loading:!0,playQuiz:!1},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.currentQuestion!==this.state.currentQuestion&&this.setQuestion()}},{key:"render",value:function(){var e=this.state,t=e.questions,a=e.question,n=e.answers,o=e.quizEnd,c=e.currentQuestion,s=e.score,i=e.maxQuestionCount,l=e.checked,u=e.correct,m=e.userAnswer,d=e.loading,E=e.disabled;return e.playQuiz?d?r.a.createElement(b,null):r.a.createElement(r.a.Fragment,null,o?r.a.createElement(f,{score:s,maxQuestionCount:i,resetQuiz:this.resetQuiz,restartQuiz:this.restartQuiz}):r.a.createElement(p,{questions:t,question:a,answers:n,currentQuestion:c,checked:l,correct:u,userAnswer:m,maxQuestionCount:i,checkAnswer:this.checkAnswer,nextQuestion:this.nextQuestion,disabled:E,restartQuiz:this.restartQuiz})):r.a.createElement(y,{loadQuestions:this.loadQuestions})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4da9b95a.chunk.js.map