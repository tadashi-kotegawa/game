export const WEEKLY_SETTINGS_DOC = ['rankingSettings', 'weeklyCurrent'];
export const SEASON_SCHEDULE_DOC = ['rankingSettings', 'seasonSchedule'];

export const DEFAULT_WEEKLY_RANKING_SETTINGS = {
  duration: 60,
  gameMode: 'normal',
  realMode: true,
  lives: 3,
  weakKeyRate: 0,
  ignoreVowels: false
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const normalizeWeeklyRankingSettings = (raw = {}) => {
  const duration = Number(raw.duration);
  const lives = Number(raw.lives);
  return {
    ...DEFAULT_WEEKLY_RANKING_SETTINGS,
    duration: Number.isFinite(duration) ? clamp(Math.round(duration), 30, 300) : DEFAULT_WEEKLY_RANKING_SETTINGS.duration,
    lives: Number.isFinite(lives) ? clamp(Math.round(lives), 1, 10) : DEFAULT_WEEKLY_RANKING_SETTINGS.lives,
    gameMode: raw.gameMode === 'legal' ? 'legal' : 'normal',
    realMode: Boolean(raw.realMode)
  };
};

const toDateString = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const addDays = (dateOrStr, n) => {
  const d = typeof dateOrStr === 'string' ? new Date(dateOrStr + 'T00:00:00') : new Date(dateOrStr);
  d.setDate(d.getDate() + n);
  return d;
};

const DAY_NAMES = ['日', '月', '火', '水', '木', '金', '土'];

export const buildSeasonLabel = (startDate, endDate) => {
  const s = new Date(startDate + 'T00:00:00');
  const e = new Date(endDate + 'T00:00:00');
  return `${s.getMonth() + 1}/${s.getDate()}(${DAY_NAMES[s.getDay()]})〜${e.getMonth() + 1}/${e.getDate()}(${DAY_NAMES[e.getDay()]})`;
};

export const getCurrentWeekMeta = () => {
  const now = new Date();
  const day = now.getDay();
  const daysToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + daysToMonday);
  monday.setHours(0, 0, 0, 0);
  const startDate = toDateString(monday);
  const endDate = toDateString(addDays(monday, 6));
  return {
    weekKey: startDate,
    weekLabel: buildSeasonLabel(startDate, endDate)
  };
};

export const findCurrentSeason = (seasons) => {
  if (!Array.isArray(seasons) || seasons.length === 0) return null;
  const todayStr = toDateString(new Date());
  return seasons.find(s => s.startDate <= todayStr && s.endDate >= todayStr) || null;
};

export const createDefaultWeeklyRankingSettings = () => ({
  ...DEFAULT_WEEKLY_RANKING_SETTINGS,
  ...getCurrentWeekMeta()
});
