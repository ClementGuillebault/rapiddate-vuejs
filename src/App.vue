<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-6">
        <rapidate :items="items" @updDate="updDatePicker"></rapidate>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-addon">Début</span>
          <datepicker language="fr" id="dtdebut" v-model="periode.debut" class="dtp"></datepicker>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-addon">Fin</span>
            <datepicker language="fr" id="dtfin" v-model="periode.fin" class="dtp"></datepicker>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Rapidate from './components/rapid-date.component.vue';
import Datepicker from 'vuejs-datepicker';

let periode = {
  debut: new Date(),
  fin: new Date()
}

export default {
  name: 'app',
  data () {
    return {
      items: [
        { name: 'Semaine flottante' },
        { name: 'Semaine en cours' },
        { name: 'Mois flottant' },
        { name: 'Mois en cours' },
        { name: 'L\'année dernière' },
        { name: 'Année en cours' }
      ],
      periode: {
        debut: periode.debut,
        fin: periode.fin
      }
    }
  },
  components: {
    Rapidate,
    Datepicker
  },
  methods: {
    updDatePicker ($event) {
      this.periode.debut = $event.debut._d;
      this.periode.fin   = $event.fin._d;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dtfin, #dtdebut {
  text-align: center;
}
.dtp {
  line-height: 2;
}
</style>
