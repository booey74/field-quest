const state = {
  watchId: null,
  currentPos: null,
  boundary: [],
  checkpoints: [],
  currentIndex: 0,
  score: 0,
  unlocked: false,
  firstDistance: null,
};

const challenges = [
  { q: "What is 7 × 8?", options: ["54", "56", "64", "48"], answer: "56" },
  { q: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: "Mars" },
  { q: "What is 144 ÷ 12?", options: ["10", "11", "12", "14"], answer: "12" },
  { q: "Which gas do plants take in from the air?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"], answer: "Carbon dioxide" },
  { q: "If you have £10 and spend £3.75, how much is left?", options: ["£6.15", "£6.25", "£7.25", "£5.25"], answer: "£6.25" },
  { q: "How many degrees are in a right angle?", options: ["45", "90", "180", "360"], answer: "90" },
  { q: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
  { q: "What is the next number: 3, 6, 12, 24, ...?", options: ["30", "36", "48", "60"], answer: "48" },
];

const $ = id => document.getElementById(id);

function startGPS() {
  if (!navigator.geolocation) {
    alert("This phone/browser does not support GPS location.");
    return;
  }
  $("gpsBadge").textContent = "GPS starting…";
  state.watchId = navigator.geolocation.watchPosition(
    pos => {
      state.currentPos = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        accuracy: pos.coords.accuracy
      };
      $("gpsBadge").textContent = "GPS active";
      $("accuracyText").textContent = `${Math.round(pos.coords.accuracy)} m`;
      $("markPointBtn").disabled = false;
      if (state.checkpoints.length) updateGamePosition();
    },
    err => {
      $("gpsBadge").textContent = "GPS error";
      alert("Location permission is required. Make sure GPS is enabled and allow precise location.");
      console.error(err);
    },
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 10000 }
  );
}

function markBoundaryPoint() {
  if (!state.currentPos) return;
  state.boundary.push({ lat: state.currentPos.lat, lon: state.currentPos.lon });
  $("boundaryCount").textContent = state.boundary.length;
  $("clearBoundaryBtn").disabled = false;
  $("generateBtn").disabled = state.boundary.length < 3;
}

function clearBoundary() {
  state.boundary = [];
  $("boundaryCount").textContent = "0";
  $("clearBoundaryBtn").disabled = true;
  $("generateBtn").disabled = true;
}

function pointInPolygon(point, polygon) {
  const x = point.lon, y = point.lat;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lon, yi = polygon[i].lat;
    const xj = polygon[j].lon, yj = polygon[j].lat;
    const intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / ((yj - yi) || 1e-12) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function randomPointInPolygon(polygon) {
  const lats = polygon.map(p => p.lat);
  const lons = polygon.map(p => p.lon);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const minLon = Math.min(...lons), maxLon = Math.max(...lons);

  for (let tries = 0; tries < 5000; tries++) {
    const p = {
      lat: minLat + Math.random() * (maxLat - minLat),
      lon: minLon + Math.random() * (maxLon - minLon)
    };
    if (pointInPolygon(p, polygon)) return p;
  }
  throw new Error("Could not generate a point inside this boundary.");
}

function generateGame() {
  const count = Math.max(1, Math.min(20, Number($("checkpointCount").value || 6)));
  if (state.boundary.length < 3) return;

  state.checkpoints = [];
  for (let i = 0; i < count; i++) {
    state.checkpoints.push({
      ...randomPointInPolygon(state.boundary),
      challenge: challenges[Math.floor(Math.random() * challenges.length)]
    });
  }
  state.currentIndex = 0;
  state.score = 0;
  state.unlocked = false;
  state.firstDistance = null;

  $("gameCard").classList.remove("hidden");
  $("setupCard").scrollIntoView({ behavior: "smooth", block: "start" });
  updateGameUI();
  updateGamePosition();
}

function toRad(v) { return v * Math.PI / 180; }
function toDeg(v) { return v * 180 / Math.PI; }

function haversine(a, b) {
  const R = 6371000;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1-h));
}

function bearing(a, b) {
  const lat1 = toRad(a.lat), lat2 = toRad(b.lat);
  const dLon = toRad(b.lon - a.lon);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function compassName(deg) {
  const dirs = ["N ↑","NE ↗","E →","SE ↘","S ↓","SW ↙","W ←","NW ↖"];
  return dirs[Math.round(deg / 45) % 8];
}

function updateGameUI() {
  const total = state.checkpoints.length;
  $("checkpointLabel").textContent = `Checkpoint ${Math.min(state.currentIndex + 1, total)}`;
  $("scoreText").textContent = `${state.score} / ${total}`;
  $("challengePanel").classList.add("hidden");
  $("feedback").textContent = "";
  $("answerOptions").innerHTML = "";
}

function updateGamePosition() {
  if (!state.currentPos || !state.checkpoints.length || state.currentIndex >= state.checkpoints.length) return;

  const target = state.checkpoints[state.currentIndex];
  const dist = haversine(state.currentPos, target);
  const b = bearing(state.currentPos, target);
  const unlockRadius = Number($("unlockRadius").value);

  if (state.firstDistance == null || dist > state.firstDistance) state.firstDistance = dist;
  const progress = state.firstDistance ? Math.max(0, Math.min(100, 100 - (dist / state.firstDistance * 100))) : 0;

  $("distanceText").textContent = dist < 1000 ? `${Math.round(dist)} m` : `${(dist/1000).toFixed(2)} km`;
  $("bearingText").textContent = `${compassName(b)} • bearing ${Math.round(b)}°`;
  $("progressBar").style.width = `${progress}%`;

  if (dist <= unlockRadius && !state.unlocked) unlockChallenge();
}

function unlockChallenge() {
  state.unlocked = true;
  const item = state.checkpoints[state.currentIndex].challenge;
  $("challengePanel").classList.remove("hidden");
  $("challengeQuestion").textContent = item.q;
  $("answerOptions").innerHTML = "";
  item.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => answerChallenge(opt, item.answer));
    $("answerOptions").appendChild(btn);
  });
  if (navigator.vibrate) navigator.vibrate([120, 80, 120]);
}

function answerChallenge(choice, correct) {
  if (choice === correct) {
    state.score++;
    $("feedback").textContent = "Correct! Next checkpoint unlocked.";
  } else {
    $("feedback").textContent = `Not quite. The answer was ${correct}.`;
  }

  [...$("answerOptions").querySelectorAll("button")].forEach(b => b.disabled = true);

  setTimeout(() => {
    state.currentIndex++;
    state.unlocked = false;
    state.firstDistance = null;

    if (state.currentIndex >= state.checkpoints.length) {
      $("distanceText").textContent = "🏁";
      $("bearingText").textContent = `Game complete — score ${state.score}/${state.checkpoints.length}`;
      $("challengePanel").classList.add("hidden");
      $("progressBar").style.width = "100%";
      $("checkpointLabel").textContent = "Finished!";
      $("scoreText").textContent = `${state.score} / ${state.checkpoints.length}`;
      if (navigator.vibrate) navigator.vibrate([150,80,150,80,300]);
      return;
    }
    updateGameUI();
    updateGamePosition();
  }, 1300);
}

function endGame() {
  state.checkpoints = [];
  state.currentIndex = 0;
  state.score = 0;
  state.unlocked = false;
  state.firstDistance = null;
  $("gameCard").classList.add("hidden");
}

$("startGpsBtn").addEventListener("click", startGPS);
$("markPointBtn").addEventListener("click", markBoundaryPoint);
$("clearBoundaryBtn").addEventListener("click", clearBoundary);
$("generateBtn").addEventListener("click", generateGame);
$("endGameBtn").addEventListener("click", endGame);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}
