export default {
  requests(state: any, _: any, _2: any, rootGetters: any) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req: any) => req.coachId === coachId);
  },
  hasRequests(_: any, getters: any) {
    return getters.requests && getters.requests.length > 0;
  }
}