export default {
  changeCity (state, city) {
    try {
      // alert(localStorage.city)
      if (localStorage.city) {
        localStorage.city = city
        state.city = localStorage.city
      } else {
        localStorage.city = city
        state.city = localStorage.city
      }
    } catch (e) {
      state.city = city
    }
  }
}
