declare global {
  interface Window {
    ym?: (id: number, action: string, goal: string, params?: object) => void;
  }
}

const COUNTER_ID = 105973284;

export function reachGoal(goal: string, params?: object) {
  if (typeof window !== 'undefined' && typeof window.ym === 'function') {
    window.ym(COUNTER_ID, 'reachGoal', goal, params);
  }
}
