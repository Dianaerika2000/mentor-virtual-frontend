# Mentor Virtual - Frontend

Aplicación frontend de Mentor Virtual desarrollada con React y Vite.

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Dianaerika2000/mentor-virtual-frontend.git
```

### 2. Ingresar al proyecto

```bash
cd mentor-virtual-frontend
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en entorno de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 🛠️ Tecnologías utilizadas

* React
* Vite
* TypeScript

---

## 🌿 Estrategia de ramas

Se utiliza el siguiente flujo de trabajo:

* `main` → versión estable (producción)
* `dev` → rama de desarrollo principal

### 📌 Flujo de trabajo

1. Crear una rama desde `dev`:

```bash
git checkout dev
git pull
git checkout -b feature/nombre-de-la-tarea
```

2. Trabajar en la funcionalidad

3. Subir cambios:

```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin feature/nombre-de-la-tarea
```

4. Crear un Pull Request hacia `dev`

---

## ✏️ Convención de commits

Se recomienda seguir el estándar **Conventional Commits**:

### Tipos de commits

* `feat:` nueva funcionalidad
* `fix:` corrección de errores
* `docs:` cambios en documentación
* `style:` cambios de formato (sin lógica)
* `refactor:` mejora de código
* `test:` pruebas
* `chore:` tareas de mantenimiento

### Ejemplos

```bash
feat: agregar login de usuario
fix: corregir error en formulario
docs: actualizar README
```

---

## 🤝 Contribución

1. Crear una rama desde `dev`
2. Realizar cambios
3. Crear Pull Request hacia `dev`
4. Esperar revisión

---

## 📌 Notas

* Mantener commits claros y descriptivos
* Evitar subir código sin revisar
* Seguir la estructura del proyecto
