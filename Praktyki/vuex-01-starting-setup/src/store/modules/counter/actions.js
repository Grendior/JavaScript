export default {
    increase(context) {
        setTimeout(function () {
            context.commit('increase');
        }, 2000);
    },
    increment(context, payload) {
        context.commit('increment', payload);
    },
}