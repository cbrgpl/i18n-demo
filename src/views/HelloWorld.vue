

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="$emit('changeLang', count++)"> {{ $t("preview.countButton") }} {{ count }}</button>

  <i18n-t keypath="preview.editTitle" tag="p">
    <template #what>
      <code>components/HelloWorld.vue</code>
    </template>
  </i18n-t>

  </div>



    <i18n-t keypath="preview.checkOut" tag="p" for="preview.checkOutWhat">
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" >
        {{ $t('preview.checkOutWhat') }}
      </a>
    </i18n-t>

  <i18n-t keypath="preview.checkOut" tag="p" for="preview.installVolar">
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">
      {{ $t('preview.installVolar') }}
    </a>
  </i18n-t>  

  <p class="read-the-docs">{{ $t('preview.readDocs') }}</p>
</template>

<script>

// "Интерфейс" страницы
const viewMix = {
  emits: [ 'mounted' ],
  mounted() {
    this.$emit('mounted')
  },
}

export default {
  name: 'HelloWorld',
  emits: ['changeLang'],
  mixins: [ viewMix ],
  props: {
    msg: {
      type: String,
    }
  },
  data() {
    return {
      count: 0
    }
  },
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
