(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),o=i(156),s=i(154),p=function(t){var e=t.item,i=t.length;return n.a.createElement("div",{style:{width:"calc( 100% / "+i+" )",display:"inline-block"}},"list"===e.type&&e.texts&&n.a.createElement("ul",null,e.texts.map(function(t){return n.a.createElement("li",{key:"text-"+Math.random()},t)})),"image"===e.type&&e.images&&n.a.createElement("ul",null,e.images.map(function(t){return n.a.createElement("li",{key:"image-"+Math.random()},t)})))},l=function(t){var e=t.slide;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,e.title),n.a.createElement(n.a.Fragment,null,e.data.map(function(t,i){return n.a.createElement(p,{item:t,length:e.data.length,key:"column-"+i})})))},r=function(t){var e=t.data;return n.a.createElement(n.a.Fragment,null,e.map(function(t,e){return n.a.createElement(l,{slide:t,key:"slide-"+e})}))},m=function(t){var e=t.data;return n.a.createElement(o.a,{title:e.title},n.a.createElement(s.a,{title:e.title}),n.a.createElement(r,{data:e.slides}))},c=i(169);e.default=function(){return n.a.createElement(m,{data:c})}},150:function(t,e,i){var a;t.exports=(a=i(153))&&a.default||a},151:function(t,e,i){"use strict";i.d(e,"b",function(){return m});var a=i(0),n=i.n(a),o=i(4),s=i.n(o),p=i(33),l=i.n(p);i.d(e,"a",function(){return l.a});i(150);var r=n.a.createContext({}),m=function(t){return n.a.createElement(r.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(t){t.exports={data:{site:{siteMetadata:{title:"GE Community App"}}}}},153:function(t,e,i){"use strict";i.r(e);i(34);var a=i(0),n=i.n(a),o=i(4),s=i.n(o),p=i(55),l=i(2),r=function(t){var e=t.location,i=l.default.getResourcesForPathnameSync(e.pathname);return i?n.a.createElement(p.a,Object.assign({location:e,pageResources:i},i.json)):null};r.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=r},154:function(t,e,i){"use strict";var a=i(155),n=i(0),o=i.n(n),s=i(4),p=i.n(s),l=i(158),r=i.n(l);function m(t){var e=t.description,i=t.lang,n=t.meta,s=t.keywords,p=t.title,l=a.data.site,m=e||l.siteMetadata.description;return o.a.createElement(r.a,{htmlAttributes:{lang:i},title:p,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:p.a.string,lang:p.a.string,meta:p.a.arrayOf(p.a.object),keywords:p.a.arrayOf(p.a.string),title:p.a.string.isRequired},e.a=m},155:function(t){t.exports={data:{site:{siteMetadata:{title:"GE Community App",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@_akush"}}}}},156:function(t,e,i){"use strict";var a=i(152),n=i(0),o=i.n(n),s=i(4),p=i.n(s),l=i(151),r=function(t){var e=t.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{color:"white",margin:0,textAlign:"center"}},e)))};r.propTypes={siteTitle:p.a.string},r.defaultProps={siteTitle:""};var m=r,c=(i(157),function(t){var e=t.title,i=t.children;return o.a.createElement(l.b,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{siteTitle:e||t.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 2.45rem",paddingTop:0,minHeight:"100%"}},o.a.createElement("main",null,i),o.a.createElement("footer",{style:{position:"fixed",bottom:0,background:"white",width:"calc( 100% - 2.175rem )",textAlign:"center",fontSize:"0.8rem",color:"#777",padding:"0.5rem 0",fontFamily:"sans-serif"}},"© ",(new Date).getFullYear(),", Built by GE Healthcare")))},data:a})});c.propTypes={children:p.a.node.isRequired};e.a=c},169:function(t){t.exports={name:"मातृ मृत्यु दर एवं बीमारी दर के कारण",cover:"https://ipsator.github.io/ge-community-app/images/module1/topic3/module-1-topic-3-slide-2.png",slides:[{name:"मातृ मृत्यु दर",type:"single",tags:["मातृ मृत्यु"],cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-1.png",data:[{type:"list",content:["https://www.npr.org/sections/health-shots/2015/01/12/375663920/the-doctor-who-championed-hand-washing-and-saved-women-s-lives","एक डाॅक्टर की कहानी जिसकी हाथ धोने की आदत से बहुत से लोगो की जान बच गयी।"]}],slide:2},{name:"मुख्य कारण",type:"single",tags:["मातृ मृत्यु"],data:[{type:"list",content:["लड़की की उम्र बहुत छटी है (<20 साल ) कम उम्र की लडकी (<20 साल )","स्वास्थ्य सुविधा तक पहुँचने में देरी","प्रसव के पहले या बाद में रक्तस्त्राव ","द©रे की शुरुआत (प्रसवाक्षेप)","संक्रमण के कारण गर्भपात","रक्त की कमी (रक्त अल्पता)","गर्भाशय का फट जाना","एक के बाद एक बच्चो को जन्म देना या दो बच्चो के बीच बहुत कम अंतराल रखना","निम्न सामाजिक-आर्थिक स्थिति"]}],slide:3},{name:"लड़की की उम्र बहुत छ¨टी है कम उम्र की लडकी",type:"split",tags:["मातृ मृत्यु"],cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-4.png",data:[{type:"list",content:["बाल विवाह (<18 साल) कम उम्र में विवाह","गर्भ धारण करने के लिए लड़की की आयु बहुत कम है (<20 साल)  अविकसित, कमजोर शरीर","कम उम्र मे लडकी की गर्भवती होना"]},{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-4.png"]}],slide:4},{name:"स्वास्थ्य सुविधा तक पहुँचने में देरी",type:"split",tags:["मातृ मृत्यु"],cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-5-2.png",data:[{type:"list",content:["महिला को अस्पताल ले जाने के निर्णय लेने में देरी","परिवार पुरुष प्रधान हैं अोर निर्णय केवल परिवार के बड़े पुरुषो द्वारा ही लिए जाते हैं","स्वास्थ्य सुविधा तक पहुचने में परिवहन के साधन द्वारा अत्यधिक वक्त लग सकता है","परिवहन के साधन की अनुपलब्धता","परिवहन के साधन महँगे हो सकते हैं","चिकित्सा में देरी","अस्पताल में भीड़ हो सकती है"]},{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-5-2.png"]}],slide:5},{name:"रक्तस्त्राव − ध्यान रखें",subtitle:"प्रसव के पहले (प्रसव पूर्व रक्तस्त्राव)",type:"single",tags:["मातृ मृत्यु","परामर्श/कौन्सिलिंग"],cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-6.png",data:[{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-6.png"]}],slide:6},{name:"रक्तस्त्राव",subtitle:"",type:"split",tags:["मातृ मृत्यु"],cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-7-1.png",data:[{type:"list",content:["घर पर प्रसव - वे स्वास्थ्य केन्द्र नहीं आते।","अप्रशिक्षित लोगों से प्रसव करवाना।","कमजोर गर्भाशय  - गर्भाशय सिकुड़ता नहीं हैै","आंवल का बाहर ना आना"]},{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-7-1.png","https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-7-2.png","https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-7-3.png"]}],slide:7},{name:"दौरे की शुरुआत (प्रसवाक्षेप)",subtitle:"",type:"split",tags:["मातृ मृत्यु"],cover:"",data:[{type:"list",content:["दौरे . पूर्व प्रसवाक्षेप","उच्च रक्तचाप","वजन का बढ़ना","मूत्र में प्रोटीन की मात्रा अधिक होना","सूजन","दौरे पड़ना - प्रसवाक्षेप"]},{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-8.png"]}],slide:8},{name:"रक्त की कमी",subtitle:"",type:"single",cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-9-1.png",tags:["मातृ मृत्यु"],data:[{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-9-1.png","https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-9-2.png","https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-9-3.png"]}],slide:9},{name:"एनिमिया होने के कारण, पहचान और बचाव के तरीको पर संक्षिप्त अभिनय",subtitle:"",type:"single",cover:"",tags:["मातृ मृत्यु"],data:[{type:"list",content:["सीता पिछले कुछ दिनो से पीली पडती जा रही थी और उसे चक्कर भी आ रहे थें। छोटे छोटे कार्य करने पर भी उसे थकान हो जाती थी। उन्होने इसके बारे मे मीना (स्वस्थ्य कार्यकर्ता) से भी बात करी थी की सीता कितनी सुस्त हो गई है। मीना ने सीता मे संभावित एनिमिया के लक्षणो को महसूस किया और सीता की सासू जी कहा की वह सीता को प्राथमिक स्वास्थ्य केन्द्र भेजे क्योकि उसमे एनिमिया के संभावित लक्षण पाये गये थें। ","एनिमिया होने का क्या कारण हो सकता था","सीता अपनी जीवन शैली मे क्या बदलाव करे जिससे वह दुबारा स्वस्थ हो सकती है।"]}],slide:10},{name:"उच्च जन्म-दर व दो गर्भधारण के बीच बहुत कम अंतराल",subtitle:"",type:"split",cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-11.png",tags:["मातृ मृत्यु"],data:[{type:"list",content:["एक से अधिक गर्भधारण","दो गर्भधारणों के बीच अंतर कम होना","महिला कमजोर है, अौर उसका शरीर प्रसव पीड़ा को सहन नहीं कर सकता"]},{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-11.png"]}],slide:11},{name:"निम्न सामाजिक-आर्थिक स्थिति",subtitle:"",type:"split",cover:"https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-12.png",tags:["मातृ मृत्यु"],data:[{type:"list",content:["स्वास्थ्य सुविधा लेनेे से कतराते है क्योकि वो महंगा है","जागरूक नहीं है़। उन्हें पता नहीं है कि क्या खाएं अौर क्या नहीं खाए (पोषण का महत्व)","कुछ धारणाएं, रीति-रिवाज या प्रथाएं जो गर्भवती महिला के लिए हानिकारक हैं"]},{type:"image",content:["https://ipsator.github.io/ge-community-app/images/module1/topic1/module-1-topic-1-slide-12.png"]}],slide:12}]}}}]);
//# sourceMappingURL=component---src-pages-module-1-topic-1-js-bbfc701d230d61f700f9.js.map