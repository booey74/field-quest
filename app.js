const state={watchId:null,currentPos:null,boundary:[],checkpoints:[],currentIndex:0,score:0,unlocked:false,firstDistance:null,mapVisible:true,map:null,playerMarker:null,targetMarker:null,boundaryLayer:null};

const Q=[
{id:"m1",min:7,max:9,c:"maths",q:"What is 6 × 7?",o:["36","42","48","54"],a:"42"},
{id:"m2",min:7,max:9,c:"maths",q:"Half of 36 is…",o:["16","17","18","19"],a:"18"},
{id:"s1",min:7,max:9,c:"science",q:"Which organ pumps blood around your body?",o:["Lungs","Brain","Heart","Stomach"],a:"Heart"},
{id:"g1",min:7,max:9,c:"geography",q:"What is the capital city of Wales?",o:["Swansea","Cardiff","Bangor","Newport"],a:"Cardiff"},
{id:"k1",min:7,max:9,c:"general",q:"How many days are there in a leap year?",o:["364","365","366","367"],a:"366"},
{id:"l1",min:7,max:9,c:"logic",q:"What comes next: 2, 4, 8, 16, ...?",o:["18","24","30","32"],a:"32"},

{id:"m3",min:9,max:11,c:"maths",q:"What is 7 × 8?",o:["54","56","64","48"],a:"56"},
{id:"m4",min:9,max:11,c:"maths",q:"What is 144 ÷ 12?",o:["10","11","12","14"],a:"12"},
{id:"m5",min:9,max:11,c:"maths",q:"You have £10 and spend £3.75. How much is left?",o:["£6.15","£6.25","£7.25","£5.25"],a:"£6.25"},
{id:"m6",min:9,max:11,c:"maths",q:"What is 3/4 of 20?",o:["12","15","16","18"],a:"15"},
{id:"m7",min:9,max:11,c:"maths",q:"A rectangle is 8 m long and 5 m wide. What is its area?",o:["13 m²","26 m²","40 m²","80 m²"],a:"40 m²"},
{id:"s2",min:9,max:11,c:"science",q:"Which gas do plants take in from the air?",o:["Oxygen","Carbon dioxide","Hydrogen","Helium"],a:"Carbon dioxide"},
{id:"s3",min:9,max:11,c:"science",q:"Which force pulls objects towards Earth?",o:["Friction","Gravity","Magnetism","Electricity"],a:"Gravity"},
{id:"s4",min:9,max:11,c:"science",q:"Which part of a plant absorbs most water from soil?",o:["Flower","Leaves","Roots","Fruit"],a:"Roots"},
{id:"g2",min:9,max:11,c:"geography",q:"Which is the largest ocean?",o:["Atlantic","Indian","Pacific","Arctic"],a:"Pacific"},
{id:"g3",min:9,max:11,c:"geography",q:"Which line divides Earth into Northern and Southern Hemispheres?",o:["Prime Meridian","Equator","Tropic of Cancer","Date Line"],a:"Equator"},
{id:"g4",min:9,max:11,c:"geography",q:"Which country has Paris as its capital?",o:["Spain","France","Italy","Belgium"],a:"France"},
{id:"k2",min:9,max:11,c:"general",q:"Which planet is known as the Red Planet?",o:["Mars","Venus","Jupiter","Mercury"],a:"Mars"},
{id:"k3",min:9,max:11,c:"general",q:"How many degrees are in a right angle?",o:["45","90","180","360"],a:"90"},
{id:"k4",min:9,max:11,c:"general",q:"How many players does a football team normally have on the pitch?",o:["9","10","11","12"],a:"11"},
{id:"l2",min:9,max:11,c:"logic",q:"What is the next number: 3, 6, 12, 24, ...?",o:["30","36","48","60"],a:"48"},
{id:"l3",min:9,max:11,c:"logic",q:"I am odd. Take away one letter and I become even. What number am I?",o:["Three","Five","Seven","Nine"],a:"Seven"},
{id:"l4",min:9,max:11,c:"logic",q:"Which does not belong: square, triangle, circle, cube?",o:["Square","Triangle","Circle","Cube"],a:"Cube"},

{id:"m8",min:11,max:13,c:"maths",q:"What is 15% of 200?",o:["15","20","30","35"],a:"30"},
{id:"m9",min:11,max:13,c:"maths",q:"Solve: 4x = 36",o:["7","8","9","10"],a:"9"},
{id:"s5",min:11,max:13,c:"science",q:"Which particle has a negative electrical charge?",o:["Proton","Neutron","Electron","Nucleus"],a:"Electron"},
{id:"s6",min:11,max:13,c:"science",q:"What is the boiling point of pure water at sea level?",o:["90°C","95°C","100°C","110°C"],a:"100°C"},
{id:"g5",min:11,max:13,c:"geography",q:"Which is the longest river in the UK?",o:["Thames","Severn","Trent","Wye"],a:"Severn"},
{id:"k5",min:11,max:13,c:"general",q:"Which language has the most native speakers worldwide?",o:["English","Spanish","Mandarin Chinese","Hindi"],a:"Mandarin Chinese"},
{id:"l5",min:11,max:13,c:"logic",q:"If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",o:["Yes","No","Sometimes","Not enough information"],a:"Yes"}
];

const $=id=>document.getElementById(id);
const cats=()=>[...document.querySelectorAll('input[name="category"]:checked')].map(x=>x.value);
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function startGPS(){
 if(!navigator.geolocation){alert("GPS is not supported on this device.");return}
 $("gpsBadge").textContent="GPS starting…";
 state.watchId=navigator.geolocation.watchPosition(p=>{
  state.currentPos={lat:p.coords.latitude,lon:p.coords.longitude,accuracy:p.coords.accuracy};
  $("gpsBadge").textContent="GPS active";$("accuracyText").textContent=Math.round(p.coords.accuracy)+" m";$("markPointBtn").disabled=false;
  updateMapPlayer();if(state.checkpoints.length)updateGamePosition();
 },()=>{ $("gpsBadge").textContent="GPS error";alert("Please allow precise location and make sure GPS is enabled.");},{enableHighAccuracy:true,maximumAge:1000,timeout:10000});
}
function markPoint(){if(!state.currentPos)return;state.boundary.push({lat:state.currentPos.lat,lon:state.currentPos.lon});$("boundaryCount").textContent=state.boundary.length;$("clearBoundaryBtn").disabled=false;$("generateBtn").disabled=state.boundary.length<3}
function clearBoundary(){state.boundary=[];$("boundaryCount").textContent="0";$("clearBoundaryBtn").disabled=true;$("generateBtn").disabled=true}
function inside(p,poly){let x=p.lon,y=p.lat,c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){let xi=poly[i].lon,yi=poly[i].lat,xj=poly[j].lon,yj=poly[j].lat;if(((yi>y)!=(yj>y))&&(x<(xj-xi)*(y-yi)/((yj-yi)||1e-12)+xi))c=!c}return c}
function randomPoint(poly){let la=poly.map(p=>p.lat),lo=poly.map(p=>p.lon),a=Math.min(...la),b=Math.max(...la),c=Math.min(...lo),d=Math.max(...lo);for(let i=0;i<5000;i++){let p={lat:a+Math.random()*(b-a),lon:c+Math.random()*(d-c)};if(inside(p,poly))return p}throw Error("Could not generate checkpoint")}
function pool(age,cs){let p=Q.filter(q=>age>=q.min&&age<=q.max&&cs.includes(q.c));if(!p.length)p=Q.filter(q=>cs.includes(q.c)&&Math.abs((q.min+q.max)/2-age)<=3);return shuffle(p)}
function generate(){
 let count=Math.max(1,Math.min(20,+$("checkpointCount").value||6)),age=Math.max(5,Math.min(16,+$("playerAge").value||10)),cs=cats();
 if(!cs.length){alert("Choose at least one category.");return}
 let p=pool(age,cs);if(!p.length){alert("No suitable questions are available for those settings yet.");return}
 if(count>p.length)alert(`There are ${p.length} unique suitable questions available. This game will use ${p.length} checkpoints so questions do not repeat.`);
 count=Math.min(count,p.length);state.checkpoints=[];for(let i=0;i<count;i++)state.checkpoints.push({...randomPoint(state.boundary),challenge:p[i]});
 state.currentIndex=0;state.score=0;state.unlocked=false;state.firstDistance=null;state.mapVisible=$("showMap").checked;$("gameCard").classList.remove("hidden");initMap();setMapVisibility(state.mapVisible);updateGameUI();updateGamePosition();setTimeout(()=>$("gameCard").scrollIntoView({behavior:"smooth"}),100)
}
const rad=v=>v*Math.PI/180,deg=v=>v*180/Math.PI;
function distance(a,b){const R=6371000,dla=rad(b.lat-a.lat),dlo=rad(b.lon-a.lon),l1=rad(a.lat),l2=rad(b.lat),h=Math.sin(dla/2)**2+Math.cos(l1)*Math.cos(l2)*Math.sin(dlo/2)**2;return 2*R*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))}
function bearing(a,b){let l1=rad(a.lat),l2=rad(b.lat),dl=rad(b.lon-a.lon),y=Math.sin(dl)*Math.cos(l2),x=Math.cos(l1)*Math.sin(l2)-Math.sin(l1)*Math.cos(l2)*Math.cos(dl);return(deg(Math.atan2(y,x))+360)%360}
function compass(d){return["N ↑","NE ↗","E →","SE ↘","S ↓","SW ↙","W ←","NW ↖"][Math.round(d/45)%8]}

function icon(color,text){return L.divIcon({className:"",html:`<div style="width:32px;height:32px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 8px #0006;display:flex;align-items:center;justify-content:center;color:white;font-weight:900">${text}</div>`,iconSize:[32,32],iconAnchor:[16,16]})}
function initMap(){
 if(!window.L)return;
 if(!state.map){let s=state.currentPos?[state.currentPos.lat,state.currentPos.lon]:[51.75,-3.38];state.map=L.map("map").setView(s,17);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap contributors"}).addTo(state.map)}
 if(state.boundaryLayer)state.map.removeLayer(state.boundaryLayer);
 state.boundaryLayer=L.polygon(state.boundary.map(p=>[p.lat,p.lon]),{color:"#22c55e",weight:3,fillOpacity:.08}).addTo(state.map);
 updateMapPlayer();updateMapTarget();setTimeout(()=>{state.map.invalidateSize();fitMap()},120)
}
function updateMapPlayer(){if(!state.map||!state.currentPos||!window.L)return;let ll=[state.currentPos.lat,state.currentPos.lon];if(!state.playerMarker)state.playerMarker=L.marker(ll,{icon:icon("#2563eb","●")}).addTo(state.map);else state.playerMarker.setLatLng(ll)}
function updateMapTarget(){if(!state.map||state.currentIndex>=state.checkpoints.length||!window.L)return;let t=state.checkpoints[state.currentIndex],ll=[t.lat,t.lon];if(!state.targetMarker)state.targetMarker=L.marker(ll,{icon:icon("#f97316",state.currentIndex+1)}).addTo(state.map);else{state.targetMarker.setLatLng(ll);state.targetMarker.setIcon(icon("#f97316",state.currentIndex+1))}}
function fitMap(){if(!state.map||!state.currentPos||state.currentIndex>=state.checkpoints.length)return;let t=state.checkpoints[state.currentIndex],pts=[[state.currentPos.lat,state.currentPos.lon],[t.lat,t.lon],...state.boundary.map(p=>[p.lat,p.lon])];state.map.fitBounds(pts,{padding:[35,35],maxZoom:18})}
function setMapVisibility(v){state.mapVisible=v;$("mapWrap").classList.toggle("hidden",!v);$("toggleMapBtn").textContent=v?"Hide map":"Show map";if(v&&state.map)setTimeout(()=>{state.map.invalidateSize();fitMap()},100)}

function updateGameUI(){let n=state.checkpoints.length;$("checkpointLabel").textContent=`Checkpoint ${Math.min(state.currentIndex+1,n)}`;$("scoreText").textContent=`${state.score} / ${n}`;$("challengePanel").classList.add("hidden");$("feedback").textContent="";$("answerOptions").innerHTML="";updateMapTarget();fitMap()}
function updateGamePosition(){
 if(!state.currentPos||!state.checkpoints.length||state.currentIndex>=state.checkpoints.length)return;
 let t=state.checkpoints[state.currentIndex],d=distance(state.currentPos,t),b=bearing(state.currentPos,t),r=+$("unlockRadius").value;
 if(state.firstDistance==null||d>state.firstDistance)state.firstDistance=d;
 let progress=state.firstDistance?Math.max(0,Math.min(100,100-d/state.firstDistance*100)):0;
 $("distanceText").textContent=d<1000?Math.round(d)+" m":(d/1000).toFixed(2)+" km";$("bearingText").textContent=`${compass(b)} • bearing ${Math.round(b)}°`;$("progressBar").style.width=progress+"%";updateMapPlayer();if(d<=r&&!state.unlocked)unlock()
}
function label(c){return{maths:"Maths",science:"Science",geography:"Geography",general:"General knowledge",logic:"Logic & puzzles"}[c]}
function unlock(){
 state.unlocked=true;let q=state.checkpoints[state.currentIndex].challenge;$("challengePanel").classList.remove("hidden");$("challengeMeta").textContent=`${label(q.c)} • age ${q.min}–${q.max}`;$("challengeQuestion").textContent=q.q;$("answerOptions").innerHTML="";
 shuffle(q.o).forEach(o=>{let b=document.createElement("button");b.textContent=o;b.onclick=()=>answer(o,q.a);$("answerOptions").appendChild(b)});if(navigator.vibrate)navigator.vibrate([120,80,120])
}
function answer(choice,correct){
 if(choice===correct){state.score++;$("feedback").textContent="Correct! Next checkpoint unlocked."}else $("feedback").textContent=`Not quite. The answer was ${correct}.`;
 [...$("answerOptions").querySelectorAll("button")].forEach(b=>b.disabled=true);
 setTimeout(()=>{state.currentIndex++;state.unlocked=false;state.firstDistance=null;if(state.currentIndex>=state.checkpoints.length){$("distanceText").textContent="🏁";$("bearingText").textContent=`Game complete — score ${state.score}/${state.checkpoints.length}`;$("challengePanel").classList.add("hidden");$("progressBar").style.width="100%";$("checkpointLabel").textContent="Finished!";$("scoreText").textContent=`${state.score} / ${state.checkpoints.length}`;if(state.targetMarker&&state.map){state.map.removeLayer(state.targetMarker);state.targetMarker=null}return}updateGameUI();updateGamePosition()},1200)
}
function endGame(){state.checkpoints=[];state.currentIndex=0;state.score=0;state.unlocked=false;state.firstDistance=null;$("gameCard").classList.add("hidden")}
$("startGpsBtn").onclick=startGPS;$("markPointBtn").onclick=markPoint;$("clearBoundaryBtn").onclick=clearBoundary;$("generateBtn").onclick=generate;$("endGameBtn").onclick=endGame;$("toggleMapBtn").onclick=()=>setMapVisibility(!state.mapVisible);
document.querySelectorAll('input[name="category"]').forEach(c=>c.onchange=()=>{if(!cats().length){c.checked=true;alert("Keep at least one category selected.")}});
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js"));
