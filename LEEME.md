# Contexto del Proyecto - Centro Médico

## Descripción
Aplicación SAP CAP (Cloud Application Programming) con Node.js para un centro médico.

## Objetivo
Construir la app paso a paso para que el usuario vaya aprendiendo cada etapa.
Una vez terminada, el usuario va a customizar los botones y la UI.

## Paneles
- **Panel Pacientes**: vista y funciones para pacientes
- **Panel Administrativos**: vista y funciones para el personal administrativo

## Stack tecnológico
- **Backend**: SAP CAP + Node.js
- **Base de datos**: HANA (producción) / SQLite (desarrollo)
- **Frontend**: SAP Fiori Elements
- **Autenticación**: XSUAA (producción)

## Usuario
- GitHub: Marcosfarhat
- Email: marcosfarhat@gmail.com

## Estado actual del proyecto
- [x] Proyecto inicializado con template SAP CAP bookshop
- [x] Git inicializado (`git init`)
- [x] Primer commit realizado (62 archivos)
- [x] Repositorio creado en GitHub: https://github.com/Marcosfarhat/centro_medico_nodejs
- [ ] Push a GitHub (en proceso - necesita Personal Access Token)
- [ ] Reemplazar schema del bookshop con entidades del centro médico
- [ ] Crear entidades: Pacientes, Médicos, Turnos, etc.
- [ ] Construir panel de Pacientes
- [ ] Construir panel de Administrativos
- [ ] Customización de UI y botones

## Schema actual (a reemplazar)
El schema en `db/schema.cds` todavía tiene el template de bookshop:
- `Books`, `Authors`, `Genres` — DEBEN reemplazarse con entidades médicas

## Próximos pasos
1. Terminar el push a GitHub
2. Diseñar el nuevo schema para centro médico
3. Crear las entidades principales (Pacientes, Médicos, Turnos, etc.)

## Historial de sesiones

### Sesión 1 - 05/06/2026
- Se creó el proyecto desde template SAP CAP

### Sesión 2 - 06/06/2026
- Se identificó que el proyecto existe en `/home/user/projects/centro_medico_node`
- Se inicializó git
- Se configuró usuario git (Marcosfarhat / marcosfarhat@gmail.com)
- Se hizo el primer commit con todos los archivos del template
- Se creó repo en GitHub: https://github.com/Marcosfarhat/centro_medico_nodejs
- Se intentó push (pendiente autenticación con Personal Access Token)
- Se creó este archivo de contexto
