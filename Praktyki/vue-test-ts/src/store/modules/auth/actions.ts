let timer;
export default {
  async login(context:any, payload:any) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context:any, payload:any) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context:any, payload:any) {
    const mode = payload.mode;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlDvixT5jb_hSx-lb7Y0H9FwliqHS39UM';

    if (mode === 'signup') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlDvixT5jb_hSx-lb7Y0H9FwliqHS39UM';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json();

    if (!(response).ok) {
      const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
      throw error;
    }
    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.token = responseData.idToken;
    localStorage.userId = responseData.localId;
    // localStorage.setItem('tokenExpiration', 'expirationDate');
    localStorage.tokenExpiration = expirationDate;


    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  tryLogin(context:any) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    let expiresIn = -1;
    if (tokenExpiration) {
       expiresIn = +tokenExpiration - new Date().getTime();
    }

    if (expiresIn < 0) {
      return;
    }

    // timer = setTimeout(function () {
    //   context.dispatch('autoLogout');
    // }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      })

    }
  },
  logout(context:any) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    // clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
  autoLogout(context:any) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
}