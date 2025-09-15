window.ATHLETES = {
  // ─────────────────────────────────────────────────────────────────────────────
  // Sidney Crosby (NHL)
  // columns = table headers + keys, stats = rows
  // ─────────────────────────────────────────────────────────────────────────────
  sidney_crosby: {
    columns: [
      { header: "Year",    key: "year" },
      { header: "Games",   key: "games" },
      { header: "Goals",   key: "goals" },
      { header: "Assists", key: "assists" },
      { header: "Points",  key: "points" },
    ],
    // Year-by-year stats
    stats: [
      { year: "2005-06", games: 81, goals: 39, assists: 63, points: 102 },
      { year: "2006-07", games: 79, goals: 36, assists: 84, points: 120 },
      { year: "2007-08", games: 53, goals: 24, assists: 48, points: 72 },
      { year: "2008-09", games: 77, goals: 33, assists: 70, points: 103 },
      { year: "2009-10", games: 81, goals: 51, assists: 58, points: 109 },
      { year: "2010-11", games: 41, goals: 32, assists: 34, points: 66 },
      { year: "2011-12", games: 22, goals: 8,  assists: 29, points: 37 },
      { year: "2012-13", games: 36, goals: 15, assists: 41, points: 56 },
      { year: "2013-14", games: 80, goals: 36, assists: 68, points: 104 },
      { year: "2014-15", games: 77, goals: 28, assists: 56, points: 84 },
      { year: "2015-16", games: 80, goals: 36, assists: 49, points: 85 },
      { year: "2016-17", games: 75, goals: 44, assists: 45, points: 89 },
      { year: "2017-18", games: 82, goals: 29, assists: 60, points: 89 },
      { year: "2018-19", games: 79, goals: 35, assists: 65, points: 100 },
      { year: "2019-20", games: 41, goals: 16, assists: 31, points: 47 },
      { year: "2020-21", games: 55, goals: 24, assists: 38, points: 62 },
      { year: "2021-22", games: 69, goals: 31, assists: 53, points: 84 },
      { year: "2022-23", games: 82, goals: 33, assists: 60, points: 93 },
      { year: "2023-24", games: 82, goals: 42, assists: 52, points: 94 },
      { year: "2024-25", games: 80, goals: 33, assists: 58, points: 91 },
      { year: "Total",    games: 1044, goals: 515, assists: 890, points: 1405 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Mario Lemieux (NHL)
  // ─────────────────────────────────────────────────────────────────────────────
  mario_lemieux: {
    columns: [
      { header: "Year",    key: "year" },
      { header: "Games",   key: "games" },
      { header: "Goals",   key: "goals" },
      { header: "Assists", key: "assists" },
      { header: "Points",  key: "points" },
    ],
    stats: [
      { year: "1984-85", games: 73, goals: 43, assists: 57, points: 100 },
      { year: "1985-86", games: 79, goals: 48, assists: 93, points: 141 },
      { year: "1986-87", games: 63, goals: 54, assists: 53, points: 107 },
      { year: "1987-88", games: 77, goals: 70, assists: 98, points: 168 },
      { year: "1988-89", games: 76, goals: 85, assists: 114, points: 199 },
      { year: "1989-90", games: 59, goals: 45, assists: 78, points: 123 },
      { year: "1990-91", games: 26, goals: 19, assists: 26, points: 45 },
      { year: "1991-92", games: 64, goals: 44, assists: 87, points: 131 },
      { year: "1992-93", games: 60, goals: 69, assists: 91, points: 160 },
      { year: "1993-94", games: 22, goals: 17, assists: 20, points: 37 },
      { year: "1995-96", games: 70, goals: 69, assists: 92, points: 161 },
      { year: "1996-97", games: 76, goals: 50, assists: 72, points: 122 },
      { year: "2000-01", games: 43, goals: 35, assists: 41, points: 76 },
      { year: "2001-02", games: 24, goals: 6,  assists: 25, points: 31 },
      { year: "2002-03", games: 67, goals: 28, assists: 63, points: 91 },
      { year: "2003-04", games: 10, goals: 1,  assists: 8,  points: 9 },
      { year: "2005-06", games: 26, goals: 7,  assists: 15, points: 22 },
      { year: "Total",    games: 915, goals: 690, assists: 1033, points: 1723 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // T.J. Watt (NFL)
  // ─────────────────────────────────────────────────────────────────────────────
  tj_watt: {
    columns: [
      { header: "Year",    key: "year" },
      { header: "Games",   key: "games" },
      { header: "Tackles", key: "tackles" },
      { header: "Sacks",   key: "sacks" },
      { header: "FF",      key: "ff" },
      { header: "FR",      key: "fr" },
      { header: "INT",     key: "int" },
    ],
    stats: [
      { year: "2017", games: 15, tackles: 54,  sacks: 7.0,  ff: 1, fr: 0, int: 1 },
      { year: "2018", games: 16, tackles: 68,  sacks: 13.0, ff: 6, fr: 0, int: 0 },
      { year: "2019", games: 16, tackles: 55,  sacks: 14.5, ff: 8, fr: 4, int: 2 },
      { year: "2020", games: 15, tackles: 53,  sacks: 15.0, ff: 2, fr: 0, int: 1 },
      { year: "2021", games: 15, tackles: 64,  sacks: 22.5, ff: 5, fr: 3, int: 0 },
      { year: "2022", games: 10, tackles: 39,  sacks: 5.5,  ff: 1, fr: 0, int: 2 },
      { year: "2023", games: 17, tackles: 68,  sacks: 19.0, ff: 4, fr: 3, int: 1 },
      { year: "2024", games: 17, tackles: 61,  sacks: 11.5, ff: 6, fr: 2, int: 0 },
      { year: "Total",    games: 121, tackles: 462, sacks: 108.5, ff: 33, fr: 12, int: 7 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Antonio Brown (NFL)
  // ─────────────────────────────────────────────────────────────────────────────
  antonio_brown: {
    columns: [
      { header: "Year",         key: "year" },
      { header: "Games",        key: "games" },
      { header: "Receptions",   key: "receptions" },
      { header: "Targets",      key: "targets" },
      { header: "Receiving Yards", key: "rec_yards" },
      { header: "Touchdowns",   key: "touchdowns" },
    ],
    stats: [
      { year: "2010", games: 9,  receptions: 16,  targets: 19,  rec_yards: 167,  touchdowns: 0 },
      { year: "2011", games: 16, receptions: 69,  targets: 124, rec_yards: 1108, touchdowns: 2 },
      { year: "2012", games: 13, receptions: 66,  targets: 106, rec_yards: 787,  touchdowns: 5 },
      { year: "2013", games: 16, receptions: 110, targets: 166, rec_yards: 1499, touchdowns: 8 },
      { year: "2014", games: 16, receptions: 129, targets: 181, rec_yards: 1698, touchdowns: 13 },
      { year: "2015", games: 16, receptions: 136, targets: 193, rec_yards: 1834, touchdowns: 10 },
      { year: "2016", games: 15, receptions: 106, targets: 154, rec_yards: 1284, touchdowns: 12 },
      { year: "2017", games: 14, receptions: 101, targets: 163, rec_yards: 1533, touchdowns: 9 },
      { year: "2018", games: 15, receptions: 104, targets: 168, rec_yards: 1297, touchdowns: 15 },
      { year: "Total",    games: 130, receptions: 837, targets: 1274, rec_yards: 11507, touchdowns: 74 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Andrew McCutchen (MLB)
  // ─────────────────────────────────────────────────────────────────────────────
  andrew_mccutchen: {
    columns: [
      { header: "Year",             key: "year" },
      { header: "Games",            key: "games" },
      { header: "At-Bats",          key: "abs" },
      { header: "Hits",             key: "hits" },
      { header: "Batting Average",  key: "avg" },
      { header: "Runs Batted In",   key: "rbi" },
      { header: "Home Runs",        key: "hr" },
      { header: "Stolen Bases",     key: "sb" },
    ],
    stats: [
      { year: "2009", games: 108, abs: 433, hits: 124, avg: .286, rbi: 54, hr: 12, sb: 22 },
      { year: "2010", games: 154, abs: 570, hits: 163, avg: .286, rbi: 56, hr: 16, sb: 33 },
      { year: "2011", games: 158, abs: 572, hits: 148, avg: .259, rbi: 89, hr: 23, sb: 23 },
      { year: "2012", games: 157, abs: 593, hits: 194, avg: .327, rbi: 96, hr: 31, sb: 20 },
      { year: "2013", games: 157, abs: 583, hits: 185, avg: .317, rbi: 84, hr: 21, sb: 27 },
      { year: "2014", games: 146, abs: 548, hits: 172, avg: .314, rbi: 83, hr: 25, sb: 18 },
      { year: "2015", games: 157, abs: 566, hits: 165, avg: .292, rbi: 96, hr: 23, sb: 11 },
      { year: "2016", games: 153, abs: 598, hits: 153, avg: .256, rbi: 79, hr: 24, sb: 6 },
      { year: "2017", games: 156, abs: 570, hits: 159, avg: .279, rbi: 88, hr: 28, sb: 11 },
      { year: "2023", games: 112, abs: 390, hits: 100, avg: .256, rbi: 43, hr: 12, sb: 11 },
      { year: "2024", games: 120, abs: 448, hits: 104, avg: .232, rbi: 50, hr: 20, sb: 3 },
      { year: "2025", games: 124, abs: 435, hits: 106, avg: .244, rbi: 53, hr: 23, sb: 1 },
      { year: "Total",    games: 1545, abs: 5956, hits: 1763, avg: .296, rbi: 867, hr: 258, sb: 186 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Paul Skenes (MLB)
  // ─────────────────────────────────────────────────────────────────────────────
  paul_skenes: {
    columns: [
      { header: "Year",       key: "year" },
      { header: "Games",      key: "games" },
      { header: "Innings",    key: "ip" },
      { header: "ERA",        key: "era" },
      { header: "Strikeouts", key: "so" },
      { header: "Walks",      key: "bb" },
      { header: "Wins",       key: "w" },
      { header: "Losses",     key: "l" }
    ],
    stats: [
      { year: "2024", games: 23, ip: 133.0, era: 1.96, so: 170, bb: 32, w: 11, l: 3 },
      { year: "2025", games: 30, ip: 178.0, era: 1.92, so: 203, bb: 39, w: 10, l: 9 },
      { year: "Total", games: 53, ip: 311.0, era: 1.94, so: 373, bb: 71, w: 21, l: 12 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Aaron Donald (CFB)
  // ─────────────────────────────────────────────────────────────────────────────
  aaron_donald: {
    columns: [
      { header: "Year",    key: "year" },
      { header: "Games",   key: "games" },
      { header: "Tackles", key: "tackles" },
      { header: "Sacks",   key: "sacks" },
      { header: "FF",      key: "ff" },
      { header: "FR",      key: "fr" },
      { header: "INT",     key: "int" },
    ],
    stats: [
      { year: "2010", games: 13, tackles: 11, sacks: 2,   ff: 0, fr: 0, int: 0 },
      { year: "2011", games: 13, tackles: 47, sacks: 11,  ff: 0, fr: 0, int: 0 },
      { year: "2012", games: 12, tackles: 60, sacks: 5.5, ff: 1, fr: 0, int: 0 },
      { year: "2013", games: 13, tackles: 54, sacks: 11,  ff: 2, fr: 0, int: 0 },
      { year: "Total", games: 51, tackles: 172, sacks: 29.5, ff: 3, fr: 0, int: 0 }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LeSean McCoy (CFB)
  // ─────────────────────────────────────────────────────────────────────────────
  lesean_mccoy: {
    columns: [
      { header: "Year",           key: "year" },
      { header: "Games",          key: "games" },
      { header: "Rush Yards",     key: "rush_yards" },
      { header: "Receptions",     key: "receptions" },
      { header: "Recieving Yards", key: "rec_yards" }, 
      { header: "TDs",            key: "tds" },
    ],
    stats: [
      { year: "2007", games: 12, rush_yards: 1328, tds: 14 },
      { year: "2008", games: 13, rush_yards: 1488, tds: 21 },
      { year: "Total", games: 25, rush_yards: 2816, tds: 35 }
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Reusable table renderer
// Creates a <table> using provided columns + data and mounts it in `mount`
// ─────────────────────────────────────────────────────────────────────────────
function renderTable({ data, columns, mount }) {
  if (!mount) return; // no target node → nothing to do

  const table = document.createElement('table');
  table.setAttribute('aria-label', 'Athlete stats');

  // Build header row
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  columns.forEach(col => {
    const th = document.createElement('th');
    th.scope = 'col';
    th.textContent = col.header;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  // Build body rows
  const tbody = document.createElement('tbody');
  (data || []).forEach(row => {
    const tr = document.createElement('tr');
    columns.forEach(col => {
      const td = document.createElement('td');
      const val = row[col.key] ?? "";   // show blank if value is missing
      td.textContent = val;
      if (typeof val === 'number') td.style.textAlign = 'right'; // right-align numbers
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  // Clear and mount
  mount.innerHTML = '';
  table.append(thead, tbody);
  mount.appendChild(table);
}

// ─────────────────────────────────────────────────────────────────────────────
// Page wiring
// Reads which athlete to show from <body data-athlete="..."> and renders table
// ─────────────────────────────────────────────────────────────────────────────
function renderAthletePage() {
  const key = document.body.getAttribute('data-athlete'); // e.g., "mario_lemieux"
  const athlete = window.ATHLETES?.[key];
  if (!athlete) return;

  // Render stats table
  const tableMount = document.getElementById('stats-table');
  const columns = athlete.columns || inferColumns(athlete.stats);
  renderTable({ data: athlete.stats, columns, mount: tableMount });
}

// If columns aren’t provided, infer from first row (I got this from stackedflow)
function inferColumns(rows) {
  const first = (rows && rows[0]) || {};
  return Object.keys(first).map(k => ({
    header: k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    key: k
  }));
}

// Run after HTML is parsed
document.addEventListener('DOMContentLoaded', renderAthletePage);
