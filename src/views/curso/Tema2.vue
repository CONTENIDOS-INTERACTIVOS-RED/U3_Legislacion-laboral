<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Nulidad del contrato estatal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 En el ámbito de la contratación pública en Colombia, la nulidad del contrato estatal surge como una figura jurídica fundamental para garantizar el cumplimiento de los principios de legalidad, transparencia y eficiencia que rigen la gestión de los recursos públicos.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .d-flex.align-items-start(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-7.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 La contratación estatal, regulada principalmente por la Ley 80 de 1993, constituye un mecanismo clave para satisfacer las necesidades colectivas y cumplir con los fines esenciales del Estado. 

    p.mb-4(data-aos="fade-up") Sin embargo, cuando se presentan irregularidades que afectan la validez de un contrato, la declaratoria de nulidad se convierte en un mecanismo correctivo para restablecer el orden jurídico y proteger el interés general.
    p.mb-4(data-aos="fade-up") Para ampliar la información sobre la nulidad del contrato estatal, lo invitamos a escuchar el siguiente podcast.

    .row.mb-4
      .col-12.col-md-8.col-lg-6.mx-auto
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto='Proceso de descarga de Nulidad del contrato estatal'
          tiempo
          :audio="require('../../assets/componentes/audios/Nulidad del contrato_mezcla.mp3')"
          @audio-hover='mostrarIndicadorTarjetaAudio = false'
        )

    .d-flex.align-items-start.bg-rojo-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-8.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 La declaratoria de <b>nulidad</b>, tiene efectos significativos en la contratación estatal. En primer lugar, el contrato pierde su validez y se considera como si nunca hubiera existido. Esto implica la obligación de restituir las prestaciones recibidas entre las partes, como bienes, dinero o servicios entregados. 

    p.mb-4(data-aos="fade-up") Además, la nulidad puede generar responsabilidades administrativas, fiscales o penales para los servidores públicos y contratistas que actuaron de manera irregular. En este sentido, el Consejo de Estado ha reiterado que la nulidad del contrato es una herramienta indispensable para garantizar la correcta administración de los recursos públicos y evitar actos de corrupción (Sentencia CE-SC1778-2020).

    .bg-gris.p-4.mb-4(data-aos="fade-up")
      span En conclusión, la nulidad del contrato estatal en Colombia, es un mecanismo de control jurídico que garantiza la transparencia, legalidad y eficiencia en la contratación pública. A través de la declaratoria de nulidad, el Estado no solo protege el orden público y el interés general, sino que también restablece la confianza ciudadana en la administración de los recursos públicos. No obstante, su aplicación debe ser equilibrada, considerando tanto el cumplimiento estricto de la Ley como el impacto que su declaratoria puede tener en la función social y la utilidad del contrato. De esta manera, la nulidad del contrato estatal se consolida como una herramienta esencial para fortalecer el estado de derecho y garantizar la correcta ejecución de los fines del Estado.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1
        h2 Fundamento normativo en Colombia

    p.mb-4(data-aos="fade-up") La nulidad en los contratos estatales, está regulada por diferentes normas del ordenamiento jurídico colombiano:

    .bg-gris.p-4.mb-4(data-aos="fade-up")
      span <b>Ley 80 de 1993</b>. Es el Estatuto General de Contratación Pública y regula de manera específica, la contratación estatal. En su Artículo 44, establece las causales de nulidad que pueden afectar la validez de los contratos administrativos y dispone que ningún contrato puede ejecutarse si está viciado de nulidad.

    .row.mb-4
      .col-12.col-lg-6
        .bg-verde.p-4(data-aos="fade-up")
          span <b>Código Civil Colombiano (Artículos 1740 y siguientes)</b>. El Código Civil define la nulidad como la ineficacia de un contrato cuando se presentan vicios esenciales. Distingue entre nulidad absoluta y nulidad relativa, explicando sus causas y efectos.
      .col-12.col-lg-6
        .bg-amarillo.p-4(data-aos="fade-up")
          span <b>Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA)</b>. El CPACA regula los procedimientos para que las autoridades administrativas y los jueces competentes declaren la nulidad de los contratos, garantizando la transparencia y el debido proceso.

    .bg-gris.p-4.mb-4(data-aos="fade-up")
      span Estas disposiciones trabajan de manera conjunta, para asegurar que los contratos estatales se celebren conforme a los principios de legalidad, transparencia, eficiencia y selección objetiva, fundamentales en la contratación pública.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2
        h2 ¿Cuándo aplica la nulidad en la contratación estatal?

    p.mb-4(data-aos="fade-up") La nulidad del contrato estatal en Colombia, es una figura jurídica fundamental que busca garantizar que los contratos celebrados entre entidades públicas y particulares se ajusten a las normas y principios que regulan la contratación estatal. Esta figura protege el orden público, asegura la legalidad y resguarda los recursos públicos utilizados en los procesos contractuales. A continuación, se desarrolla de manera detallada la aplicación de la nulidad, sus fundamentos normativos y las diferencias entre nulidad absoluta y relativa, con ejemplos concretos.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .d-flex.align-items-start(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 La nulidad del contrato estatal aplica cuando existen violaciones a normas esenciales que afectan la validez del contrato. Estas irregularidades pueden ser <b>graves</b>, configurando nulidad absoluta, o <b>menos graves</b>, constituyendo nulidad relativa. 

    p.mb-4(data-aos="fade-up") A continuación, se detalla cada una:
    p.text-bold.mb-4(data-aos="fade-up") Nulidad absoluta
    p.mb-4(data-aos="fade-up") La nulidad absoluta se configura cuando el contrato presenta vicios graves que vulneran normas de orden público, principios fundamentales del derecho o cuando se afecta el interés general. Esta nulidad no admite subsanación, es decir, no puede corregirse. Además, puede ser solicitada por cualquier persona interesada, incluidas las autoridades públicas.
    p.mb-4 Las causales de nulidad absoluta, son:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Objeto ilícito', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-11.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Objeto ilícito
            p(data-aos='fade-up') Se presenta cuando el objeto del contrato es prohibido por la Ley o es contrario a la moral y al orden público.<br><br><b>Ejemplo</b>. Celebrar un contrato para la adquisición de armas ilegales o sustancias prohibidas.

      .tabs-content.border.px-4.p-md-5.py-3(titulo='Falta de competencia', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Falta de competencia
            p(data-aos='fade-up') Ocurre cuando la entidad pública o el funcionario que celebra el contrato no tiene la competencia legal para hacerlo.<br><br><b>Ejemplo</b>. Un contrato celebrado por un alcalde para ejecutar obras que exceden su ámbito de autoridad.

      .tabs-content.border.px-4.p-md-5.py-3(titulo='Violación de normas imperativas', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-13.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Violación de normas imperativas
            p(data-aos='fade-up') Se configura cuando no se cumplen las formalidades esenciales previstas en la Ley, como la realización de un proceso de licitación cuando este es obligatorio.<br><br><b>Ejemplo</b>. Adjudicar un contrato de alta cuantía por contratación directa sin justificación legal.

      .tabs-content.border.px-4.p-md-5.py-3(titulo='Contratos con personas inhabilitadas', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-14.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Contratos con personas inhabilitadas
            p(data-aos='fade-up') Ocurre cuando el contrato se celebra con una persona natural o jurídica que está inhabilitada legalmente para contratar con el Estado.<br><br><b>Ejemplo</b>. Contratar a una empresa sancionada por incumplimientos graves en contratos anteriores.


    p.text-bold.mb-4(data-aos="fade-up") Nulidad relativa
    p.mb-4 La nulidad relativa ocurre cuando el contrato presenta vicios menos graves que afectan su validez, pero que pueden ser subsanados por las partes o declarados nulos a solicitud de una parte interesada. Esta nulidad protege los intereses particulares de las partes, siempre y cuando no se vulnere el orden público.
    p.mb-4 Las causales de nulidad relativa, son:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Error en el consentimiento', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Error en el consentimiento
            p(data-aos='fade-up') Ocurre cuando una de las partes celebra el contrato debido a un engaño, dolo o fuerza, lo que afecta la voluntad con la que se firma el acuerdo.<br><br><b>Ejemplo</b>. Un contratista presenta información falsa que induce a error a la entidad estatal.

          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-15.png', alt='Descripción de la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Falta de capacidad legal', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Falta de capacidad legal
            p(data-aos='fade-up') Se configura cuando una de las partes carece de capacidad jurídica para celebrar el contrato.<br><br><b>Ejemplo</b>. La firma del contrato por parte de un representante legal sin autorización válida.

          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-16.png', alt='Descripción de la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Falta de formalidades no esenciales', :iconUrl="require('@/assets/curso/unidad/img-10.svg')")
        .row
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Falta de formalidades no esenciales
            p(data-aos='fade-up') Se presenta cuando existen errores formales menores que no afectan el objeto ni la causa del contrato.<br><br><b>Ejemplo</b>. Un error en las fechas o en algunos documentos anexos que pueden ser corregidos.

          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-17.png', alt='Descripción de la imagen')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.3
        h2 Declaratoria de nulidad y sus efectos

    p.mb-4(data-aos="fade-up") La declaratoria de nulidad es un mecanismo jurídico que garantiza la protección del orden jurídico y la transparencia en los contratos estatales.

    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Declaratoria de nulidad y sus efectos 
          p.mb-5(data-aos="fade-up") En el PDF Declaratoria de nulidad y sus efectos, se analiza cómo este proceso permite corregir irregularidades en los contratos, salvaguardando los recursos públicos y asegurando que se cumplan los principios de legalidad y eficiencia. Además, se estudian los efectos de la nulidad, como la restitución de prestaciones y la imposición de sanciones, lo que permite reflexionar sobre la importancia de un control riguroso en la contratación estatal para evitar actos que vulneren el interés general.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Declaratoria de nulidad y sus efectos.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/68925") Contratación estatal y registro único de proponentes (4 ed.)
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=gBWsPzDQF0o") [Vídeo] Contratación estatal - Mínima cuantía
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
