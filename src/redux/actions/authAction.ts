import Swal from 'sweetalert2';
import {
  AUTH_ERROR, LOGIN, LOGOUT, REGISTER,
} from './types';

export const loginViaForm = (data: any) => async (dispatch: (arg0: { type: string; payload: any; user: any; }) => void) => {
  try {
    const response = await fetch('http://localhost:8046/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    const userInfo = await fetch('http://localhost:8046/api/v1/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${result.token}`,
      },
    });
    const user = JSON.parse(JSON.stringify(await userInfo.json()));

    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
        user,
      });
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      authError(result.error);
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Login Failed',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    authError(error);
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Email or Password is incorrect',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const registerViaForm = (data: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    const response = await fetch('http://localhost:8046/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    dispatch({
      type: REGISTER,
      payload: result.user,
    });

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Registration Successful',
      showConfirmButton: false,
      timer: 1500,
    });

    window.location.href = '/login';
  } catch (error) {
    authError(error);
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Registration Failed',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const authError = (error: { message: any; }) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const logout = () => async (dispatch: (arg0: { type: string; }) => void) => {
  dispatch({
    type: LOGOUT,
  });
  Swal.fire({
    position: 'top',
    icon: 'info',
    title: 'Logout Successful',
    showConfirmButton: false,
    timer: 1500,
  });
};

export const loginWithGoogle = (accessToken: any) => async (dispatch: (arg0: { type: string; payload: any; user: any; }) => void) => {
  try {
    const data = {
      access_token: accessToken,
    };
    const response = await fetch('http://localhost:8046/api/v1/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    const userInfo = await fetch('http://localhost:8046/api/v1/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${result.token}`,
      },
    });
    const user = JSON.parse(JSON.stringify(await userInfo.json()));

    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
        user,
      });
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      authError(result.error);
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Login Failed',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    authError(error);
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Login Failed',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
