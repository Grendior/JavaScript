export default {
  addCoach(state:any, payload:any) {
    state.coaches.push(payload)
  },
  setCoaches(state:any, payload:any) {
    state.coaches = payload;
  },
  setFetchTimestamp(state: any) {
    state.lastFetch = new Date().getTime();
  }
};
