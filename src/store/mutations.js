export default {
  changeCity (state, city) {
    try {
      if (localStorage.city) {
        localStorage.city = city
        state.city = localStorage.city
      }
    } catch (e) {
      state.city = city
    }
  }
}
