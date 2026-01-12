(function(M,C){typeof exports=="object"&&typeof module<"u"?module.exports=C():typeof define=="function"&&define.amd?define(C):(M=typeof globalThis<"u"?globalThis:M||self,M.PlasticitySDK=C())})(this,function(){"use strict";var pt=Object.defineProperty;var dt=(M,C,R)=>C in M?pt(M,C,{enumerable:!0,configurable:!0,writable:!0,value:R}):M[C]=R;var b=(M,C,R)=>dt(M,typeof C!="symbol"?C+"":C,R);var U;class M{constructor(e){b(this,"overlay");b(this,"active",!1);b(this,"hoveredElement",null);b(this,"callbacks");b(this,"rafId",null);this.callbacks=e,this.overlay=this.createOverlay(),document.body.appendChild(this.overlay),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}createOverlay(){const e=document.createElement("div");e.id="plasticity-inspector-overlay",e.style.cssText=`
      position: fixed;
      pointer-events: none;
      background: rgba(0, 122, 255, 0.15);
      border: 1.5px solid #007aff;
      z-index: 10000000;
      display: none;
      transition: width 0.1s, height 0.1s, top 0.1s, left 0.1s;
      box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);
      border-radius: 4px;
    `;const t=document.createElement("div");return t.id="plasticity-label",t.style.cssText=`
      position: absolute;
      top: -28px;
      left: 0;
      background: #007aff;
      color: white;
      font-size: 11px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
    `,e.appendChild(t),e}start(){this.active||(this.active=!0,document.addEventListener("mousemove",this.handleMouseMove,!0),document.addEventListener("click",this.handleClick,!0),document.addEventListener("keydown",this.handleKeyDown,!0),document.body.style.cursor="crosshair")}stop(){this.active&&(this.active=!1,this.overlay.style.display="none",this.rafId&&cancelAnimationFrame(this.rafId),document.removeEventListener("mousemove",this.handleMouseMove,!0),document.removeEventListener("click",this.handleClick,!0),document.removeEventListener("keydown",this.handleKeyDown,!0),document.body.style.cursor="")}handleMouseMove(e){if(!this.active)return;const t=e.target;t.closest("#plasticity-root")||t.id==="plasticity-inspector-overlay"||this.hoveredElement!==t&&(this.hoveredElement=t,this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(()=>{this.updateOverlay(t)}))}updateOverlay(e){const t=e.getBoundingClientRect();this.overlay.style.width=`${t.width}px`,this.overlay.style.height=`${t.height}px`,this.overlay.style.top=`${t.top}px`,this.overlay.style.left=`${t.left}px`,this.overlay.style.display="block";const s=this.overlay.querySelector("#plasticity-label");s&&(s.textContent=`${e.tagName.toLowerCase()}${e.id?"#"+e.id:""}`)}handleClick(e){this.active&&(e.preventDefault(),e.stopPropagation(),this.hoveredElement&&(this.callbacks.onSelect(this.hoveredElement),this.stop()))}handleKeyDown(e){e.key==="Escape"&&(this.stop(),this.callbacks.onCancel())}}function C(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var R=C();function ce(r){R=r}var O={exec:()=>null};function m(r,e=""){let t=typeof r=="string"?r:r.source,s={replace:(n,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(A.caret,"$1"),t=t.replace(n,o),s},getRegex:()=>new RegExp(t,e)};return s}var Te=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),A={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i")},Ee=/^(?:[ \t]*(?:\n|$))+/,Re=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Me=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ze=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,X=/(?:[*+-]|\d{1,9}[.)])/,he=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,pe=m(he).replace(/bull/g,X).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ie=m(he).replace(/bull/g,X).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),V=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Le=/^[^\n]+/,Y=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Be=m(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Y).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Pe=m(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,X).getRegex(),Z="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ee=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,De=m("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ee).replace("tag",Z).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),de=m(V).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex(),Oe=m(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",de).getRegex(),te={blockquote:Oe,code:Re,def:Be,fences:Me,heading:ze,hr:_,html:De,lheading:pe,list:Pe,newline:Ee,paragraph:de,table:O,text:Le},ue=m("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex(),_e={...te,lheading:Ie,table:ue,paragraph:m(V).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ue).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex()},Ne={...te,html:m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ee).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:O,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m(V).replace("hr",_).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},qe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,je=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ge=/^( {2,}|\\)\n(?!\s*$)/,He=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Q=/[\p{P}\p{S}]/u,se=/[\s\p{P}\p{S}]/u,fe=/[^\s\p{P}\p{S}]/u,Je=m(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,se).getRegex(),be=/(?!~)[\p{P}\p{S}]/u,Ze=/(?!~)[\s\p{P}\p{S}]/u,Qe=/(?:[^\s\p{P}\p{S}]|~)/u,Fe=m(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Te?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),xe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ke=m(xe,"u").replace(/punct/g,Q).getRegex(),We=m(xe,"u").replace(/punct/g,be).getRegex(),ke="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ge=m(ke,"gu").replace(/notPunctSpace/g,fe).replace(/punctSpace/g,se).replace(/punct/g,Q).getRegex(),Ue=m(ke,"gu").replace(/notPunctSpace/g,Qe).replace(/punctSpace/g,Ze).replace(/punct/g,be).getRegex(),Xe=m("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fe).replace(/punctSpace/g,se).replace(/punct/g,Q).getRegex(),Ve=m(/\\(punct)/,"gu").replace(/punct/g,Q).getRegex(),Ye=m(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),et=m(ee).replace("(?:-->|$)","-->").getRegex(),tt=m("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",et).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),F=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,st=m(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",F).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),me=m(/^!?\[(label)\]\[(ref)\]/).replace("label",F).replace("ref",Y).getRegex(),we=m(/^!?\[(ref)\](?:\[\])?/).replace("ref",Y).getRegex(),nt=m("reflink|nolink(?!\\()","g").replace("reflink",me).replace("nolink",we).getRegex(),ye=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ne={_backpedal:O,anyPunctuation:Ve,autolink:Ye,blockSkip:Fe,br:ge,code:je,del:O,emStrongLDelim:Ke,emStrongRDelimAst:Ge,emStrongRDelimUnd:Xe,escape:qe,link:st,nolink:we,punctuation:Je,reflink:me,reflinkSearch:nt,tag:tt,text:He,url:O},rt={...ne,link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",F).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F).getRegex()},re={...ne,emStrongRDelimAst:Ue,emStrongLDelim:We,url:m(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ye).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:m(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ye).getRegex()},it={...re,br:m(ge).replace("{2,}","*").getRegex(),text:m(re.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},K={normal:te,gfm:_e,pedantic:Ne},N={normal:ne,gfm:re,breaks:it,pedantic:rt},at={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Se=r=>at[r];function L(r,e){if(e){if(A.escapeTest.test(r))return r.replace(A.escapeReplace,Se)}else if(A.escapeTestNoEncode.test(r))return r.replace(A.escapeReplaceNoEncode,Se);return r}function ve(r){try{r=encodeURI(r).replace(A.percentDecode,"%")}catch{return null}return r}function $e(r,e){var a;let t=r.replace(A.findPipe,(o,i,c)=>{let l=!1,h=i;for(;--h>=0&&c[h]==="\\";)l=!l;return l?"|":" |"}),s=t.split(A.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!((a=s.at(-1))!=null&&a.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(A.slashPipe,"|");return s}function q(r,e,t){let s=r.length;if(s===0)return"";let n=0;for(;n<s&&r.charAt(s-n-1)===e;)n++;return r.slice(0,s-n)}function ot(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])t++;else if(r[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function Ce(r,e,t,s,n){let a=e.href,o=e.title||null,i=r[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:a,title:o,text:i,tokens:s.inlineTokens(i)};return s.state.inLink=!1,c}function lt(r,e,t){let s=r.match(t.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(a=>{let o=a.match(t.other.beginningSpace);if(o===null)return a;let[i]=o;return i.length>=n.length?a.slice(n.length):a}).join(`
`)}var W=class{constructor(r){b(this,"options");b(this,"rules");b(this,"lexer");this.options=r||R}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:q(t,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],s=lt(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=q(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:q(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=q(e[0],`
`).split(`
`),s="",n="",a=[];for(;t.length>0;){let o=!1,i=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))i.push(t[c]),o=!0;else if(!o)i.push(t[c]);else break;t=t.slice(c);let l=i.join(`
`),h=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${l}`:l,n=n?`${n}
${h}`:h;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,a,!0),this.lexer.state.top=d,t.length===0)break;let u=a.at(-1);if((u==null?void 0:u.type)==="code")break;if((u==null?void 0:u.type)==="blockquote"){let p=u,f=p.raw+`
`+t.join(`
`),g=this.blockquote(f);a[a.length-1]=g,s=s.substring(0,s.length-p.raw.length)+g.raw,n=n.substring(0,n.length-p.text.length)+g.text;break}else if((u==null?void 0:u.type)==="list"){let p=u,f=p.raw+`
`+t.join(`
`),g=this.list(f);a[a.length-1]=g,s=s.substring(0,s.length-u.raw.length)+g.raw,n=n.substring(0,n.length-p.raw.length)+g.raw,t=f.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:n}}}list(r){var t,s;let e=this.rules.block.list.exec(r);if(e){let n=e[1].trim(),a=n.length>1,o={type:"list",raw:"",ordered:a,start:a?+n.slice(0,-1):"",loose:!1,items:[]};n=a?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=a?n:"[*+-]");let i=this.rules.other.listItemRegex(n),c=!1;for(;r;){let h=!1,d="",u="";if(!(e=i.exec(r))||this.rules.block.hr.test(r))break;d=e[0],r=r.substring(d.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,x=>" ".repeat(3*x.length)),f=r.split(`
`,1)[0],g=!p.trim(),k=0;if(this.options.pedantic?(k=2,u=p.trimStart()):g?k=e[1].length+1:(k=e[2].search(this.rules.other.nonSpaceChar),k=k>4?1:k,u=p.slice(k),k+=e[1].length),g&&this.rules.other.blankLine.test(f)&&(d+=f+`
`,r=r.substring(f.length+1),h=!0),!h){let x=this.rules.other.nextBulletRegex(k),S=this.rules.other.hrRegex(k),v=this.rules.other.fencesBeginRegex(k),y=this.rules.other.headingBeginRegex(k),$=this.rules.other.htmlBeginRegex(k);for(;r;){let E=r.split(`
`,1)[0],T;if(f=E,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),T=f):T=f.replace(this.rules.other.tabCharGlobal,"    "),v.test(f)||y.test(f)||$.test(f)||x.test(f)||S.test(f))break;if(T.search(this.rules.other.nonSpaceChar)>=k||!f.trim())u+=`
`+T.slice(k);else{if(g||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||v.test(p)||y.test(p)||S.test(p))break;u+=`
`+f}!g&&!f.trim()&&(g=!0),d+=E+`
`,r=r.substring(E.length+1),p=T.slice(k)}}o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(c=!0)),o.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),o.raw+=d}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let h of o.items){if(this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]),h.task){if(h.text=h.text.replace(this.rules.other.listReplaceTask,""),((t=h.tokens[0])==null?void 0:t.type)==="text"||((s=h.tokens[0])==null?void 0:s.type)==="paragraph"){h.tokens[0].raw=h.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),h.tokens[0].text=h.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(h.raw);if(d){let u={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};h.checked=u.checked,o.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=u.raw+h.tokens[0].raw,h.tokens[0].text=u.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(u)):h.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):h.tokens.unshift(u)}}if(!o.loose){let d=h.tokens.filter(p=>p.type==="space"),u=d.length>0&&d.some(p=>this.rules.other.anyLine.test(p.raw));o.loose=u}}if(o.loose)for(let h of o.items){h.loose=!0;for(let d of h.tokens)d.type==="text"&&(d.type="paragraph")}return o}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:n}}}table(r){var o;let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=$e(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=(o=e[3])!=null&&o.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?a.align.push("right"):this.rules.other.tableAlignCenter.test(i)?a.align.push("center"):this.rules.other.tableAlignLeft.test(i)?a.align.push("left"):a.align.push(null);for(let i=0;i<t.length;i++)a.header.push({text:t[i],tokens:this.lexer.inline(t[i]),header:!0,align:a.align[i]});for(let i of n)a.rows.push($e(i,a.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:a.align[l]})));return a}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let a=q(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{let a=ot(e[2],"()");if(a===-2)return;if(a>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let s=e[2],n="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],n=a[3])}else n=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),Ce(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[s.toLowerCase()];if(!n){let a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return Ce(t,n,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(r);if(!(!s||s[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!t||this.rules.inline.punctuation.exec(t))){let n=[...s[0]].length-1,a,o,i=n,c=0,l=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*r.length+n);(s=l.exec(e))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(o=[...a].length,s[3]||s[4]){i+=o;continue}else if((s[5]||s[6])&&n%3&&!((n+o)%3)){c+=o;continue}if(i-=o,i>0)continue;o=Math.min(o,o+i+c);let h=[...s[0]][0].length,d=r.slice(0,n+s.index+h+o);if(Math.min(n,o)%2){let p=d.slice(1,-1);return{type:"em",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}let u=d.slice(2,-2);return{type:"strong",raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),n=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&n&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r){let e=this.rules.inline.del.exec(r);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(r){var t;let e;if(e=this.rules.inline.url.exec(r)){let s,n;if(e[2]==="@")s=e[0],n="mailto:"+s;else{let a;do a=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(a!==e[0]);s=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:s,href:n,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},z=class oe{constructor(e){b(this,"tokens");b(this,"options");b(this,"state");b(this,"inlineQueue");b(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||R,this.options.tokenizer=this.options.tokenizer||new W,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:A,block:K.normal,inline:N.normal};this.options.pedantic?(t.block=K.pedantic,t.inline=N.pedantic):this.options.gfm&&(t.block=K.gfm,this.options.breaks?t.inline=N.breaks:t.inline=N.gfm),this.tokenizer.rules=t}static get rules(){return{block:K,inline:N}}static lex(e,t){return new oe(t).lex(e)}static lexInline(e,t){return new oe(t).inlineTokens(e)}lex(e){e=e.replace(A.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){var n,a,o;for(this.options.pedantic&&(e=e.replace(A.tabCharGlobal,"    ").replace(A.spaceLine,""));e;){let i;if((a=(n=this.options.extensions)==null?void 0:n.block)!=null&&a.some(l=>(i=l.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let l=t.at(-1);i.raw.length===1&&l!==void 0?l.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.text,this.inlineQueue.at(-1).src=l.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let c=e;if((o=this.options.extensions)!=null&&o.startBlock){let l=1/0,h=e.slice(1),d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},h),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(c))){let l=t.at(-1);s&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(i),s=c.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let l=t.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+i.raw,l.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(i);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var c,l,h,d,u;let s=e,n=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)p.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)a=n[2]?n[2].length:0,s=s.slice(0,n.index+a)+"["+"a".repeat(n[0].length-a-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=((l=(c=this.options.hooks)==null?void 0:c.emStrongMask)==null?void 0:l.call({lexer:this},s))??s;let o=!1,i="";for(;e;){o||(i=""),o=!1;let p;if((d=(h=this.options.extensions)==null?void 0:h.inline)!=null&&d.some(g=>(p=g.call({lexer:this},e,t))?(e=e.substring(p.raw.length),t.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);let g=t.at(-1);p.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=p.raw,g.text+=p.text):t.push(p);continue}if(p=this.tokenizer.emStrong(e,s,i)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.del(e)){e=e.substring(p.raw.length),t.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),t.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),t.push(p);continue}let f=e;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0,k=e.slice(1),x;this.options.extensions.startInline.forEach(S=>{x=S.call({lexer:this},k),typeof x=="number"&&x>=0&&(g=Math.min(g,x))}),g<1/0&&g>=0&&(f=e.substring(0,g+1))}if(p=this.tokenizer.inlineText(f)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(i=p.raw.slice(-1)),o=!0;let g=t.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=p.raw,g.text+=p.text):t.push(p);continue}if(e){let g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return t}},G=class{constructor(r){b(this,"options");b(this,"parser");this.options=r||R}space(r){return""}code({text:r,lang:e,escaped:t}){var a;let s=(a=(e||"").match(A.notSpaceStart))==null?void 0:a[0],n=r.replace(A.endingNewline,"")+`
`;return s?'<pre><code class="language-'+L(s)+'">'+(t?n:L(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:L(n,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,s="";for(let o=0;o<r.items.length;o++){let i=r.items[o];s+=this.listitem(i)}let n=e?"ol":"ul",a=e&&t!==1?' start="'+t+'"':"";return"<"+n+a+`>
`+s+"</"+n+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let n=0;n<r.header.length;n++)t+=this.tablecell(r.header[n]);e+=this.tablerow({text:t});let s="";for(let n=0;n<r.rows.length;n++){let a=r.rows[n];t="";for(let o=0;o<a.length;o++)t+=this.tablecell(a[o]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${L(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let s=this.parser.parseInline(t),n=ve(r);if(n===null)return s;r=n;let a='<a href="'+r+'"';return e&&(a+=' title="'+L(e)+'"'),a+=">"+s+"</a>",a}image({href:r,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let n=ve(r);if(n===null)return L(t);r=n;let a=`<img src="${r}" alt="${t}"`;return e&&(a+=` title="${L(e)}"`),a+=">",a}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:L(r.text)}},ie=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},I=class le{constructor(e){b(this,"options");b(this,"renderer");b(this,"textRenderer");this.options=e||R,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ie}static parse(e,t){return new le(t).parse(e)}static parseInline(e,t){return new le(t).parseInline(e)}parse(e){var s,n;let t="";for(let a=0;a<e.length;a++){let o=e[a];if((n=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&n[o.type]){let c=o,l=this.options.extensions.renderers[c.type].call({parser:this},c);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){t+=l||"";continue}}let i=o;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let c='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}parseInline(e,t=this.renderer){var n,a;let s="";for(let o=0;o<e.length;o++){let i=e[o];if((a=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&a[i.type]){let l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=l||"";continue}}let c=i;switch(c.type){case"escape":{s+=t.text(c);break}case"html":{s+=t.html(c);break}case"link":{s+=t.link(c);break}case"image":{s+=t.image(c);break}case"checkbox":{s+=t.checkbox(c);break}case"strong":{s+=t.strong(c);break}case"em":{s+=t.em(c);break}case"codespan":{s+=t.codespan(c);break}case"br":{s+=t.br(c);break}case"del":{s+=t.del(c);break}case"text":{s+=t.text(c);break}default:{let l='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},j=(U=class{constructor(r){b(this,"options");b(this,"block");this.options=r||R}preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?z.lex:z.lexInline}provideParser(){return this.block?I.parse:I.parseInline}},b(U,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),b(U,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),U),ct=class{constructor(...r){b(this,"defaults",C());b(this,"options",this.setOptions);b(this,"parse",this.parseMarkdown(!0));b(this,"parseInline",this.parseMarkdown(!1));b(this,"Parser",I);b(this,"Renderer",G);b(this,"TextRenderer",ie);b(this,"Lexer",z);b(this,"Tokenizer",W);b(this,"Hooks",j);this.use(...r)}walkTokens(r,e){var s,n;let t=[];for(let a of r)switch(t=t.concat(e.call(this,a)),a.type){case"table":{let o=a;for(let i of o.header)t=t.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let c of i)t=t.concat(this.walkTokens(c.tokens,e));break}case"list":{let o=a;t=t.concat(this.walkTokens(o.items,e));break}default:{let o=a;(n=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&n[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let c=o[i].flat(1/0);t=t.concat(this.walkTokens(c,e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let a=e.renderers[n.name];a?e.renderers[n.name]=function(...o){let i=n.renderer.apply(this,o);return i===!1&&(i=a.apply(this,o)),i}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[n.level];a?a.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),t.renderer){let n=this.defaults.renderer||new G(this.defaults);for(let a in t.renderer){if(!(a in n))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,i=t.renderer[o],c=n[o];n[o]=(...l)=>{let h=i.apply(n,l);return h===!1&&(h=c.apply(n,l)),h||""}}s.renderer=n}if(t.tokenizer){let n=this.defaults.tokenizer||new W(this.defaults);for(let a in t.tokenizer){if(!(a in n))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,i=t.tokenizer[o],c=n[o];n[o]=(...l)=>{let h=i.apply(n,l);return h===!1&&(h=c.apply(n,l)),h}}s.tokenizer=n}if(t.hooks){let n=this.defaults.hooks||new j;for(let a in t.hooks){if(!(a in n))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,i=t.hooks[o],c=n[o];j.passThroughHooks.has(a)?n[o]=l=>{if(this.defaults.async&&j.passThroughHooksRespectAsync.has(a))return(async()=>{let d=await i.call(n,l);return c.call(n,d)})();let h=i.call(n,l);return c.call(n,h)}:n[o]=(...l)=>{if(this.defaults.async)return(async()=>{let d=await i.apply(n,l);return d===!1&&(d=await c.apply(n,l)),d})();let h=i.apply(n,l);return h===!1&&(h=c.apply(n,l)),h}}s.hooks=n}if(t.walkTokens){let n=this.defaults.walkTokens,a=t.walkTokens;s.walkTokens=function(o){let i=[];return i.push(a.call(this,o)),n&&(i=i.concat(n.call(this,o))),i}}this.defaults={...this.defaults,...s}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return z.lex(r,e??this.defaults)}parser(r,e){return I.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let s={...t},n={...this.defaults,...s},a=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=r),n.async)return(async()=>{let o=n.hooks?await n.hooks.preprocess(e):e,i=await(n.hooks?await n.hooks.provideLexer():r?z.lex:z.lexInline)(o,n),c=n.hooks?await n.hooks.processAllTokens(i):i;n.walkTokens&&await Promise.all(this.walkTokens(c,n.walkTokens));let l=await(n.hooks?await n.hooks.provideParser():r?I.parse:I.parseInline)(c,n);return n.hooks?await n.hooks.postprocess(l):l})().catch(a);try{n.hooks&&(e=n.hooks.preprocess(e));let o=(n.hooks?n.hooks.provideLexer():r?z.lex:z.lexInline)(e,n);n.hooks&&(o=n.hooks.processAllTokens(o)),n.walkTokens&&this.walkTokens(o,n.walkTokens);let i=(n.hooks?n.hooks.provideParser():r?I.parse:I.parseInline)(o,n);return n.hooks&&(i=n.hooks.postprocess(i)),i}catch(o){return a(o)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let s="<p>An error occurred:</p><pre>"+L(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},D=new ct;function w(r,e){return D.parse(r,e)}w.options=w.setOptions=function(r){return D.setOptions(r),w.defaults=D.defaults,ce(w.defaults),w},w.getDefaults=C,w.defaults=R,w.use=function(...r){return D.use(...r),w.defaults=D.defaults,ce(w.defaults),w},w.walkTokens=function(r,e){return D.walkTokens(r,e)},w.parseInline=D.parseInline,w.Parser=I,w.parser=I.parse,w.Renderer=G,w.TextRenderer=ie,w.Lexer=z,w.lexer=z.lex,w.Tokenizer=W,w.Hooks=j,w.parse=w,w.options,w.setOptions,w.use,w.walkTokens,w.parseInline,I.parse,z.lex;var B=(r=>(r.CSS="css",r.NORMAL="normal",r))(B||{});class ht{constructor(e){b(this,"container");b(this,"shadow");b(this,"callbacks");b(this,"isOpen",!1);b(this,"isRecording",!1);b(this,"recognition",null);b(this,"currentMode",B.CSS);this.callbacks=e,this.container=document.createElement("div"),this.container.id="plasticity-root",this.shadow=this.container.attachShadow({mode:"open"}),document.body.appendChild(this.container),this.render()}render(){const e=`
      :host {
        all: initial;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "PingFang SC", sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      /* 苹果风悬浮按钮 - 极光渐变 */
      .affix-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        border-radius: 50%;
        box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4), 0 4px 12px rgba(168, 85, 247, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000000;
        transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
      }
      .affix-btn:hover {
        transform: scale(1.1) translateY(-3px);
        box-shadow: 0 15px 50px rgba(99, 102, 241, 0.5), 0 8px 20px rgba(168, 85, 247, 0.4);
        background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
      }
      .affix-btn.open {
        transform: scale(0.9) rotate(90deg);
        background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
      }

      /* 聊天窗口 - 极光渐变玻璃拟态 */
      .chat-window {
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 360px;
        max-height: 85vh;
        min-height: 550px;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.85) 0%, rgba(168, 85, 247, 0.85) 50%, rgba(236, 72, 153, 0.85) 100%);
        backdrop-filter: blur(40px) saturate(200%);
        -webkit-backdrop-filter: blur(40px) saturate(200%);
        border-radius: 24px;
        box-shadow: 0 25px 80px rgba(139, 92, 246, 0.35), 0 8px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 1000000;
        transform-origin: bottom right;
        transform: scale(0.92) translateY(30px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .chat-window.open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: auto;
      }

      /* Header - 极光主题 */
      .header {
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        flex-shrink: 0;
        background: rgba(255, 255, 255, 0.1);
      }
      .header-title {
        font-weight: 800;
        font-size: 19px;
        background: linear-gradient(135deg, #fff 0%, #f0e6ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.02em;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .header-info {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .status-pill {
        background: rgba(255, 255, 255, 0.25);
        color: #fff;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.02em;
        display: flex;
        align-items: center;
        gap: 4px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .status-dot {
        width: 6px;
        height: 6px;
        background: #4ade80;
        border-radius: 50%;
        box-shadow: 0 0 8px #4ade80;
      }

      /* 消息区域 - 留白感强 */
      .messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-height: 0;
      }
      .messages::-webkit-scrollbar {
        width: 4px;
      }
      .messages::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.15);
        border-radius: 4px;
      }
      .messages::-webkit-scrollbar-track {
        background: transparent;
      }
      .messages::-webkit-scrollbar-horizontal {
        display: none;
      }
      .messages {
        overflow-x: hidden;
      }

      .message {
        max-width: 92%;
        padding: 14px 18px;
        font-size: 15px;
        line-height: 1.5;
        position: relative;
        animation: appleAppear 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      @keyframes appleAppear {
        from { opacity: 0; transform: translateY(12px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .message.user {
        align-self: flex-end;
        background: linear-gradient(135deg, #fff 0%, #f0f4ff 100%);
        color: #4f46e5;
        border-radius: 22px 22px 6px 22px;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      .message.ai {
        align-self: flex-start;
        background: rgba(255, 255, 255, 0.95);
        color: #1e1b4b;
        border-radius: 22px 22px 22px 6px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(20px);
      }

      /* 输入区域与工具栏 - 极光主题 */
      .footer-area {
        padding: 14px 18px 18px;
        background: rgba(255, 255, 255, 0.15);
        border-top: 1px solid rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(30px);
        flex-shrink: 0;
      }

      .toolbar {
        display: flex;
        gap: 6px;
        margin-bottom: 12px;
        overflow-x: auto;
        padding-bottom: 2px;
      }
      .toolbar::-webkit-scrollbar { display: none; }

      .action-btn {
        height: 32px;
        padding: 0 12px;
        border-radius: 18px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        white-space: nowrap;
        background: rgba(255, 255, 255, 0.9);
        color: #6366f1;
        box-shadow: 0 2px 10px rgba(99, 102, 241, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.25);
        background: rgba(255, 255, 255, 1);
      }
      .action-btn:active { transform: scale(0.95); }

      .btn-inspect.active {
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        color: #fff;
        border-color: transparent;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
      }
      .btn-undo { color: #ec4899; }
      .btn-undo:hover { background: rgba(255, 255, 255, 1); box-shadow: 0 4px 20px rgba(236, 72, 153, 0.25); }
      .btn-confirm { color: #8b5cf6; }
      .btn-confirm:hover { background: rgba(255, 255, 255, 1); box-shadow: 0 4px 20px rgba(139, 92, 246, 0.25); }

      .selection-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(168, 85, 247, 0.9) 100%);
        border-radius: 12px;
        font-size: 11px;
        color: #fff;
        margin-right: 8px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        font-weight: 600;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
        flex-shrink: 0;
      }
      .selection-pill b {
        color: #fff;
        font-weight: 700;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .input-wrapper {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 24px;
        padding: 4px 4px 4px 14px;
        display: flex;
        align-items: flex-end;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: all 0.3s;
      }
      .input-wrapper:focus-within {
        border-color: rgba(99, 102, 241, 0.5);
        box-shadow: 0 4px 25px rgba(99, 102, 241, 0.25), 0 0 0 4px rgba(99, 102, 241, 0.1);
      }
      textarea {
        flex: 1;
        height: 26px;
        border: none;
        background: transparent;
        resize: none;
        font-family: inherit;
        font-size: 14px;
        color: #1e1b4b;
        outline: none;
        padding: 10px 0;
        line-height: 1.5;
      }
      textarea::placeholder {
        color: #94a3b8;
      }

      .input-actions {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        padding-bottom: 4px;
      }

      /* 语音按钮 - 极光主题 */
      .voice-btn {
        width: 32px;
        height: 32px;
        background: transparent;
        color: rgba(99, 102, 241, 0.6);
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        padding: 0;
      }
      .voice-btn:hover {
        background: rgba(99, 102, 241, 0.1);
        color: #6366f1;
      }
      .voice-btn.recording {
        background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
        color: #fff;
        animation: pulse-recording 1.5s ease-in-out infinite;
        box-shadow: 0 4px 20px rgba(236, 72, 153, 0.4);
      }
      @keyframes pulse-recording {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 0 10px rgba(236, 72, 153, 0);
        }
      }

      .send-circle {
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        color: white;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
      }
      .send-circle:hover {
        transform: scale(1.08);
        box-shadow: 0 6px 30px rgba(99, 102, 241, 0.5);
      }
      .send-circle:active { transform: scale(0.95); }
      .send-circle:disabled {
        background: linear-gradient(135deg, #c7d2fe 0%, #ddd6fe 100%);
        cursor: not-allowed;
        box-shadow: none;
      }

      /* 快捷提示词 - 极光主题 */
      .quick-prompts {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      .prompt-chip {
        padding: 6px 12px;
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.35);
        border-radius: 18px;
        font-size: 11px;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
        font-weight: 500;
        backdrop-filter: blur(10px);
      }
      .prompt-chip:hover {
        background: rgba(255, 255, 255, 0.4);
        border-color: rgba(255, 255, 255, 0.6);
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
      }

      /* Markdown 样式支持 - 极光主题 */
      .message pre {
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.06) 100%);
        padding: 14px;
        border-radius: 12px;
        overflow-x: auto;
        margin: 12px 0;
        border: 1px solid rgba(99, 102, 241, 0.15);
        font-size: 13px;
      }
      .message pre code {
        font-family: "SF Mono", "Monaco", "Menlo", "Consolas", monospace;
        color: #1e1b4b;
        background: transparent;
        padding: 0;
        line-height: 1.5;
      }
      .message code {
        font-family: "SF Mono", "Monaco", "Menlo", monospace;
        font-size: 13px;
        color: #6366f1;
        background: rgba(99, 102, 241, 0.1);
        padding: 2px 6px;
        border-radius: 6px;
        font-weight: 500;
      }
      .message pre code {
        color: #1e1b4b;
        background: transparent;
      }
      .message strong { font-weight: 700; color: #1e1b4b; }
      .message ul, .message ol { padding-left: 18px; margin: 10px 0; }
      .message li { margin: 6px 0; }
      .message p { margin: 0 0 8px 0; }
      .message p:last-child { margin-bottom: 0; }

      .close-chat {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        margin-left: 8px;
        transition: color 0.2s;
        padding: 4px;
        border-radius: 4px;
      }
      .close-chat:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
      }

      /* 模式切换开关 */
      .mode-switch {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .mode-label {
        font-size: 10px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        padding: 4px 8px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .mode-label.active {
        background: linear-gradient(135deg, #fff 0%, #f0f4ff 100%);
        color: #6366f1;
        font-weight: 700;
        box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
      }
      .mode-label:hover:not(.active) {
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.1);
      }

      .hidden { display: none !important; }

      /* 极简打字机 - 极光主题 */
      .typing {
        display: flex;
        gap: 4px;
        padding: 14px 16px;
        align-items: center;
      }
      .t-dot {
        width: 6px;
        height: 6px;
        background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
        border-radius: 50%;
        animation: applePulse 1.2s infinite ease-in-out;
        box-shadow: 0 0 8px rgba(168, 85, 247, 0.5);
      }
      .t-dot:nth-child(1) { animation-delay: 0s; }
      .t-dot:nth-child(2) { animation-delay: 0.15s; }
      .t-dot:nth-child(3) { animation-delay: 0.3s; }
      @keyframes applePulse {
        0%, 100% {
          opacity: 0.5;
          transform: scale(0.8);
        }
        50% {
          opacity: 1;
          transform: scale(1.3);
        }
      }
    `;this.shadow.innerHTML=`
      <style>${e}</style>

      <!-- 入口按钮 -->
      <div class="affix-btn" id="toggle-btn">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </div>

      <!-- 主窗口 -->
      <div class="chat-window" id="chat-window">
        <div class="header">
          <span class="header-title">Plasticity</span>
          <div class="header-info">
            <div class="mode-switch" id="mode-switch">
              <span class="mode-label active" data-mode="css">CSS</span>
              <span class="mode-label" data-mode="normal">AI</span>
            </div>
            <div class="status-pill" style="margin-left: 8px;">
              <span class="status-dot"></span>
              <span id="status-text">Online</span>
            </div>
            <div class="close-chat" id="close-chat">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="messages" id="messages-container">
          <div class="message ai">
            你好。我是 Plasticity 助手。<br>
            我们可以通过修改样式来优化你的页面。点击<b>选中元素</b>开始。
          </div>
        </div>

        <div class="footer-area">
          <div class="toolbar" id="toolbar">
            <button class="action-btn btn-inspect" id="inspect-btn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              选中元素
            </button>
            <button class="action-btn btn-undo hidden" id="undo-btn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              撤销
            </button>
            <button class="action-btn btn-confirm hidden" id="confirm-btn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              导出
            </button>
          </div>

          <div class="input-wrapper">
            <textarea placeholder="输入指令，或点击语音按钮说话" rows="1"></textarea>
            <div class="input-actions">
              <button class="voice-btn" id="voice-btn" title="语音输入">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </button>
              <button class="send-circle" id="send-btn" disabled>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.shadow.getElementById("toggle-btn"),t=this.shadow.getElementById("close-chat"),s=this.shadow.getElementById("chat-window"),n=this.shadow.getElementById("inspect-btn"),a=this.shadow.getElementById("send-btn"),o=this.shadow.getElementById("voice-btn"),i=this.shadow.querySelector("textarea"),c=this.shadow.getElementById("undo-btn"),l=this.shadow.getElementById("confirm-btn"),h=this.shadow.getElementById("quick-prompts"),d=this.shadow.getElementById("mode-switch");e==null||e.addEventListener("click",()=>{this.isOpen=!this.isOpen,s==null||s.classList.toggle("open",this.isOpen),e.classList.toggle("open",this.isOpen)}),t==null||t.addEventListener("click",()=>{this.isOpen=!1,s==null||s.classList.remove("open"),e==null||e.classList.remove("open")}),n==null||n.addEventListener("click",()=>{n.classList.add("active"),this.callbacks.onStartInspect()}),a==null||a.addEventListener("click",()=>this.handleSend()),d==null||d.addEventListener("click",u=>{const p=u.target;if(p.classList.contains("mode-label")){const f=p.getAttribute("data-mode");this.switchMode(f==="css"?B.CSS:B.NORMAL)}}),h==null||h.addEventListener("click",u=>{const p=u.target;if(p.classList.contains("prompt-chip")){const f=p.getAttribute("data-prompt");f&&i&&(i.value=f,this.updateSendButton(),i.focus())}}),i==null||i.addEventListener("input",()=>{this.updateSendButton()}),i==null||i.addEventListener("keydown",u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),this.handleSend())}),o==null||o.addEventListener("click",()=>this.toggleVoiceRecognition()),c==null||c.addEventListener("click",()=>this.callbacks.onUndo()),l==null||l.addEventListener("click",()=>this.callbacks.onConfirm()),this.initVoiceRecognition()}updateSendButton(){const e=this.shadow.querySelector("textarea"),t=this.shadow.getElementById("send-btn");t&&e&&(t.disabled=!e.value.trim())}initVoiceRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){console.log("浏览器不支持语音识别");const t=this.shadow.getElementById("voice-btn");t&&(t.style.display="none");return}this.recognition=new e,this.recognition.lang="zh-CN",this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.onstart=()=>{this.isRecording=!0;const t=this.shadow.getElementById("voice-btn");t&&(t.classList.add("recording"),t.innerHTML=`
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        `),this.setStatus("正在听写...")},this.recognition.onresult=t=>{const s=t.results[0][0].transcript,n=this.shadow.querySelector("textarea");n&&(n.value+=s,this.updateSendButton())},this.recognition.onerror=t=>{console.error("语音识别错误:",t.error),this.setStatus("识别失败")},this.recognition.onend=()=>{this.isRecording=!1;const t=this.shadow.getElementById("voice-btn");t&&(t.classList.remove("recording"),t.innerHTML=`
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        `),this.setStatus("Online")}}switchMode(e){this.currentMode=e,this.shadow.querySelectorAll(".mode-label").forEach(o=>{o.getAttribute("data-mode")===(e===B.CSS?"css":"normal")?o.classList.add("active"):o.classList.remove("active")});const s=this.shadow.getElementById("toolbar");s==null||s.classList.remove("hidden");const n=this.shadow.getElementById("undo-btn"),a=this.shadow.getElementById("confirm-btn");e===B.CSS?(n==null||n.classList.remove("hidden"),a==null||a.classList.remove("hidden"),this.addMessage("ai","已切换到 **CSS 模式**。请先选中元素，然后输入修改需求，效果即时生效。")):(n==null||n.classList.add("hidden"),a==null||a.classList.add("hidden"),this.addMessage("ai","已切换到 **AI 模式**。可以直接输入问题，我会提供 JavaScript 和 CSS 代码思路。")),this.callbacks.onToggleMode()}getCurrentMode(){return this.currentMode}toggleVoiceRecognition(){this.recognition&&(this.isRecording?this.recognition.stop():this.recognition.start())}handleSend(){const e=this.shadow.querySelector("textarea"),t=e==null?void 0:e.value.trim();t&&(this.addMessage("user",t),e.value="",e.style.height="auto",this.updateSendButton(),this.callbacks.onSubmitRequest(t))}createAiMessage(){const e=this.shadow.getElementById("messages-container");if(!e)return null;const t=e.querySelector(".typing-wrapper");t&&t.remove();const s=document.createElement("div");return s.className="message ai",e.appendChild(s),e.scrollTop=e.scrollHeight,s}updateAiMessage(e,t){if(!e)return;const s=w.parse(t);e.innerHTML=typeof s=="string"?s:t;const n=this.shadow.getElementById("messages-container");n&&(n.scrollTop=n.scrollHeight)}addMessage(e,t){const s=this.shadow.getElementById("messages-container");if(!s)return;const n=s.querySelector(".typing-wrapper");n&&n.remove();const a=document.createElement("div");if(a.className=`message ${e}`,e==="ai"){const o=w.parse(t);a.innerHTML=typeof o=="string"?o:t}else a.textContent=t;s.appendChild(a),s.scrollTop=s.scrollHeight}showTyping(){const e=this.shadow.getElementById("messages-container");if(!e)return;const t=document.createElement("div");t.className="message ai typing-wrapper",t.innerHTML=`
      <div class="typing">
        <div class="t-dot"></div>
        <div class="t-dot"></div>
        <div class="t-dot"></div>
      </div>
    `,e.appendChild(t),e.scrollTop=e.scrollHeight}setSelection(e){const t=this.shadow.getElementById("inspect-btn");t==null||t.classList.remove("active");const s=e.classList.length>0?`.${e.classList[0]}`:"",n=e.tagName.toLowerCase()+(e.id?"#"+e.id:"")+s;this.addMessage("ai",`已选择 <b>${n}</b>。你可以输入修改建议了。`)}setStatus(e){const t=this.shadow.getElementById("status-text");t&&(t.textContent=e)}showActions(e){const t=this.shadow.getElementById("undo-btn"),s=this.shadow.getElementById("confirm-btn");e?(t==null||t.classList.remove("hidden"),s==null||s.classList.remove("hidden")):(t==null||t.classList.add("hidden"),s==null||s.classList.add("hidden"))}showQuickPrompts(e){const t=this.shadow.getElementById("quick-prompts");t&&t.classList.toggle("hidden",!e)}}class Ae{constructor(e){b(this,"inspector");b(this,"ui");b(this,"selectedElement",null);b(this,"operationStack",[]);b(this,"options");b(this,"chatMode",B.CSS);this.options=e,this.inspector=new M({onSelect:t=>this.handleElementSelect(t),onCancel:()=>{this.ui.setStatus("已连接"),this.ui.showActions(this.operationStack.length>0)}}),this.ui=new ht({onStartInspect:()=>{this.ui.setStatus("选择模式"),this.inspector.start()},onSubmitRequest:t=>this.handleRequest(t),onUndo:()=>this.handleUndo(),onConfirm:()=>this.handleConfirm(),onToggleMode:()=>{this.chatMode=this.ui.getCurrentMode()}})}getSelector(e){if(e.id&&!e.id.startsWith("plasticity-"))return`#${e.id}`;const t=[];let s=e,n=0;for(;s&&s.nodeType===Node.ELEMENT_NODE&&n<5;){let a=s.tagName.toLowerCase();const o=Array.from(s.classList).filter(l=>!l.includes("-")&&!/\d/.test(l))[0];o&&(a+=`.${o}`);let i=1,c=s.previousElementSibling;for(;c;)c.tagName===s.tagName&&i++,c=c.previousElementSibling;if(a+=`:nth-of-type(${i})`,t.unshift(a),s=s.parentElement,n++,(s==null?void 0:s.tagName)==="HTML"||!s)break}return t.join(" > ")}async callNormalChatStream(e){const{provider:t,apiKey:s,baseUrl:n,appId:a,model:o,accessToken:i,app:c}=this.options;let l=e;this.selectedElement&&(l=`选中元素: ${this.getSelector(this.selectedElement)}
用户需求: ${e}`),t==="netease-int"?await this.callNeteaseIntChatStream(l,i,c,o):t==="netease"?await this.callNeteaseChatStream(l,i):t==="deepseek"?await this.callDeepSeekChatStream(l,s,o):await this.callDifyChatStream(l,s,n,a)}async callNeteaseIntAgentStream(e,t,s,n,a){var i,c,l,h;const o=`Target: ${t}
Action: ${e}

简要说明思路（1-2句），然后返回 CSS 代码，使用 CSS 代码块格式包裹。不要冗长的解释。`;try{const d=this.ui.createAiMessage();if(!d)return;const p=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",f=await fetch(p,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:"你是一个专业的 CSS 样式助手。根据用户选中的元素和需求，提供专业的 CSS 代码和实现思路。"},{role:"user",content:o}],model:"gemini-3-flash",max_tokens:1e3,stream:!0})});if(!f.ok){const y=await f.text();this.ui.updateAiMessage(d,`❌ **请求失败 (${f.status})**
${y}`);return}const g=(i=f.body)==null?void 0:i.getReader();if(!g){this.ui.updateAiMessage(d,"❌ **无法读取响应流**");return}const k=new TextDecoder;let x="";for(;;){const{done:y,value:$}=await g.read();if(y)break;const T=k.decode($,{stream:!0}).split(`
`);for(const P of T)if(P.startsWith("data: ")){const H=P.slice(6);if(H==="[DONE]")break;try{const J=(h=(l=(c=JSON.parse(H).choices)==null?void 0:c[0])==null?void 0:l.delta)==null?void 0:h.content;J&&(x+=J,this.ui.updateAiMessage(d,x))}catch{}}}const S=x.match(/```(?:css)?([\s\S]*?)```/i),v=S?S[1].trim():x.includes("{")?x.trim():"";if(v){const y=document.createElement("style");y.textContent=v,document.head.appendChild(y),this.operationStack.push({id:Math.random().toString(36).substring(7),type:"style",element:y,description:e,stableSelector:t}),this.ui.showActions(!0)}}catch(d){console.error("Netease Int Agent Stream Error:",d),this.ui.addMessage("ai",`❌ **请求出错**
${d.message}`)}}async callNeteaseAgentStream(e,t,s,n,a){var i,c,l,h;const o=`Target: ${t}
Action: ${e}

简要说明思路（1-2句），然后返回 CSS 代码，使用 CSS 代码块格式包裹。不要冗长的解释。`;try{const d=this.ui.createAiMessage();if(!d)return;const p=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",f=await fetch(p,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({model:a||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 CSS 样式助手。根据用户选中的元素和需求，提供专业的 CSS 代码和实现思路。"},{role:"user",content:o}],max_tokens:1e3,stream:!0})});if(!f.ok){const y=await f.text();this.ui.updateAiMessage(d,`❌ **请求失败 (${f.status})**
${y}`);return}const g=(i=f.body)==null?void 0:i.getReader();if(!g){this.ui.updateAiMessage(d,"❌ **无法读取响应流**");return}const k=new TextDecoder;let x="";for(;;){const{done:y,value:$}=await g.read();if(y)break;const T=k.decode($,{stream:!0}).split(`
`);for(const P of T)if(P.startsWith("data: ")){const H=P.slice(6);if(H==="[DONE]")break;try{const J=(h=(l=(c=JSON.parse(H).choices)==null?void 0:c[0])==null?void 0:l.delta)==null?void 0:h.content;J&&(x+=J,this.ui.updateAiMessage(d,x))}catch{}}}const S=x.match(/```(?:css)?([\s\S]*?)```/i),v=S?S[1].trim():x.includes("{")?x.trim():"";if(v){const y=document.createElement("style");y.textContent=v,document.head.appendChild(y),this.operationStack.push({id:Math.random().toString(36).substring(7),type:"style",element:y,description:e,stableSelector:t}),this.ui.showActions(!0)}}catch(d){console.error("Netease Agent Stream Error:",d),this.ui.addMessage("ai",`❌ **请求出错**
${d.message}`)}}async callDeepSeekAgentStream(e,t,s,n){var o,i,c,l;const a=`Target: ${t}
Action: ${e}

简要说明思路（1-2句），然后返回 CSS 代码，使用 CSS 代码块格式包裹。不要冗长的解释。`;try{const h=this.ui.createAiMessage();if(!h)return;const d=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({model:n||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 CSS 样式助手。根据用户选中的元素和需求，提供专业的 CSS 代码和实现思路。"},{role:"user",content:a}],temperature:.7,stream:!0})});if(!d.ok){const x=await d.text();this.ui.updateAiMessage(h,`❌ **请求失败 (${d.status})**
${x}`);return}const u=(o=d.body)==null?void 0:o.getReader();if(!u){this.ui.updateAiMessage(h,"❌ **无法读取响应流**");return}const p=new TextDecoder;let f="";for(;;){const{done:x,value:S}=await u.read();if(x)break;const y=p.decode(S,{stream:!0}).split(`
`);for(const $ of y)if($.startsWith("data: ")){const E=$.slice(6);if(E==="[DONE]")break;try{const P=(l=(c=(i=JSON.parse(E).choices)==null?void 0:i[0])==null?void 0:c.delta)==null?void 0:l.content;P&&(f+=P,this.ui.updateAiMessage(h,f))}catch{}}}const g=f.match(/```(?:css)?([\s\S]*?)```/i),k=g?g[1].trim():f.includes("{")?f.trim():"";if(k){const x=document.createElement("style");x.textContent=k,document.head.appendChild(x),this.operationStack.push({id:Math.random().toString(36).substring(7),type:"style",element:x,description:e,stableSelector:t}),this.ui.showActions(!0)}}catch(h){console.error("DeepSeek Agent Stream Error:",h),this.ui.addMessage("ai",`❌ **请求出错**
${h.message}`)}}async _callDeepSeek(e,t,s,n){var o,i,c;const a=`Target: ${t}
Action: ${e}

简要说明思路（1-2句），然后返回 CSS 代码，使用 CSS 代码块格式包裹。不要冗长的解释。`;try{const l=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({model:n||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 CSS 样式助手。根据用户选中的元素和需求，提供专业的 CSS 代码和实现思路。"},{role:"user",content:a}],temperature:.7})});if(!l.ok){const d=await l.text();return this.ui.addMessage("ai",`❌ **请求失败 (${l.status})**
${d}`),""}return((c=(i=(o=(await l.json()).choices)==null?void 0:o[0])==null?void 0:i.message)==null?void 0:c.content)||""}catch(l){return console.error("DeepSeek API Error:",l),this.ui.addMessage("ai",`❌ **请求出错**
${l.message}`),""}}async callNeteaseIntChatStream(e,t,s,n){var a,o,i,c;try{const l=this.ui.createAiMessage();if(!l)return;const d=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",u=await fetch(d,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:"你是一个专业的 AI 助手。根据用户选中的元素和需求，提供专业的代码思路和实现方案。可以提供 JavaScript、CSS 代码。"},{role:"user",content:e}],model:"gemini-3-flash",max_tokens:1e3,stream:!0})});if(!u.ok){const k=await u.text();this.ui.updateAiMessage(l,`❌ **请求失败 (${u.status})**
${k}`);return}const p=(a=u.body)==null?void 0:a.getReader();if(!p){this.ui.updateAiMessage(l,"❌ **无法读取响应流**");return}const f=new TextDecoder;let g="";for(;;){const{done:k,value:x}=await p.read();if(k)break;const v=f.decode(x,{stream:!0}).split(`
`);for(const y of v)if(y.startsWith("data: ")){const $=y.slice(6);if($==="[DONE]")break;try{const T=(c=(i=(o=JSON.parse($).choices)==null?void 0:o[0])==null?void 0:i.delta)==null?void 0:c.content;T&&(g+=T,this.ui.updateAiMessage(l,g))}catch{}}}}catch(l){console.error("Netease Int Chat Stream Error:",l),this.ui.addMessage("ai",`❌ **请求出错**
${l.message}`)}}async _callNeteaseIntChat(e,t,s,n){var a,o,i;try{const l=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",h=await fetch(l,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:"你是一个专业的 AI 助手。根据用户选中的元素和需求，提供专业的代码思路和实现方案。可以提供 JavaScript、CSS 代码。"},{role:"user",content:e}],model:"gemini-3-flash",max_tokens:1e3,stream:!1})});if(!h.ok){const u=await h.text();return this.ui.addMessage("ai",`❌ **请求失败 (${h.status})**
${u}`),""}return((i=(o=(a=(await h.json()).choices)==null?void 0:a[0])==null?void 0:o.message)==null?void 0:i.content)||""}catch(c){return console.error("Netease Int Chat Error:",c),this.ui.addMessage("ai",`❌ **请求出错**
${c.message}`),""}}async callNeteaseChatStream(e,t){var s,n,a,o;try{const i=this.ui.createAiMessage();if(!i)return;const l=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",h=await fetch(l,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({model:"gemini-3-flash",messages:[{role:"system",content:"你是一个专业的 AI 助手。根据用户选中的元素和需求，提供专业的代码思路和实现方案。可以提供 JavaScript、CSS 代码。"},{role:"user",content:e}],max_tokens:1e3,stream:!0})});if(!h.ok){const f=await h.text();this.ui.updateAiMessage(i,`❌ **请求失败 (${h.status})**
${f}`);return}const d=(s=h.body)==null?void 0:s.getReader();if(!d){this.ui.updateAiMessage(i,"❌ **无法读取响应流**");return}const u=new TextDecoder;let p="";for(;;){const{done:f,value:g}=await d.read();if(f)break;const x=u.decode(g,{stream:!0}).split(`
`);for(const S of x)if(S.startsWith("data: ")){const v=S.slice(6);if(v==="[DONE]")break;try{const $=(o=(a=(n=JSON.parse(v).choices)==null?void 0:n[0])==null?void 0:a.delta)==null?void 0:o.content;$&&(p+=$,this.ui.updateAiMessage(i,p))}catch{}}}}catch(i){console.error("Netease Chat Stream Error:",i),this.ui.addMessage("ai",`❌ **请求出错**
${i.message}`)}}async _callNeteaseChat(e,t,s,n){var a,o,i;try{const l=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",h=await fetch(l,{method:"POST",headers:{"X-Access-Token":t,"X-AIGW-APP":s,"Content-Type":"application/json"},body:JSON.stringify({model:n||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 AI 助手。根据用户选中的元素和需求，提供专业的代码思路和实现方案。可以提供 JavaScript、CSS 代码。"},{role:"user",content:e}],max_tokens:1e3,stream:!1})});if(!h.ok){const u=await h.text();return this.ui.addMessage("ai",`❌ **请求失败 (${h.status})**
${u}`),""}return((i=(o=(a=(await h.json()).choices)==null?void 0:a[0])==null?void 0:o.message)==null?void 0:i.content)||""}catch(c){return console.error("Netease Chat Error:",c),this.ui.addMessage("ai",`❌ **请求出错**
${c.message}`),""}}async callDeepSeekChatStream(e,t,s){var n,a,o,i;try{const c=this.ui.createAiMessage();if(!c)return;const l=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({model:s||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 AI 助手。根据用户选中的元素和需求，提供专业的代码思路和实现方案。可以提供 JavaScript、CSS 代码。"},{role:"user",content:e}],temperature:.7,stream:!0})});if(!l.ok){const p=await l.text();this.ui.updateAiMessage(c,`❌ **请求失败 (${l.status})**
${p}`);return}const h=(n=l.body)==null?void 0:n.getReader();if(!h){this.ui.updateAiMessage(c,"❌ **无法读取响应流**");return}const d=new TextDecoder;let u="";for(;;){const{done:p,value:f}=await h.read();if(p)break;const k=d.decode(f,{stream:!0}).split(`
`);for(const x of k)if(x.startsWith("data: ")){const S=x.slice(6);if(S==="[DONE]")break;try{const y=(i=(o=(a=JSON.parse(S).choices)==null?void 0:a[0])==null?void 0:o.delta)==null?void 0:i.content;y&&(u+=y,this.ui.updateAiMessage(c,u))}catch{}}}}catch(c){console.error("DeepSeek Chat Stream Error:",c),this.ui.addMessage("ai",`❌ **请求出错**
${c.message}`)}}async _callDeepSeekChat(e,t,s){var n,a,o;try{const i=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({model:s||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 AI 助手。根据用户选中的元素和需求，提供专业的代码思路和实现方案。可以提供 JavaScript、CSS 代码。"},{role:"user",content:e}],temperature:.7})});if(!i.ok){const l=await i.text();return this.ui.addMessage("ai",`❌ **请求失败 (${i.status})**
${l}`),""}return((o=(a=(n=(await i.json()).choices)==null?void 0:n[0])==null?void 0:a.message)==null?void 0:o.content)||""}catch(i){return console.error("DeepSeek Chat Error:",i),this.ui.addMessage("ai",`❌ **请求出错**
${i.message}`),""}}async callDifyChatStream(e,t,s,n){var a;try{const o=this.ui.createAiMessage();if(!o)return;const i=await fetch(`${s}/app/chat-messages`,{method:"POST",headers:{Authorization:`Bearer ${t}`,appId:n,"Content-Type":"application/json"},body:JSON.stringify({query:e,inputs:{},response_mode:"streaming",user:"abc-123"})});if(!i.ok){const d=await i.text();this.ui.updateAiMessage(o,`❌ **请求失败 (${i.status})**
${d}`);return}const c=(a=i.body)==null?void 0:a.getReader();if(!c){this.ui.updateAiMessage(o,"❌ **无法读取响应流**");return}const l=new TextDecoder;let h="";for(;;){const{done:d,value:u}=await c.read();if(d)break;const f=l.decode(u,{stream:!0}).split(`
`);for(const g of f)if(g.startsWith("data: ")){const k=g.slice(6);try{const S=JSON.parse(k).answer;S&&(h+=S,this.ui.updateAiMessage(o,h))}catch{}}}}catch(o){console.error("Dify Chat Stream Error:",o),this.ui.addMessage("ai","❌ **CORS 跨域拦截**\n\n当前页面禁止发送自定义 Header `appId` 到 Dify 服务器。")}}async _callDifyChat(e,t,s,n){try{const a=await fetch(`${s}/app/chat-messages`,{method:"POST",headers:{Authorization:`Bearer ${t}`,appId:n,"Content-Type":"application/json"},body:JSON.stringify({query:e,inputs:{},response_mode:"blocking",user:"abc-123"})});if(!a.ok){const i=await a.text();return this.ui.addMessage("ai",`❌ **请求失败 (${a.status})**
${i}`),""}return(await a.json()).answer||""}catch(a){return console.error("Dify Chat Error:",a),this.ui.addMessage("ai","❌ **CORS 跨域拦截**\n\n当前页面禁止发送自定义 Header `appId` 到 Dify 服务器。"),""}}async callDifyAgentStream(e,t,s,n,a){var i;const o=`Target: ${t}
Action: ${e}

简要说明思路（1-2句），然后返回 CSS 代码，使用 CSS 代码块格式包裹。不要冗长的解释。`;try{const c=this.ui.createAiMessage();if(!c)return;const l=await fetch(`${n}/app/chat-messages`,{method:"POST",headers:{Authorization:`Bearer ${s}`,appId:a,"Content-Type":"application/json"},body:JSON.stringify({query:o,inputs:{},response_mode:"streaming",user:"abc-123"})});if(!l.ok){const g=await l.text();this.ui.updateAiMessage(c,`❌ **请求失败 (${l.status})**
${g}`);return}const h=(i=l.body)==null?void 0:i.getReader();if(!h){this.ui.updateAiMessage(c,"❌ **无法读取响应流**");return}const d=new TextDecoder;let u="";for(;;){const{done:g,value:k}=await h.read();if(g)break;const S=d.decode(k,{stream:!0}).split(`
`);for(const v of S)if(v.startsWith("data: ")){const y=v.slice(6);try{const E=JSON.parse(y).answer;E&&(u+=E,this.ui.updateAiMessage(c,u))}catch{}}}const p=u.match(/```(?:css)?([\s\S]*?)```/i),f=p?p[1].trim():u.includes("{")?u.trim():"";if(f){const g=document.createElement("style");g.textContent=f,document.head.appendChild(g),this.operationStack.push({id:Math.random().toString(36).substring(7),type:"style",element:g,description:e,stableSelector:t}),this.ui.showActions(!0)}}catch(c){console.error("Dify Agent Stream Error:",c),this.ui.addMessage("ai","❌ **CORS 跨域拦截**\n\n当前页面禁止发送自定义 Header `appId` 到 Dify 服务器。")}}async _callDifyAgent(e,t,s,n,a){const o=`Target: ${t}
Action: ${e}

简要说明思路（1-2句），然后返回 CSS 代码，使用 CSS 代码块格式包裹。不要冗长的解释。`;try{const i=await fetch(`${n}/app/chat-messages`,{method:"POST",headers:{Authorization:`Bearer ${s}`,appId:a,"Content-Type":"application/json"},body:JSON.stringify({query:o,inputs:{},response_mode:"blocking",user:"abc-123"})});if(!i.ok){const l=await i.text();return this.ui.addMessage("ai",`❌ **请求失败 (${i.status})**
${l}`),""}return(await i.json()).answer||""}catch(i){return console.error("Fetch Error:",i),this.ui.addMessage("ai",`❌ **CORS 跨域拦截**

当前页面禁止发送自定义 Header \`appId\` 到 Dify 服务器。

**解决方法**：
1. 请使用后端代理转发请求。
2. 或者在本地开发时确认代理配置已开启。`),""}}async handleRequest(e){if(this.chatMode===B.NORMAL){this.ui.showTyping(),await this.callNormalChatStream(e);return}if(!this.selectedElement){this.ui.addMessage("ai","请先选中元素。");return}const t=this.getSelector(this.selectedElement);this.ui.showTyping(),await this.callAgentStream(e,t)}async callAgentStream(e,t){const{provider:s,apiKey:n,baseUrl:a,appId:o,model:i,accessToken:c,app:l}=this.options;s==="netease-int"?await this.callNeteaseIntAgentStream(e,t,c,l,i):s==="netease"?await this.callNeteaseAgentStream(e,t,c,l,i):s==="deepseek"?await this.callDeepSeekAgentStream(e,t,n,i):await this.callDifyAgentStream(e,t,n,a,o)}handleUndo(){const e=this.operationStack.pop();e&&e.element.remove(),this.ui.showActions(this.operationStack.length>0)}handleConfirm(){const t=`(function(){const s=document.createElement('style');s.textContent=\`${this.operationStack.map(s=>s.element.textContent).join(`
`)}\`;document.head.appendChild(s);})();`;navigator.clipboard.writeText(t),this.ui.addMessage("ai","📋 代码已复制！")}handleElementSelect(e){this.selectedElement=e,this.ui.setSelection(e),this.ui.showQuickPrompts(!0)}}return typeof window<"u"&&(window.PlasticitySDK=Ae),Ae});
