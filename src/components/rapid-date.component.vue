<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" 
            type="button" id="dropdownMenu2" 
            data-toggle="dropdown" aria-haspopup="true" 
            aria-expanded="false">
      <i class="fa fa-calendar fa-lg" aria-hidden="true"></i>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
 			<div v-for="(item, index) in items">
        <button class="dropdown-item" type="button" @click="handleClick(index)">{{ item.name }}</button>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  name: 'rapidate',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return { }
  },
  methods: {
    /**
     * Gère l'évenement du click sur un choix
     * @argument index id du choix
     * @event updDate Object date
     */
    handleClick (index) {
      /* Semaine flottante: -7 à ajd */
      const SFLOT = 0;
      /* Semaine en cours: dimanche x / samedi x + 7 */
      const SCOUR = 1;
      /* Mois flottant: -1 à ajd */
      const MFLOT = 2;
      /* Mois en cours: 01/xx au 30(1)/xx */
      const MCOUR = 3;
      /* Année dernière: 01/01/xxxx-1 au 31/12/xxxx-1 */
      const ALAST = 4;
      /* Année en cours: 01/01/xxxx au 31/12/xxxx */
      const ATHIS = 5;

      let periode = {
        debut: Date,
        fin: Date
      };

      switch (index) {
        case SFLOT:
          periode.debut = moment().subtract(7, 'days');
          periode.fin   = moment();
          break;
        case SCOUR:
          periode.debut = moment().startOf('week');
          periode.fin   = moment().endOf('week');
          break;
        case MFLOT:
          periode.debut = moment().subtract(1, 'month');
          periode.fin   = moment();
          break;
        case MCOUR:
          periode.debut = moment().startOf('month');
          periode.fin   = moment().endOf('month');
          break;
        case ALAST:
          periode.debut = moment().startOf('year').subtract(1, 'year');
          periode.fin   = moment().subtract(1, 'year').endOf('year');
          break;
        case ATHIS:
          periode.debut = moment().startOf('year');
          periode.fin   = moment().endOf('year');
          break;
      }
      this.$emit('updDate', periode);
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 100%;
  overflow: hidden;
}

ul li {
  display: inline-block;
  width: 100%;
  flex-wrap: wrap;
  background: white;
  margin: 0;
  border-bottom: 1px solid #eee;
  color: #363636;
  padding: 7px;
  cursor: pointer;
}
ul li.highligth {
  background: #f8f8f8
}
</style>
