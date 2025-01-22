<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Clases de contratos administrativos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La contratación estatal es un proceso clave para que el Estado garantice el bienestar general mediante la adquisición de bienes y servicios necesarios para atender las necesidades públicas.
    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Contratación estatal
          p.mb-5(data-aos="fade-up") En el PDF Contratación estatal, se analizan los principios fundamentales que rigen estos procesos, como la transparencia, la economía y la responsabilidad, así como las características esenciales que aseguran su legalidad y eficacia. Este documento invita a reflexionar sobre la importancia de gestionar los recursos públicos de manera eficiente y ética, promoviendo la confianza ciudadana y el cumplimiento de los fines del Estado.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Contratación estatal.

    p.mb-4(data-aos="fade-up") La Ley 80 de 1993, conocida como el Estatuto General de la Contratación Pública, establece los diferentes tipos de contratos estatales que las entidades públicas pueden utilizar para satisfacer las necesidades colectivas y cumplir con sus fines constitucionales. Estos contratos varían en naturaleza, objeto y finalidad, permitiendo que las entidades cuenten con mecanismos flexibles y adecuados para garantizar el interés general. A continuación, se detallan los principales tipos de contratos estatales, su definición, características y ejemplos concretos.

    .row.mb-4
      .col-12.col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Contrato de obra pública")
            p El contrato de obra pública es aquel mediante el cual una entidad estatal contrata la construcción, mantenimiento, reparación o demolición de una obra física de infraestructura que beneficie a la comunidad. Está regulado principalmente por la Ley 80 de 1993 y debe seguir los principios de transparencia y selección objetiva en su adjudicación.<br>Características:<br>●	La obra debe estar determinada en planos, especificaciones y presupuestos.<br>●	Se realiza con base en un pliego de condiciones que define los términos técnicos y financieros.<br>●	Requiere vigilancia y control para asegurar la calidad y el cumplimiento del contrato.<br>Ejemplo. La construcción de una vía terciaria en una zona rural, adjudicada por el Ministerio de Transporte mediante licitación pública, donde el contratista se compromete a ejecutar la obra cumpliendo con el presupuesto y cronograma establecidos.

          .div(titulo="Contrato de suministro")
            p El contrato de suministro tiene como objeto la adquisición de bienes necesarios para el funcionamiento de una entidad estatal o para el desarrollo de sus funciones. El proveedor se obliga a entregar periódicamente los bienes o productos solicitados bajo los términos pactados.<br>Características:<br>●	Permite la entrega continua o periódica de bienes.<br>●	Se ajusta a los requerimientos específicos de la entidad contratante.<br>●	Debe garantizar el cumplimiento de la calidad y las condiciones pactadas.<br>Ejemplo. El suministro de material hospitalario (guantes, medicamentos y equipos médicos) para una red pública de hospitales, adjudicado mediante un proceso de contratación directa por razones de urgencia manifiesta.

          .div(titulo="Contrato de prestación de servicios")
            p El contrato de prestación de servicios es aquel mediante el cual una entidad estatal contrata a una persona natural o jurídica para realizar actividades o servicios especializados, que no pueden ser ejecutados directamente por la entidad. Está regulado por la Ley 80 de 1993 y el Código Sustantivo del Trabajo, estableciendo que este contrato no genera relación laboral.<br>Características:<br>●	El contratista presta un servicio autónomo e independiente.<br>●	Tiene una duración limitada y su ejecución debe ser claramente definida.<br>●	No puede ser utilizado para suplir funciones permanentes de la entidad.<br>Ejemplo. La contratación de un abogado experto para representar a una entidad pública en un litigio de gran complejidad, mediante una contratación directa por calidad y experiencia.

          .div(titulo="Contrato de concesión")
            p El contrato de concesión permite a una entidad estatal otorgar a un particular el derecho de explotar económicamente un bien o prestar un servicio público, a cambio de inversiones y contraprestaciones pactadas. Se encuentra regulado por la Ley 80 de 1993 y la Ley 1508 del 2012 (Asociaciones Público-Privadas, APP).<br>Características:<br>●	El concesionario realiza inversiones para ejecutar la prestación del servicio.<br>●	Generalmente, implica la construcción, operación y mantenimiento de obras públicas.<br>●	El concesionario asume riesgos económicos y operativos.<br>Ejemplo. La concesión de una autopista de peaje, donde un particular construye, mantiene y opera la vía durante 30 años, recuperando su inversión mediante el cobro de tarifas a los usuarios.

      .col-12.col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Contrato de arrendamiento")
            p El contrato de arrendamiento estatal se celebra cuando una entidad pública requiere el uso o goce temporal de bienes inmuebles o muebles necesarios para cumplir con sus funciones administrativas o de servicio público. Este contrato está regulado por la Ley 80 de 1993 y debe respetar los principios de legalidad y transparencia en su adjudicación.<br>Características:<br>●	Se establece un pago periódico (canon de arrendamiento) a cambio del uso del bien.<br>●	Puede aplicarse tanto a bienes muebles (equipos, mobiliario) como a bienes inmuebles (oficinas, terrenos).<br>●	Debe formalizarse mediante un contrato escrito con términos claros, como duración, costos y condiciones de uso.<br>Ejemplo. El arrendamiento de un edificio por parte de una alcaldía municipal para el funcionamiento de sus dependencias administrativas durante un año, seleccionado a través de un proceso de contratación directa debido a necesidades específicas de espacio y ubicación.

          .div(titulo="Contrato de consultoría")
            p El contrato de consultoría tiene como objeto la realización de estudios, diseños, proyectos, asesorías técnicas o diagnósticos especializados que requieren un alto nivel de conocimiento técnico o profesional. Estos contratos permiten a las entidades acceder a experticia externa para desarrollar proyectos estratégicos o tomar decisiones informadas.<br>Características:<br>●	Se enfoca en actividades intelectuales y no manuales.<br>●	El consultor debe contar con experiencia y formación técnica certificada.<br>●	Involucra procesos de análisis, investigación y diagnóstico.<br>●	Debe garantizar resultados concretos, como informes, estudios o diseños específicos.<br>Ejemplo. La contratación de una firma de ingenieros para realizar el estudio de factibilidad técnica y económica de un sistema de transporte público en una ciudad, evaluando costos, impacto ambiental y viabilidad del proyecto.

          .div(titulo="Contrato de interventoría")
            p El contrato de interventoría tiene como propósito supervisar y controlar la ejecución de otros contratos estatales, asegurando que se cumplan las especificaciones técnicas, legales y financieras pactadas. La interventoría actúa como un tercero imparcial que vela por la correcta ejecución del contrato.<br>Características:<br>●	Garantiza la transparencia y calidad en la ejecución de contratos.<br>●	Implica actividades de seguimiento, control y verificación.<br>●	La interventoría puede ser técnica, administrativa o financiera, dependiendo de las necesidades del contrato.<br>●	El interventor debe presentar informes periódicos sobre el avance del contrato y posibles incumplimientos.<br>Ejemplo. La contratación de una firma especializada en interventoría para supervisar la construcción de una escuela pública, verificando que la obra se ejecute conforme a los planos, especificaciones técnicas, presupuestos y cronograma acordados.

          .div(titulo="Contrato de fiducia pública")
            p El contrato de fiducia pública se celebra cuando una entidad estatal entrega bienes o recursos a una sociedad fiduciaria (entidad financiera) para que los administre y ejecute conforme a las instrucciones específicas establecidas en el contrato. Su finalidad es garantizar la correcta administración de los recursos destinados al cumplimiento de fines públicos.<br>Características:<br>●	La fiduciaria actúa como un administrador de recursos, siguiendo las instrucciones del contratante (entidad estatal).<br>●	Permite una gestión más eficiente y segura de los recursos públicos.<br>●	Su ejecución debe ser transparente, con rendición de cuentas periódica.<br>●	Es utilizada especialmente en proyectos de gran envergadura que requieren una administración financiera organizada.<br>Ejemplo. Un contrato de fiducia pública para administrar los recursos destinados a la construcción de infraestructura educativa, como colegios en zonas rurales, asegurando que los fondos se utilicen de manera controlada y efectiva en el desarrollo del proyecto.

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span      La correcta aplicación de los tipos de contrato estatal permite a las entidades públicas cumplir con su misión de manera eficiente y transparente. Cada tipo de contrato responde a necesidades específicas, reguladas por la Ley y alineadas con los principios de transparencia, selección objetiva, eficiencia y responsabilidad, garantizando que los recursos públicos se usen en beneficio de la comunidad.

    p.mb-5 Estos contratos son fundamentales para ejecutar proyectos de infraestructura, adquirir bienes esenciales y prestar servicios especializados, contribuyendo al desarrollo económico y social del país y al bienestar de la población.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/123155") Manual básico de Derecho Administrativo (14 ed.)
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank" href="https://www.youtube.com/watch?v=FC_6EQ7TGNg") [Vídeo] Contratación estatal en Colombia - Curso básico 1
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
