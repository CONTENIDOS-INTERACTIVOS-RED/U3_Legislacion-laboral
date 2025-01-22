<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 La contratación estatal es una herramienta fundamental que permite al Estado cumplir con su misión de satisfacer las necesidades de la sociedad y promover el bienestar general. A través de este proceso, se adquieren bienes, obras y servicios, indispensables para el desarrollo de la infraestructura, la prestación de servicios públicos y la ejecución de políticas que impactan positivamente en la calidad de vida de los ciudadanos. Por esta razón, es crucial que la contratación estatal se realice de manera transparente, eficiente y justa, garantizando la adecuada administración de los recursos públicos y fortaleciendo la confianza de la ciudadanía en las instituciones del Estado.
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          span Esta unidad tiene como objetivo profundizar en los principios y características que rigen la contratación estatal en Colombia, comprendiendo su importancia dentro de la gestión pública y su papel en la construcción de relaciones equitativas entre el sector público y los particulares.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .d-flex.mb-4.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.text-bold.mb-2 ¿Sabías que..?
        p.pe-xl-3.mb-0 La contratación estatal, no solo implica el cumplimiento de un marco normativo, sino que refleja el compromiso del Estado con la eficiencia del gasto público, el uso adecuado de los recursos y el cumplimiento de sus fines esenciales. Principios como la transparencia, la igualdad, la economía y la responsabilidad aseguran la participación equitativa de todos los interesados y promueven procesos justos, objetivos y enfocados en el bienestar general.

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 En esta unidad, el estudiante tendrá la oportunidad de explorar y analizar cómo estos principios orientan los procedimientos de contratación, desde la selección del contratista hasta el control y vigilancia de la ejecución de los contratos. Se abordarán las modalidades de contratación, los deberes y derechos de las partes involucradas y las consecuencias jurídicas y administrativas que se derivan del incumplimiento de las normas que regulan estos procesos.
        .d-flex.align-items-start.bg-rojo-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          span Al finalizar esta unidad, el estudiante no solo tendrá claridad sobre los principios y características que rigen la contratación estatal en Colombia, sino que contará con herramientas prácticas para analizar, identificar y resolver problemas relacionados con estos procesos. De este modo, podrá valorar la contratación estatal como un mecanismo indispensable para fortalecer la confianza ciudadana, la transparencia en la gestión pública y el cumplimiento de los fines del Estado.


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
