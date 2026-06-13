using PacienteService from '../../srv/paciente-service';

// ─── TURNOS (vista del paciente) ──────────────────────────────────────────────

annotate PacienteService.Turnos with {
  fecha         @title: 'Fecha';
  hora          @title: 'Hora';
  estado        @title: 'Estado';
  motivo        @title: 'Motivo';
  observaciones @title: 'Observaciones';
  medico        @title: 'Médico';
}

annotate PacienteService.Turnos with @(

  // Columnas que ve el paciente en su lista de turnos
  UI.LineItem: [
    { Value: fecha,                        Label: 'Fecha'        },
    { Value: hora,                         Label: 'Hora'         },
    { Value: medico.apellido,              Label: 'Médico'       },
    { Value: medico.especialidad.nombre,   Label: 'Especialidad' },
    {
      Value:       estado,
      Label:       'Estado',
      Criticality: estadoCriticality
    }
  ],

  UI.HeaderInfo: {
    TypeName:       'Turno',
    TypeNamePlural: 'Mis Turnos',
    Title:       { Value: fecha  },
    Description: { Value: estado }
  },

  // Secciones del detalle del turno
  UI.Facets: [
    {
      $Type:  'UI.ReferenceFacet',
      Label:  'Detalle del Turno',
      Target: '@UI.FieldGroup#DetalleTurno'
    }
  ],

  UI.FieldGroup#DetalleTurno: {
    Label: 'Detalle del Turno',
    Data: [
      { Value: fecha                      },
      { Value: hora                       },
      { Value: medico.apellido            },
      { Value: medico.especialidad.nombre },
      { Value: estado                     },
      { Value: motivo                     },
      { Value: observaciones              }
    ]
  }
);

// ─── PACIENTES (perfil propio) ────────────────────────────────────────────────

annotate PacienteService.Pacientes with {
  nombre          @title: 'Nombre';
  apellido        @title: 'Apellido';
  dni             @title: 'DNI';
  fechaNacimiento @title: 'Fecha de Nacimiento';
  telefono        @title: 'Teléfono';
  email           @title: 'Email';
  obraSocial      @title: 'Obra Social';
  numeroAfiliado  @title: 'Nro. Afiliado';
}

annotate PacienteService.Pacientes with @(

  UI.LineItem: [
    { Value: apellido,   Label: 'Apellido'    },
    { Value: nombre,     Label: 'Nombre'      },
    { Value: dni,        Label: 'DNI'         },
    { Value: obraSocial, Label: 'Obra Social' }
  ],

  UI.HeaderInfo: {
    TypeName:       'Paciente',
    TypeNamePlural: 'Pacientes',
    Title:       { Value: apellido },
    Description: { Value: nombre   }
  },

  UI.Facets: [
    {
      $Type:  'UI.ReferenceFacet',
      Label:  'Mis Datos',
      Target: '@UI.FieldGroup#MisDatos'
    },
    {
      $Type:  'UI.ReferenceFacet',
      Label:  'Obra Social',
      Target: '@UI.FieldGroup#ObraSocial'
    }
  ],

  UI.FieldGroup#MisDatos: {
    Label: 'Mis Datos',
    Data: [
      { Value: nombre          },
      { Value: apellido        },
      { Value: dni             },
      { Value: fechaNacimiento },
      { Value: telefono        },
      { Value: email           }
    ]
  },

  UI.FieldGroup#ObraSocial: {
    Label: 'Obra Social',
    Data: [
      { Value: obraSocial     },
      { Value: numeroAfiliado }
    ]
  }
);
