export default {
  addRequest(state: any, payload: any) {
    state.requests.push(payload);
  },
  setRequests(state: any, payload: any) {
    state.requests = payload;
  }
}