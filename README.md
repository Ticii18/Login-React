# Sistema de Autenticación en React

Este proyecto implementa un sistema de autenticación en una aplicación React utilizando Context API y un custom hook. La aplicación permite a los usuarios iniciar sesión, cerrar sesión y navegar entre una página de bienvenida (Home) y una página de inicio de sesión (Login), dependiendo del estado de la sesión. 

## Tabla de Contenidos
- [Sistema de Autenticación en React](#sistema-de-autenticación-en-react)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Características](#características)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Detalles Técnicos](#detalles-técnicos)
    - [`SessionProvider`](#sessionprovider)
    - [`useProvideSession`](#useprovidesession)
    - [`useSession`](#usesession)
    - [Componentes Principales](#componentes-principales)
  - [Consideraciones Adicionales](#consideraciones-adicionales)

## Descripción

El sistema permite que los usuarios inicien sesión a través de un formulario de login. Al ingresar credenciales válidas, el sistema recibe un token y la información del usuario desde un backend, almacenando esta información en el contexto de la aplicación. Si el usuario está autenticado, se muestra la pantalla de bienvenida (`Home`). En caso contrario, se presenta el formulario de inicio de sesión (`Login`). Además, los usuarios pueden cerrar sesión, lo que elimina la información de sesión de la aplicación.

## Características

- Autenticación con un backend.
- Gestión de sesión utilizando Context API y un custom hook (`useSession`).
- Almacenamiento seguro del token en el estado de contexto.
- Indicador de carga durante el proceso de autenticación.
- Manejo de errores al iniciar sesión.
- Renderizado condicional de componentes (`Login` o `Home`) basado en el estado de sesión.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura el backend**:
   Asegúrate de que el backend esté disponible en `http://localhost:4000` y que soporte la ruta `/auth/sign-in` para la autenticación.

4. **Ejecuta la aplicación**:
   ```bash
   npm start
   ```

## Uso

- **Inicio de Sesión**: Ingresa credenciales válidas en la pantalla de inicio de sesión. Al hacer clic en "Iniciar sesión", la aplicación enviará las credenciales al backend. Si son válidas, se mostrará la pantalla de bienvenida.
- **Cerrar Sesión**: En la pantalla de bienvenida, haz clic en "Cerrar sesión" para eliminar el estado de sesión.

## Estructura del Proyecto

```
.
├── src
│   ├── Components
│   │   ├── Home.jsx             # Componente de la pantalla de bienvenida
│   │   └── Login.jsx            # Componente del formulario de inicio de sesión
│   ├── context
│   │   └── SessionProvider.jsx  # Proveedor del contexto de sesión
│   ├── hooks
│   │   ├── useProvideSession.js # Hook que maneja la lógica de autenticación
│   │   └── useSession.js        # Hook que facilita el acceso al contexto
│   └── App.jsx                  # Componente principal de la aplicación
└── README.md                    # Documentación del sistema
```

## Detalles Técnicos

### `SessionProvider`
Define el contexto para gestionar el estado de la sesión en toda la aplicación. Proporciona los métodos `login` y `logout` para manejar la autenticación. Almacena `user` y `token` cuando la autenticación es exitosa.

### `useProvideSession`
Hook personalizado que implementa la lógica de autenticación:
- **`login`**: Envía credenciales al backend y actualiza el contexto en caso de autenticación exitosa.
- **`logout`**: Borra los datos de sesión del contexto y del almacenamiento local.

### `useSession`
Hook que facilita el acceso al contexto de sesión (`SessionContext`) en cualquier componente de la aplicación.

### Componentes Principales
- **`Login`**: Formulario para que el usuario ingrese sus credenciales. Muestra un mensaje de error si la autenticación falla y un indicador de carga mientras la solicitud está en proceso.
- **`Home`**: Pantalla de bienvenida que muestra el nombre del usuario y un botón para cerrar sesión.

## Consideraciones Adicionales

- **Indicador de Carga**: Durante la autenticación, se muestra un mensaje de "Cargando..." en el botón de inicio de sesión.
- **Manejo de Errores**: Si la autenticación falla, se muestra un mensaje de error en el componente `Login`.
- **Token en Almacenamiento Local**: El token de sesión se almacena en `sessionStorage` para su uso durante la sesión y se elimina al cerrar sesión.

---

Este README proporciona una descripción completa del sistema de autenticación y detalla cómo configurarlo y utilizarlo.