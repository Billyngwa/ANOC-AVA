(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42451],{507712:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(6637),i=n(826067);const r=(t=(()=>{}))=>{const e=(0,i.mB)(window.location.search),n=e.invite_code;n?a.Z.create("InviteAttributionResource",{invite_code:n}).callCreate():t(e)}},280313:(t,e,n)=>{n.d(e,{Z:()=>Q});var a=n(667294),i=n(317672),r=n(790348);const o=t=>{const e=performance.getEntriesByType("resource").filter((t=>t.name.includes("i.pinimg"))).reduce(((t,e)=>{const n=e.name.replace(".jpg","").split("/");return{[n[n.length-1]]:{downloadSize:e.name.split("/")[3].split("x")[0]},...t}}),{});[...Array.from(document.getElementsByTagName("img")).map((t=>{const n=t.src.replace(".jpg","").split("/"),a=n[n.length-1];if(e[a]){var r;const n=(null===(r=(0,i.rZ)(t))||void 0===r?void 0:r.width)||1,o=e[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:o,ratio:o/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}})),...Array.from(document.querySelectorAll('div[role="img"]')).map((t=>{const n=t.style.backgroundImage.split('"')[1].replace(".jpg","").split("/"),a=n[n.length-1];if(e[a]&&t instanceof HTMLDivElement){var r;const n=(null===(r=(0,i.rZ)(t))||void 0===r?void 0:r.width)||1,o=e[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:o,ratio:o/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}}))].forEach((e=>{const{ratio:n,fileName:a,downloadedSize:i}=e;e.ratio>1.05&&(0,r.A9)(`checkImageRatio.${t}`,{count:Math.round(10*n)/10,tags:{fileName:`${i}_${a}`}})}))};var s=n(860273),c=n(543059),d=n(607150);const l=({constraintMap:t,initialNavTiming:e,annotations:n})=>({...n,...(0,d.jh)("constraint_",t),...(0,d.jh)("mark_",(0,c.gQ)()),...(0,d.jh)("browser_",{...e?(0,d.D3)(e):{},...(0,d.rX)()})});var p=n(358864),m=n(505771),u=n(156381);const g=(t,e)=>{const{firstInputDelay:n}=(0,u.v2)();return[...t.map((t=>(0,m.Z)(t,e))).filter(Boolean),...n?[{name:"fid",id:(0,p.Z)(),parentId:e,startTime:n.startTime,endTime:n.endTime,annotationMap:{},binaryAnnotationMap:{}}]:[]]};var f=n(435851),T=n(172071);const y=({eventPrefix:t,endTime:e,tags:n,resourceArr:a,resourceType:i="allResources"})=>{const r=a.length;if(r>0&&"object"==typeof a[0]&&!Array.isArray(a[0])){const o=[...a].sort(((t,e)=>t.fetchStart-e.fetchStart)),s=[...a].sort(((t,e)=>t.responseEnd-e.responseEnd));let c=1;const d=e/5;let l=0;for(;c<=5;){let e=0;for(;l<=r-1&&o[l].fetchStart<=d*c;)l+=1,e+=1;T.Z.gauge(`${t}.tags.${i}.fetchStartInterval${c}of5`,e,.2,n),T.Z.gauge(`${t}.${i}.fetchStartInterval${c}of5`,e,.2),c+=1}const p={};p.zeroPercentInFlight=o[0].fetchStart,p.twentyFivePercentInFlight=o[Math.floor(r/4)].fetchStart,p.fiftyPercentInFlight=o[2*Math.floor(r/4)].fetchStart,p.seventyFivePercentInFlight=o[3*Math.floor(r/4)].fetchStart,p.hundredPercentInFlight=o[r-1].fetchStart,p.twentyFivePercentComplete=s[Math.floor(r/4)].responseEnd,p.fiftyPercentComplete=s[2*Math.floor(r/4)].responseEnd,p.seventyFivePercentComplete=s[3*Math.floor(r/4)].responseEnd,p.hundredPercentComplete=s[r-1].responseEnd;for(const e in p)p[e]&&(T.Z.timing(`${t}.tags.${i}.${e}`,p[e],.2,n),T.Z.timing(`${t}.${i}.${e}`,p[e],.2))}},h=({annotateExperiments:t,endTime:e,entries:n,metricIdSurface:a,pwtStaticContext:i})=>{const r=`${(0,f.Z)(i)}.${a}`,o=[r];t&&t.forEach((t=>{const e=i.getExperimentGroup(t)||"null";o.push(`${r}.${t}.${e}`)}));const s={lcpTimingBucket:(t=>{let e;return e=t<=2500?"Good":t>2500&&t<=4e3?"Needs Improvement":"Poor",e})((0,u.Bn)())||"unknown"},c=Array.from(n.filter((t=>"number"==typeof t.encodedBodySize&&t.encodedBodySize>=1e4&&t.responseEnd<=e))),d=[],l=[],p=[],m=[],g=[];c.forEach((t=>{"img"===t.initiatorType?d.push(t):"css"===t.initiatorType?l.push(t):"script"===t.initiatorType?p.push(t):"xmlhttprequest"===t.initiatorType?m.push(t):"link"===t.initiatorType&&t.name.includes("i.pinimg.com")&&g.push(t)})),o.forEach((t=>{y({eventPrefix:t,endTime:e,tags:s,resourceArr:c}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:d,resourceType:"image"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:l,resourceType:"css"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:p,resourceType:"scripts"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:m,resourceType:"xhr"}),y({eventPrefix:t,endTime:e,tags:s,resourceArr:g,resourceType:"preloadedImage"})}))};var _=n(22773),S=n(453821),A=n(638089);const v=({annotateExperiments:t,annotations:e,binaryAnnotations:n,constraintMap:a,endTime:i,imageTimings:r,metricId:o,pwtStaticContext:c,startTime:d,traceId:p,spans:m})=>{const u=(0,_.Cg)();let f;"initial_app_load"===o.navigationType&&(f=(0,s.Z)());const T=r.map((({name:t})=>t)),y=u.map((t=>(0,S.p)(t,T))).filter((({timing:t})=>!(({startTime:t,responseEnd:e},n)=>t>n.endTime||!!e&&e<n.startTime||t<n.startTime-100)(t,{startTime:d,endTime:i})));return"board"!==o.surface&&"pin_closeup"!==o.surface||"initial_app_load"!==o.navigationType||!1!==c.isAuthenticated||h({annotateExperiments:t,endTime:i,entries:u,metricIdSurface:o.surface,pwtStaticContext:c}),{type:"COMPLETE",traceId:p,startTime:d,endTime:i,spans:g(y,p).concat(m),annotationMap:l({constraintMap:a,initialNavTiming:f,annotations:e}),binaryAnnotationMap:(0,A.rA)({annotateExperiments:t,binaryAnnotations:n,entries:u,metricId:o,performanceResources:y,pwtEndTime:i,pwtStaticContext:c})}};let I=!1;const x=(t,e)=>t&&e?I?((0,r.H)("duplicated_initial_app_load_surface_pwt"),(0,p.Z)()):(I=!0,e):(0,p.Z)();var E=n(883119),w=n(226464),C=n(785893);function M({children:t,heading:e}){return(0,C.jsxs)("table",{style:{width:"100%"},cellPadding:4,children:[(0,C.jsx)("thead",{children:(0,C.jsx)("tr",{children:(0,C.jsx)("th",{colSpan:2,style:{background:"#efefef"},children:(0,C.jsx)(E.xv,{weight:"bold",align:"center",children:e})})})}),(0,C.jsx)("tbody",{children:t})]})}function N({name:t,children:e}){return(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:(0,C.jsx)(E.xv,{weight:"bold",children:t})}),(0,C.jsx)("td",{children:"string"==typeof e?(0,C.jsx)(E.xv,{children:e}):e})]})}function b({result:t}){return"ABORT"===t.type?(0,C.jsx)(N,{name:"Abort Reason",children:t.reason}):(0,C.jsxs)(a.Fragment,{children:[(0,C.jsx)(N,{name:"PWT (ms)",children:(0,C.jsx)(E.xv,{align:"end",children:Math.round(t.endTime-t.startTime)})}),(0,C.jsx)(N,{name:"PinTrace",children:(0,C.jsx)(E.xv,{italic:!0,children:(0,C.jsx)(E.rU,{href:`https://pintrace.pinadmin.com/zipkin/traces/${t.traceId.toString(16)}`,target:"blank",display:"inlineBlock",onClick:({dangerouslyDisableOnNavigation:t})=>t(),underline:"hover",children:"Open in a new tab"})})})]})}function j({data:t}){const{metricId:e,constraints:n,constraintMap:a,startTime:i,result:r}=t;return(0,C.jsxs)(E.xu,{children:[(0,C.jsxs)(M,{heading:(0,w.KJ)(e),children:[(0,C.jsx)(N,{name:"Thrift Id",children:String((0,w.Rp)(e))}),(0,C.jsx)(N,{name:"Surface",children:e.surface}),(0,C.jsx)(N,{name:"Navigation Type",children:e.navigationType}),(0,C.jsx)(N,{name:"Viewer Authed",children:String(e.isAuthenticated)})]}),(0,C.jsx)(M,{heading:"Constraints",children:n.map((t=>(0,C.jsx)(N,{name:t,children:(0,C.jsx)(E.xv,{align:"end",children:a[t]?Math.round(a[t]-i):"pending..."})},`constraint_${t}`)))}),(0,C.jsx)(M,{heading:"Result",children:r?(0,C.jsx)(b,{result:r}):(0,C.jsx)(N,{name:"result",children:(0,C.jsx)(E.$j,{accessibilityLabel:"profiling PWT",show:!0})})})]})}var P=n(223815);const O=t=>t.result?"COMPLETE"===t.result.type?"darkGray":"red":"gray";function R({data:t}){const[e,n]=(0,a.useState)(!1);return(0,C.jsx)(P.Z,{children:(0,C.jsxs)(E.mh,{children:[(0,C.jsx)(E.xu,{position:"fixed",margin:3,marginBottom:12,bottom:!0,left:!0,width:50,height:50,dangerouslySetInlineStyle:{__style:{zIndex:2e3}},children:(0,C.jsx)(E.hU,{accessibilityLabel:"PwtDebugger",bgColor:"lightGray",iconColor:O(t),icon:"flash",size:"lg",onClick:()=>n(!0)})}),e&&(0,C.jsx)(E.xu,{position:"absolute",dangerouslySetInlineStyle:{__style:{zIndex:2e3}},children:(0,C.jsx)(E.u_,{accessibilityModalLabel:"Pinner Wait Time Debugger Details",heading:"Pinner Wait Time",onDismiss:()=>n(!1),footer:null,size:"sm",children:(0,C.jsx)(j,{data:t})})})]})})}var $=n(558775);const Z=(t,e)=>{const n=(0,a.useRef)(t);(0,a.useEffect)((()=>{n.current=t}),[t]);const i=(0,a.useRef)(e);(0,a.useEffect)((()=>{i.current=e}),[e]),(0,a.useEffect)((()=>()=>i.current(n.current)),[])},B=(t,e)=>{const[n,i]=(0,a.useState)(e);return{state:n,dispatch:e=>i((n=>t(n,e)))}};var L=n(985271),D=n(7789),z=n(383434),U=n(567450),k=n(276602),G=n(198462);const H=["initial_app_load","client_route_push"],K=(0,z.X)("PwtSurface"),F="NavigationComplete",V="VisuallyComplete",J=(t,e)=>{t.isSampled&&(0,$.Z)({metricId:t.metricConfig.metricId,pwtStaticContext:t.metricConfig.pwtStaticContext,result:{type:"ABORT",reason:e}})},W=t=>{if(t.metricConfig.constraints.every((e=>t.constraintMap[e]))){const e=Math.max(...t.metricConfig.constraints.map((e=>t.constraintMap[e])));return((t,e)=>{var n;const{metricConfig:{metricId:a,pwtStaticContext:i,annotateExperiments:s},annotations:d,binaryAnnotations:l,constraintMap:p,startTime:m,imageTimings:u,isSampled:g,spans:f}=t;(0,c.L8)(`PWT_Complete_${(0,w.KJ)(a)}`);const T=x("initial_app_load"===a.navigationType,null===(n=i.serverData)||void 0===n?void 0:n.trace_id),y=v({annotateExperiments:s,annotations:d,binaryAnnotations:l,constraintMap:p,endTime:e,imageTimings:u,metricId:a,pwtStaticContext:i,startTime:m,traceId:T,spans:f});g&&(0,$.Z)({metricId:a,pwtStaticContext:i,result:y});try{o(String(y.binaryAnnotationMap["metricId.surface"].value))}catch(h){(0,r.H)("image_ratio_check_error",{error:h})}return{...t,result:y,status:"DONE"}})(t,e)}return t},Y=(t,e)=>{const{constraint:n,time:a}=e,i=(0,w.KJ)(t.metricConfig.metricId);return L.Z?t.metricConfig.constraints.find((t=>t===n))?t.constraintMap[n]?(K(`constraint "${n}" is already complete.`),(0,r.H)("duplicated_constraint_complete",{constraint:n,action:i}),t):(K(`marking constraint "${n}" as complete`),(0,c.ZP)(`constraint_${n}_is_complete`),W({...t,constraintMap:{...t.constraintMap,[n]:a||L.Z.now()}})):(K(`marked constraint "${n}" is not a required constraint.`),t):((0,r.H)("missing_window_performance",{action:i}),t)},q=(t,e)=>{if(K("dispatch action",e),"INIT_ROUTE"===e.type)return((t,e)=>{const{metricConfig:n,startTime:a,isSampled:i}=e;if("TIMING"===t.status&&a!==t.startTime&&J(t,"routeUpdatedOnSameSurface"),!n)return{status:"DISABLED",metricConfig:null};const o=(0,w.KJ)(n.metricId);return"TIMING"===t.status&&t.startTime===a&&t.constraintMap.NavigationComplete?((0,r.H)("duplicated_init_route_action",{action:o}),t):("Other"===n.pwtStaticContext.browserName&&!1===n.metricId.isAuthenticated&&"initial_app_load"===n.metricId.navigationType?((0,r.A9)(`TIMING.${o}`,{tags:{userAgent:null===(s=window)||void 0===s||null===(c=s.navigator)||void 0===c?void 0:c.userAgent}}),(0,r.A9)(`TIMING.sampled.${o}`,{tags:{userAgent:null===(d=window)||void 0===d||null===(l=d.navigator)||void 0===l?void 0:l.userAgent},sampleRate:.5})):((0,r.A9)(`TIMING.${o}`),(0,r.A9)(`TIMING.sampled.${o}`,{sampleRate:.5})),Y({status:"TIMING",metricConfig:n,startTime:a,constraintMap:{},annotations:{},binaryAnnotations:{},imageTimings:[],isSampled:i,spans:[]},{constraint:F}));var s,c,d,l})(t,e.payload);if("TIMING"!==t.status)return K(`ignoring action due to invalid state ${t.status}`,e),t;switch(e.type){case"ABORT":J(t,e.reason);const n={type:"ABORT",reason:e.reason};return{...t,status:"DONE",result:n};case"ANNOTATE":const{name:a}=e.payload;if(!L.Z)return t;const i=L.Z.now();return K(`adding annotation {${a}: ${i}}`),{...t,annotations:{...t.annotations,[a]:i}};case"BINARY_ANNOTATE":const{name:o,value:s,annotationType:c}=e.payload;return K(`adding binary annotation {${o}: ${s}}`),{...t,binaryAnnotations:{...t.binaryAnnotations,[o]:{value:s,type:c}}};case"MARK_CONSTRAINT_COMPLETE":return Y(t,e.payload);case"REMOVE_CONSTRAINT":return((t,e)=>{if(!L.Z){const e=(0,w.KJ)(t.metricConfig.metricId);(0,r.H)("missing_window_performance",{action:e})}K(`removing constraint "${e}"`);const n=t.metricConfig.constraints.filter((t=>t!==e)),{[e]:a,...i}=t.constraintMap;return W({...t,constraintMap:i,metricConfig:{...t.metricConfig,constraints:n}})})(t,e.payload);case"SET_SEGMENT":return((t,e)=>{if(!L.Z){const e=(0,w.KJ)(t.metricConfig.metricId);(0,r.H)("missing_window_performance",{action:e})}K(`updating pwt segment to "${e}"`);const n={...t.metricConfig.metricId,segment:e};return{...t,metricConfig:{...t.metricConfig,metricId:n}}})(t,e.payload);case"SET_VISUALLY_COMPLETE_RESULT":{const{payload:{imageTimings:n}}=e;if(0===n.length){J(t,"visuallyComplete_noImages");const e={type:"ABORT",reason:"visuallyComplete_noImages"};return{...t,status:"DONE",result:e}}const a=Math.max(...n.map((t=>t.responseEnd||0)));return Y({...t,imageTimings:n},{constraint:V,time:a})}case"ADD_SUBSPAN":const{startTime:d}=t,{payload:{name:l,startTime:m,endTime:u,annotations:g,binaryAnnotations:f,parentId:T}}=e;return{...t,spans:[...t.spans,{name:l,id:(0,p.Z)(),startTime:m||d,endTime:u,annotationMap:{...g},binaryAnnotationMap:{...f},parentId:T}]};case"START_SUBSPAN":return{...t,spans:[...t.spans,{name:e.payload.name,id:(0,p.Z)(),startTime:L.Z?L.Z.now():0,endTime:1/0,annotationMap:{...e.payload.annotations},binaryAnnotationMap:{...e.payload.binaryAnnotations},parentId:e.payload.parentId}]};case"STOP_SUBSPAN":const y=t.spans.findIndex((t=>t.name===e.payload.name));return y>-1?(t.spans[y].endTime=L.Z?L.Z.now():0,e.payload.annotations&&(t.spans[y].annotationMap={...t.spans[y].annotationMap,...e.payload.annotations}),e.payload.binaryAnnotations&&(t.spans[y].binaryAnnotationMap={...t.spans[y].binaryAnnotationMap,...e.payload.binaryAnnotations})):(0,r.H)("invalid_subspan_stop_name",{name:e.payload.name}),t;default:const h=(0,w.KJ)(t.metricConfig.metricId);return(0,r.H)("invalid_pwt_surface_action",{action:h}),t}};function Q({children:t,...e}){var n;const i=(0,G.fM)(),o=(t=>{if(!t)return"initial_app_load";switch(t.action){case"PUSH":return"client_route_push";case"REPLACE":return"client_route_replace";default:return null}})(i),s=["seo_web_react18_render","web_react18_render_auth","web_react18_render_unauth","web_duplo_default",...null!==(n=e.annotateExperiments)&&void 0!==n?n:[]],c={...e,annotateExperiments:s,navigationInfo:{navigationType:o,clientNavigation:i}},{state:d,context:l}=(({surface:t,constraints:e,segment:n,measureGridVisuallyComplete:i,annotateExperiments:r,customEnabledNavigationTypes:o,navigationInfo:{clientNavigation:s,navigationType:c},sampleRate:d})=>{const l=(0,a.useRef)("NOT_SET"),p=(0,G.N5)(),{state:m,dispatch:u}=B(q,{status:"DISABLED",metricConfig:null});if(l.current!==s&&(l.current=s,p)){const{isAuthenticated:a}=p,l=o||H,m=t&&c&&l.includes(c)?{metricId:{type:"surface",surface:t,navigationType:c,isAuthenticated:a,segment:n},annotateExperiments:r,constraints:[F,...e||[],...i?[V]:[]],pwtStaticContext:p}:null;u({type:"INIT_ROUTE",payload:{metricConfig:m,startTime:s?s.time:0,isSampled:!d||Math.random()<d}})}if((0,a.useEffect)((()=>{const t=t=>{u({type:"ABORT",reason:t})};U.Z.onSessionPause(t);const e=()=>{window.removeEventListener("resize",e),u({type:"ABORT",reason:"windowResized"})};return window.addEventListener("resize",e),()=>{U.Z.removePauseListener(t),window.removeEventListener("resize",e)}}),[]),Z(m,(t=>{K("handling unmount",t),"TIMING"===t.status&&J(t,"unmount")})),"TIMING"!==m.status||!m.constraintMap.NavigationComplete)return{state:m,context:null};const{startTime:g,metricConfig:f}=m;return{state:m,context:{id:g,metricId:f.metricId,abort:t=>u({type:"ABORT",reason:t}),addAnnotation:t=>u({type:"ANNOTATE",payload:{name:t}}),addBinaryAnnotation:(t,e,n)=>u({type:"BINARY_ANNOTATE",payload:{name:t,value:e,annotationType:n}}),setVisuallyCompleteResult:f.constraints.includes(V)?t=>u({type:"SET_VISUALLY_COMPLETE_RESULT",payload:t}):null,markConstraintComplete:t=>u({type:"MARK_CONSTRAINT_COMPLETE",payload:{constraint:t,time:L.Z?L.Z.now():0}}),removeConstraint:t=>u({type:"REMOVE_CONSTRAINT",payload:t}),setSegment:t=>u({type:"SET_SEGMENT",payload:t}),addSubspan:(t,e,n,a={},i={},r=null)=>u({type:"ADD_SUBSPAN",payload:{name:t,startTime:e,endTime:n,annotations:a,binaryAnnotations:i,parentId:r}}),startSubspan:(t,e={},n={},a=null)=>u({type:"START_SUBSPAN",payload:{name:t,annotations:e,binaryAnnotations:n,parentId:a}}),stopSubspan:(t,e={},n={},a=null)=>u({type:"STOP_SUBSPAN",payload:{name:t,annotations:e,binaryAnnotations:n,parentId:a}})}}})(c);return(()=>{const t=(0,k.EV)(),e=!!t;(0,a.useEffect)((()=>{if(e){const e=null!=t&&t.metricId?(0,w.KJ)(t.metricId):null;(0,r.H)("nested_pwt_surface",{action:e})}}),[e])})(),(0,C.jsxs)(a.Fragment,{children:[(0,C.jsx)(k.Sb,{value:l,children:t}),D.DQ&&"DISABLED"!==d.status&&(0,C.jsx)(R,{data:{metricId:d.metricConfig.metricId,constraints:d.metricConfig.constraints,constraintMap:d.constraintMap,startTime:d.startTime,result:"DONE"===d.status?d.result:null}})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/42451-015e738c1436ea97.mjs.map