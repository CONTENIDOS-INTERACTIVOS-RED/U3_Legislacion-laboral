<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Formas de contratación pública (directa - pública o por licitación)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    

    p.mb-4 La contratación pública en Colombia, es un proceso reglado por la Ley 80 de 1993 (Estatuto General de Contratación Pública), la Ley 1150 del 2007 y normas complementarias. Estas leyes tienen como objetivo garantizar que el Estado adquiera bienes, servicios u obras de manera eficiente, transparente, objetiva y equitativa, respetando siempre los principios fundamentales de la contratación estatal: transparencia, economía, selección objetiva, responsabilidad y legalidad.

    .d-flex.align-items-start.bg-rojo-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-41.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Dentro de las formas de contratación pública más importantes, se encuentran la <b>contratación directa</b> y la <b>contratación pública o licitación</b>, las cuales se diferencian en su naturaleza, procedimiento y justificación legal. 

    p.text-bold.mb-4 Contratación directa

    p.mb-4 La contratación directa es una modalidad excepcional en la cual la entidad pública selecciona directamente al contratista sin llevar a cabo un proceso de selección abierto y competitivo, como lo sería la licitación pública. Sin embargo, su uso está estrictamente regulado y justificado por la Ley, dado que su carácter excepcional puede, si no se maneja con transparencia, afectar los principios de igualdad y competencia.

    p.mb-4 Características de la contratación directa:

    
    .row.mb-4
      .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Carácter excepcional
            p.text-small.px-4.text-center.pb-2 Solo puede realizarse en los casos expresamente señalados por la Ley.
      .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Rapidez en el procedimiento
            p.text-small.px-4.text-center.pb-2 Al no requerir licitación, permite una selección más ágil del contratista.
      .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Fundamentación legal
            p.text-small.px-4.text-center.pb-2 La entidad debe justificar plenamente por qué recurre a la contratación directa.
      .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Sujeta a control
            p.text-small.px-4.text-center.pb-2 Aunque es directa, no está exenta de vigilancia por organismos de control como la Contraloría y la Procuraduría.

    p.mb-4 La contratación directa es una modalidad excepcional en la que la entidad pública selecciona al contratista sin realizar un proceso de selección competitivo y abierto, como ocurre en la licitación. Aunque su procedimiento es más rápido y simplificado, su uso está estrictamente limitado a las causales establecidas en la Ley, puesto que debe ser plenamente justificado para evitar que se vulneren los principios de igualdad y transparencia.

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-verde-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-47.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Las principales causales de <b>contratación directa</b> incluyen situaciones de urgencia manifiesta, cuando ocurren emergencias que requieren atención inmediata, como la reparación de un hospital dañado por un desastre natural. También se permite la contratación directa en contratos interadministrativos, es decir, aquellos celebrados entre entidades públicas, y en casos donde es necesario adquirir bienes o servicios de proveedores exclusivos. 
        p.mb-0 Además, esta modalidad se aplica en la contratación de servicios profesionales especializados que no pueden ser realizados por el personal de la entidad, como asesorías técnicas o jurídicas, y en el arrendamiento de inmuebles cuando se requiere espacio físico específico para el funcionamiento administrativo. 

    .row.bg-fondo-3.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        p.text-bold.mb-4 Contratación pública o licitación

        p.mb-4 La licitación pública es la forma ordinaria de contratación estatal en Colombia y constituye el mecanismo más transparente y equitativo para seleccionar contratistas. Mediante este proceso, las entidades estatales convocan a los interesados para que compitan públicamente, presentando sus propuestas con base en criterios objetivos de evaluación.
        p.mb-4 Características de la licitación pública:
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-47.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Carácter ordinario
              p.px-1.text-small.mb-0.d-flex.text-center Es la regla general para la contratación de bienes, servicios y obras.
          .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-48.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Competencia abierta
              p.px-1.text-small.mb-0.d-flex.text-center Cualquier interesado que cumpla los requisitos puede participar en igualdad de condiciones.
          .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-49.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Transparencia
              p.px-1.text-small.mb-0.d-flex.text-center Todo el proceso es público y se debe publicar en el SECOP (Sistema Electrónico de Contratación Pública).
          .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-50.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Criterios objetivos de selección
              p.px-1.text-small.mb-0.d-flex.text-center Las propuestas se evalúan de manera objetiva, basándose en criterios técnicos, económicos y jurídicos previamente definidos.

    p.mb-4 Fases del proceso de licitación pública:

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-51.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='67%' y='8%' numero='+')
        .h5.mb-2 Apertura del proceso
        p La entidad estatal publica el pliego de condiciones, que establece los requisitos técnicos, económicos y legales para participar.
      .tarjeta.bg-white.p-4(x='71%' y='28%' numero='+')
        .h5.mb-2 Recepción de propuestas
        p Los interesados presentan sus ofertas dentro del plazo señalado.
      .tarjeta.bg-white.p-4(x='74%' y='49%' numero='+')
        .h5.mb-2 Evaluación de las propuestas
        p Se califican las ofertas, conforme a los criterios de evaluación establecidos.
      .tarjeta.bg-white.p-4(x='71%' y='70%' numero='+')
        .h5.mb-2 Adjudicación del contrato
        p Se selecciona la oferta que mejor cumple con los requisitos y condiciones.
      .tarjeta.bg-white.p-4(x='67%' y='89%' numero='+')
        .h5.mb-2 Firma y ejecución del contrato
        p Se formaliza el acuerdo y se inicia la ejecución del objeto contratado.

    p.mb-4 <b>Tabla 1.</b> Comparación entre contratación directa y licitación pública

    .row.mb-4
      .col-12.col-md-10.mx-auto
        .tabla-a
          table
            thead
              tr
                th.text-center.text-white.bg-verde-oscuro(width="28%") Aspecto 
                th.text-center.text-white.bg-verde-oscuro Contratación directa
                th.text-center.text-white.bg-verde-oscuro Licitación pública
            tbody
              tr
                td.text-center.text-bold.bg-verde-claro Naturaleza
                td.text-center.bg-verde-claro Excepcional.
                td.text-center.bg-verde-claro Ordinaria.
              tr
                td.text-center.text-bold.bg-verde-claro Competencia
                td.text-center.bg-verde-claro No se realiza competencia abierta.
                td.text-center.bg-verde-claro Competencia abierta y equitativa.
              tr
                td.text-center.text-bold.bg-verde-claro Justificación
                td.text-center.bg-verde-claro Requiere una causal legal específica.
                td.text-center.bg-verde-claro Es el proceso general para contratos estatales.
              tr
                td.text-center.text-bold.bg-verde-claro Procedimiento
                td.text-center.bg-verde-claro Más rápido y simplificado.
                td.text-center.bg-verde-claro Requiere fases de convocatoria, evaluación y adjudicación.
              tr
                td.text-center.text-bold.bg-verde-claro Ejemplo
                td.text-center.bg-verde-claro Reparación urgente de un hospital dañado.
                td.text-center.bg-verde-claro Construcción de una carretera por licitación.
            
    .bg-gris.p-4.mb-4(data-aos="fade-up")
      span Las formas de contratación pública, tanto la contratación directa como la licitación pública, son herramientas fundamentales en la administración estatal, para adquirir bienes, servicios y obras con eficiencia y transparencia. Mientras que la licitación pública constituye la regla general y promueve la competencia abierta, la contratación directa responde a situaciones excepcionales que deben estar plenamente justificadas.

    p.mb-5 El adecuado uso de estas modalidades, garantiza que la gestión de recursos públicos se realice conforme a los principios de legalidad, transparencia y responsabilidad, asegurando que las obras, bienes y servicios contratados contribuyan efectivamente al interés general y al desarrollo del país.


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
