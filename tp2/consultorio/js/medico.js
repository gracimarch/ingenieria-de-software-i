/**
 * Centro Médico Andino — JavaScript adicional
 */

(function ($) {
  'use strict';

  /* ==========================================================================
     1. DATOS — Profesionales por especialidad
     ========================================================================== */
  var profesionalesPorEspecialidad = {
    'clinica-medica': [
      { nombre: 'Dr. Alejandro Peralta', matricula: 'M.N. 12.345' },
      { nombre: 'Dra. Laura Figueroa', matricula: 'M.N. 14.782' }
    ],
    'cardiologia': [
      { nombre: 'Dr. Lucas Mendoza', matricula: 'M.N. 11.230' }
    ],
    'pediatria': [
      { nombre: 'Dra. Sofía Cortínez', matricula: 'M.N. 14.890' },
      { nombre: 'Dr. Santiago Peralta', matricula: 'M.N. 29.631' }
    ],
    'ginecologia': [
      { nombre: 'Dra. Cecilia Navarro', matricula: 'M.N. 18.204' }
    ],
    'dermatologia': [
      { nombre: 'Dra. Valentina Paz', matricula: 'M.N. 15.612' }
    ],
    'traumatologia': [
      { nombre: 'Dr. Lucas Méndez', matricula: 'MP 27.113' }
    ],
    'oftalmologia': [
      { nombre: 'Dr. Roberto Aguilar', matricula: 'MP 41.256' }
    ],
    'nutricion': [
      { nombre: 'Lic. Paola Carrizo', matricula: 'MP 8.904' }
    ],
    'psicologia': [
      { nombre: 'Lic. Daniela Vega', matricula: 'MP 6.482' },
      { nombre: 'Lic. Iván Torres', matricula: 'MP 7.190' }
    ]
  };

  /* ==========================================================================
     2. FORMULARIO DE TURNOS — Populate profesionales dinámicamente
     ========================================================================== */
  var $selectEspecialidad = $('#turno-especialidad');
  var $selectProfesional  = $('#turno-profesional');

  $selectEspecialidad.on('change', function () {
    var esp = $(this).val();
    $selectProfesional.empty().append('<option value="">-- Seleccioná un profesional --</option>');

    if (esp && profesionalesPorEspecialidad[esp]) {
      $.each(profesionalesPorEspecialidad[esp], function (i, prof) {
        $selectProfesional.append(
          $('<option>').val(prof.matricula).text(prof.nombre + ' (' + prof.matricula + ')')
        );
      });
      $selectProfesional.prop('disabled', false);
    } else {
      $selectProfesional.prop('disabled', true);
    }
  });

  // Inicializar select profesional como deshabilitado
  $selectProfesional.prop('disabled', true);

  /* ==========================================================================
     3. FORMULARIO DE TURNOS — Fecha mínima (hoy + 1)
     ========================================================================== */
  var $fechaInput = $('#turno-fecha');
  if ($fechaInput.length) {
    var hoy = new Date();
    hoy.setDate(hoy.getDate() + 1);
    var yyyy = hoy.getFullYear();
    var mm   = String(hoy.getMonth() + 1).padStart(2, '0');
    var dd   = String(hoy.getDate()).padStart(2, '0');
    $fechaInput.attr('min', yyyy + '-' + mm + '-' + dd);
  }

  /* ==========================================================================
     4. FORMULARIO DE TURNOS — Validación y confirmación
     ========================================================================== */
  $('#formularioTurno').on('submit', function (e) {
    e.preventDefault();

    var valido = true;
    var $form  = $(this);

    // Limpiar estados previos
    $form.find('.form-control, .form-select').removeClass('is-invalid is-valid');

    // Validar cada campo requerido
    $form.find('[required]').each(function () {
      var $field = $(this);
      var valor  = $field.val().trim();

      if (!valor) {
        $field.addClass('is-invalid');
        valido = false;
      } else {
        // Validaciones específicas
        if ($field.attr('id') === 'turno-dni') {
          if (!/^\d{7,8}$/.test(valor)) {
            $field.addClass('is-invalid');
            $field.siblings('.invalid-feedback').text('Ingresá un DNI válido (7 u 8 dígitos).');
            valido = false;
          } else {
            $field.addClass('is-valid');
          }
        } else if ($field.attr('type') === 'email') {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            $field.addClass('is-invalid');
            $field.siblings('.invalid-feedback').text('Ingresá un email válido.');
            valido = false;
          } else {
            $field.addClass('is-valid');
          }
        } else if ($field.attr('type') === 'tel') {
          if (!/^[\d\s\-\+]{8,15}$/.test(valor)) {
            $field.addClass('is-invalid');
            $field.siblings('.invalid-feedback').text('Ingresá un teléfono válido.');
            valido = false;
          } else {
            $field.addClass('is-valid');
          }
        } else {
          $field.addClass('is-valid');
        }
      }
    });

    if (!valido) {
      // Scroll suave al primer error
      var $primerError = $form.find('.is-invalid').first();
      if ($primerError.length) {
        $('html, body').animate({
          scrollTop: $primerError.offset().top - 120
        }, 400);
      }
      return;
    }

    // Mostrar spinner en botón
    var $btn = $form.find('#btnSolicitarTurno');
    var textoOriginal = $btn.html();
    $btn.prop('disabled', true).html(
      '<span class="spinner-border spinner-border-sm mr-2" role="status"></span> Enviando...'
    );

    // Procesamiento asíncrono (300–800ms)
    setTimeout(function () {
      $btn.prop('disabled', false).html(textoOriginal);

      // Construir resumen para el modal
      var nombreCompleto = $('#turno-nombre-completo').val() || (($('#turno-nombre').val() || '') + ' ' + ($('#turno-apellido').val() || '')).trim() || 'Paciente';
      var especialidad   = $selectEspecialidad.find('option:selected').text() || 'A confirmar';
      var profesional    = ($selectProfesional.length && $selectProfesional.find('option:selected').text()) || 'A coordinar con admisiones';
      var fecha          = $('#turno-fecha').length ? formatearFecha($('#turno-fecha').val()) : 'A coordinar telefónicamente';
      var horario        = $('#turno-horario').length ? $('#turno-horario').val() : 'A coordinar telefónicamente';

      $('#resumen-nombre').text(nombreCompleto);
      $('#resumen-especialidad').text(especialidad);
      $('#resumen-profesional').text(profesional);
      $('#resumen-fecha').text(fecha);
      $('#resumen-horario').text(horario || 'A confirmar');

      // Generar número de turno
      var numTurno = 'CMA-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 89999);
      $('#resumen-numero').text(numTurno);

      // Abrir modal de éxito
      $('#modalTurnoExito').modal('show');

      // Resetear formulario
      $form[0].reset();
      $form.find('.form-control, .form-select').removeClass('is-invalid is-valid');
      $selectProfesional.prop('disabled', true)
        .html('<option value="">-- Seleccioná un profesional --</option>');

    }, Math.floor(300 + Math.random() * 500));
  });

  /* ==========================================================================
     5. BOTONES "Solicitar Turno" en tarjetas de profesionales
     ========================================================================== */
  $(document).on('click', '.btn-turno-rapido', function (e) {
    e.preventDefault();
    var esp  = $(this).data('especialidad');
    var prof = $(this).data('profesional');

    // Pre-seleccionar especialidad
    if ($selectEspecialidad.length && esp) {
      $selectEspecialidad.val(esp).trigger('change');
      // Esperar populate y pre-seleccionar profesional
      setTimeout(function () {
        if (prof) {
          $selectProfesional.find('option').filter(function () {
            return $(this).text().indexOf(prof) !== -1;
          }).prop('selected', true);
        }
      }, 100);
    }

    // Scroll al formulario
    var $formSection = $('#turnos');
    if ($formSection.length) {
      $('html, body').animate({
        scrollTop: $formSection.offset().top - 80
      }, 600);
    }
  });

  /* ==========================================================================
     6. HELPER — Formatear fecha YYYY-MM-DD → DD/MM/YYYY
     ========================================================================== */
  function formatearFecha(fechaStr) {
    if (!fechaStr) return '';
    var partes = fechaStr.split('-');
    if (partes.length !== 3) return fechaStr;
    return partes[2] + '/' + partes[1] + '/' + partes[0];
  }

  /* ==========================================================================
     7. NAVBAR — Cerrar menú en mobile al hacer click
     ========================================================================== */
  $('.navbar-nav .nav-link, .btn-nav-turno').on('click', function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
    if ($('#navbarCollapse').hasClass('show')) {
      $('#navbarCollapse').collapse('hide');
    }
  });

}(jQuery));
