export const WEEKLY_SETTINGS_DOC = ['rankingSettings', 'weeklyCurrent'];

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

export const getCurrentWeekMeta = () => {
  const now = new Date();
  const year = now.getFullYear();
  const oneJan = new Date(year, 0, 1);
  const week = Math.ceil((((now - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
  return {
    weekKey: `${year}-W${String(week).padStart(2, '0')}`,
    weekLabel: `${year}年 第${week}週`
  };
};

export const createDefaultWeeklyRankingSettings = () => ({
  ...DEFAULT_WEEKLY_RANKING_SETTINGS,
  ...getCurrentWeekMeta()
});
