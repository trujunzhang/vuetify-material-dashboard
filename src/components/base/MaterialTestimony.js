
export default {
  name: 'BaseMaterialTestimony',

  props: {
    author: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: 'https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg'
    },
    blurb: {
      type: String,
      default: ''
    },
    handle: {
      type: String,
      default: ''
    }
  }
}
