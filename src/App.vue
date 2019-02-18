<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapGetters(['loadingState'])
  },

  watch: {
    loadingState(newValue) {
    }
  }

}
</script>
